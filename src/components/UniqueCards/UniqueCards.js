import React, {Component} from 'react';

class UniqueCards extends Component {
    generateList(array){
        return array.map(elem => {
            return (
                <div className={'unique_card'} key={elem.header}>
                    <h3>{elem.header}</h3>
                    <p>{elem.text}</p>
                    <img src={elem.img} alt="little_logo"/>
                </div>
            )
        })
    }
    render() {
        return (
            <div className={'unique_cards'}>
                {this.generateList(this.props.cards)}
            </div>
        );
    }
}

export default UniqueCards;