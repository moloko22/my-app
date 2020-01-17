import React, {Component} from 'react';
import "./Header.css";
import { Icon, Menu } from 'antd';
class Header extends Component {
    render() {
        return (
            <header>
                <div className={'logo'}>
                    <img src="https://www.sberbank.ru/portalserver/content/atom/contentRepository/content?id=35f8876c-36fe-48b6-83d0-1ec3388a22f3"
                         alt="sber_logo"
                    />
                </div>
                <div className={"navbar"}>
                    <ul>
                        <li key="logout" className={'menu_item'}>
                            <Icon type="user"/>
                            <a href={'/account'}>Марина</a>
                        </li>
                    </ul>
                </div>
            </header>
        );
    }
}

export default Header;