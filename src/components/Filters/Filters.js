import React, {Component} from 'react';

class Filters extends Component {
    onChange(e, type){
        this.props.onChangeFilter(e.target.value, type);
    }
    render() {
        return (
            <div className={'filters'}>
                <div className={"filter_by_citys"}>
                    <select name="citys" onChange={(e) => this.onChange(e, 'city')}>
                        <option label="Все города">Все города</option>
                        {this.props.filters.city.map((city, i) => (
                            <option value={city} key={city}>{city}</option>
                        ))}
                    </select>
                </div>
                <div className={"filter_type_of_equipment"}>
                    <select name="equipment" onChange={(e) => this.onChange(e, 'category')}>
                        <option label="Все категории">Все категории</option>
                        {this.props.filters.category.map((category, i) => (
                            <option key={category}>{category}</option>
                        ))}
                    </select>
                </div>
            </div>
        );
    }
}

export default Filters;