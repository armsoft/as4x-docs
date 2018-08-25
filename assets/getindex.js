function getIndex() {
    let xhr = new XMLHttpRequest();
    xhr.open("GET", "/learnmarkdown/links.xml", true);
    xhr.onload = (event) => {
        if (event.target.status == 200) {
            let xml = xhr.responseXML.documentElement;
            let arr = xml.getElementsByTagName("url");
            
            let search_input = document.getElementById("search_input");

            let content = document.getElementById("search_content");
            content.innerHTML = "";
            for(let i = 0; i < arr.length; i++) {
                let urltag = arr[i];
                let loc = urltag.getElementsByTagName("loc")[0].innerHTML;
                let title = urltag.getElementsByTagName("title")[0].innerHTML;
                let keywords = urltag.getElementsByTagName("keywords")[0].innerHTML;
                if (keywords.includes(search_input.value)) {
                    let a = document.createElement("a");
                    a.href = "/learnmarkdown" + loc;
                    a.textContent = title;
                    content.appendChild(a);
                    let br = document.createElement("br");
                    content.appendChild(br);
                }
            }
        } else {
            
        }
    };
    xhr.send();
}

