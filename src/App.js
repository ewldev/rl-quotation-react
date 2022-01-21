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
      <form onSubmit={handleSubmit}>
        
        <fieldset disabled={submitting}>
          <label>
            <p>Type of service</p>
            <select name="service" onChange={handleChange} required>
                <option value="" >--Please choose an option--</option>
                <option value="financial statements & tax returns preparation">Financial statements & tax returns preparation</option>
                <option value="incorporation & business accounts registration">Incorporation & business accounts registration</option>
                <option value="personal tax preparation">Personal tax preparation</option>
            </select>
          </label>
          
          <label hidden={formData.service !== 'financial statements & tax returns preparation'}>
            <p>Category</p>
            <select name="category" onChange={handleChange}
             required={formData.service === 'financial statements & tax returns preparation'} >
                <option value="" >--Please choose an option--</option>
                <option value="compilation">Compilation</option>
                <option value="review-engagement">Review Engagement</option>
                <option value="audit-engagement">Audit Engagement</option>
            </select>
          </label>
          
          <label hidden={formData.category !== 'compilation'}>
            <p>Transactions per year</p>
            <select name="compilationTxn" onChange={handleChange} required={formData.category === 'compilation'} >
              <option value="">--Please choose an option--</option>
              <option value="fifty-txn">0-50</option>
              <option value="onefifty-txn">50-150</option>
              <option value="onefiftyplus-txn">150+</option>
            </select>
          </label>  
        </fieldset>

        <fieldset disabled={submitting}>
          <label>
            <p>Email address</p>
            <input type="email" id="email" name="email" placeholder="email@address.com" 
             onChange={handleChange} />
          </label>
        </fieldset>
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