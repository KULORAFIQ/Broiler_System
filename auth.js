function loginUser(){

    const username =
    document.getElementById("username").value;

    const password =
    document.getElementById("password").value;

    if(
        username === "admin"
        &&
        password === "admin123"
    ){

        localStorage.setItem(
            "broilerLogin",
            "true"
        );

        window.location.href =
        "home.html";

    }else{

        document.getElementById("errorLogin")
        .innerHTML =
        "Username atau Password salah!";

    }

}

/* CEK LOGIN */
function cekLogin(){

    const status =
    localStorage.getItem("broilerLogin");

    if(status !== "true"){

        window.location.href =
        "login.html";
    }

}

/* LOGOUT */
function logoutUser(){

    localStorage.removeItem(
        "broilerLogin"
    );

    window.location.href =
    "login.html";
}

function toggleProfile() {
  const profile = document.getElementById("profileDropdown");

  if(profile){
    profile.classList.toggle("active");
  }
}

function logoutUser() {
  localStorage.removeItem("broilerLogin");
  window.location.href = "login.html";
}

window.addEventListener("click", function(e){

  const profileMenu =
  document.querySelector(".profile-menu");

  const profileDropdown =
  document.getElementById("profileDropdown");

  if(
    profileMenu &&
    profileDropdown &&
    !profileMenu.contains(e.target)
  ){
    profileDropdown.classList.remove("active");
  }

});