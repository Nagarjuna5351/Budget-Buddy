const balance= document.querySelector("#balance");
const desc= document.querySelector("#des");
const amount= document.querySelector("#amount");
const inc= document.querySelector("#inc-amt");
const exp= document.querySelector("#exp-amt");
const trans= document.querySelector("#trans");
const form= document.querySelector("#form");
const date= new Date();
let a=10;
/*const data=[
    {id:1, description:"Flower",amount: -20},
    {id:2, description:"Flower",amount: 20000},
    {id:3, description:"Flower",amount: -20},
    {id:4, description:"Flower",amount: 20},
    {id:5, description:"Flower",amount: -20}
]

let transction=data;*/

const localStorageTrans= JSON.parse(localStorage.getItem("trann"));
let transction=localStorage.getItem("trann")!==null? localStorageTrans:[];



function loadD(transction){
    //console.log(transction);
    const sign=transction.amount< 0 ?"-":"+";
   // console.log(sign);
    const item=document.createElement("li");
    item.classList.add(transction.amount<0?"expp":"incc");
    item.innerHTML= `${transction.description}
    <span>${sign} ${Math.abs(transction.amount)} </span>
   <span>${transction.month}</span>
    <button class="btn-del" onclick="removeTrans(${transction.id})">x</button>` ;
    trans.appendChild(item);


    
}

function removeTrans(id){
     if(confirm("Are you sure?")){
        transction=transction.filter((transction)=>transction.id!=id);
        config();
        ulocal();
     }
     else{
        return;
     }
}

function uamt(){
    const amt=transction.map((transction)=>transction.amount);
    const t=amt.reduce((acc,item)=>(acc+=item),0).toFixed(2);
    balance.innerHTML=`₹ ${t}`;
    const incr=amt.filter((item)=>item>0).reduce((acc,item)=>(acc+=item),0).toFixed(2);
    inc.innerHTML=`₹ ${incr}`;
    const expr=amt.filter((item)=>item<0).reduce((acc,item)=>(acc+=item),0).toFixed(2);
    exp.innerHTML=`₹ ${expr}`;


}

function config(){
    trans.innerHTML="";
    transction.forEach(loadD);
    uamt();
}

function addT(){
    
    if(desc.value == ""|| amount.value==""){
        alert("Enter ")
    }else{
        
        const transs={
            id:a,
            description:desc.value,
            month:month.value,
            amount:+amount.value
        }
        a=a+1;
    
        transction.push(transs);
        loadD(transs)
       //llll console.log(transs)
        desc.value=""
        amount.value=""
        uamt();
        ulocal();
        
        
    }
}

form.addEventListener("submit",addT);

window.addEventListener("load",function(){
    config();
});

function ulocal(){
    localStorage.setItem("trann", JSON.stringify(transction));
}

