import React from 'react'
import {NavLink} from 'react-router-dom'
import {PATH} from "./Router";
import style from "./Header.module.css"

const navbarItemData = [
    {name: "PreJunior", path: PATH.PRE_JUNIOR},
    {name: "Junior", path: PATH.JUNIOR},
    {name: "JuniorPlus", path: PATH.JUNIOR_PLUS}
]

type NavbarItemType = {
    path: string
    name: string
}

function NavbarItem({path, name}: NavbarItemType) {
    return (
        <li>
            <NavLink
                to={path}
                className={(navData) => navData.isActive ? `${style.activeLink} ` : ''}>
                {name}
            </NavLink>
        </li>
    )
}

const NavLinks = navbarItemData.map((ni,index) => <NavbarItem key={index} path={ni.path} name={ni.name}/>)


function Header() {
    return (
        <ul className={style.item}>
            {NavLinks}
        </ul>
    )
}

export default Header
