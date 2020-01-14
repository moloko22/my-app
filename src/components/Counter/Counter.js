import React, {Component} from 'react';

class Counter extends Component {
    generateCounters(array){
        return array.map(elem => {
            return (
                <div key={elem.counter}>
                    <h3>{elem.counter + '+'}</h3>
                    <p>{elem.text}</p>
                </div>
            )
        })
    }
    render() {
        return (
            <section className={'counter'}>
                {this.generateCounters(this.props.counters)}
            </section>
        );
    }
}

export default Counter;