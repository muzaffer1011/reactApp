import React from 'react';

class APIServer extends React.Component{

    constructor(props){
        super(props);
        this.command = props.command;
        this.state = {
            data:[{
                "id": 101,
                "name": "Muzaffer Hassan",
                "location": "New Delhi",
                "jobProfile": "Frontend Developer",
                "profilePic": "http://via.placeholder.com/350x250"
              },
              {
                "id": 102,
                "name": "Ashish Kumar",
                "location": "New Delhi",
                "jobProfile": "Accounts",
                "profilePic": "http://via.placeholder.com/350x250"
              },
              {
                "id": 103,
                "name": "Mohit Sharma",
                "location": "New Delhi",
                "jobProfile": "Admin",
                "profilePic": "http://via.placeholder.com/350x250"
              }]
        };
        this.baseURL = "http://localhost:3000/";
    }

    componentDidMount(){
        let data = [];
        // if(this.command == 'fetchAll'){
        //     data = this.getAllData();
        //     console.log(data);
        // }

        // this.setState({
        //     data:data
        // })
    }

    getAllData(){
        console.log('fetchAll')
        return (
            [
                {
                  "id": 101,
                  "name": "Muzaffer Hassan",
                  "location": "New Delhi",
                  "jobProfile": "Frontend Developer",
                  "profilePic": "http://via.placeholder.com/350x250"
                },
                {
                  "id": 102,
                  "name": "Ashish Kumar",
                  "location": "New Delhi",
                  "jobProfile": "Accounts",
                  "profilePic": "http://via.placeholder.com/350x250"
                },
                {
                  "id": 103,
                  "name": "Mohit Sharma",
                  "location": "New Delhi",
                  "jobProfile": "Admin",
                  "profilePic": "http://via.placeholder.com/350x250"
                }
              ]
        );
    }

    render(){
        return(<div>
            {this.state.data}
        </div>);
    }
}

export default APIServer;