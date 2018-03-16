import React from 'react';
import ProfileCard from './ProfileCard';

class View_Profile extends React.Component{

    constructor(props){
        super(props);
        this.baseUri = "http://localhost:3000/";
        this.state = {
            data :[],
            snippet:''
        }
    }
    componentDidMount(){
        this.APIFetch();
    }
    APIFetch(){
        let query = this.baseUri+"profile";
        fetch(query)
        .then(resp => {return resp.json()})
        .then(data=>{
            this.setState({
                data:data
            })
            this.getCards(this.state.data);
        })
        .catch(err => {console.log(err)})
    }

    getCards(data){
        let snippet = data.map((profile)=>{
            return(
                <ProfileCard key={profile.id} data = {profile} />
            );
        });
        this.setState({
            snippet: snippet
        })
    }

    render(){
        return(
            <div className="container">
                <h2 className="align-center">Available Profiles</h2>
                <div className="profile-wrapper">
                    <div className="row">
                        {this.state.snippet}
                    </div>
                </div>
            </div>
        );
    }
}

export default View_Profile;