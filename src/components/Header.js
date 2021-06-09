import React from 'react';
import {NavLink} from "react-router-dom";

function Header(props) {
    return (
        <div className='head'>
            <div className='logo'>
                Cover
            </div>

            <div className='navBar'>
               <ul className='nav'>
                  <li>
                      <NavLink exact to='/' activeClassName='selected'>
                          Home
                      </NavLink>
                  </li>
                  <li>
                      <NavLink to='/features' activeClassName='selected'>
                          Features
                      </NavLink>
                  </li>
                  <li>
                      <NavLink to='/contacts' activeClassName='selected'>
                          Contact
                      </NavLink>
                  </li>
               </ul>



            </div>






        </div>
    );
}

export default Header;