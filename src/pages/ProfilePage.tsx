import { AspectRatio } from "@repo/design-system/AspectRatio";
import { Image } from "@repo/design-system/Image";
import { Stack } from "@repo/ui/Stack";
import { motion } from "motion/react";

export default function Page() {
  return (
    <>
      <motion.div
        className=" w-full flex flex-col items-center justify-center pb-[16px] overflow-hidden max-h-[100vh]"
        initial={{ opacity: 0.2 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
      >
        <Stack className="bg-gradient-to-br  from-main3-gradient-from  to-main3-gradient-to  h-full w-full items-center justify-center">
          <motion.button
            className="text-white w-full text-center duration-300 transition-all active:scale-[1.02]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, delay: 0.8 }}
          >
            <AspectRatio ratio={375 / 343}>
              <Image src={PROFILE_ASSETS.PROFILE_LOGO} alt="profile_logo" objectfit={"fill"} />
            </AspectRatio>
          </motion.button>
          <motion.h1
            className="text-[24px] font-bold text-white/40 mb-4 whitespace-pre-wrap text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, delay: 2 }}
          >
            {`지금은 준비 중인 기능이에요\n`}
          </motion.h1>
        </Stack>
      </motion.div>
    </>
  );
}

const PROFILE_ASSETS = {
  PROFILE_LOGO: "/images/logo/mercury_login_logo.webp",
};
