import React, {Component} from 'react';

import UniqueInfo from "../UniqueInfo/UniqueInfo";
import UniqueCards from "../UniqueCards/UniqueCards";
import './UniqueEquipments.css';

class UniqueEquipments extends Component {
    render() {
        return (
            <div className={'unique_equipments'}>
                <UniqueInfo header={'Уникальное оборудование'}
                            text={'Не нужно покупать дорогостоящее оборудование и брать в штат уникальных специалистов.'}/>
                <UniqueCards cards={this.props.cards}
                            selectCard={this.props.selectCard}/>
            </div>
        );
    }
}

export default UniqueEquipments;