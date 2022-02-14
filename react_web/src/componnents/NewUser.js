import '../css/general.css';
import '../css/NewUser.scss'
import React from 'react';
import {Form, Field} from 'react-final-form';
import Collapsible from 'react-collapsible';


var acceptable = false;

const Input = ({errorMessage, ...props}) => (
    <div className='input-text flexbox-1 flexDirection'>
        <input {...props} className='inputBox'/>
        {errorMessage && <span className='errorMessage'>{errorMessage}</span>}
    </div>
);

const renderInput = ({input, meta}) => (
    <Input {...input} type="text" errorMessage={meta.touched && meta.error}/>
);


const onSubmit = values => {
    alert(JSON.stringify(values));
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

const allowedNames = v => {
    if (v === 'forbidden name') {
        return '"forbidden name" is not a valid customer id';
    }
    
    return undefined;
};

const required = v => {
    if (!v || v === '') {
        return 'This field is required';
    }
};



const FinalForm = () => (
    <Form
        onSubmit={onSubmit}
        render={({handleSubmit, invalid}) => (
            <div className='background flexbox-1'>
                <div className='personalInfo'>
                    <h2>Final Form</h2>
                    <form className='forms' onSubmit={handleSubmit}>
                        <InputFields Info ={{title: "Password",id: "customer=1", type: 0}}/>
                        <InputFields Info ={{title: "Password",id: "customer=1", type: 1}}/>
                        <InputFields Info ={{title: "Password",id: "customer=1", type: 2}}/>
                        
                        <button type='submit' disabled={invalid}>Submit</button>
                    </form>
                </div>
            </div>
        )}
    />
);

const dissclamer = 
            <div className='flexbox-1'>
                <div className='flexbox-1 flexDirection' id='dissclamer'>
                    <h3 className='centerText' id='dis'>**Dissclamer**    &darr;</h3>
                </div>
            </div>
                


const Welcome = () => (

    <div className='flexbox-1 flexDirection'>
        <h2 id='welcomeText'>Create a personal account</h2>
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
        <FinalForm></FinalForm>
        
    </div>

);

function InputFields(props){

    const inputs = [<div className='formSpace'>
                    <h3>{props.Info.info}</h3>
                    <Field name= {props.Info.id}  component={renderInput} validate={userNameFree}/>
                    </div>, <div className='formSpace'>
            <h3>{props.Info.info}</h3>
            <div className='flexbox-1'>
            <label>
                <Field
                  name="stooge"
                  component="input"
                  type="radio"
                  value="Male"
                />{' '}
                Male
              </label>
              <label>
                <Field
                  name="stooge"
                  component="input"
                  type="radio"
                  value="Female"
                />{' '}
                Female
              </label>
              <label>
                <Field
                  name="stooge"
                  component="input"
                  type="radio"
                  value="Other"
                />{' '}
                Other
              </label>
            </div>
        
           
        </div>,0]

    return(
        inputs[props.Info.type]
    )
}



function Join(){


    return(
        
        <div className='flexbox-1' id='page'>
            
            <div id='background'>
                <Welcome/>
            </div>

        </div>

    );


} export default Join;