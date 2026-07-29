const provinceScreen = document.getElementById("provinceScreen");
const municipalityScreen = document.getElementById("municipalityScreen");

const provinceSearch = document.getElementById("provinceSearch");
const provinceList = document.getElementById("provinceList");

const municipalitySearch = document.getElementById("municipalitySearch");
const municipalityList = document.getElementById("municipalityList");

const selectedProvince = document.getElementById("selectedProvince");

const backProvince = document.getElementById("backProvince");

let provinces = [];
let currentMunicipalities = [];

/*
    Temporary municipality database.
    We will replace this later with the complete Philippines database.
*/

const municipalityDatabase = {

    "Abra":[
        "Bangued",
        "Boliney",
        "Bucay",
        "Bucloc",
        "Daguioman",
        "Danglas",
        "Dolores",
        "La Paz",
        "Lacub",
        "Lagangilang",
        "Lagayan",
        "Langiden",
        "Licuan-Baay",
        "Luba",
        "Malibcong",
        "Manabo",
        "Peñarrubia",
        "Pidigan",
        "Pilar",
        "Sallapadan",
        "San Isidro",
        "San Juan",
        "San Quintin",
        "Tayum",
        "Tineg",
        "Tubo",
        "Villaviciosa"
    ],

    "Aklan":[
        "Altavas",
        "Balete",
        "Banga",
        "Batan",
        "Buruanga",
        "Ibajay",
        "Kalibo",
        "Lezo",
        "Libacao",
        "Madalag",
        "Makato",
        "Malay",
        "Malinao",
        "Nabas",
        "New Washington",
        "Numancia",
        "Tangalan"
    ]

};

fetch("data/provinces.json")
.then(response => response.json())
.then(data => {

    provinces = data;

    displayProvinces(provinces);

});

function displayProvinces(list){

    provinceList.innerHTML="";

    list.forEach(item=>{

        const div=document.createElement("div");

        div.className="province-item";

        div.textContent=item.name;

        div.onclick=()=>{

            openMunicipality(item.name);

        };

        provinceList.appendChild(div);

    });

}

provinceSearch.addEventListener("input",()=>{

    const keyword=provinceSearch.value.toLowerCase();

    const filtered=provinces.filter(item=>

        item.name.toLowerCase().includes(keyword)

    );

    displayProvinces(filtered);

});

function openMunicipality(province){

    selectedProvince.textContent=province;

    currentMunicipalities=municipalityDatabase[province] || [];

    displayMunicipalities(currentMunicipalities);

    provinceScreen.style.display="none";

    municipalityScreen.style.display="block";

}

function displayMunicipalities(list){

    municipalityList.innerHTML="";

    if(list.length===0){

        municipalityList.innerHTML="<div class='municipality-item'>Municipality data coming soon...</div>";

        return;

    }

    list.forEach(name=>{

        const div=document.createElement("div");

        div.className="municipality-item";

        div.textContent=name;

        div.onclick=()=>{

            alert("Selected Municipality: " + name);

        };

        municipalityList.appendChild(div);

    });

}

municipalitySearch.addEventListener("input",()=>{

    const keyword=municipalitySearch.value.toLowerCase();

    const filtered=currentMunicipalities.filter(item=>

        item.toLowerCase().includes(keyword)

    );

    displayMunicipalities(filtered);

});

backProvince.onclick=()=>{

    municipalityScreen.style.display="none";

    provinceScreen.style.display="block";

    municipalitySearch.value="";

};
