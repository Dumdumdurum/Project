import React from 'react'

class Controls extends React.Component{
    handleChangeX = (e) => {
        if(typeof this.props.handleGravity === 'function'){
            console.log('hello', e.target.value);
            this.props.handleGravity('x', e.target.value);
        }
    };

    handleChangeY = (e) => {
        if(typeof this.props.handleGravity === 'function'){
            console.log('hello', e.target.value);
            this.props.handleGravity('y', e.target.value);
        }
    };
    render(){
        return(
            <form>
                <input onInput={this.handleChangeX} type="range" id="gravityX" value={this.props.valueX} min='-1' max='1' step=".1"/>
                <input onInput={this.handleChangeY} type="range" id="gravityY" value={this.props.valueY} min='-1' max='1' step=".1"/>
            </form>
        )
    };
}

module.exports = Controls;