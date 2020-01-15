import React, {Component} from 'react';

import connect from "react-redux/lib/connect/connect";
import Search from "../Search/Search";
import UniqueCards from "../UniqueCards/UniqueCards";
import Filters from "../Filters/Filters";
import './SearchPage.css';

class SearchPage extends Component {
    onChangeFilter = (text, filter) =>{
        this.props.selectFilter(text, filter);
    };
    render() {
        return (
            <div className={'search_page'}>
                <Search />
                <Filters filters={this.props.filters}
                         onChangeFilter={this.onChangeFilter}
                         city={this.props.cityFilter}
                         category={this.props.categoryFilter}
                />
                <UniqueCards cards={this.props.cards}
                             selectCard={this.props.selectCard}/>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    filters: state.filtersState,
    category: state.categoryState,
    cards: state.equipmentState,
    cityFilter: state.filters.city,
    categoryFilter: state.filters.category,
});
const mapDispatchToProps = dispatch => ({
    selectFilter: (text, filter) => dispatch({type: 'ADD_FILTER', payload: [text, filter]}),
    onSubmit: (text) => dispatch({type: 'SEARCH', payload: text}),
});
export default connect(mapStateToProps, mapDispatchToProps)(SearchPage);