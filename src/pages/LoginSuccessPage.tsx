import { AspectRatio } from "@repo/design-system/AspectRatio";
import { Image } from "@repo/design-system/Image";
import { CenterStack } from "@repo/ui/CenterStack";
import { Stack } from "@repo/ui/Stack";
import { useEffect } from "react";
import { useNavigate } from "react-router";
import { authStore } from "~/entities/user/model/auth.store";
import { LOGO_ASSETS } from "~/shared/images/logo/logoImages";

export default function LoginSuccessPage() {
  const navigate = useNavigate();

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const accessToken = params.get("access_token");

    if (accessToken) {
      authStore.setAccessToken(accessToken);
      navigate("/home", { replace: true });
    } else {
      console.error("로그인 실패");
      //navigate("/");
    }
  }, [navigate]);

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
