function mobileNavFunction(){
    var mobileNav = document.getElementById("mobile-nav-id");
    if(mobileNav.className === "mobile-nav"){
        mobileNav.className += " showNav";
    }else{
        mobileNav.className = "mobile-nav";
    }
}