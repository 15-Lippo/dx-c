import { useRouter } from "next/router";
import React, { useState } from "react";

const Dashboard: React.FC = () => {
  const router = useRouter();
  const { tab } = router.query;
  const [activeTab, setActiveTab] = useState<string>(
    tab ? (tab as string) : "Deposit"
  );

  return <div>dashboard</div>;
};

export default Dashboard;
