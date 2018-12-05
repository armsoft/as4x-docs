if (window.localStorage) {
    let csstag = document.getElementById("darktheme");
    if (window.localStorage["theme"] === "dark") {
        csstag.rel = "stylesheet";
    } else {
        csstag.rel = "";
    }

    window.addEventListener("load", () => {
        let goDark = document.createElement("a");
        goDark.href = "#";
        goDark.classList.add("page-link");
        goDark.style.filter = "grayscale(100%)";
        if (window.localStorage["theme"] === "dark") {
            goDark.addEventListener("click", () => {
                window.localStorage["theme"] = "light";
                document.location.reload();
            });
            goDark.innerHTML = "\u{2600}";  //BLACK SUN WITH RAYS
            goDark.title = "Light";
        } else {
            goDark.addEventListener("click", () => {
                window.localStorage["theme"] = "dark";
                document.location.reload();
            });
            goDark.innerHTML = "\u{1F319}"; //CRESCENT MOON
            goDark.title = "Dark";
        }
        let nav = document.querySelector(".site-nav .trigger");
        nav.appendChild(goDark);
    });
}
