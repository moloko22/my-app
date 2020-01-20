import React, {Component} from 'react';

import './Filters.css';
class Filters extends Component {
    onChange(e, type){
        this.props.onChangeFilter(e.target.value, type);
    }
    createsOptions(array){
        if(Array.isArray(array)){
            return array.map(item => {
                return <option value={item} key={item}>{item}</option>
            })
        }
    }
    render() {
        return (
            <div className={'filters'}>
                <div className={"filter_type_of_equipment"}>
                    <select name="equipment" onChange={(e) => this.onChange(e, 'category')}>
                        {this.createsOptions(this.props.filters.category)}
                    </select>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M16 10L12 14L8 10" stroke="#757A7D" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                </div>
                <div className={"filter_by_citys"}>
                    <select name="citys" onChange={(e) => this.onChange(e, 'city')}>
                        {this.createsOptions(this.props.filters.city)}
                    </select>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M16 10L12 14L8 10" stroke="#757A7D" strokeWidth="2" strokeLinecap="round"/>
                    </svg>

                </div>
            </div>
        );
    }
}

export default Filters;