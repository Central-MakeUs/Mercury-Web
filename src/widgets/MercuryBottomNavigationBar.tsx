import { BottomNavigationBar } from "@repo/design-system/BottomNavigationBar";
import { BookIcon } from "@repo/icon/BookIcon";
import { HomeIcon } from "@repo/icon/HomeIcon";
import { MyIcon } from "@repo/icon/MyIcon";
import { TimerIcon } from "@repo/icon/TimerIcon";
import { Link, useLocation } from "react-router";

export const MercuryBottomNavigationBar = () => {
  const location = useLocation();
  const pathname = location.pathname;
  return (
    <BottomNavigationBar.Root value={pathname}>
      <BottomNavigationBar.Action
        icon={({ selected }) => (
          <Link to="/home">
            <HomeIcon selected={selected} />
          </Link>
        )}
        value="/home"
      />
      <BottomNavigationBar.Action
        icon={({ selected }) => (
          <Link to="/timer">
            <TimerIcon selected={selected} />
          </Link>
        )}
        value="/timer"
      />
      <BottomNavigationBar.Action
        icon={({ selected }) => (
          <Link to="/book-record">
            <BookIcon selected={selected} />
          </Link>
        )}
        value="/book-record"
      />
      <BottomNavigationBar.Action
        icon={({ selected }) => (
          <Link to="/profile">
            <MyIcon selected={selected} />
          </Link>
        )}
        value="/profile"
      />
    </BottomNavigationBar.Root>
  );
};
