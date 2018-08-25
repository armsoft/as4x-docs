function getIndex() {
    let xhr = new XMLHttpRequest();
    xhr.open("GET", "/learnmarkdown/links.xml", true);
    xhr.onload = (event) => {
        if (event.target.status == 200) {
            let xml = xhr.responseXML.documentElement;
            let arr = xml.getElementsByTagName("loc");
            console.log(arr);

            let content = document.getElementById("search_content");
            for(let i = 0; i < arr.length; i++) {
                //console.log(arr[i].lastChild.innerHTML);

                let a = document.createElement("a");
                a.href = "/learnmarkdown" + arr[i].innerHTML;
                a.textContent = arr[i].innerHTML;
                content.appendChild(a);
                let br = document.createElement("br");
                content.appendChild(br);
            }
        } else {
            
        }
    };
    xhr.send();
}

