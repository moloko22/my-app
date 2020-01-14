import React, {Component} from 'react';
import UniqueInfo from "../UniqueInfo/UniqueInfo";
import UniqueCards from "../UniqueCards/UniqueCards";

class UniqueEquipments extends Component {
    render() {
        return (
            <div>
                <UniqueInfo header={'Уникальное оборудование'}
                            text={'Не нужно покупать дорогостоящее оборудование и брать в штат уникальных специалистов.'}/>
                <UniqueCards cards={this.props.cards}/>
            </div>
        );
    }
}

export default UniqueEquipments;