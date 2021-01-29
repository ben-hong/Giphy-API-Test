$(function() {
    $('#form').submit(function(event) {
        let searchTerm = $('#search').val();
        let search =   `https://api.giphy.com/v1/gifs/search?q=${searchTerm}&limit=10&rating=pg&api_key=bGrUaAhCSkGHdLGgcewykucrB8TrTpyr`
        $.getJSON(search).then(function(response) {
            let firstGIF = response.data[0].images.original.url;
            let $img = $('<img>');
            $img.attr('src', firstGIF);
            $img.appendTo('#gallery');
        }); 
        event.preventDefault();
    })
    
});