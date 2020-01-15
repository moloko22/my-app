import React, {Component} from 'react';

import connect from "react-redux/lib/connect/connect";
import Search from "../Search/Search";
import UniqueCards from "../UniqueCards/UniqueCards";
import Filters from "../Filters/Filters";
import './SearchPage.css';

class SearchPage extends Component {
    render() {
        return (
            <div className={'search_page'}>
                <Search />
                <Filters filters={this.props.filters}/>
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
});
const mapDispatchToProps = dispatch => ({
});
export default connect(mapStateToProps, mapDispatchToProps)(SearchPage);