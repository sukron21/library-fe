"use client";

import { Dropdown, MenuProps } from "antd";

const items: MenuProps["items"] = [
  {
    key: "logout",
    label: (
      <button
        onClick={() => {
          console.log("Logout clicked");
        }}
        className="w-full text-left"
      >
        Logout
      </button>
    ),
  },
];

export default function ProfileDropdown() {
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
