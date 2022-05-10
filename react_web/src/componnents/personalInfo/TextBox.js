
import "./pInfo/pInfo.css"
const written = require("./assets/description.json");

const TextBox = (props) => {


    return (
        <div className="textBox">{written.ch1}</div>
    );
}


export default TextBox;