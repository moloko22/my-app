import React from 'react';

import { Input } from "antd";
import './Search.css';

function Search(props){
    return(
        <div className={'search'}>
            <form>
                <Input name={'search'}
                       placeholder={'Поиск по оборудованию'}
                       value={props.inputValue}
                       onChange={(e) => props.onChangeInputValue(e.target.value)}
                />
                <button type={'submit'}>Найти</button>
            </form>
        </div>
    )
}
export default Search;