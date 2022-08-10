function mobileNavFunction(){
    var mobileNav = document.getElementById("mobile-nav-id");
    if(mobileNav.className === "mobile-nav"){
        mobileNav.className += " showNav";
    }else{
        mobileNav.className = "mobile-nav";
    }
}

function showProjectOneFunction(){
    var projectDetail = document.getElementById("project-detail-id-1");
    if(projectDetail.className === "project-details"){
        projectDetail.className += " project-detail-responsive";
    }else{
        projectDetail.className = "project-details";
    }
}

function showProjectOneFunction2(){
    var projectDetail = document.getElementById("project-detail-id-2");
    if(projectDetail.className === "project-details"){
        projectDetail.className += " project-detail-responsive";
    }else{
        projectDetail.className = "project-details";
    }
}

