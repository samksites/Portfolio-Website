
import '../css/Home-Page.css';
import HomePageNav from "./homeComponents/home-nav";
import AuthenticationButton from "./authenticationButtons/authentication";
import { useAuth0 } from '@auth0/auth0-react';


function getLoggedIn (){

    return [<HomePageNav link={"/about"} description={"About me"}/>,<HomePageNav description={"Personal projects"}/>,<HomePageNav description={"Personal info"}/>];
}

function getLoggedOut (){

    return [<HomePageNav link={"/about"} description={"About me"}/>,<HomePageNav description={"Personal info"}/>];
}




const HomePage = () => {
    const { isAuthenticated } = useAuth0();

    const buttons = isAuthenticated ? getLoggedIn(): getLoggedOut();
    
    return(
        <div className="home">
            {/* Header holds the welcome box which is an h1*/}
            <div className='flex flexBoxColumn flexBoxCenter'>
                <div className="rainbow-border white-txt flexbox-1" id="welcome-box"> <h1>Welcome</h1> </div>
                    {buttons.map(element => (
                         <div> {element} </div>
                    ))}
                    {<AuthenticationButton/>}
                
            </div>
        </div>
    )
};

export default HomePage;