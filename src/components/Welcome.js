import React from 'react';
import './welcome.css';

class Welcome extends React.Component{
    render(){
        return(
            <div className="fullScreenMessage">
                <h1 className="text-center">Welcome to React Profile System</h1>
            </div>
        );
    }
}

export default Welcome;