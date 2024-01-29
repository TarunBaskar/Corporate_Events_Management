import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import { BsCalendar2Event } from "react-icons/bs";
import { FaRegAddressBook } from "react-icons/fa";
import { RiSecurePaymentLine } from "react-icons/ri";
import { PiSignIn } from "react-icons/pi";
import { MdDashboardCustomize } from "react-icons/md";


export const SidebarData = [
  {
    title: 'Home',
    path: '/',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text'
  },
  {
    title: 'User Dashboard',
    path: '/userdb',
    icon: <MdDashboardCustomize />
    ,
    cName: 'nav-text'
  },
  {
    title: 'Event List',
    path: '/EventList',
    icon: <BsCalendar2Event />,
    cName: 'nav-text'
  },
  {
    title: 'Book Event',
    path: '/BookEvent',
    icon: <FaRegAddressBook />,
    cName: 'nav-text'
  },
  {
    title: 'My Payment',
    path: '/Mypayment',
    icon: <RiSecurePaymentLine />,
    cName: 'nav-text'
  },
  {
    title: 'Sign Up',
    path: '/User_login',
    icon: <PiSignIn />,
    cName: 'nav-text'
  }
];