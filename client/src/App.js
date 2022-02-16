import React, { useReducer, useState } from 'react';
import './App.css';

const formReducer = (state, event) => {  
  console.log('state, event', state, event)
  return {
      ...state,
      [event.name]: event.value,      
    }
} 
  
function App() {
  const [formData, setFormData] = useReducer(formReducer, {});
  const [submitting, setSubmitting] = useState(false);
  
  console.log('formData1',formData)

  
 
  const handleSubmit = (event) => {
    console.log('handleSubmit formData.result',formData.result) 
    event.preventDefault();
    calculate(formData);
   
  // access sendgrid api
  // fetch('https://rl-quotation.herokuapp.com/sendmail',{
   fetch('http://localhost:8080/sendmail',{
        method: 'post',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
          service: formData.service,
          category: formData.category,
          compilationTxn: formData.compilationTxn,
          fiftyService: formData.fiftyService,
          oneFiftyService: formData.oneFiftyService,
          oneFiftyPlusService: formData.oneFiftyPlusService,
          result: formData.result,
          // email: email.value
         })  
      })      
      .then(response => response.json())    
      .catch(err => console.log(err))      
   
  setSubmitting(true); 
  submitting && console.log('formData2',formData) 
     
  }        
          
  

  const handleChange1 = event =>  {
    const service2 = document.getElementById('service2');
    const service3 = document.getElementById('service3');
    const result = document.getElementById('result');
    service2.style.display = 'none';
    service3.style.display = 'none';
    result.style.display = 'inline';      
    resetCategory();  
    resetTransactions();
    resetServiceValues();
    resetResultValue(); 
    setFormData({
      name: event.target.name,
      value: event.target.value,      
    }); 
    
  }  

  const handleChange2 = event =>  {
    resetTransactions();
    resetServiceValues();
    resetResultValue();
    setFormData({
      name: event.target.name,
      value: event.target.value
    });    
  } 

  const handleChange3 = event =>  {
    resetServiceValues(); 
    resetResultValue();   
    setFormData({      
      name: event.target.name,
      value: event.target.value,
    });      
  } 

  const handleChange4 = event =>  {
    resetResultValue();
    setFormData({
      name: event.target.name,
      value: event.target.value
    });  
    
  } 

  function resetCategory() {
    // const category = document.getElementById('category');
    // category.value = '';
    formData.category = '';
  }

  function resetTransactions() {
    formData.compilationTxn = '';
    // formData.reviewTxn = '';
    // formData.auditTxn = '';  
  }

  function resetServiceValues() {
    formData.fiftyService = '';
    formData.oneFiftyService = ''; 
    formData.oneFiftyPlusService = '';     
  }

  function resetResultValue() { 
    console.log('resetResultValue2',formData.result);    
    formData.result = '';
    console.log('resetResultValue2',formData.result);
  }

// process quotation value 
function calculate(formData) { 
  const result = document.getElementById('result');
 
    switch(formData.service) {
      case 'incorporation & business accounts registration':
        document.getElementById('service2').style.display = 'block'; 
        setFormData({
          name: 'result',
          value: '$800 - business trade name add $100'
        });                      
        result.style.display = 'none'; 
        break;
      case 'personal tax preparation':
        document.getElementById('service3').style.display = 'block'; 
        setFormData({
          name: 'result',
          value: 'standard $150 - capital gain/loss add $100 - self-employed business add $250 - foreign property declaration add $150'
        });        
        result.style.display = 'none'; 
        break;
      default:
        break;  
    }
    switch(formData.compilationTxn) {
      case 'fifty-txn':
        setFormData({
          name: 'result',
          value: '$1500-$1800'
        });        
        break;
      case 'onefifty-txn':
        setFormData({
          name: 'result',
          value: '$1800-$2500'
        });  
        break;
      case 'onefiftyplus-txn':
        setFormData({
          name: 'result',
          value: '$2500-$3500'
        });  
        break;
      default:
        break;
    }
    switch(formData.category) {
      case 'review-engagement':
        setFormData({
          name: 'result',
          value: '$5500-$7500'
        });  
        break;
      case 'audit-engagement':
        setFormData({
          name: 'result',
          value: '$9000-$12000'
        });  
        break;
      default:
        break;  
    }
    switch(formData.fiftyService) {      
      case 'consulting-business1':
        setFormData({
          name: 'result',
          value: '$1500'
        });  
        break;
      case 'holdings-company1':
        setFormData({
          name: 'result',
          value: '$1700'
        });  
        break;
      default:
        break;   
    }    
    switch(formData.oneFiftyService) {
      case 'consulting-business2':
        setFormData({
          name: 'result',
          value: '$1800'
        });  
        break;
      case 'holdings-company2':
        setFormData({
          name: 'result',
          value: '$2000'
        });  
        break;
      case 'trading-retail2':
        setFormData({
          name: 'result',
          value: '$2500'
        });  
        break;
      case 'mortgage-insurance-broker2':
        setFormData({
          name: 'result',
          value: '$1800'
        });  
        break;
      case 'home-renovation-contractor2':
        setFormData({
          name: 'result',
          value: '$2300'
        });  
        break;
      case 'medical-professional-corporation2':
        setFormData({
          name: 'result',
          value: '$2500'
        });  
        break;
      default:
        break;  
    }  
    switch(formData.oneFiftyPlusService) {
      case 'consulting-business3':
        setFormData({
          name: 'result',
          value: '$2500'
        });   
        break;
      case 'holdings-company3':
        setFormData({
          name: 'result',
          value: '$2700'
        });   
        break;
      case 'trading-retail3':
        setFormData({
          name: 'result',
          value: '$3200'
        });   
        break;
      case 'manufacturing3':
        setFormData({
          name: 'result',
          value: '$3500'
        });   
        break;
      case 'restaurant3':
        setFormData({
          name: 'result',
          value: '$3500'
        });   
        break;  
      case 'mortgage-insurance-broker3':  
        setFormData({
          name: 'result',
          value: '$2500'
        });         
        break;
      case 'home-renovation-contractor3':
        setFormData({
          name: 'result',
          value: '$3000'
        });         
        break;
      case 'medical-professional-corporation3':
        setFormData({
          name: 'result',
          value: '$3500'
        });             
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