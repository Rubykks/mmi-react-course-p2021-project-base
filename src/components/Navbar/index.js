import React from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <ul className={styles.menu}>
        <li>
          <Link to="/mon-agenda" className={styles.menuItem}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
              preserveAspectRatio="xMidYMid meet"
            >
              <defs>
                <clipPath id="__lottie_element_448">
                  <rect width="24" height="24" x="0" y="0"></rect>
                </clipPath>
              </defs>
              <g clip-path="url(#__lottie_element_448)">
                <g transform="matrix(1,0,0,1,0,0)" opacity="1">
                  <g opacity="0" transform="matrix(1,0,0,1,12,13)">
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      fill-opacity="0"
                      stroke="rgb(0,0,0)"
                      stroke-opacity="1"
                      stroke-width="2"
                      d=" M8.229000091552734,8.57699966430664 C7.889999866485596,8.842000007629395 7.4629998207092285,9 7,9 C7,9 -7,9 -7,9 C-7.4629998207092285,9 -7.889999866485596,8.842000007629395 -8.229000091552734,8.57699966430664"
                    ></path>
                  </g>
                  <g opacity="1" transform="matrix(1,0,0,1,12,13)">
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      fill-opacity="0"
                      stroke="#2b2b2b"
                      stroke-opacity="1"
                      stroke-width="2"
                      d=" M-7,-9 C-7,-9 7,-9 7,-9 C8.104000091552734,-9 9,-8.104000091552734 9,-7 C9,-7 9,7 9,7 C9,8.104000091552734 8.104000091552734,9 7,9 C7,9 -7,9 -7,9 C-8.104000091552734,9 -9,8.104000091552734 -9,7 C-9,7 -9,-7 -9,-7 C-9,-8.104000091552734 -8.104000091552734,-9 -7,-9z"
                    ></path>
                  </g>
                  <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      fill-opacity="0"
                      stroke="#2b2b2b"
                      stroke-opacity="1"
                      stroke-width="2"
                      d=" M16,2 C16,2 16,6 16,6"
                    ></path>
                  </g>
                  <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      fill-opacity="0"
                      stroke="#2b2b2b"
                      stroke-opacity="1"
                      stroke-width="2"
                      d=" M8,2 C8,2 8,6 8,6"
                    ></path>
                  </g>
                  <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      fill-opacity="0"
                      stroke="#2b2b2b"
                      stroke-opacity="1"
                      stroke-width="2"
                      d=" M3,10 C3,10 21,10 21,10"
                    ></path>
                  </g>
                </g>
              </g>
            </svg>
            <p>Mon agenda</p>
          </Link>
        </li>
        <li>
          <Link to="/" className={styles.menuItem}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#2b2b2b"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="feather feather-home"
            >
              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
              <polyline points="9 22 9 12 15 12 15 22"></polyline>
            </svg>
            <p>Accueil</p>
          </Link>
        </li>
        <li>
          <Link to="/mes-likes" className={styles.menuItem}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#2b2b2b"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="feather feather-heart"
            >
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
            </svg>
            <p>Mes likes</p>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
