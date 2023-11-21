addEventListener("DOMContentLoaded", (event) => {
    console.log('DOMContentLoaded')
    const submitButton = document.querySelector('.janiy')
  
    console.log('submitButton', submitButton)
    
    if(submitButton) submitButton.addEventListener('click', function(){
      console.log(submitButton)
    })
  });