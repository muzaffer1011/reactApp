import React from 'react';

class Add_Profile extends React.Component{
    constructor(props){
        super(props);
        // this.name='';
        // this.jobProfile='';
        // this.location='';

        this.state={
            name:'',
            jobProfile:'',
            location:''
        }
    }
    handleChange(e){
        if(e.target.name === 'name')
            this.setState({name:e.target.value})    
        else if(e.target.name === 'jobProfile')
            this.setState({jobProfile:e.target.value})
        else if(e.target.name === 'location')
            this.setState({location:e.target.value})
    }
   
    addProfile(e){
        e.preventDefault();
        let data = this.state;
        this.setState({
            name:'',
            jobProfile:'',
            location:''
        })
        console.log(data);
        fetch('http://localhost:3000/profile', {
            method: 'post',
            headers: {
                contentType: "application/json"
              },
            body: JSON.stringify(data)
        }).then(function(response) {
            return response.json();
        }).then(function(data) {
            console.log(data);
        });
    }
    render(){
        return(
            <div className="container">
                <h2 className="align-center">Add Profile</h2>
                <div className="profile-wrapper">
                    <div className="row">
                        <div className="col-sm-12">
                            <form onSubmit={this.addProfile.bind(this)}>
                                <div className="form-group">
                                    <label htmlFor="name">Name</label>
                                    <input type="text" className="form-control" id="name" name="name" placeholder="Name" value={this.state.name} onChange={this.handleChange.bind(this)} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="job-profile">Job Profile</label>
                                    <input type="text" className="form-control" id="job-profile" name="jobProfile" placeholder="Job Profile" value={this.state.jobProfile} onChange={this.handleChange.bind(this)} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="job-location">Location</label>
                                    <input type="text" className="form-control" id="job-location" name="location" placeholder="Location" value={this.state.location} onChange={this.handleChange.bind(this)} />
                                </div>
                                <button type="submit" className="btn btn-default">Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Add_Profile;