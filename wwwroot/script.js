function apiSearch() {
    var params = {
        'q': $('#query').val(),
        'count': 50,
        'offset': 0,
        'mkt': 'en-us'
    };

    $.ajax({
        url: 'https://api.bing.microsoft.com//v7.0/search?' + $.param(params),
        type: 'GET',
        headers: {
            'Ocp-Apim-Subscription-Key': 'c67bfb18c1104e498e9d5b60baf39712'
        }
    })
        .done(function (data) {
            var len = data.webPages.value.length;
            var results = '';
            for (i = 0; i < len; i++) {
                results += `<p><a href="${data.webPages.value[i].url}">${data.webPages.value[i].name}</a>: ${data.webPages.value[i].snippet}</p>`;
            }

            $('#searchResults').html(results);
            $('#searchResults').dialog();
        })
        .fail(function () {
            alert('error');
        });
}

//$("#searchButton").click(function () {
//    doSearch();
//});
$("#searchButton").click(function () {
    apiSearch();
})

//var textShowing = true;

//$("#toggle").click(function () {
//    if (textShowing) {
//        $("#text").fadeOut(function () {
//            textShowing = false;
//        });
//    } else {
//        $("#text").fadeIn(function () {
//            textShowing = true;
//        });
//    }

var imageIndex = 1;

$("#Header").click(function () {
    var currIndex = imageIndex;
    while(imageIndex == currIndex){
        imageIndex = Math.floor(Math.random() * 10) + 1;
    }
    $("body").css("background-image", "url('./Background" + imageIndex + ".jpg')");

    setTimeout(function() {
        var currIndex = imageIndex;
        while(imageIndex == currIndex){
            imageIndex = Math.floor(Math.random() * 10) + 1;
        }
        $("body").css("background-image", "url('./Background" + imageIndex + ".jpg')");
    }, 500);
})

function getTime(){
    var t = new Date();
    var hours = t.getHours();
    var minutes = t.getMinutes();
    if(minutes < 10){
        minutes = "0" + minutes;
    }
    if(hours < 10){
        hours = "0" + hours;
    }

    return hours + ":" + minutes;
}

$("#timeButton").click(function() {
    var currTime = getTime();
    $("#Time").html(currTime);
    $("#Time").dialog();
})

$("#luckyButton").click(function(){
    feelingLucky();
})

function feelingLucky() {
    var params = {
        'q': $('#query').val(),
        'count': 50,
        'offset': 0,
        'mkt': 'en-us'
    };

    $.ajax({
        url: 'https://api.bing.microsoft.com//v7.0/search?' + $.param(params),
        type: 'GET',
        headers: {
            'Ocp-Apim-Subscription-Key': 'c67bfb18c1104e498e9d5b60baf39712'
        }
    })
        .done(function (data) {
            var len = data.webPages.value.length;
            if(len > 0){
                var first = data.webPages.value[0].url;
                window.location.href = first;
            }
            else alert("No Results");
        })
        .fail(function () {
            alert('error');
        });
}



