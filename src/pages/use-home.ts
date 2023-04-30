import { useState } from "react";

const useHome = () => {
  const [tabs, setTabs] = useState(["Entrar", "Cadastrar"]);
  const [selectedTab, setSelectedTab] = useState(tabs[0]);

  const handleSelectTab = (tab: string) => {
    setSelectedTab(tab);
  };

  return {
    tabs,
    selectedTab,
    handleSelectTab,
  };
};

export default useHome;
