import React, { useReducer, useState } from 'react';
import './App.css';

const formReducer = (state, event) => {
 return {
    ...state,
    [event.name]: event.value
  }
}

function App() {
  const [formData, setFormData] = useReducer(formReducer, {
  });
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = event => {
    event.preventDefault();
    setSubmitting(true);

    setTimeout(() => {
      setSubmitting(false);
    }, 3000);
  }

  const handleChange = event => {
    const isCheckbox = event.target.type === 'checkbox';
    setFormData({
      name: event.target.name,
      value: isCheckbox ? event.target.checked : event.target.value,
    });
  }

  return(
    <div className="wrapper">
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
                <option value="">--Please choose an option--</option>
                <option value="financial statements & tax returns preparation">Financial statements & tax returns preparation</option>
                <option value="incorporation & business accounts registration">Incorporation & business accounts registration</option>
                <option value="personal tax preparation">Personal tax preparation</option>
            </select>
          </label>
          
          <label hidden={formData.service !== 'financial statements & tax returns preparation'}>
            <p>Category</p>
            <select name="category" onChange={handleChange} >
                <option value="">--Please choose an option--</option>
                <option value="compilation">Compilation</option>
                <option value="review-engagement">Review Engagement</option>
                <option value="audit-engagement">Audit Engagement</option>
            </select>
          </label>
          
          <label hidden={formData.category !== 'compilation'}>
            <p>Transactions per year</p>
            <select name="compilationTxn" onChange={handleChange} >
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
            <input type="email" id="email" name="email" placeholder="email@address.com" required
             onChange={handleChange} />
          </label>
        </fieldset>
        <button type="submit" disabled={submitting}>Submit</button>
      </form>
    </div>
  )
}

export default App;  