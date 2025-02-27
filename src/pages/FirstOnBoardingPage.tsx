import { FixedBottom } from "@repo/design-system/FixedBottom";
import { Text } from "@repo/design-system/Text";
import { TopNavigation } from "@repo/design-system/TopNavigation";
import { Flex } from "@repo/ui/Flex";
import { Stack } from "@repo/ui/Stack";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router";
import { FirstOnBoardingStep1 } from "~/features/onBoarding/FirstOnBoardingStep1";
import { FirstOnBoardingStep2 } from "~/features/onBoarding/FirstOnBoardingStep2";
import { FirstOnBoardingStep3 } from "~/features/onBoarding/FirstOnBoardingStep3";
import { FirstOnBoardingStep4 } from "~/features/onBoarding/FirstOnBoardingStep4";

const steps = [
  FirstOnBoardingStep1,
  FirstOnBoardingStep2,
  FirstOnBoardingStep3,
  FirstOnBoardingStep4,
];

export const OnboardingFunnel = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(0);
  const currentStepRef = useRef(currentStep);
  const [direction, setDirection] = useState(1);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);
  const threshold = window.innerWidth / 2;

  useEffect(() => {
    const hasVisited = localStorage.getItem("hasVisited");
    if (hasVisited === "true") {
      navigate("/onboarding");
    }
  }, [navigate]);

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    const movementX = touchStartX.current - touchEndX.current;
    if (movementX > threshold && currentStepRef.current < steps.length - 1) {
      setDirection(1);
      currentStepRef.current += 1;
      setTimeout(() => setCurrentStep(currentStepRef.current), 0);
    } else if (movementX < -threshold && currentStepRef.current > 0) {
      setDirection(-1);
      currentStepRef.current -= 1;
      setTimeout(() => setCurrentStep(currentStepRef.current), 0);
    } else if (movementX > threshold && currentStepRef.current === steps.length - 1) {
      localStorage.setItem("hasVisited", "true");
      navigate("/onboarding");
    }
  };

  const CurrentStepComponent = steps[currentStep];

  return (
    <Stack
      className="w-full h-full items-center justify-center bg-navy overflow-hidden"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <TopNavigation.Root
        right={
          <Link to={"/"}>
            <Text variant={"body/15_m"} className="text-gray-300 mr-[25px]">
              skip
            </Text>
          </Link>
        }
        className="w-full"
      >
        <TopNavigation.Title className="sr-only">온보딩</TopNavigation.Title>
      </TopNavigation.Root>
      <Flex className="relative w-full h-full overflow-hidden flex-col justify-center items-center">
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={currentStep}
            initial={{ x: direction === 1 ? "100%" : "-100%", opacity: 0 }}
            animate={{ x: "0%", opacity: 1 }}
            exit={{ x: direction === 1 ? "-100%" : "100%", opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="relative w-full h-full flex items-center justify-center"
          >
            <CurrentStepComponent />
          </motion.div>
        </AnimatePresence>
      </Flex>
      <FixedBottom className="w-full pt-[29px] pb-[52px] bg-gradient-to-r from-main3-gradient-from to-main4-gradient-to rounded-t-[20px]">
        <Flex className="w-full py-4 flex justify-center items-center">
          {[...Array(5)].map((_, index) => (
            <div
              key={index}
              className={`mx-1 transition-all ${
                (currentStep === index && index < 4) || (index === 4 && currentStep === 4)
                  ? "w-[10px] h-[6px] bg-white"
                  : "w-[6px] h-[6px] bg-gray-200"
              } rounded-full`}
            />
          ))}
        </Flex>
      </FixedBottom>
    </Stack>
  );
};

export default OnboardingFunnel;
