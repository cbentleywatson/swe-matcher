import React, { Component } from 'react';

// no need to modify anything in here. The second test is looking for the returned JSX from this component
class ComponentOne extends Component {
    render() {
        return (
            <div className="example">
                <img src="https://media.istockphoto.com/vectors/welcome-lettering-sign-isolated-vector-vector-id1127929107?k=20&m=1127929107&s=612x612&w=0&h=7uCZvQJWwTpH4IpLEnRTAtjtPgd8htCyPwF1fxkD1T0=" alt="a deeply impressed man, perhaps thinking 'whoa'"/>
                <p>Whoa!</p>
            </div>
        );
    }
}

export default ComponentOne;