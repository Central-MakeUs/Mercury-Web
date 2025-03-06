import { useState } from "react";
import { OnOffToggleButton } from "./OnOffToggleButton";
import { SettingMenuRow } from "./SettingMenuRow";

import { List } from "@repo/ui/List";
import { useNavigate } from "react-router";
import { logoutDialogOverlay } from "~/entities/user/components/LogoutDialog";
import { NotSigned } from "~/entities/user/components/NotSigned";
import { useSignOutDialog } from "~/entities/user/components/SignOutDialog";
import { Signed } from "~/entities/user/components/Signed";
import { SETTINGS_LINKS } from "~/shared/constants/externalLink";
import { openWindowUrl } from "~/shared/utils/openWindowUrl";

export const SettingMenuList = () => {
  const [selected, setSelected] = useState(false);
  const navigate = useNavigate();
  const signoutDialog = useSignOutDialog();

  const handleSignOutClick = () => {
    signoutDialog.open();
  };

  const handleLogoutClick = () => {
    logoutDialogOverlay.open();
  };

  const handlePolicyClick = () => {
    openWindowUrl(SETTINGS_LINKS.TERMSANDPRIVACY, { target: "_self" });
  };

  const handleNoticeClick = () => {
    openWindowUrl(SETTINGS_LINKS.NOTICE, { target: "_self" });
  };

  const handleFaqClick = () => {
    openWindowUrl(SETTINGS_LINKS.FAQ, { target: "_self" });
  };

  const handleLoginClick = () => {
    navigate("/");
  };

  const handleSignupClick = () => {
    navigate("/");
  };

  return (
    <List className=" gap-y-[6px] w-full">
      <SettingMenuRow
        onClick={() => setSelected((prev) => !prev)}
        right={<OnOffToggleButton selected={selected} />}
      >
        알림설정
      </SettingMenuRow>
      <SettingMenuRow onClick={handleFaqClick}>문의하기</SettingMenuRow>
      <SettingMenuRow onClick={handlePolicyClick}>이용약관 및 개인정보 처리방침</SettingMenuRow>
      <SettingMenuRow onClick={handleNoticeClick}>공지사항</SettingMenuRow>

      <NotSigned>
        <SettingMenuRow className=" text-gray-400" onClick={handleLoginClick}>
          로그인
        </SettingMenuRow>
        <SettingMenuRow className=" text-gray-400" onClick={handleSignupClick}>
          회원가입
        </SettingMenuRow>
      </NotSigned>

      <Signed>
        <SettingMenuRow className=" text-gray-400" onClick={handleLogoutClick}>
          로그아웃
        </SettingMenuRow>
        <SettingMenuRow className=" text-gray-400" onClick={handleSignOutClick}>
          탈퇴하기
        </SettingMenuRow>
      </Signed>
    </List>
  );
};
