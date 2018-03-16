import React from 'react';


class Header extends React.Component {
    render(){
        return(
            <nav className="navbar navbar-default navbar-fixed-top">
                <div className="container-fluid">
                
                <div className="navbar-header">
                    <a className="navbar-brand" href="/">Profile Management</a>
                </div>
            
                
                <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                    <ul className="nav navbar-nav navbar-right">
                    <li><a href="/view-profile">View Profile</a></li>
                    <li><a href="/add-profile">Add Profile</a></li>
                    <li><a href="/update-profile">Update Profile</a></li>
                    <li><a href="/remove-profile">Delete Profile</a></li>
                    </ul>
                </div>
                </div>
            </nav>
        );
    }
}

export default Header;