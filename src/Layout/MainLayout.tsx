import SideBarMenu from "./SideBarMenu/SideBarMenu";


import { SideBarMenuItem, SideBarMenuCard } from "../types/types";

import profileImage from "../assets/logo.webp";

import { 
  FcCustomerSupport,
  FcVideoProjector,
  FcCalendar,
  FcCamcorder,
  FcMusic,
  FcBullish,
 } from "react-icons/fc";





const MainLayout = ({ children }: { children: React.ReactNode }) => {
  const items: SideBarMenuItem[] = [
    {
      id: "1",
      label: "PSA",
      icon: FcCustomerSupport,
      url: "/#psa",
    },
    {
      id: "2",
      label: "Economia",
      icon: FcBullish,
      url: "/#economia",
    },
    {
      id: "3",
      label: "Entrevistas",
      icon: FcCamcorder,
      url: "/#entrevistas",
    },
    {
      id: "4",
      label: "Podcast",
      icon: FcMusic,
      url: "/#podcast",
    },
    {
      id: "5",
      label: "Calendario",
      icon: FcCalendar,
      url: "/#calendario",
    },
    {
      id: "6",
      label: "Videoteca",
      icon: FcVideoProjector,
      url: "/#videoteca",
    },
  ];

  const card: SideBarMenuCard = {
    id: "card01",
    displayName: "",
    title: "",
    photoUrl: profileImage,
    url: "/",
  };

  return (
    <div>
      <SideBarMenu items={items} card={card} />
      <main>{children}</main>
    </div>
  );
};

export default MainLayout;