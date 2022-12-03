export const resetCategory = (formData) => {
    const category = document.getElementById('category');
    category.value = '';
    formData.category = '';
}

export const resetTransactions = (formData) => {
    const compilation = document.getElementById('compilationTxn');
    compilation.value = '';
    formData.compilationTxn = '';
}

export const resetServiceValues = (formData) => {
    const fiftyTxn = document.getElementById('fiftyService');
    const oneFiftyTxn = document.getElementById('oneFiftyService');  
    const oneFiftyPlusTxn = document.getElementById('oneFiftyPlusService');   
    fiftyTxn.value = '';
    oneFiftyTxn.value = ''; 
    oneFiftyPlusTxn.value = '';   
    formData.fiftyService = '';
    formData.oneFiftyService = ''; 
    formData.oneFiftyPlusService = '';     
}

export const resetResultValue = (formData) => { 
    formData.result = '';
}

const resetService = { resetCategory, resetTransactions, resetServiceValues, resetResultValue }
export default resetService