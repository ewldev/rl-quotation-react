import {resetCategory,
        resetTransactions,
        resetServiceValues,
        resetResultValue } from './resetService';

export const handleFormChange1 = (event, setFormData) =>  {
    console.log('event, setFormData',event, setFormData)
    
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

export const handleFormChange2 = (event, setFormData) =>  {
    resetTransactions();
    resetServiceValues();
    resetResultValue();
    setFormData({
      name: event.target.name,
      value: event.target.value
    });    
  } 

export const handleFormChange3 = (event, setFormData) =>  {
    resetServiceValues(); 
    resetResultValue();   
    setFormData({      
      name: event.target.name,
      value: event.target.value,
    });      
  } 

export const handleFormChange4 = (event, setFormData) =>  {
    console.log('handleChange4 event1',event.target.name, event.target.value)   
    resetResultValue();
    setFormData({
      name: event.target.name,
      value: event.target.value
    });  
  }

const formService = { handleFormChange1, handleFormChange2, handleFormChange3, handleFormChange4 }
export default formService; 