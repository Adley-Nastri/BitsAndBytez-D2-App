import React from 'react';
import { useState } from 'react';
import {
  NavContainer,
  NavLink,
  NavLinkDropDown,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnDropDown,
  NavBtnLink,
  NavDropDownContainer,
  NavMenuDropDown
} from './NavbarElements';




const Navbar = () => {

  const [navbarDropDown, setNavbarDropDown] = useState(false)
  return (
    <>
      <NavContainer navbarDropDown={navbarDropDown}>
        <NavMenu>
          <NavLink to='/' >Home</NavLink>
          <NavLink to='/about' >About</NavLink>
          <NavLink to='services' >Services</NavLink>
          <NavLink to='/support' >Support</NavLink>
          <NavLink to='/user-guide' >User Guide</NavLink>
          <NavLink to='/bungie-user' >Bungie User</NavLink>
          <NavBtn>

            <a rel="noopener noreferrer"
              className="bungie_btn"
              href={`https://www.bungie.net/en/OAuth/Authorize?client_id=${process.env.REACT_APP_OAUTH_CLIENT_ID}&response_type=code`}>Login with Bungie</a>

          </NavBtn>
        </NavMenu>

        <Bars navbarDropDown={navbarDropDown}
          onClick={() => {
            setNavbarDropDown((curr) => !curr);
          }}
        >
        </Bars>


        {navbarDropDown &&
          <>
            <NavDropDownContainer>


              <NavLinkDropDown to='/' > Home</NavLinkDropDown>
              <NavLinkDropDown to='/about' >About</NavLinkDropDown>
              <NavLinkDropDown to='/services' >Services</NavLinkDropDown>
              <NavLinkDropDown to='/support' >Support</NavLinkDropDown>
              <NavLinkDropDown to='/user-guide' >User Guide</NavLinkDropDown>
              <NavLinkDropDown to='/bungie-user' >Bungie User</NavLinkDropDown>


              <NavBtnDropDown>
                <a rel="noopener noreferrer"
                  className="bungie_btn"
                  href={`https://www.bungie.net/en/OAuth/Authorize?client_id=${process.env.REACT_APP_OAUTH_CLIENT_ID}&response_type=code`}>Login with Bungie</a>
              </NavBtnDropDown>

            </NavDropDownContainer>

          </>
        }

      </NavContainer>


    </>
  );
};

export default Navbar;