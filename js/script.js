let dogCaller= "https://api.giphy.com/v1/gifs/search?q=puppy&rating=pg&api_key=rQrXp8Skecms5IYqoh0BS4HeQW9L35LY";


    fetch(dogCaller)

        .then(function(response) {
           return response.json();
        })

        .then(function(data) {
          console.log(data.data[0].images.original.url);
        });
