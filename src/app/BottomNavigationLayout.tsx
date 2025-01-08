import { Outlet } from "react-router";
import { MercuryBottomNavigationBar } from "~/widgets/MercuryBottomNavigationBar";

export default function BottomNavigationLayout() {
  return (
    <>
      <Outlet />
      <MercuryBottomNavigationBar />
    </>
  );
}
