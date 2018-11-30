let csstag = document.getElementById("darktheme");
if (document.cookie.indexOf("theme:dark") >= 0) {
    csstag.rel = "stylesheet";
} else {
    csstag.rel = "";
}

window.addEventListener("load", () => {
    let goDark = document.createElement("a");
    goDark.href = "#";
    goDark.classList.add("page-link");
    goDark.style.filter = "grayscale(100%)";
    if (document.cookie.indexOf("theme:dark") >= 0) {
        goDark.addEventListener("click", () => {
            document.cookie = "theme:light";
            document.location.reload();
        });
        goDark.innerHTML = "\u{2600}";  //BLACK SUN WITH RAYS
        goDark.title = "Light";
    } else {
        goDark.addEventListener("click", () => {
            document.cookie = "theme:dark";
            document.location.reload();
        });
        goDark.innerHTML = "\u{1F319}"; //CRESCENT MOON
        goDark.title = "Dark";
    }
    let nav = document.querySelector(".site-nav .trigger");
    nav.appendChild(goDark);
});
