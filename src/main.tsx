import "./index.css";
import "../packages/design-system/iosTimePicker.css";
import { Analytics, MercuryPostHogProvider, PostHogPageView } from "@repo/analytics/index.tsx";
import { SafeAreaEffector } from "@repo/bridge-web/SafeArea.tsx";
import { MobileLayout } from "@repo/design-system/MobileLayout.tsx";
import { Providers } from "@repo/providers";
import { MAX_WIDTH } from "@repo/token/index.ts";
import { OverlayProvider } from "overlay-kit";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Navigate, Route, Routes } from "react-router";
import BottomNavigationLayout from "./app/BottomNavigationLayout.tsx";
import { AppSocialLoginProcessor } from "./entities/user/components/AppSocialLoginProcessor.tsx";
import { NotSigned } from "./entities/user/components/NotSigned.tsx";
import BookRecordDetailPage from "./pages/BookRecordDetailPage.tsx";
import BookRecordMemoAddPage from "./pages/BookRecordMemoAddPage.tsx";
import BookRecordModifyPage from "./pages/BookRecordMemoModifyPage.tsx";
import BookRecordPage from "./pages/BookRecordPage.tsx";
import BookRecordWritePage from "./pages/BookRecordWritePage.tsx";
import FirstOnBoardingPage from "./pages/FirstOnBoardingPage.tsx";
import HomePage from "./pages/HomePage.tsx";
import { LoginPage } from "./pages/LoginPage.tsx";
import LoginSuccessPage from "./pages/LoginSuccessPage.tsx";
import Notification from "./pages/Notification.tsx";
import OnBoardingPage from "./pages/OnBoardingPage.tsx";
import ProfilePage from "./pages/ProfilePage.tsx";
import SettingPage from "./pages/SettingPage.tsx";
import TermsPrivacyConsentPage from "./pages/TermsPrivacyConsentPage.tsx";
import TimerPage from "./pages/TimerPage.tsx";
import { sentryInitialize } from "./sentry.tsx";

sentryInitialize();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <MobileLayout maxWidth={MAX_WIDTH}>
      <Providers>
        <MercuryPostHogProvider>
          <BrowserRouter>
            <PostHogPageView />
            <AppSocialLoginProcessor />
            <OverlayProvider>
              <Routes>
                <Route element={<BottomNavigationLayout />}>
                  <Route path="home" element={<HomePage />} />
                  <Route path="timer" element={<TimerPage />} />
                  <Route path="book-record" element={<BookRecordPage />} />
                  <Route path="profile" element={<ProfilePage />} />
                </Route>

                <Route path="book-record/write" element={<BookRecordWritePage />} />
                <Route path="book-record/:recordId" element={<BookRecordDetailPage />} />

                <Route
                  path="book-record/:recordId/:memoId/modify"
                  element={<BookRecordModifyPage />}
                />

                <Route path="add-memo/:recordId" element={<BookRecordMemoAddPage />} />

                <Route path="notification" element={<Notification />} />
                <Route path="settings" element={<SettingPage />} />
                <Route path="" element={<FirstOnBoardingPage />} />
                <Route
                  path="onboarding"
                  element={
                    <NotSigned fallback={<Navigate to={"/book-record"} replace={true} />}>
                      <OnBoardingPage />
                    </NotSigned>
                  }
                />
                <Route path="login" element={<LoginPage />} />
                <Route path="login/success" element={<LoginSuccessPage />} />
                <Route path="login/agree" element={<TermsPrivacyConsentPage />} />
              </Routes>
            </OverlayProvider>
          </BrowserRouter>
        </MercuryPostHogProvider>

        <SafeAreaEffector />
        <Analytics />
      </Providers>
    </MobileLayout>
  </StrictMode>,
);

if (process.env.NODE_ENV === "development") {
  // worker.start({ quiet: true, onUnhandledRequest: "bypass" });
}
