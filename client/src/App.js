import React, { useReducer, useState } from 'react';
// import React, { useReducer } from 'react';
import './App.css';

const formReducer = (state, event) => {  
  const oneFiftyPlusTxn = document.getElementById('oneFiftyPlusService'); 
  console.log('formReducer oneFiftyPlusTxn.value',oneFiftyPlusTxn.value);
    return {
      ...state,
      [event.name]: event.value,      
    }
} 
  
function App() {
  const [formData, setFormData] = useReducer(formReducer, {});
  const [submitting, setSubmitting] = useState(false);
  console.log('formData',formData)
  const handleSubmit = event => {
    const oneFiftyPlusTxn = document.getElementById('oneFiftyPlusService'); 
    event.preventDefault();
    calculate(); 
    setSubmitting(true);      
    console.log('handleSubmit oneFiftyPlusTxn.value',oneFiftyPlusTxn.value)
  }

  const handleChange1 = event =>  {
    const service2 = document.getElementById('service2');
    const service3 = document.getElementById('service3');
    const result = document.getElementById('result');
    resetResultValue();
    service2.style.display = 'none';
    service3.style.display = 'none';
    result.style.display = 'inline';  
    setFormData({
      name: event.target.name,
      value: event.target.value,      
    });   
  } 

  const handleChange2 = event =>  {
    resetResultValue();
    setFormData({
      name: event.target.name,
      value: event.target.value
    });        
  } 

  const handleChange3 = (event) =>  {
    console.log('formData.oneFiftyPlusService1',formData.oneFiftyPlusService) 
    resetServiceValues(); 
    resetResultValue();    
    setFormData({      
      name: event.target.name,
      value: event.target.value,
    });    
    console.log('formData.oneFiftyPlusService2',formData.oneFiftyPlusService)  
  } 

  const handleChange4 = event =>  {
    resetResultValue();
    setFormData({
      name: event.target.name,
      value: event.target.value
    });    
  } 

function resetResultValue() { 
  const result = document.getElementById('result');
  console.log('resetResultValue1',result.value);
  result.value = '';  
 
  console.log('resetResultValue2',result.value)
}

function resetServiceValues() {
  const fiftyTxn = document.getElementById('fiftyService');
const oneFiftyTxn = document.getElementById('oneFiftyService');  
const oneFiftyPlusTxn = document.getElementById('oneFiftyPlusService');
  fiftyTxn.value = '';
  oneFiftyTxn.value = ''; 
  oneFiftyPlusTxn.value = ''; 
  formData.fiftyService = '';
  formData.oneFiftyService = ''; 
  formData.oneFiftyPlusService='';   
}

// process quotation value 
function calculate() { 
  // const service = document.getElementById('service');
  const category = document.getElementById('category')
  const compilation = document.getElementById('compilationTxn');
  const fiftyTxn = document.getElementById('fiftyService');
  const oneFiftyTxn = document.getElementById('oneFiftyService');  
  const oneFiftyPlusTxn = document.getElementById('oneFiftyPlusService'); 
  const result = document.getElementById('result');
  
    switch(formData.service) {
      case 'incorporation & business accounts registration':
        document.getElementById('service2').style.display = 'block';               
        formData.result = '$800 - business trade name add $100';
        result.style.display = 'none'; 
        break;
      case 'personal tax preparation':
        document.getElementById('service3').style.display = 'block'; 
        formData.result = `<p>standard $150 <br>
        capital gain/loss add $100 <br>
        self-employed business add $250 <br>
        foreign property declaration add $150            
      </p>`
        result.style.display = 'none'; 
        break;
      default:
        break;  
    }
    switch(compilation.value) {
      case 'fifty-txn':
        result.value = '$1500-$1800';
        break;
      case 'onefifty-txn':
        result.value = '$1800-$2500';
        break;
      case 'onefiftyplus-txn':
        result.value  = '$2500-$3500'; 
        break;
      default:
         break;  
    }
    switch(category.value) {
      case 'review-engagement':
        result.value = '$5500-$7500';
        break;
      case 'audit-engagement':
        result.value = '$9000-$12000';  
        break;
      default:
        break;  
    }
    switch(fiftyTxn.value) {      
      case 'consulting-business1':
        result.value  = '$1500';  
        break;
      case 'holdings-company1':
        result.value = '$1700'; 
        break;
      default:
        break;   
    }    
    switch(oneFiftyTxn.value) {
      case 'consulting-business2':
        result.value = '$1800';
        break;
      case 'holdings-company2':
        result.value = '$2000';
        break;
      case 'trading-retail2':
        result.value = '$2500';
        break;
      case 'mortgage-insurance-broker2':
        result.value = '$1800';
        break;
      case 'home-renovation-contractor2':
        result.value = '$2300';
        break;
      case 'medical-professional-corporation2':
        result.value = '$2500';
        break;
      default:
        break;  
    }  
    switch(oneFiftyPlusTxn.value) {
      case 'consulting-business3':
        result.value = '$2500';
        break;
      case 'holdings-company3':
        result.value = '$2700';
        break;
      case 'trading-retail3':
        result.value = '$3200'; 
        break;
      case 'manufacturing3':
        result.value = '$3500';
        break;
      case 'restaurant3':
        result.value = '$3500';
        break;  
      case 'mortgage-insurance-broker3':        
        result.value = '$2500';
        break;
      case 'home-renovation-contractor3':
        result.value = '$3000';
        break;
      case 'medical-professional-corporation3':
        result.value = '$3500';
        break;
      default:
        break;    
    }    
  }  


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
      {submitting &&
        <div>
          You are submitting the following:
          <ul>
            {Object.entries(formData).map(([name, value]) => (
              <li key={name}><strong>{name}</strong>: {value.toString()}</li>
            ))}
          </ul>
        </div>
      }
      <form id="form" onSubmit={handleSubmit}>
        
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
          <input type="email" id="email" name="email" placeholder="email@address.com" />         
          
          <button type="submit" >Submit</button>

          <label htmlFor="result">Estimated cost of service</label>
          <output name="result" type="text" id="result"></output> 
          
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
  )
}


// close buttons
window.onload = function(){
  document.getElementById('button-close1').onclick = function(){
      /* this.parentNode.parentNode.parentNode
       .removeChild(this.parentNode.parentNode);
       return false;*/
    document.getElementById('container').style.display = 'none'; 
  };
  document.getElementById('button-close2').onclick = function(){
    // this.parentNode.parentNode.parentNode
    // .removeChild(this.parentNode.parentNode);
    // return false;
    document.getElementById('container').style.display = 'none';  
  };
};


export default App;  