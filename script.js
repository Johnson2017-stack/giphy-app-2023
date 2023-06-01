const gifContainerEl = document.querySelector('#gif-container');
const searchBoxEl = document.querySelector('#search-box');
const searchButtonEl = document.querySelector('searchbtn');


function getGifs(){

    let value = searchBoxEl.value;
    console.log(value);
    
    fetch('https://api.giphy.com/v1/gifs/search?api_key=VY7qYdyjIMP1sHz0mFICNcZ970oims2s&limit=10&rating="g"&q=' + value +'')
    .then((response) => response.json())
    .then((data) => {

        const results = data.data;



        results.map(gif => {
            let title = document.createElement('h4')
            let giphyBox = document.createElement('div')

            title.textContent = gif.title;
            giphyBox.innerHTML = `<img src="${gif.images.original.url}" alt="${gif.title}" />`;

            gifContainerEl.append(title);
            gifContainerEl.append(giphyBox);


            
        })
    })
}