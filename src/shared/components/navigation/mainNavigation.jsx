import React, { useState } from "react";

import MainHeader from "./mainHeader.jsx";
import NavLinks from "./navLinks.jsx";
import SideDrawer from "./sideDrawer.jsx";

import { Link } from "react-router-dom";

import "./mainNavigation.css";
import Backdrop from "../UIElements/backdrop.jsx";

function MainNavigation(props) {
    var [drawerIsOpen , setDrawerIsOpen] = useState(false);

    function handleOpenDrawer(){
        setDrawerIsOpen(true)
    }

    function handleCloseOpenDrawer(){
        setDrawerIsOpen(false)
    }

  return (
    <React.Fragment>
    {drawerIsOpen && <Backdrop onClick = {handleCloseOpenDrawer}/>}
    <SideDrawer show = {drawerIsOpen} forCloseDrawer= {handleCloseOpenDrawer}>
        <div className="exit-btn" onClick={handleCloseOpenDrawer}>X</div>
        <nav className="main-navigation__drawer-nav">
          <NavLinks />
        </nav>
      </SideDrawer>
      <MainHeader>
        <button className="main-navigation__menu-btn" onClick={handleOpenDrawer}>
          <span></span>
          <span></span>
          <span></span>
        </button>
        <h1 className="main-navigation__title">
          <Link to="/">YourPlaces</Link>
        </h1>
        <nav className="main-navigation__header-nav">
          <NavLinks />
        </nav>
      </MainHeader>             
    </React.Fragment>
  );
}

export default MainNavigation;
