import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./navStyle.css";

import search from "../../media/search.png";
import menu from "../../media/menu.png";
import cart from "../../media/shopping-cart.jpg";
import world from "../../media/planetary-grid.png";


function NavigationBar() {
    const [searchText, setSearchText] = useState();
    const toggleChange = e => {
        setSearchText(e.target.value);
    };

    const pathName = () => {
        const path = "/search/" + searchText;
        return path;
    };

    return (
        <div className="navigation-bar">
            <button className="hide1">
                <img height="20px" width="20px" src = { menu } alt="menu"></img>
            </button>
            <Link to="/">
                <button>
                    <img height="50px" width="90%" src="https://www.udemy.com/staticx/udemy/images/v7/logo-udemy.svg" alt="udemy-logo"></img>
                </button>
            </Link>
            <button className="hide2">categories</button>
            <form className="search-bar hide2">
                <Link to={ pathName() }>
                    <button id="search-button" type="text">
                        <img height="20px" src={search} alt="search-icon"></img>
                    </button>
                </Link>
                <input id="input-bar" type="text" placeholder="search for anything" value={searchText} onChange={ toggleChange }></input>
            </form>
            <button className="hide2" >Teach on Udemy</button>
            <button className="hide2" >Udemy Business</button>
            <img  className="hide2" src={ cart } alt="shopping-cart icon"></img>
            <button className="bordered hide2">
                <strong>Login</strong>
            </button>
            <button className="reversed hide2">
                <strong>Sign up</strong>
            </button>
            <button className="bordered hide2">
                <img height="20px" src={ world } alt="language-icon"></img>
            </button>
        </div>  
    );
}

export default NavigationBar;