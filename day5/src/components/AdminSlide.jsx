import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import { BsCalendar2Event } from "react-icons/bs";
import { FaRegAddressBook } from "react-icons/fa";
import { RiSecurePaymentLine } from "react-icons/ri";
import { PiSignIn } from "react-icons/pi";
import { MdDashboardCustomize } from "react-icons/md";


export const ASidebarData = [
  {
    title: 'Home',
    path: '/',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text'
  },
  {
    title: 'Admin Dashboard',
    path: '/admindb',
    icon: <MdDashboardCustomize /> ,
    cName: 'nav-text'
  },
  {
    title: 'Add Event List',
    path: '/addEventList',
    icon: <BsCalendar2Event />,
    cName: 'nav-text'
  },
  {
    title: 'Booking List',
    path: '/adminbookevent',
    icon: <FaRegAddressBook />,
    cName: 'nav-text'
  },
  {
    title: 'User Payment Details',
    path: '/Adminpayment',
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