function fetchGiphyAPI(keyword) {
    if (!keyword) {
    return;
    }
    var url = "https://api.giphy.com/v1/gifs/search";
    var params = "api_key=NHfSBbgsR8UDxGcoOvSpGO5rUxVBMdTw&=&limit=5&q=";
    var xhr = new XMLHttpRequest();
    xhr.addEventListener("readystatechange", function () {
    if (this.readyState === 4 && this.status === 200) {
    processResponse(this.responseText);
    }
    });
    xhr.open("GET", url + "?" + params + keyword);
    xhr.send();
   }

function processResponse(responseText){
    var response = JSON.parse(responseText);

    for (item of response.data){
        let imgElem = document.createElement("img");
        imgElem.src = item.images.downsized_large.url;
        searchResults.appendChild(imgElem);
    }
}