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
}

window.addEventListener("load", (ev) => {
    getIndex();
    let input = document.getElementById("tipue_search_input");
    input.addEventListener("keydown", (ev) => {
        let content = document.getElementById("index_content");
        let searchText = input.value;
        let aArr = content.getElementsByTagName("a");
        for (let i = 0; i < aArr.length; i++) {
            aTag = aArr[i];
            if (aArr[i].textContent.indexOf(searchText)) {
                aArr[i].parentElement.style.display = "";
            } else {
                aArr[i].parentElement.style.display = "none";
            }
        }
    });
});