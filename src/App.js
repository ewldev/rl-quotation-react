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

    setTimeout(() => {
      setSubmitting(false);
    }, 3000);
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
            <label for="compilationTxn">Transactions per year</label> 
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
            <label for="reviewTxn">Transactions per year</label>
            <select name="reviewTxn" id="reviewTxn"
            onChange={handleChange}
            required={formData.category === 'review-engagement'}>
              <option value="" disabled selected >Select your option</option>
              <option value="10">150+</option>                      
            </select>
          </div>
        
          <label>
            <p>Email address</p>
          </label>  
            <input type="email" id="email" name="email" placeholder="email@address.com" 
             onChange={handleChange} />
          
        
        <button type="submit" disabled={submitting}>Submit</button>
      </form>

      <button id='button-close2'>back to our site</button>

    </div>
  )
}

// close buttons
window.onload = function(){
  document.getElementById('button-close1').onclick = function(){
      // this.parentNode.parentNode.parentNode
      // .removeChild(this.parentNode.parentNode);
      // return false;
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