import React, { Component } from 'react';
import {Link} from 'react-router';

class Header extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <header className="header-main">
                <nav className="header-main__container">
                    <div className="header-main__ribbon-left"></div>
                    <div className="header-main__ribbon">
                        <div className="header-main__left">
                            <Link activeClassName={ "current" } to='/series'>{"Toutes les séries"}</Link>
                            <Link activeClassName={ "current" } to='/peoples'>{"Portraits"}</Link>
                        </div>
                        <div className="header-main__right">
                            <Link activeClassName={ "current" } to='/concours'>{"Concours"}</Link>
                            <Link activeClassName={ "current" } to='/podcasts'>{"Podcasts"}</Link>
                        </div>
                    </div>
                    <div className="header-main__ribbon-right"></div>
                </nav>
                <Link to='/'><img className="header-main__logo" src="../../img/logo_small.png" alt="Logo" /></Link>
            </header>
        )
    }
}

module.exports = Header;
