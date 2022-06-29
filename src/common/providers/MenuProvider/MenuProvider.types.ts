export type MenuProviderContextType = {
  openMenu: (menuName: string) => void;
  closeMenu: () => void;
  profileMenuOpen: boolean;
  mainMenuOpen: boolean;
};
