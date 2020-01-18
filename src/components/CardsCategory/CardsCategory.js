import React, {Component} from 'react';

import { Link } from 'react-router-dom';
import './CardsCategory.css';
class CardsCategory extends Component {
    generateList(array){
        return array.map((elem, i) => {
            return (
                <Link to={`/search`}
                      className={'card'} key={elem.id}>
                    <div className={'category'}
                         onClick={(e) => this.props.filterCategory(elem.category, 'category')}>
                    <h2>{elem.name}</h2>
                    <ul>
                        {elem.titles.map(title=>{
                            return (<li key={title}>{title}</li>)
                        })
                        }
                    </ul>
                        <span>...</span>
                </div>
                </Link>

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


