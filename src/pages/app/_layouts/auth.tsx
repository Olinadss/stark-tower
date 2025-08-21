import { Outlet } from "react-router";

export function AuthLayout() {
  return (
    <div>
      <main>{<Outlet />}</main>
    </div>
  );
}
