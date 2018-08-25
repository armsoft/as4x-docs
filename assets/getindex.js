function getIndex() {
    let xhr = new XMLHttpRequest();
    xhr.open("GET", "/learnmarkdown/links.xml", true);
    xhr.onload = (event) => {
        if (event.target.status == 200) {
            let arr = xhr.responseXML.documentElement.getElementsByTagName("loc");
            console.log(arr);
            for(let i = 0; i < arr.length; i++) {
                console.log(arr[i].innerHTML);
            }
        } else {
            
        }
    };
    xhr.send();
}

