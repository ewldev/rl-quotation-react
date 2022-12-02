// import React, { useReducer } from 'react';
// import { resetCategory, resetTransactions, resetServiceValues, resetResultValue } from '../services/resetService'
// import setResult from '../services/setResultService';
// import {formReducer} from '../reducer';

import '../App.css';

// const formReducer = (state, event) => {  
//     console.log('reducer state, event', state, event)
//     return {
//         ...state,
//         [event.name]: event.value,      
//       }
//   } 

const Form = ({handleChange1, handleChange2, handleChange3, handleChange4, emailInput, onSubmit, formData, setFormData}) => {
    // console.log('onSubmit',...onSubmit)
    console.log('onSubmit',onSubmit)
    console.log('formData',formData)
    console.log('setFormData',setFormData)
    // console.log('formData',formData)
    // console.log('fsetFormData',setFormData)
    // const [formData, setFormData] = useReducer(formReducer, {});

    // const handleSubmit = (event) => {
    //     console.log('handleSubmit formData.result',formData.result) 
    //     event.preventDefault();
    //     setResult(formData, setFormData); // process quotation value 
    // }    
        // const handleChange1 = event =>  {

        //     console.log('app handleChange1 event',event)
        //     console.log('app handleChange1 setFormData',event.setFormData)        
        
        //     const service2 = document.getElementById('service2');
        //     const service3 = document.getElementById('service3');
        //     const result = document.getElementById('result');
        //     service2.style.display = 'none';
        //     service3.style.display = 'none';
        //     result.style.display = 'inline';      
        //     resetCategory(event.formData);  
        //     resetTransactions(event.formData);
        //     resetServiceValues(event.formData);
        //     resetResultValue(event.formData); 
        //     event.setFormData({
        //       name: event.target.name,
        //       value: event.target.value,      
        //     });     
        //   }  
        
        //   const handleChange2 = event =>  {
        //     resetTransactions(event.formData);
        //     resetServiceValues(event.formData);
        //     resetResultValue(event.formData);
        //     event.setFormData({
        //       name: event.target.name,
        //       value: event.target.value
        //     });    
        //   } 
        
        //   const handleChange3 = event =>  {
        //     resetServiceValues(event.formData); 
        //     resetResultValue(event.formData);   
        //     event.setFormData({      
        //       name: event.target.name,
        //       value: event.target.value,
        //     });      
        //   } 
        
        //   const handleChange4 = event =>  {
        //     console.log('handleChange4 event1',event.target.name, event.target.value)   
        //     resetResultValue(event.formData);
        //     event.setFormData({
        //       name: event.target.name,
        //       value: event.target.value
        //     });  
        //   }
        
        //   const emailInput = event => {
        //     event.setFormData({
        //       name: event.target.name,
        //       value: event.target.value
        //     });  
        //   }      

return(
    <div id="container">
      <button id='button-close1'>close</button>
      <h1>Get an Instant Quotation</h1>
    {/*  {submitting &&
        <div>
          You are submitting the following:
          <ul>
            {Object.entries(formData).map(([name, value]) => (
              <li key={name}><strong>{name}</strong>: {value.toString()}</li>
            ))}
          </ul>
        </div>
      } */}        
      <form id="form" onSubmit={onSubmit}>
        
          <label htmlFor="service">Type of service</label>                
          <select name="service" id="service"
            onChange={handleChange1} required>
            <option value="" >--Please choose an option--</option>
            <option value="financial statements & tax returns preparation">Financial statements & tax returns preparation</option>
            <option value="incorporation & business accounts registration">Incorporation & business accounts registration</option>
            <option value="personal tax preparation">Personal tax preparation</option>        
          </select>   
        
    <label htmlFor='category' hidden={formData.service !== 'financial statements & tax returns preparation'}>Category </label>  
    <select name="category" id="category"  
      onChange={handleChange2} 
      hidden={formData.service !== 'financial statements & tax returns preparation'}      
      required={formData.service === 'financial statements & tax returns preparation'} >      
      <option value="" >--Please choose an option--</option>
      <option value="compilation">Compilation</option>
      <option value="review-engagement">Review Engagement</option>
      <option value="audit-engagement">Audit Engagement</option>            
    </select>           

          <div hidden={formData.category !== 'compilation'}>
            <label htmlFor="compilationTxn">Transactions per year</label> 
            <select name="compilationTxn" id="compilationTxn" 
              onChange={handleChange3}
              required={formData.category === 'compilation'} >             
              <option value="">--Please choose an option--</option>
              <option value="fifty-txn">0-50</option>
              <option value="onefifty-txn">50-150</option>
              <option value="onefiftyplus-txn">150+</option>
            </select>           
          </div>   

          <div hidden={formData.category !== 'review-engagement'}>
            <label htmlFor="reviewTxn">Transactions per year</label>
            <select name="reviewTxn" id="reviewTxn">
              <option value="">150+</option>                                        
            </select>
          </div>

          <div hidden={formData.category !== 'audit-engagement'}>
            <label htmlFor="auditTxn">Transactions per year</label>
            <select name="auditTxn" id="auditTxn">            
              <option value="">150+</option>              
            </select>
          </div>
        
          <div hidden={formData.compilationTxn !== 'fifty-txn'}>
            <label htmlFor="fiftyService">Available services (optional)</label>
            <select name="fiftyService" id="fiftyService"
            onChange={handleChange4} >                       
              <option value="" >Select your option</option>
              <option value="consulting-business1">Consulting business</option>
              <option value="holdings-company1">Holdings company</option>
            </select>
          </div> 
          
          <div hidden={formData.compilationTxn !== 'onefifty-txn'}>
            <label htmlFor="oneFiftyService">Available services (optional)</label>
            <select name="oneFiftyService" id="oneFiftyService"
            onChange={handleChange4} >
              <option value="" >Select your option</option>
              <option value="consulting-business2">Consulting business</option>
              <option value="holdings-company2">Holdings company</option>
              <option value="trading-retail2">Trading / Retail</option>
              <option value="mortgage-insurance-broker2">Mortgage insurance broker</option>
              <option value="home-renovation-contractor2">Home renovation contractor</option>
              <option value="medical-professional-corporation2">Medical professional corporation</option>
            </select>
          </div>  

          <div hidden={formData.compilationTxn !== 'onefiftyplus-txn'}>          
            <label htmlFor="oneFiftyPlusService">Available services (optional)</label>
            <select name="oneFiftyPlusService" id="oneFiftyPlusService"
            onChange={handleChange4}>
              <option value="" >Select your option</option>
              <option value="consulting-business3">Consulting business</option>
              <option value="holdings-company3">Holdings company</option>
              <option value="trading-retail3">Trading / Retail</option>
              <option value="manufacturing3">Manufacturing</option>
              <option value="restaurant3">Restaurant</option>
              <option value="mortgage-insurance-broker3">Mortgage insurance broker</option>
              <option value="home-renovation-contractor3">Home renovation contractor</option>
              <option value="medical-professional-corporation3">Medical professional corporation</option>
            </select>
          </div>           

          <label htmlFor="email">Email address</label>
          <input type="email" id="email" name="email" placeholder="email@address.com" onInput={emailInput}/>         
          
          <button type="submit" >Submit</button>

          <label htmlFor="result">Estimated cost of service</label>
          <output name="result" id="result">  
          {formData.result}
          </output>          
          
          {/* Incorporation & business accounts registration */}
          <div id="service2">
          <p>$800 <br></br>
          business trade name add $100</p>
          </div>

          {/*Personal tax preparation*/}
          <div id="service3">
          <p>standard $150 <br></br>
            capital gain/loss add $100  <br></br>
            self-employed business add $250 <br></br>
            foreign property declaration add $150 </p>    
          </div> 
      
      </form>      

      <button id='button-close2'>back to our site</button>

    </div>
  );
};

export default Form;
