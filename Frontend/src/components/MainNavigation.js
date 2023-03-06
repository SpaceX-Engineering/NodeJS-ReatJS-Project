import { NavLink } from 'react-router-dom';

import classes from './MainNavigation.module.css';

function MainNavigation() {
  return (
    <header className={classes.header}>
      <nav>
        <ul className={classes.list}>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
              end
            >
              Login
            </NavLink>
          </li>
          {/* Sign Up Page Navigation */}
          <li>
            <NavLink
              to="/Signup"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              Sign Up
            </NavLink>
          </li>
          {/* Get All Products */}
          <li>
            <NavLink
              to="/GetAllProducts"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              Get All Products
            </NavLink>
          </li>

          {/* Add Product Page Navigation */}
          <li>
            <NavLink
              to="/add-products"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              Add Products
            </NavLink>
          </li>

          {/* Log Out */}
          <li>
            <NavLink to="/">
              Log Out
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
