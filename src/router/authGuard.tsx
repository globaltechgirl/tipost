import type { FC } from "react";
import { Outlet } from "react-router-dom";

/**
 * AuthGuard Component
 *
 * Placeholder for route protection.
 * Currently, it just renders child routes via <Outlet />.
 * Can later be extended to check authentication and redirect if not logged in.
 */

const AuthGuard: FC = () => {
  return <Outlet />;
};

export default AuthGuard;
