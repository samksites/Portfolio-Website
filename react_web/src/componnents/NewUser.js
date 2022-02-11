import '../css/general.css';
import '../css/NewUser.scss'
import React from 'react';
import {Form, Field} from 'react-final-form';
import Collapsible from 'react-collapsible';

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

const required = v => {
    if (!v || v === '') {
        return 'This field is required';
    }
    return undefined;
};

const allowedNames = v => {
    if (v === 'forbidden name') {
        return '"forbidden name" is not a valid customer id';
    }
    
    return undefined;
};

const FinalForm = () => (
    <Form
        onSubmit={onSubmit}
        render={({handleSubmit, invalid}) => (
            <div className='background flexbox-1'>
                <div className='personalInfo'>
                    <h2>Final Form</h2>
                    <form className='forms' onSubmit={handleSubmit}>
                        <Field name= "customer=1"  component={renderInput} validate={required}/>
                        <Field name= "customer=2"  component={renderInput} validate={required}/>
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





function Join(){


    return(
        
        <div className='flexbox-1' id='page'>
            
            <div id='background'>
                <Welcome/>
            </div>

        </div>

    );


} export default Join;