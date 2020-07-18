import React, { Component } from 'react';
import './Button.styles.css';

class Button extends Component {

    render() {
        let isRolling = this.props.rolling
        return (
            <div>
                <button onClick={ this.props.clickFun } disabled={ isRolling }>
                    { isRolling ? 'Rolling...' : 'Roll Dice!' }
                </button>
            </div>
        )
    }
}

export default Button;