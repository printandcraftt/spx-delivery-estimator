const provinces = [
"Abra",
"Agusan del Norte",
"Agusan del Sur",
"Aklan",
"Albay",
"Antique",
"Apayao",
"Aurora"
];

const input=document.getElementById("provinceSearch");
const list=document.getElementById("provinceList");

function display(data){

list.innerHTML="";

data.forEach(province=>{

const div=document.createElement("div");

div.className="province-item";

div.innerHTML=province;

div.onclick=()=>{

alert(province);

};

list.appendChild(div);

});

}

display(provinces);

input.addEventListener("keyup",()=>{

const search=input.value.toLowerCase();

const filtered=provinces.filter(p=>

p.toLowerCase().includes(search)

);

display(filtered);

});
