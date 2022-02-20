import '../css/general.css';
import '../css/NewUser.scss'
import React from 'react';
import {Form, Field} from 'react-final-form';
import Collapsible from 'react-collapsible';



const Input = ({errorMessage, ...props}) => (
    <div className='input-text flexbox-1 flexDirection'>
        <input {...props} type={props.hi} className='inputBox'/>
        {errorMessage && <span className='errorMessage'>{errorMessage}</span>}
    </div>
);

const renderInput = ({input, meta}) => (
    <Input {...input} hi={"text"}  errorMessage={meta.touched && meta.error}/>
);

const renderPasswords = ({input, meta}) => (
    <Input {...input} hi={"password"} errorMessage={meta.touched && meta.error}/>
);


const onSubmit = values => {
    alert(JSON.stringify(values));
}


const validateName = name =>{
    if(!name || name === ''){
        return 'Enter a name';
    }

    return undefined;
}

const userNameFree = async v =>{

    if (!v || v === '') {
        return 'This field is required';
    } else {
    
    var userPas = {user: v};
    var returnValue ="";
    const options  =  {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(userPas),
      }
      await fetch("http://localhost:3001/lookForUser", options)
      .then( response => response.json())
      .then(data => {
        returnValue  = data.indicator;
      });

      if(v === ''){
          return undefined;
      } else if(returnValue === 'found'){
          return 'Username not avaliable'
      }

    }
    
}

const validateEmail = email => {
    
    var validate = /\S+@\S+\.\S+/;
    if(validate.test(email)){
        return "";
    }
    
    return "Invalid email"
    
  };



const FinalForm = () => (
    <Form
        onSubmit={onSubmit}
        render={({handleSubmit, invalid}) => (
            <div className='background flexbox-1'>
                <div className='personalInfo'>
                    <h2 id='head'>Please enter your user infromation</h2>
                    <form className='forms' onSubmit={handleSubmit}>
                        <InputFields Info ={{title: "First Name",id: "inputField=1", type: 0}}/>
                        <RadioBoxes val = {{list:[{name: "Male"},{name: "Female"},{name: "Other"}],title:"Enter your sex" }}/>
                        <RadioBoxes val = {{list:[{name: "18-24"},{name: "25-36"},{name: "37-50"},{name: "50-70"},,{name: "71+"}], title:"Enger your age"}}/>
                        <InputFields Info ={{title: "Email",id: "inputField=2", type: 2}}/>
                        <InputFields Info ={{title: "User name",id: "inputField=3", type: 1}}/>
                        <InputFields Info ={{title: "Enter Password",id: "inputField=4", type: 3}}/>
                        <InputFields Info ={{title: "Enter matching Password",id: "inputField=5", type: 3}}/>
                        <Dist/>
                        <div className='flexbox-1' id='topSpace'>
                        <button type='submit' disabled={invalid}>Submit</button>
                        </div>
                        
                    </form>
                </div>
            </div>
        )}
    />
);
                

const Welcome = () => (

    <div className='flexbox-1 flexDirection'>
        <h2 id='welcomeText'>Create a personal account</h2>
        <FinalForm></FinalForm>
    </div>
);

const Dist = () => (
    <Collapsible id='hello' trigger={dissclamer}>
            <div className='flexbox-1' id='space'>
                <div id='info'>
                    <p className='centerText'>All information collected will never be shared with any 3rd parties. This infromation will be stored on a private encrypted database All infromation is used for the sole perpose of better
                        understanding the demographics of users of this page. If you feel uncomfertable about providing any information feel free to input
                        fake personal info.
                    </p>
                </div>
            </div>
        </Collapsible>
);

const dissclamer = 
            <div className='flexbox-1'>
                <div className='flexbox-1 flexDirection' id='dissclamer'>
                    <h3 className='centerText' id='dis'>**Dissclamer**    &darr;</h3>
                </div>
            </div>

function InputFields(props){

    const inputs = [<div className='formSpace'>
                        <h3 className='centerText'>{props.Info.title}</h3>
                        <Field name= {props.Info.id}  component={renderInput} validate={validateName}/>
                    </div>,
                    <div className='formSpace'>
                        <h3 className='centerText'>{props.Info.title}</h3>
                        <Field name= {props.Info.id}  component={renderInput} validate={userNameFree}/>
                    </div>,
                    <div className='formSpace'>
                    <h3 className='centerText'>{props.Info.title}</h3>
                    <Field name= {props.Info.id} type='email'  component={renderInput} validate={validateEmail}/>
                </div>,
                    <div className='formSpace'>
                    <h3 className='centerText'>{props.Info.title}</h3>
                    <Field name= {props.Info.id} type='hidden'  component={renderPasswords} validate={validateEmail}/>
                </div>
                    ]

    return(
        inputs[props.Info.type]
    )
}

function RadioBoxes(props){
    
    const values = props.val.list;
    
    const listDivs = values.map((values) =>
    <div className='spread'>
        <label>
            <Field
            name="temp"
            component="input"
            type="radio"
            value={values.name}
            
            />
        {' '}
        {values.name}
        </label>
    </div>
    )
    
  
  return <div className='flexbox-1 flexDirection'>
            <h3 className='radioLabel'>{props.val.title}</h3>
            <div className='spread'>
                {listDivs}
            </div> 
         </div>;
};





function Join(){


    return(
        
        <div className='flexbox-1' id='page'>
            
            <div id='background'>
                <Welcome/>
            </div>

        </div>

    );


} export default Join;

