import '../css/nav-bar.css'
import {BiLogIn} from 'react-icons/bi'




export function Nav(){

    const navBar = 
    
    <div className="navFull">
        
        
        <div id="items">
        
            <BiLogIn id="loginButton" />

        </div>

        <div id="items">

            

        </div>
        
        <div id="items">

            <button onClick={login} className="look"> Click </button>
      

        </div>


    </div>


    return(navBar);
}


async function login(userName, passWord){
 
    
    const params =  {"user": "Samuel", "pass": "1234"};
    const options = {
        method: 'POST',
        body: JSON.stringify( params ),  
        contentType: "application/json",
        dataType: ""
    };
    fetch('http://localhost:3001/new-user', options )
        .then( response => response.json() )
        .then( response => {
            
        } );

}