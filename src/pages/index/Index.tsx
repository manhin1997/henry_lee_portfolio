import React from "react";

import { useState } from "react";
import "./index.scss";
import Intro from "@/pages/intro/Intro";
import Topbar from "@/components/topbar/Topbar";
import Menu from "@/components/menu/Menu";
import Experience from "../experience/Experience";
import Works from "../works/Works";

const Index: React.FC = () => {
  const [menuOpen, setmenuOpen] = useState(false);
  const [hoverOnTop, sethoverOnTop] = useState(false);

  return (
    <div className="h-screen gradient-bg">
      <Topbar {...{ menuOpen, setmenuOpen, hoverOnTop, sethoverOnTop }} />
      <Menu {...{ menuOpen, setmenuOpen, hoverOnTop }} />
      <div className="sections">
        <Intro />
        <Experience />
        <Works />
      </div>
    </div>
  );
};

export default Index;
