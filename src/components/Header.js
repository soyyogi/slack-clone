import React from 'react';
import './Header.css';
import { Avatar } from '@material-ui/core';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import SearchIcon from '@material-ui/icons/Search';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';


function Header() {
    return (
        <div className="header">
            <div className="header__left">
                <Avatar className="header__avatar"
                        alt='Assembler'
                        src='https://assets.website-files.com/5d7ac47d34aefe1ecf290ce6/5dad71d84c72cc8121f69ccb_WEBCLIP.png'
                />
                <AccessTimeIcon />
            </div>
            <div className="header__search">
                <SearchIcon />
                <input placeholder="Search Assembler Network"/>
            </div>
            <div className="header__right">
                <HelpOutlineIcon />
            </div>
        </div>
    )
}

export default Header
