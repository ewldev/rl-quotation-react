export default function setResult(formData, setFormData) { 

  const result = document.getElementById('result'); 
      switch(formData.service) {
        case 'incorporation & business accounts registration':
          document.getElementById('service2').style.display = 'block'; 
          setFormData({
            name: 'result',
            value: '$800 - business trade name add $100'
          });       
          formData.result = '$800 - business trade name add $100';
          result.style.display = 'none'; 
          break;
        case 'personal tax preparation':
          document.getElementById('service3').style.display = 'block'; 
          setFormData({
            name: 'result',
            value: 'standard $150 - capital gain/loss add $100 - self-employed business add $250 - foreign property declaration add $150'
          });  
          formData.result = 'standard $150 - capital gain/loss add $100 - self-employed business add $250 - foreign property declaration add $150';      
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
          formData.result = '$1500-$1800'      
          break;
        case 'onefifty-txn':
          setFormData({
            name: 'result',
            value: '$1800-$2500'
          });  
          formData.result = '$1800-$2500'      
          break;
        case 'onefiftyplus-txn':
          setFormData({
            name: 'result',
            value: '$2500-$3500'
          });
          formData.result = '$2500-$3500'     
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
          formData.result = '$5500-$7500'; 
          break;
        case 'audit-engagement':
          setFormData({
            name: 'result',
            value: '$9000-$12000'
          });  
          formData.result = '$9000-$12000'; 
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
          formData.result = '$1500'
          break;
        case 'holdings-company1':
          setFormData({
            name: 'result',
            value: '$1700'
          }); 
          formData.result = '$1700' 
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
          formData.result = '$1800'  
          break;
        case 'holdings-company2':
          setFormData({
            name: 'result',
            value: '$2000'
          }); 
          formData.result = '$2000'  
          break;
        case 'trading-retail2':
          setFormData({
            name: 'result',
            value: '$2500'
          });  
          formData.result = '$2500' 
          break;
        case 'mortgage-insurance-broker2':
          setFormData({
            name: 'result',
            value: '$1800'
          });  
          formData.result = '$1800' 
          break;
        case 'home-renovation-contractor2':
          setFormData({
            name: 'result',
            value: '$2300'
          });  
          formData.result = '$2300' 
          break;
        case 'medical-professional-corporation2':
          setFormData({
            name: 'result',
            value: '$2500'
          }); 
          formData.result = '$2500'  
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
          formData.result = '$2500'    
          break;
        case 'holdings-company3':
          setFormData({
            name: 'result',
            value: '$2700'
          });   
          formData.result = '$2700' 
          break;
        case 'trading-retail3':
          setFormData({
            name: 'result',
            value: '$3200'
          }); 
          formData.result = '$3200'   
          break;
        case 'manufacturing3':
          setFormData({
            name: 'result',
            value: '$3500'
          });   
          formData.result = '$3500' 
          break;
        case 'restaurant3':
          setFormData({
            name: 'result',
            value: '$3500'
          }); 
          formData.result = '$3500'   
          break;  
        case 'mortgage-insurance-broker3':  
          setFormData({
            name: 'result',
            value: '$2500'
          }); 
          formData.result = '$2500'         
          break;
        case 'home-renovation-contractor3':
          setFormData({
            name: 'result',
            value: '$3000'
          });  
          formData.result = '$3000'        
          break;       
        case 'medical-professional-corporation3':
          setFormData({
            name: 'result',
            value: '$3500'
          });   
          formData.result = '$3500'           
          break;
        default: 
          break;           
      }   
    }  