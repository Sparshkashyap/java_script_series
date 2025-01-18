

const height=document.getElementById('h');
const weight=document.getElementById('w');
const result=document.getElementById('r');



const reset_button=document.getElementById('ri');
const button=document.getElementById('submit');



button.addEventListener('click',function(){
const he=parseFloat(height.value);
const we =parseFloat(weight.value);
const res=(he/(we*we)).toFixed(2);

result.innerText=res;     

});


reset_button.addEventListener('click',function(){
location.reload();

});








