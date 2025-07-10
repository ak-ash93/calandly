import React from "react";
import { ensureAuthorized } from "../../lib/hooks";

const DashboardPage = async () => {
  // Ensure the user is authenticated, If not authenticated, redirect to the home page
  const session = await ensureAuthorized();

  return <div>DashboardPage</div>;
};

export default DashboardPage;
