import React, {Component} from 'react';

import "./Header.css";

class Header extends Component {
    render() {
        return (
            <header>
                <div className={'logo'}>
                    <a onClick={() => this.props.changeHistory('/')}>
                        <img src="https://www.sberbank.ru/portalserver/content/atom/contentRepository/content?id=35f8876c-36fe-48b6-83d0-1ec3388a22f3"
                             alt="sber_logo"/>
                    </a>
                </div>
                <div className={"navbar"}>
                    <ul>
                        <li key="logout" className={'menu_item'}>
                            <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M15 19C17.4853 19 19.5 16.9853 19.5 14.5C19.5 12.0147 17.4853 10 15 10C12.5147 10 10.5 12.0147 10.5 14.5C10.5 16.9853 12.5147 19 15 19Z" stroke="#333333" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M22.5 26.5C22.5 22.3579 19.1421 19 15 19C10.8579 19 7.5 22.3579 7.5 26.5" stroke="#333333" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                <circle cx="15" cy="15" r="14" stroke="#333333" strokeWidth="2"/>
                            </svg>
                            <a onClick={() => this.props.changeHistory('/account')}>Марина</a>
                        </li>
                    </ul>
                </div>
            </header>
        );
    }
}

export default Header;