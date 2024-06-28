import React from 'react'
import styles from "./project.module.css";
import {NavLink} from 'react-router-dom';

const NavBar = () => {
  return (
    <div className={styles.nav}>
        <article className={styles.left}>logo</article>
        <article className={styles.right}>
            <NavLink to="/">Product</NavLink>
            <NavLink to="/cart">Cart</NavLink>
            <NavLink to="/order">Order</NavLink>
            <NavLink to="/checkout">CheckOut</NavLink>
        </article>
    </div>
  )
}

export default NavBar