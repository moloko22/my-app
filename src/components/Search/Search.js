import React, {Component} from 'react';


import { Input } from "antd";
import './Search.css';

class Search extends Component {
    handleSubmit(event){
        event.preventDefault();
        this.props.sendRequest();
    }
    render() {
        return (
            <div className={'search'}>
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