import { Outlet } from "react-router";

export default function BottomNavigationLayout() {
  return (
    <>
      <Outlet />
      <div>bottomnavigation</div>
    </>
  );
}
