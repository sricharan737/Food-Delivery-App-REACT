import React from "react";
import ReactDOM from "react-dom/client";

var logo = require('./rainbow-six-siege-logo-logo-png-transparent.png');
var User = require('./this-is-way-too-fucked-up.jpg');
const Logo = () => (

    <img src={logo} width="1000" height="1000" align="left" />

);

const UserProfile = () => (
	
    <img src={User}  width="1000" height="1000" align="right" />

);


const Header = () => <div className="container">
                            {<Logo />}
                            {<SearchBar />}
                            {<UserProfile />}
                     </div>;



const SearchBar = () => (
<div className="search">
    <input
		className="search_text"
		type="text"
		placeholder="Search...">
    </input>
</div>	
);



const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Header />);
