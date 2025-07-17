"use client";
import Cookies from "js-cookie";
import { Dropdown, MenuProps } from "antd";
import { useRouter } from "next/navigation";

export default function ProfileDropdown() {
  const router = useRouter();
  const handleLogout = () => {
    Cookies.remove("access_token");
    Cookies.remove("refresh_token");

    localStorage.clear();
    sessionStorage.clear();

    router.push("/auth");
  };
  const items: MenuProps["items"] = [
    {
      key: "logout",
      label: (
        <button onClick={handleLogout} className="w-full text-left">
          Logout
        </button>
      ),
    },
  ];
  return (
    <div className="flex  items-center space-x-2">
      <Dropdown menu={{ items }} placement="bottomRight" trigger={["click"]}>
        <img
          src="https://i.pravatar.cc/40"
          alt="profile"
          className="w-10 h-10 rounded-full cursor-pointer"
        />
      </Dropdown>
    </div>
  );
}
