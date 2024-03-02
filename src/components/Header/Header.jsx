import React, { Suspense } from 'react';
import { NavLink, Outlet } from 'react-router-dom';

import Loader from 'components/Loader/Loader';

import s from './Header.module.css';

const Header = () => {
  return (
    <>
      <header className={s.header}>
        <span className={s.logo} role="img" aria-label="computer icon">
          🍿
        </span>
        <nav className={s.navigation_list}>
          <NavLink to="/" className={s.navigation} end>
            Home
          </NavLink>
          <NavLink to="/movies" className={s.navigation}>
            Movie
          </NavLink>
        </nav>
      </header>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default Header;
