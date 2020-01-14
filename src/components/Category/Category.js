import React, {Component} from 'react';

class Category extends Component {
    render() {
        return (
            <div key={this.props.category.id}>
                <h3>{this.props.category.name}</h3>
                <p className={'about'}>{this.props.category.titles[0]}</p>
            </div>
        );
    }
}

export default Category;