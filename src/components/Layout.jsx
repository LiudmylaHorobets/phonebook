import React from 'react';
import { Outlet } from 'react-router-dom';

import Navigation from './Navigation/Navigation';

const Layout = () => {
  return (
    <>
      <header>
        <Navigation />
      </header>
      <Outlet />
    </>
  );
};

export default Layout;