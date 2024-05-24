import React, {useState } from 'react';

import { Drawer } from '@mui/material';
import dark_weblogo from './assets/alarado-icon-homepage-dark.svg';
import weblogo from './assets/alarado-icon-homepage.svg'
import { useMediaQuery } from '@mui/material';

export function NavBarComponent({setGlobalDarkMode} : any) {
    const navigationOption = ["About us","Product","Resource","Contact"]
    const [navigationIndex, setNavigation] = useState(0);
    const [darkMode, setDarkMode] = useState(false);
  
    const isMobileView = useMediaQuery('(max-width: 640px)');
  
    function handleNavigationClick(param : any) {
      console.log('index', param);
      setNavigation(param);
    }
  
    const [openDrawer, setDrawer] = useState(false);
    function toggleDrawer(param: any) {
      setDrawer(param);
    }
  
    function toggleDarkMode() {
      setDarkMode(!darkMode)
    }
  
    return (
      <div className='navbar'>
        <div className='navbar_logo'>
          <img src={darkMode  ?dark_weblogo :weblogo} alt='webpage-logo'></img>
        </div>
  
        {isMobileView 
        ?
        <>  
        <div onClick={() => toggleDrawer(true)}>
          <span className="material-symbols-outlined menu-option">
          menu
          </span>
        </div>
        </> 
        :
        <>
        <div className='navbar_nav'>
          {navigationOption.map((nav,index) => {
            return (
              <div key={crypto.randomUUID()} onClick={() => handleNavigationClick(index)} className={navigationIndex === index ?'selected' :'unselected'}>{nav}</div>
            )
          })}
        </div>

        <div className='navbar_toggle'>
        </div>
        </>
        }
  
        <Drawer open={openDrawer} onClose={() => toggleDrawer(false)} anchor='right' >
            <div className='navbar_nav'>
              {navigationOption.map((nav,index) => {
                return (
                  <div key={crypto.randomUUID()} onClick={() => {handleNavigationClick(index);toggleDrawer(false)}} className={navigationIndex === index ?'selected' :'unselected'}>{nav}</div>
                )
              })}
            </div>
  
            <div className='navbar_toggle'>
            </div>
        </Drawer>
      </div>
    )
  }
  