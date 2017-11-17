import React from 'react';
import ReactDOM from 'react-dom';

import Gravity from './Engine/gravity.jsx'

document.addEventListener('DOMContentLoaded', function(){


    class App extends React.Component{
        render(){
            return(
                <div>
                    <Gravity/>
                </div>
            )
        }
    }

    ReactDOM.render(
        <App/>,
        document.getElementById('app')
    );
});