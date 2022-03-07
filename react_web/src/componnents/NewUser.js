import '../css/general.css';
import '../css/NewUser.scss'
import React from 'react';
import {Form, Field} from 'react-final-form';
import Collapsible from 'react-collapsible';
import {useSelector, useDispatch} from 'react-redux';
import {passWord} from '../action';

var age = false;
var varriablePassword = '';
var timeouts = [];
var listOfPasReq = ['centerText redColor notVisable','centerText redColor notVisable','centerText redColor notVisable','centerText redColor notVisable','centerText redColor notVisable'];

const Input = ({errorMessage, ...props}) => (
    
    <div className='input-text flexbox-1 flexDirection'>
        <input {...props} type={props.typ} className='inputBox'/>
        {errorMessage && <span className='errorMessage'>{errorMessage}</span>}
    </div>
);

const renderInput = ({input, meta}) => (
    <Input {...input} typ={"text"}  errorMessage={meta.touched && meta.error}/>
);

const renderPasswords = ({input, meta}) => (
    <Input {...input} typ={"password"} errorMessage={meta.touched && meta.error}/>
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

const validateRadio = sex =>{
    if(!sex){
        return 1;
    }
}

const validateFirstPas = firstPassword =>{
    var divHolder = <div></div>
    varriablePassword = firstPassword;
    
    

    return undefined
}




const validateSecondPas = secondPassword =>{
    if( !(secondPassword  === varriablePassword)){
        return "Passwords don't match";
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



function FinalForm(props){ 
    
    return(
    <Form
        onSubmit={onSubmit}
        render={({handleSubmit, invalid}) => (
            <div className='background flexbox-1'>
                <div className='personalInfo'>
                    <h2 id='head'>Please enter your user infromation</h2>
                    <form className='forms' onSubmit={handleSubmit}>
                        <InputFields Info ={{title: "First Name",id: "inputField1", type: 0}}/>
                        <RadioBoxes val = {{ catgory:"sex", list:[{name: "Male"},{name: "Female"},{name: "Other"}],title:"Enter your sex" }}/>
                        <RadioBoxes val = {{catgory:"age", list:[{name: "18-24"},{name: "25-36"},{name: "37-50"},{name: "50-70"},,{name: "71+"}], title:"Enger your age"}}/>
                        <InputFields Info ={{title: "Email",id: "inputField2", type: 2}}/>
                        <InputFields Info ={{title: "User name",id: "inputField3", type: 1}}/>
                        <InputFields Info ={{title: "Enter Password",id: "inputField4", type: 3}}/>
                        <CorrectPas pas={varriablePassword}/>
                        {temp()};
                        <InputFields Info ={{title: "Enter matching Password",id: "inputField5", type: 4}}/>
                        <Dist/>
                        <div className='flexbox-1' id='topSpace'>
                        <button type='submit' disabled={invalid}>Submit</button>
                        </div>
                        
                    </form>
                </div>
            </div>
        )}
    /> );
        };
                

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

function CorrectPas(props) {
    
    
    if(props.pas !== undefined){

        var lowercase = /[a-z]/g;
        var uppercase = /[A-Z]/g;
        var number = /[0-9]/g;
        var non = /[^a-zA-Z\d\s:]/g;
        if(props.pas.length > 8){
            
            listOfPasReq[0] = 'centerText greenColor notVisable'
        } else{
            listOfPasReq[0] = 'centerText redColor notVisable'
        }

        if(lowercase.test(props.pas)){
            listOfPasReq[1] = 'centerText greenColor notVisable'
        } else{
            listOfPasReq[1] = 'centerText redColor notVisable'
        }

        if(uppercase.test(props.pas)){
            
            listOfPasReq[2] = 'centerText greenColor notVisable'
        } else{
            listOfPasReq[2] = 'centerText redColor notVisable'
        }

        if(number.test(props.pas)){
            listOfPasReq[3] = 'centerText greenColor notVisable'
        } else{
            listOfPasReq[3] = 'centerText redColor notVisable'
        }

        if(non.test(props.pas)){
            listOfPasReq[4] = 'centerText greenColor notVisable'
        } else{
            listOfPasReq[4] = 'centerText redColor notVisable'
        }

        
        
        return <div className='flexbox-1'>

         <div id='pasBackground'>
             <h4 className={listOfPasReq[0]} id="0" >Password must be longer than 8 charicters</h4>
             <h4 className={listOfPasReq[1]} id="1">Password contain at least one lowercase letter</h4>
             <h4 className={listOfPasReq[2]} id="2">Password contain at least one uppercase letter</h4>
             <h4 className={listOfPasReq[3]} id="3">Password contain at least one numerical charicter</h4>
             <h4 className={listOfPasReq[4]} id="4">Password contain at least atleast one of the following !@#$%^&*()</h4>
             </div> 
             </div>
    }

    return <div></div>;
}


function temp(){
    
    if(varriablePassword !== undefined && varriablePassword.length > 0){
        
        for(let i = 0; i < 5; i++){
        timeouts.push(setTimeout(() => {  try{ document.getElementById(String(i)).classList.add("materilize");} catch(error){}; }, 300 + (i * 400)));
        }
    } else{
        for (var i=0; i<timeouts.length; i++) {
            clearTimeout(timeouts[i]);
          }
        timeouts = [];
    }
}


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
                    <Field name={props.Info.id} type='hidden'  component={renderPasswords} validate={validateFirstPas}/>
                </div>,
                    <div className='formSpace'>
                    <h3 className='centerText'>{props.Info.title}</h3>
                    <Field name={props.Info.id} type='hidden'  component={renderPasswords} validate={validateSecondPas}/>
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
            name={props.val.catgory}
            component="input"
            type="radio"
            value={values.name}
            validate={validateRadio}
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

