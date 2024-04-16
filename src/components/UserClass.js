import React from "react";

class UserClass extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			userInfo: {
                name: "Dummy",
                location: "Default",
                avatar_url:""
            }
		};
	}

    async componentDidMount() {
        const data = await fetch("https://api.github.com/users/sricharan737");
        const json = await data.json();

        this.setState ({
            userInfo: json,
            count : 0,
        })
    }

    componentDidUpdate() {
        console.log("component did update is called");
    }//happens when the State variable is updated and hence the component updates

    componentWillUnmount() {
        console.log("component has unmounted");
    } // happens when a new page is loaded

	render() {
		//const { name, location, contact } = this.props;
		const { count } = this.state;
        const {name, location, html_url, avatar_url} = this.state.userInfo
		return (
			<div className="user-card m-4 p-4">
                <img className="user-dp my-1 py-2 w-36" src={avatar_url} alt="User Avatar"></img>
				<h2 className="font-semibold">Name: {name}</h2>
				<h3 className="font-semibold">Location: {location}</h3>
                <h4 className="font-semibold">User URL: {html_url}</h4>
				<h4 className="font-semibold">Count: {count} </h4>
				<button className="b-2 px-2 py-0.5 m-2 justify-start bg-red-100 rounded-md"
					onClick={() => {
						this.setState({
							count: this.state.count + 1,
						});
					}}>
					Increase Count
				</button>
			</div>
		);
	}
}

export default UserClass;
