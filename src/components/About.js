import User from "./User";
import UserClass from "./UserClass";


const About = () => {
    return(
        <div>
            <h1 className="font-bold text-center text-4xl m-2 p-2 justify-self-center">Welcome to the About Us page</h1>
            <h2 className="font-bold text-center text-xl m-2 p-2  ">This is a food delivery app project build with REACT</h2>
            <UserClass name = "Charan" location = "Toronto" contact = "sricharan231@gmail.com" />
            <User />
        </div>
    )
};

export default About;