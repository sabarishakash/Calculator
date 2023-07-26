  let operator="";
  let previousvalue="";
  let currentvalue="";
  
  

  
  document.addEventListener("DOMContentLoaded",function(){
   
    let clear=document.querySelector("#sabarish");
    
    let equal=document.querySelector("#input65");
    let decimal=document.querySelector("#input66");
    let numbers=document.querySelectorAll("#input67");
    let operators=document.querySelectorAll("#operator");
    let previousscreen=document.querySelector("#previous");
    let currentscreen=document.querySelector("#current");
    numbers.forEach((number)=>number.addEventListener("click",function(e){

        handleNumber(e.target.textContent)
        currentscreen.textContent=currentvalue;

        
  }))
  operators.forEach((op)=>op.addEventListener("click",function(e){

handleoperator(e.target.textContent)
previousscreen.textContent=previousvalue+" "+operator;
currentscreen.textContent=currentvalue;

  }))

  clear.addEventListener("click",function(){

    previousvalue="";
    currentvalue="";
    operator="";
    previousscreen.textContent=currentvalue;
    currentscreen.textContent=currentvalue;
  })
  equal.addEventListener("click",function(){

    if(currentvalue != '' && previousvalue != ''){

    calculate()

    previousscreen.textContent="";
    if(previousvalue.length<=5){
    currentscreen.textContent= previousvalue;
    }
    else{
      currentscreen.textContent=previousvalue.slice(0,5) + "...";
    }
  }})

  decimal.addEventListener("click",function(){

addDecimal()
  })

  })


function handleNumber(num){
if(currentvalue.length<=5){
   currentvalue +=num;

}
}

function handleoperator(op){

 operator=op;
 previousvalue=currentvalue;
 currentvalue="";
 
}

function calculate(){

  previousvalue= Number(previousvalue);
  currentvalue= Number(currentvalue);

  if(operator === "+"){

    previousvalue += currentvalue;

  }
  else if(operator === "-"){

    previousvalue -= currentvalue;
  }
  else if(operator === "x"){

    previousvalue *= currentvalue;

}
else{
  previousvalue /= currentvalue;
}

previousvalue= roundNumber(previousvalue);
previousvalue=previousvalue.toString();
currentvalue=previousvalue.toString();


}

function roundNumber(num){
  return Math.round(num * 1000) / 1000;
}
function addDecimal(){

if(!currentvalue.includes(".")){

currentvalue +=".";


}
}