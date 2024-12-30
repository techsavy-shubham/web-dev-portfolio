var arr=[
    {name: "Petals of roses",image:"https://images.unsplash.com/photo-1667851873839-d7c9f20b8b3f?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {name: "Animals of town",image:"https://plus.unsplash.com/premium_photo-1669725687221-6fe12c2da6b1?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {name: "the crowd of city",image:"https://plus.unsplash.com/premium_photo-1661895081205-791c94434c78?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {name: "fruits of planet",image:"https://images.unsplash.com/photo-1519996529931-28324d5a630e?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {name: "orange peeled",image:"https://plus.unsplash.com/premium_photo-1675237625695-710b9a6c3f2e?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {name: "web design",image:"https://plus.unsplash.com/premium_photo-1678565202049-9e37b2da8060?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {name: "Petals of roses",image:"https://images.unsplash.com/photo-1667851873839-d7c9f20b8b3f?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {name: "Animals of town",image:"https://plus.unsplash.com/premium_photo-1669725687221-6fe12c2da6b1?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {name: "the crowd of city",image:"https://plus.unsplash.com/premium_photo-1661895081205-791c94434c78?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {name: "fruits of planet",image:"https://images.unsplash.com/photo-1519996529931-28324d5a630e?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {name: "orange peeled",image:"https://plus.unsplash.com/premium_photo-1675237625695-710b9a6c3f2e?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {name: "web design",image:"https://plus.unsplash.com/premium_photo-1678565202049-9e37b2da8060?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
]
function displayCards(){
    const container=document.getElementById("container");
    container.innerHTML='';

    arr.forEach(obj=>{
        const cardDiv=document.createElement('div');
        cardDiv.className='card';
        cardDiv.style.backgroundImage=`url(${obj.image})`;
        container.appendChild(cardDiv);
    })
}

function handleSearchFunctionality(){
    const input=document.querySelector("#inputBox");
    input.addEventListener("focus",function(){
        document.querySelector('.blur-overlay').style.display='block';
    });
    input.addEventListener("blur", () => {
        document.querySelector('.blur-overlay').style.display = 'none';
    });
    
}
function filterNames(){
    const input=document.getElementById('inputBox').value.toLowerCase();
    const filteredArr=arr.filter(item => 
        item.name.toLowerCase().startsWith(input));

    const nameList=document.getElementById('nameList');
    nameList.innerHTML='';

{/* <i class="ri-search-line"></i> */}

    filteredArr.forEach(item => {
        const listItem=document.createElement('li');
        const icon=document.createElement('i');
        icon.className='ri-search-line';
        listItem.appendChild(icon);
        listItem.textContent = item.name;
        nameList.appendChild(listItem);
    })
    
}

handleSearchFunctionality();
displayCards();