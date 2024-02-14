import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BsCart2 } from "react-icons/bs";
import { HiOutlineBars3 } from "react-icons/hi2";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import CommentRoundedIcon from "@mui/icons-material/CommentRounded";
import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded";
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";

const NavbarLan = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const menuOptions = [
    {
      text: "Home",
      icon: <HomeIcon />,
    },
    {
      text: "About",
      icon: <InfoIcon />,
    },
    {
      text: "Testimonials",
      icon: <CommentRoundedIcon />,
    },
    {
      text: "Contact",
      icon: <PhoneRoundedIcon />,
    },
   
  ];
  return (
    <nav>
      <div className="nav-logo-container">
        {/* <img src= alt="" /> */}
        <h1><span style={{color:'grey',fontSize:'30px'}}>Corp-Event</span></h1>
      </div>
      <div className="navbar-links-container">
        {/* <a><Link to='/home'>Home</Link></a>
        <a><Link to='/about'>About</Link></a>
        <a><Link to='/work'>Works</Link></a>
        <a><Link to='/test'>Our Special</Link></a> */}
        {/* <a href="">Works</a>
        <a href="">Our Special</a> */}
        {/* <a href=""><Link to='/test'>Contact</Link></a> */}
        {/* <a href="">
          <BsCart2 className="navbar-cart-icon" />
        </a> */}
        <a><Link to='/user_login' style={{color:'white',textDecoration:'none',fontSize:'20px'}} id='signupbox'>Sign up</Link></a>
      </div>
      <div className="navbar-menu-container">
        <HiOutlineBars3 onClick={() => setOpenMenu(true)} />
      </div>
      <Drawer open={openMenu} onClose={() => setOpenMenu(false)} anchor="right">
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={() => setOpenMenu(false)}
          onKeyDown={() => setOpenMenu(false)}
        >
          <List>
            {menuOptions.map((item) => (
              <ListItem key={item.text} disablePadding>
                <ListItemButton>
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Divider />
        </Box>
      </Drawer>
    </nav>
  );
};

export default NavbarLan;