import React, { createContext } from 'react'
import { MenuProviderContextType } from './MenuProvider.types';

interface Props {
    children: React.ReactNode;
}

const DefaultMenuState: MenuProviderContextType = {
    openMenu: function (): void {
        throw new Error(`Function not implemented.`);
    },
    closeMenu: function (): void {
        throw new Error(`Function not implemented.`);
    },
    profileMenuOpen: false,
    mainMenuOpen: false,
}

const MenuProviderContext = createContext < MenuProviderContextType>(DefaultMenuState);

export const MenuProvider = ({children} : Props) : JSX.Element => {
  return (
      <MenuProviderContext.Provider
          value={{ openMenu, closeMenu, profileMenuOpen, mainMenuOpen }}
      >
        {children}      
    </MenuProviderContext.Provider>
  )
}
