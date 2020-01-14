import React, {Component} from 'react';

class CardsCategory extends Component {

    generateList(array){
        return array.map((elem, i) => {
            return (
                <div key={elem.name}
                     className={'card'}>
                    <h2>{elem.name}</h2>
                    <ul>
                        {elem.titles.map(title=>{
                            return (<li key={title}>{title}</li>)
                        })
                        }
                    </ul>
                </div>
            )
        })
    }
    render() {
        return (
            <section className={'cards_category'} key={'cards_category'}>
                {this.generateList(this.props.list)}
            </section>
        );
    }
}

export default CardsCategory;


