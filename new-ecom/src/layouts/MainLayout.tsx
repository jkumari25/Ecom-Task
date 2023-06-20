import React from 'react'
import { ReactElement } from "react";
import NavBar from './NavBar';
import Footer from './Footer';
import ResponsiveNavbar from './ResponsiveNavbar';
import ResponsiveFooter from './ResponsiveFooter';
import Head from 'next/head';
import Link from 'next/link';
type prop = {
    title?: string;
    children: ReactElement | ReactElement[];
  };
export default function MainLayout({children, title="New99"}:prop) {
  return (
    <>
    <Head>
    <title>{title}</title>
    <link rel="icon" href="/main_logo.svg"></link>
    </Head>
     <NavBar/>
     {/* <ResponsiveNavbar/> */}
     <>{children}</>
     <Footer/> 
     {/* <ResponsiveFooter/> */}
    </>
  )
}