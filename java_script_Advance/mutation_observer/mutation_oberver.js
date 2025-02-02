const obj=new MutationObserver((data)=>{
    console.log(data);
    
})

obj.observe(parent,{
    childList:true,
   
});

function deletediv(){
    document.querySelector('.parent').children[0].remove();
    console.log("sparsh");
    
};

function ch(){
    console.log("sparsh");
    
};
