// pehe value nikalni hogi
// from me submit wala event hoga
// form ka default action rokna hoga
const form = document.querySelector('form')
form.addEventListener('submit', function(e){
  e.preventDefault();
  const height =parseInt(document.querySelector('#height').value )     // value string me aatee 
  const weight = parseInt(document.querySelector('#weight').value ) // bahar value lege tho empty value aega
const results = document.querySelector('.results')
if(height === ' ' || height<0 || isNaN(height)){
    results.innerHTML="please enter valid height";
  }
else if(weight === ' ' || weight<0 || isNaN(weight)){
    results.innerHTML="please enter valid weight";
  }
  else{
    const bmi= (weight / ((height*height)/10000)).toFixed(2)
    results.innerHTML = `<span>${bmi}</span>`
  }
})