import React, {Component} from 'react';

import connect from "react-redux/lib/connect/connect";
import Search from "../Search/Search";
import UniqueCards from "../UniqueCards/UniqueCards";
import Filters from "../Filters/Filters";
import './SearchPage.css';

class SearchPage extends Component {
    onChangeInputValue = (text) =>{
        this.props.onChangeInput(text);
    };
    search = () =>{
        const text = this.props.inputValue;
        const city = this.props.cityFilter;
        const category = this.props.categoryFilter;
        const cards = this.props.cards;
        this.props.searchRequest( text, city, category, cards );
    };
    onChangeFilter = (text, filter) =>{
        this.props.selectFilter(text, filter);
    };
    render() {
        return (
            <div className={'search_page'}>
                <Search sendRequest={this.search}
                        inputValue={this.props.inputValue}
                        onChangeInputValue={this.onChangeInputValue}
                />
                <Filters filters={this.props.filters}
                         onChangeFilter={this.onChangeFilter}
                />
                <UniqueCards cards={this.props.cards}
                             selectCard={this.props.selectCard}/>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    inputValue: state.inputValue,
    filters: state.filtersState,
    category: state.categoryState,
    cards: state.equipmentState,
    cityFilter: state.filterSearch.city,
    categoryFilter: state.filterSearch.category,
});
const mapDispatchToProps = dispatch => ({
    selectFilter: (value, category) => dispatch({type: 'ADD_FILTER', payload: {text: value, category: category}}),
    onChangeInput: (text) => dispatch({type: 'CHANGE_INPUT_VALUE', payload: text}),
    searchRequest: (text, city, category, cards) => dispatch({type: 'FILTER', payload: { text: text, city:city, category:category, cards:cards}}),
});
export default connect(mapStateToProps, mapDispatchToProps)(SearchPage);