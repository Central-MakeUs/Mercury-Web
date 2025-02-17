import { bridge } from "@repo/bridge-web";
import { useEffect } from "react";
import { useNavigate } from "react-router";

export const AppSocialLoginProcessor = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = bridge.addEventListener("login", (data) => {
      const typedData = data as {
        access_token: string;
        refresh_token: string;
        isNewUser: string;
        oauthType: string;
      };

      navigate(
        `/login/success?access_token=${typedData.access_token}&refresh_token=${typedData.refresh_token}&isNewUser=${typedData.isNewUser}&oauthType=${typedData.oauthType}`,
      );
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return <></>;
};
