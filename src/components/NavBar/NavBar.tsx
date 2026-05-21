"use client";

import { AppBar, Toolbar, ButtonBase, Typography } from "@mui/material";
import { useState } from "react";
import { appBarStyles, getNavButtonStyles, toolbarStyles } from "./NavBar.styles";

export interface NavLinkInfo {
  id: string;
  label: string;
}

interface NavBarProps {
  links: NavLinkInfo[];
}

export default function NavBar({ links }: NavBarProps) {
  const [activeTab, setActiveTab] = useState(links[0].id);

  return (
    <AppBar
      position="fixed"
      sx={appBarStyles}
    >
      <Toolbar sx={toolbarStyles}>
        {links.map((link) => (
          <ButtonBase
            key={link.id}
            sx={getNavButtonStyles(activeTab === link.id)}
            href={`#${link.id}`}
            onClick={() => setActiveTab(link.id)}
          >
            <Typography>{link.label}</Typography>
          </ButtonBase>
        ))}
      </Toolbar>
    </AppBar>
  );
}
