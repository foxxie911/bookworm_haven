import React from "react";

// import { IoBarChartSharp } from "react-icons/io5";
import { BsCart3 } from "react-icons/bs";
import { MdQueryStats } from "react-icons/md";
import { FaWpforms } from "react-icons/fa";
import { ImProfile } from "react-icons/im";
import { MdAdminPanelSettings } from "react-icons/md";

const links = [
  {
    text: "get all books",
    path: ".",
    icon: <MdQueryStats />,
  },
  {
    text: "add book",
    path: "addBook",
    icon: <FaWpforms />,
  },
  {
    text: "cart",
    path: "cart",
    icon: <BsCart3 />,
  },
  {
    text: "profile",
    path: "profile",
    icon: <ImProfile />,
  },
  {
    text: "admin",
    path: "admin",
    icon: <MdAdminPanelSettings />,
  },
];

export default links;