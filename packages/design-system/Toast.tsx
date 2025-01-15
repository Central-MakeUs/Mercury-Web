import * as Portal from "@radix-ui/react-portal";
import { Box } from "@repo/ui/Box";
import { Flex } from "@repo/ui/Flex";
import { Pubsub, delay } from "@xionwcfm/utils";
import { type VariantProps, cva } from "class-variance-authority";
import { AnimatePresence, motion } from "motion/react";
import { type PropsWithChildren, type ReactNode, useEffect, useState } from "react";
import { Image } from "./Image";
import { MaxWidthBox } from "./MaxWidthBox";
import { Text } from "./Text";
import { cn } from "./cn";
const TOAST_PREFIX_ID = "@mercury-toast-element";
const TOAST_DEFAULT_DURATION = 5000;
const TOAST_LIMIT_POLICY = 1;
const TOAST_DEFAULT_POSITION = "bottom-navigation" as const;
const TOAST_MERCURY_ICON = "/images/toast/toast_mercury_icon.webp";

const ToastMercuryIcon = () => {
  return (
    <Image
      src={TOAST_MERCURY_ICON}
      alt="mercury icon"
      className="w-[17px] h-[18px] rotate-[2.87]"
    />
  );
};

const toastVariants = cva("", {
  variants: {
    type: {
      success: "",
    },
  },
});

interface Toast {
  id: string;
  content: ReactNode;
  duration: number;
  type: VariantProps<typeof toastVariants>["type"];
  icon: ReactNode;
  position: "bottom-navigation" | "bottom";
}

type ToastActionFunction = (
  content: Toast["content"],
  option?: Partial<Pick<Toast, "duration" | "type" | "icon" | "position">>,
) => void;

type ToastAction = "add" | "remove" | "clear";

const toastPubsub = new Pubsub<ToastAction>();

export const ToastProvider = (props: PropsWithChildren) => {
  const { children } = props;
  return (
    <>
      {children}
      <Toaster />
    </>
  );
};

const Toaster = () => {
  const [toasts, setToasts] = useState<Toast[]>([]);
  useEffect(() => {
    const add = async (data: Toast) => {
      setToasts((prev) => [data, ...prev].slice(0, TOAST_LIMIT_POLICY));
      await delay(data.duration);
      setToasts((prev) => prev.filter((t) => t.id !== data.id));
    };

    const remove = async (id: string) => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    };

    const clear = async () => {
      setToasts([]);
    };

    toastPubsub.subscribe("add", add);
    toastPubsub.subscribe("remove", remove);
    toastPubsub.subscribe("clear", clear);
    return () => {
      toastPubsub.unsubscribe("add", add);
      toastPubsub.unsubscribe("remove", remove);
      toastPubsub.unsubscribe("clear", clear);
    };
  }, []);
  return (
    <Portal.Root>
      <AnimatePresence>
        {toasts.map((toastItem) => {
          return <ToastItem key={toastItem.id} {...toastItem} />;
        })}
      </AnimatePresence>
    </Portal.Root>
  );
};

const ToastItem = (props: Toast) => {
  return (
    <Box
      key={props.id}
      className={cn(
        "flex justify-center items-center  w-screen",
        "fixed left-[50%] translate-x-[-50%] ",
        props.position === "bottom-navigation" && " bottom-[67px]",
        props.position === "bottom" && " bottom-[12px]",
      )}
    >
      <motion.div
        key={"@mercury-toast-motion"}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        <MaxWidthBox className=" px-[16px] flex justify-center items-center">
          <Flex className=" gap-x-[4px] rounded-full w-fit py-[6px] px-[22px] flex items-center bg-gradient-to-r from-main3-gradient-from to-main3-gradient-to">
            {props.icon ?? <ToastMercuryIcon />}
            {typeof props.content === "string" ? (
              <Text variant={"body/14_sb"} className=" text-white">
                {props.content}
              </Text>
            ) : (
              props.content
            )}
          </Flex>
        </MaxWidthBox>
      </motion.div>
    </Box>
  );
};

export const toast = {
  remove: (id: string) => {
    toastPubsub.publish("remove", id);
  },
  clear: () => {
    toastPubsub.publish("clear");
  },
  add: (
    content: Toast["content"],
    option?: Partial<Pick<Toast, "duration" | "type" | "icon" | "position">>,
  ) => {
    const toastData: Toast = {
      id: `${TOAST_PREFIX_ID}-${Math.random()}`,
      duration: option?.duration ?? TOAST_DEFAULT_DURATION,
      content,
      type: option?.type ?? "success",
      icon: option?.icon ?? null,
      position: option?.position ?? TOAST_DEFAULT_POSITION,
    };
    toastPubsub.publish("add", toastData);
  },
  success: (
    content: Toast["content"],
    option?: Partial<Pick<Toast, "duration" | "icon" | "position">>,
  ) => {
    toast.add(content, {
      ...option,
      type: "success",
    });
  },
};
