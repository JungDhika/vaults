function sidebarBtn(){
    let sidebar = document.getElementById("sidebar");
    let close = document.getElementById("sideClose");

    sidebar.classList.toggle("showSideBar");
    close.classList.toggle("closeSideBar");
}



let close = document.getElementById("sideClose");

close.addEventListener('click', (event)=>{
    let sidebar = document.getElementById("sidebar");
    // let close = document.getElementById("sideClose");

    sidebar.classList.remove("showSideBar")
    close.classList.remove("closeSideBar")
});


// SEARCH ENGINE

let mobileTitle = document.getElementById("mobileTitle");
let pcTitle = document.getElementById("pcTitle");
let allTitle = document.getElementById("allTitle");

let query = document.getElementById("query");

let searchBtn = document.getElementById("searchBtn");
let searchInput = document.getElementById("searchInput");
let items = document.querySelectorAll(".item");


searchBtn.addEventListener('click', function(){

    const searchNow = searchInput.value.trim().toLowerCase();

    query.style.display = "block";
    query.innerHTML = `Pencarian Untuk: ${searchNow}`;
    // query.style.marginBottom = "500px";


    items.forEach((item)=>{
        if(item.id === searchNow){
            item.classList.remove("hide-item");


            pcTitle.classList.add("hide-item");
            mobileTitle.classList.add("hide-item");
            allTitle.classList.add("hide-item");



        }else{
            item.classList.add("hide-item");


            pcTitle.classList.add("hide-item");
            mobileTitle.classList.add("hide-item");
            allTitle.classList.add("hide-item");
        }
    });

    if (searchNow === ""){
        items.forEach((x) => {
            x.classList.remove("hide-item");

            pcTitle.classList.remove("hide-item");
            mobileTitle.classList.remove("hide-item");
            allTitle.classList.remove("hide-item");

            query.style.display = "none";
        });
        
    }
    
    console.log("finish-complate");
});


// WINDOW LOCATION

function masuk(){
    window.location.href = "logsign/login.html"
}
function daftar(){
    window.location.href = "logsign/daftar.html"
}