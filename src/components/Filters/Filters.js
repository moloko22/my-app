import React from "react";

import './Filters.css';
function Filters(props){
    return(
        <div className={'filters'}>
            <div className={"filter_by_citys"}>
                <select name="citys">
                    {props.filters.city.map((city, i) => (
                        <option key={city}>{city}</option>
                    ))}
                </select>
            </div>
            <div className={"filter_type_of_equipment"}>
                <select name="citys">
                    {props.filters.category.map((category, i) => (
                        <option key={category}>{category}</option>
                    ))}
                </select>
            </div>
        </div>
    )
}
export default Filters;