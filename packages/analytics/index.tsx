import Clarity from "@microsoft/clarity";
import { env } from "@repo/env";
import { useEffect } from "react";

export const Analytics = () => {
  return (
    <>
      <ClarityEffector />
    </>
  );
};

const CLARITY_PROJECT_ID = "pwcbiarjxq";

const ClarityEffector = () => {
  useEffect(() => {
    if (env.PROD) {
      Clarity.init(CLARITY_PROJECT_ID);
    }
  }, []);
  return null;
};
