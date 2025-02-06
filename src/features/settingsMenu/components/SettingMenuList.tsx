import { useState } from "react";
import { OnOffToggleButton } from "./OnOffToggleButton";
import { SettingMenuRow } from "./SettingMenuRow";

import { List } from "@repo/ui/List";
import { logoutDialogOverlay } from "~/entities/user/components/LogoutDialog";
import { SETTINGS_LINKS } from "~/shared/constants/externalLink";
import { openExternalUrl } from "~/shared/utils/openExternalUrl";

export const SettingMenuList = () => {
  const [selected, setSelected] = useState(false);

  const handleLogoutClick = () => {
    logoutDialogOverlay.open();
  };

  const handlePolicyClick = () => {
    openExternalUrl(SETTINGS_LINKS.TERMSANDPRIVACY);
  };

  const handleNoticeClick = () => {
    openExternalUrl(SETTINGS_LINKS.NOTICE);
  };

  const handleFaqClick = () => {
    openExternalUrl(SETTINGS_LINKS.FAQ);
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
      <SettingMenuRow className=" text-gray-400" onClick={handleLogoutClick}>
        로그아웃
      </SettingMenuRow>
      <SettingMenuRow className=" text-gray-400">탈퇴하기</SettingMenuRow>
    </List>
  );
};
