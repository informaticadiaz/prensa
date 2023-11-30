import SideBarMenu from "../components/SideBarMenu";


import { SideBarMenuItem, SideBarMenuCard } from "../types/types";

import profileImage from "../assets/logo.webp";

import { 
  FcCustomerSupport,
  FcVideoProjector,
  FcCalendar,
  FcCamcorder,
  FcMusic,
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
      label: "Videoteca",
      icon: FcVideoProjector,
      url: "/#videoteca",
    },
    {
      id: "3",
      label: "Calendario",
      icon: FcCalendar,
      url: "/#calendario",
    },
    {
      id: "4",
      label: "Entrevistas",
      icon: FcCamcorder,
      url: "/#entrevistas",
    },
    {
      id: "5",
      label: "Podcast",
      icon: FcMusic,
      url: "/#podcast",
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