function getIndex() {
    let content = document.getElementById("index_content");
    content.innerHTML = "";
    var pages = tipuesearch.pages;

    for (let i = 0; i < pages.length; i++) {
        let urltag = pages[i];
        let loc = urltag.url;
        let title = urltag.title ? urltag.title : urltag.url;
        let a = document.createElement("a");
        a.href = loc;
        a.textContent = title;
        let div = document.createElement("div");
        div.appendChild(a);
        content.appendChild(div);
    }
    let input = document.getElementById("tipue_search_input");
    if (input.value != "") {
        searchText(input);
    }
}

window.addEventListener("load", (ev) => {
    getIndex();
    let input = document.getElementById("tipue_search_input");
    input.addEventListener("keyup", (ev) => {
        searchText(input);
    });
    input.addEventListener("change", (ev) => {
        searchText(input);
    });
});

function searchText(input) {
    let content = document.getElementById("index_content");
    let searchText = input.value.toLowerCase();
    console.log(searchText);
    let aArr = content.getElementsByTagName("a");
    for (let i = 0; i < aArr.length; i++) {
        if (aArr[i].textContent.toLowerCase().indexOf(searchText) >= 0) {
            aArr[i].parentElement.style.display = "";
        } else {
            aArr[i].parentElement.style.display = "none";
        }
    }
}