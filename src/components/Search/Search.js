import React from 'react';
import {Input} from "antd";

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