import React, { useReducer, useState } from 'react';
import './App.css';

const formReducer = (state, event) => {
 return {
    ...state,
    [event.name]: event.value,      
  }
}

function App() {
  const [formData, setFormData] = useReducer(formReducer, {});
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = event => {
    event.preventDefault();
    setSubmitting(true);
    calculate();
    // setTimeout(() => {
    //   setSubmitting(false);
    // }, 13000);
  }

  const handleChange = event => {
    setFormData({
      name: event.target.name,
      value: event.target.value
    });
  } 
  
  return(
    <div id="container">
      <button id='button-close1'>close</button>
      <h1>Get an Instant Quotation</h1>
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
          <select name="service" id="service" onChange={handleChange} required>
            <option value="" >--Please choose an option--</option>
            <option value="financial statements & tax returns preparation">Financial statements & tax returns preparation</option>
            <option value="incorporation & business accounts registration">Incorporation & business accounts registration</option>
            <option value="personal tax preparation">Personal tax preparation</option>        
          </select>   
                          
          <div hidden={formData.service !== 'financial statements & tax returns preparation'}>
            <label htmlFor="category" >Category</label> 
            <select name="category" id="category"    
              onChange={handleChange} 
              required={formData.service === 'financial statements & tax returns preparation'}>
              <option value="" >--Please choose an option--</option>
              <option value="compilation">Compilation</option>
              <option value="review-engagement">Review Engagement</option>
              <option value="audit-engagement">Audit Engagement</option>            
            </select>          
          </div>         
          
          <div hidden={formData.category !== 'compilation'}>
            <label htmlFor="compilationTxn">Transactions per year</label> 
            <select name="compilationTxn" id="compilationTxn" 
              onChange={handleChange}
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
            onChange={handleChange}>                       
              <option value="" >Select your option</option>
              <option value="consulting-business1">Consulting business</option>
              <option value="holdings-company1">Holdings company</option>
            </select>
          </div> 
          
          <div hidden={formData.compilationTxn !== 'onefifty-txn'}>
            <label htmlFor="oneFiftyService">Available services (optional)</label>
            <select name="oneFiftyService" id="oneFiftyService"
            onChange={handleChange}>
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
            onChange={handleChange} >
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
          <input type="email" id="email" name="email" placeholder="email@address.com" 
             onChange={handleChange} />         
          
          <button type="submit" disabled={submitting}>Submit</button>

          <label htmlFor="result" hidden={formData.service !== 'financial statements & tax returns preparation'} >Estimated cost of service
            <output name="result" type="text" id="result">
            </output> 
          </label>

          {/* Incorporation & business accounts registration */}
          <div id="div2">
          <p>$800 <br></br>
          business trade name add $100</p>
          </div>

          {/*Personal tax preparation*/}
          <div id="div3">
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

// process quotation value 
function calculate() { 
  const service = document.getElementById('service');
  const compilation = document.getElementById('compilationTxn');
  const reviewEgmt = document.getElementById('reviewTxn');
  const auditEgmt = document.getElementById('auditTxn');
  const fiftyTxn = document.getElementById('fiftyService');
  const oneFiftyTxn = document.getElementById('oneFiftyService');  
  const oneFiftyPlusTxn = document.getElementById('oneFiftyPlusService'); 
  const result = document.getElementById('result');
  
    switch(service.value) {
      case 'incorporation & business accounts registration':
        document.getElementById('div2').style.display = 'block';     
        result.value = '$800 - business trade name add $100';
        result.style.display = 'none'; 
        break;
      case 'personal tax preparation':
        document.getElementById('div3').style.display = 'block'; 
        result.value = `<p>standard $150 <br>
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
    switch(reviewEgmt.value) {
      case '10':
        result.value = '$5500-$7500';
        break;
      default:
        break;  
    }
    switch(auditEgmt.value) {
      case '11':
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