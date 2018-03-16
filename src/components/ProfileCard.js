import React from 'react';

class ProfileCard extends React.Component{

    constructor(props){
        super(props);
        this.profileData = props.data;
    }
    render(){
        let profile = this.profileData;
        return(
            <div key={profile.id} className="col-sm-6 col-md-4">
                <div className="thumbnail">
                    <img src="https://picsum.photos/390/250" alt="..." />
                    <div className="caption">
                        <h3>{profile.name}</h3>
                        <p><strong>Job Profile</strong> : {profile.jobProfile}</p>
                        <p><strong>Location</strong> : {profile.location}</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default ProfileCard;