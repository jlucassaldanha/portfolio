"use client";

import {
  AppBar,
  Toolbar,
  ButtonBase,
  Typography,
} from "@mui/material";
import { useState } from "react";

const neonColor = "#26a34c";

export interface NavLinkInfo { id: string; label: string }

interface NavBarProps {
  links: NavLinkInfo[];
}

// usar Toggle Button
export default function NavBar({ links }: NavBarProps) {
  const [activeTab, setActiveTab] = useState(links[0].id);

  return (
    <AppBar
      position="fixed"
      sx={{ backgroundColor: "#141414", padding: 0, boxShadow: "none" }}
    >
      <Toolbar sx={{ display: "flex", justifyContent: "center", padding: 0 }}>
        {links.map((link) => (
          <ButtonBase
            key={link.id}
            sx={{
              padding: 1,
              borderBottom:
                activeTab === link.id ? `2px solid ${neonColor}` : "none",
			  color:
                activeTab === link.id ? neonColor : "white",
			}}
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
