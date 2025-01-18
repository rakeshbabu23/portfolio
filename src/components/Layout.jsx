import { useState } from "react";
import Chip from "./Chip";
import { Outlet, useNavigate } from "react-router-dom";
const tabs = [
  { label: "About Me", target: "/" },
  { label: "Projects", target: "projects" },
  { label: "Contact", target: "contact" },
];
const Layout = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState(0);
  return (
    <>
      <div className="mt-4 flex flex-row gap-4">
        {tabs.map((tab, index) => {
          return (
            <Chip
              onClick={() => {
                setActiveTab(index);
                navigate(tab.target);
              }}
              key={tab.label}
              classNames={`flex flex-col items-center justify-center w-42 cursor-pointer text-lg lg:text-xl px-3 py-2 lg:px-6 lg:py-3 ${
                activeTab === index
                  ? "bg-gradient-to-br from-purple-500 to-blue-500 text-white"
                  : "bg-black text-white"
              }`}
            >
              {tab.label}
            </Chip>
          );
        })}
      </div>
      <Outlet />
    </>
  );
};

export default Layout;
