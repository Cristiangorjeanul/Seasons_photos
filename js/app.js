$(function () {

    function insertImages(images) {
        var gallery = $('.gallery');
        $(gallery).empty();
        $(images).each(function (index, image) {
            var newImage = $(`
                <a data-fancybox = "gallery" href="${image.largeImageURL}" class="gallery-element">
                    <img class="gallery-img" src="${image.webformatURL}" alt="">
                </a>
            `);
            $(gallery).append(newImage);
        });
    }

    function loadImages(searchQuery) {
        var apiUrl = 'https://pixabay.com/api/';
        var obj = {
            key: '13801580-b3521fec25a5cb23417804631',
            q: searchQuery,
            page: 1
        };
        $.ajax({
            url: apiUrl,
            data: obj,
            dataType: 'json',
            type: 'GET'
        }).done(function (response) {
            console.log(response);
            insertImages(response.hits);
        }).fail(function (error) {
            console.log(error);
        });
    }

    function getUrlVars() {
        var vars = {};
        var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function (m, key, value) {
            vars[key] = value;
        });
        return vars;
    }

    function getUrlParam(parameter, defaultvalue) {
        var urlparameter = defaultvalue;
        if (window.location.href.indexOf(parameter) > -1) {
            urlparameter = getUrlVars()[parameter];
        }
        return urlparameter;
    }

    const season = getUrlParam('season');
    loadImages(season);


   


});