import React from 'react';

import { Input } from "antd";
import './Search.css';

function Search(){
    return(
        <div className={'search'}>
            <form>
                <Input name={'search'}
                       placeholder={'Поиск по оборудованию'} />
                <button type={'submit'}>Найти</button>
            </form>
        </div>
    )
}
export default Search;