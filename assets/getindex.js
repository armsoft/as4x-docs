function getIndex() {
    let xhr = new XMLHttpRequest();
    xhr.open("GET", "/learnmarkdown/links.xml", true);
    xhr.onload = (event) => {
        if (event.target.status == 200) {
            let arr = xhr.responseXML.documentElement.getElementsByTagName("loc");
            for(let el of arr) {
                console.log(el.innerHTML);
            }
        } else {
            
        }
    };
    xhr.open();
}

