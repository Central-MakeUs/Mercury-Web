import { isApp } from "@repo/bridge-web/isApp";
import { AspectRatio } from "@repo/design-system/AspectRatio";
import { Image } from "@repo/design-system/Image";
import { env } from "@repo/env";

import { CenterStack } from "@repo/ui/CenterStack";
import { Stack } from "@repo/ui/Stack";
import { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router";
import * as z from "zod";
import { authStore } from "~/entities/user/model/auth.store";
import { LOGO_ASSETS } from "~/shared/images/logo/logoImages";

const queryParamSchema = z.object({
  access_token: z.string(),
  refresh_token: z.string(),
  isNewUser: z.string(),
  oauthType: z.string(),
});

export default function LoginSuccessPage() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
  useEffect(() => {
    (async () => {
      const SCHEMA_LINK = env.VITE_PUBLIC_DEEP_LINK_SCHEME;

      const queryParams = queryParamSchema.safeParse({
        access_token: searchParams.get("access_token"),
        refresh_token: searchParams.get("refresh_token"),
        isNewUser: searchParams.get("isNewUser"),
        oauthType: searchParams.get("oauthType"),
      });

      if (!queryParams.success) {
        return () => {};
      }

      const { access_token, refresh_token, isNewUser, oauthType } = queryParams.data;
      const mercuryDeepLink = `${SCHEMA_LINK}://?access_token=${access_token}&refresh_token=${refresh_token}&isNewUser=${isNewUser}&oauthType=${oauthType}`;

      const isGoogle = oauthType === "GOOGLE";
      const isInApp = isApp();

      if (isGoogle && !isInApp) {
        window.location.href = mercuryDeepLink;
        return () => {};
      }

      const navigateHomeOrTermsByIsNewUser = () => {
        authStore.setAccessToken(`Bearer ${access_token}`);
        authStore.setRefreshToken(refresh_token);
        if (isNewUser === "true") {
          navigate("/login/agree", { replace: true });
        } else {
          navigate("/book-record", { replace: true });
        }
      };

      navigateHomeOrTermsByIsNewUser();
    })();
  }, []);

  return (
    <CenterStack className=" min-h-screen w-full bg-navy h-full gap-y-[100px]">
      <CenterStack className=" w-full px-4">
        <Stack className=" w-full">
          <AspectRatio ratio={343 / 219}>
            <Image
              src={LOGO_ASSETS.MERCURY_LOGIN_LOGO_WEBP}
              alt="mercury logo"
              objectfit={"fill"}
            />
          </AspectRatio>
        </Stack>
        <Stack className=" mt-[30px] pl-[66px] pr-[54px] w-full">
          <AspectRatio ratio={255 / 52}>
            <Image
              src={LOGO_ASSETS.WORDMARKLOGO_DARKBG_WEBP}
              alt="wordmark logo"
              objectfit={"fill"}
            />
          </AspectRatio>
        </Stack>
      </CenterStack>
    </CenterStack>
  );
}
