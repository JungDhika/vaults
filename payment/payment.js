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


// WINDOW LOCATION

function masuk(){
    window.location.href = "../logsign/login.html";
}
function daftar(){
    window.location.href = "../logsign/daftar.html";
}

function beranda(){
    window.location.href = "../index.html";
}