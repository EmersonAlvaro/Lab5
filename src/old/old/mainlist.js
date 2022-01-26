var isLoged = false;


function openForm() {
    document.querySelector("#login").style.display = "block";
}

function closeForm() {
    document.querySelector("#login").style.display = "none";
}

function logout(event) {
    isLoged = false;
    sessionStorage.removeItem('isLoged');
    window.location.href = "index.html";
    event.preventDefault();
}
function login(event) {

    isLoged = true;
    sessionStorage.setItem('isLoged', isLoged);
    window.location.href = "mainlist.html";
    event.preventDefault();

}


window.onload = function () {
    const login_div = document.querySelector('#login_div');
    const SignIn = document.querySelector('#SignIn');
    const main = document.querySelector('#main');

    const main_list = document.querySelector('#main_list');
    const empty_mainlist = document.querySelector('#empty_mainlist');

    const wishlist = document.querySelector('#wishlist');
    const empty_wishlist = document.querySelector('#empty_wishlist');


    const logoutbtn = document.querySelector('#logoutbtn');
    const loginbtn = document.querySelector('#loginbtn');

    isLoged = sessionStorage.getItem("isLoged");



    // if (isLoged) {
    //     login_div.style.display = "none";
    //     main.style.display = "initial";
    //     main_list.style.display = "initial";
    //     wishlist.style.display = "none";

    // } else {
    //     login_div.style.display = "initial";
    //     main.style.display = "none";
    //     main_list.style.display = "none";
    //     wishlist.style.display = "none";

    // }

    // logoutbtn.onclick = function (event) {
    //     logout(event);
    // };
    loginbtn.onclick = function (event) {
        login(event);
    };



}