import React, { Component } from 'react';
import Button from '../Button/Button.component';
import Die from '../Die/Die.component';

class RollDice extends Component {

    static defaultProps = {
        sides: ['one', 'two', 'three', 'four', 'five', 'six']
    }

    state = {
        die1: 'one',
        die2: 'one',
        rolling: false
    }

    roll = (e) => {
        
        const newDie1 = this.props.sides[Math.floor(Math.random() * this.props.sides.length)];
        const newDie2 = this.props.sides[Math.floor(Math.random() * this.props.sides.length)];

        this.setState({
            die1: newDie1,
            die2: newDie2,
            rolling: true
        });

        setTimeout(() => {
            this.setState({ rolling: false });
        }, 1000)
    }

    render() {
        let rolling= this.state.rolling ;
        return (
            <div>
                <Die face={ this.state.die1 } rolling={ rolling } />
                <Die face={ this.state.die2 } rolling={ rolling }/>
                <Button clickFun={ this.roll }  rolling={ rolling }/>
            </div>
        )
    }
}

export default RollDice;