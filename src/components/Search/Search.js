import React, {Component} from 'react';


import { Input } from "antd";
import './Search.css';

class Search extends Component {
    handleSubmit = (event) =>{
        event.preventDefault();
        this.props.sendRequest();
    };
    render() {
        return (
            <div className={'search'}>
                <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M30.2426 30.2426L26 26" stroke="#333333" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path fillRule="evenodd" clipRule="evenodd" d="M20.5 28C24.6421 28 28 24.6421 28 20.5C28 16.3579 24.6421 13 20.5 13C16.3579 13 13 16.3579 13 20.5C13 24.6421 16.3579 28 20.5 28Z" stroke="#333333" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <form>
                    <Input name={'search'}
                           placeholder={'Поиск по оборудованию'}
                           value={this.props.inputValue}
                           onChange={(e) => this.props.onChangeInputValue(e.target.value)}
                    />
                    <button type={'submit'}
                            onClick={(e) => this.handleSubmit(e)}
                    >Найти</button>
                </form>
            </div>
        );
    }
}

export default Search;