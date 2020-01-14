import React from 'react';

function SearchHeader(props) {
    return (
        <div className={'search_header'}>
            <h1>{props.header}</h1>
            <p>{props.paragraph}</p>
        </div>
    );
}

export default SearchHeader;