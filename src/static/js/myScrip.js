var isLoged = false;



function closeForm() {
    document.querySelector("#SignIn").style.display = "none";
}

function logout(event) {
    isLoged = false;
    sessionStorage.removeItem('isLoged');
    window.location.href = "index.html";
    event.preventDefault();
}
function login(event) {

    // document.querySelector("#SignIn").style.display = "block";

    isLoged = true;
    sessionStorage.setItem('isLoged', isLoged);
    window.location.href = "index.html";
    event.preventDefault();

}


window.onload = function () {
    const login_div = document.querySelector('#login_div');
    const SignIn = document.querySelector('#SignIn');
    const header = document.querySelector('#header');

    const main_list = document.querySelector('#main_list');
    const empty_mainlist = document.querySelector('#empty_mainlist');

    const wishlist = document.querySelector('#wishlist');
    const empty_wishlist = document.querySelector('#empty_wishlist');


    const logoutbtn = document.querySelector('#logoutbtn');
    const loginbtn = document.querySelector('#loginbtn');
    const wishlistbtn = document.querySelector('#wishlistbtn');
    

    isLoged = sessionStorage.getItem("isLoged");


    if (isLoged) {
        login_div.style.display = "none";
        header.style.display = "initial";
        main_list.style.display = "initial";
        wishlist.style.display = "none";

    } else {
        login_div.style.display = "initial";
        header.style.display = "none";
        main_list.style.display = "none";
        wishlist.style.display = "none";

    }

    logoutbtn.onclick = function (event) {
        logout(event);
    };
    loginbtn.onclick = function (event) {
        login(event);
    };
    wishlistbtn.onclick = function (event) {
        main_list.style.display = "none";
        wishlist.style.display = "initial";
        event.preventDefault;
    };
    

}