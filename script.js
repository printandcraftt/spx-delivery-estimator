const provinceSearch = document.getElementById("provinceSearch");
const provinceList = document.getElementById("provinceList");

let provinces = [];

// Load provinces from JSON
fetch("data/provinces.json")
.then(response => response.json())
.then(data => {

    provinces = data;

    displayProvinces(provinces);

})
.catch(error => {

    provinceList.innerHTML = `
        <div class="province-item">
            Failed to load province data.
        </div>
    `;

    console.error(error);

});

function displayProvinces(list){

    provinceList.innerHTML = "";

    list.forEach(item=>{

        const div = document.createElement("div");

        div.className = "province-item";

        div.textContent = item.name;

        div.onclick = ()=>{

            alert("Selected Province: " + item.name);

        };

        provinceList.appendChild(div);

    });

}

provinceSearch.addEventListener("input", ()=>{

    const keyword = provinceSearch.value.toLowerCase();

    const filtered = provinces.filter(item =>

        item.name.toLowerCase().includes(keyword)

    );

    displayProvinces(filtered);

});
