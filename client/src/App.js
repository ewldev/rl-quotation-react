import React, { useReducer } from 'react';
import Form from './components/Form';
import { resetCategory, resetTransactions, resetServiceValues, resetResultValue } from './services/resetService'
import setResult from './services/setResultService'
import './App.css';

const formReducer = (state, event) => {  
  console.log('reducer state, event', state, event)
  return {
      ...state,
      [event.name]: event.value,      
    }
} 
  
function App() {
  const [formData, setFormData] = useReducer(formReducer, {});
  // const [submitting, setSubmitting] = useState(false);
  
  console.log('App formData',formData)   
 
  const handleSubmit = (event) => {
    console.log('handleSubmit formData.result',formData.result) 
    event.preventDefault();
    setResult(formData, setFormData); // process quotation value 
   
  // access sendgrid api
  fetch('http://localhost:8080/sendmail',{
  //  fetch('https://rl-quotation-react.herokuapp.com/sendmail',{
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
          email: formData.email
         })  
      })      
      .then(response => response.json())    
      .catch(err => console.log(err))      
  
  // setSubmitting(true); 
  }        
    
  const handleChange1 = event =>  {
    const service2 = document.getElementById('service2');
    const service3 = document.getElementById('service3');
    const result = document.getElementById('result');
    service2.style.display = 'none';
    service3.style.display = 'none';
    result.style.display = 'inline';      
    resetCategory(formData);  
    resetTransactions(formData);
    resetServiceValues(formData);
    resetResultValue(formData); 
    setFormData({
      name: event.target.name,
      value: event.target.value,      
    });     
  }  

  const handleChange2 = event =>  {
    resetTransactions(formData);
    resetServiceValues(formData);
    resetResultValue(formData);
    setFormData({
      name: event.target.name,
      value: event.target.value
    });    
  } 

  const handleChange3 = event =>  {
    resetServiceValues(formData); 
    resetResultValue(formData);   
    setFormData({      
      name: event.target.name,
      value: event.target.value,
    });      
  } 

  const handleChange4 = event =>  {
    console.log('handleChange4 event1',event.target.name, event.target.value)   
    resetResultValue(formData);
    setFormData({
      name: event.target.name,
      value: event.target.value
    });  
  }

  const emailInput = event => {
    setFormData({
      name: event.target.name,
      value: event.target.value
    });  
  }  
  
  return(
    <Form 
      handleChange1={handleChange1}
      handleChange2={handleChange2}
      handleChange3={handleChange3}
      handleChange4={handleChange4}
      emailInput={emailInput}
      onSubmit={handleSubmit} 
      formData={formData}/>
  );
};  

export default App;
