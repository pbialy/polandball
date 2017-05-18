import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import * as $ from 'jquery';
// export for others scripts to use
window.$ = $;
//window.jQuery = jQuery;

//const data ={};
/*
 Key	Required	Value
 sort	optional	time | viral | top - defaults to time
 window	optional	Change the date range of the request if the sort is 'top', day | week | month | year | all, defaults to all.
 page	optional	integer - the data paging number
 Simple Search Query Parameters
 Key	Value
 q	Query string (note: if advanced search parameters are set, this query string is ignored). This parameter also supports boolean operators (AND, OR, NOT) and indices (tag: user: title: ext: subreddit: album: meme:). An example compound query would be 'title: cats AND dogs ext: gif'

 */
/*
var settings = {
    "async": true,
    "crossDomain": true,
    "url": "https://api.imgur.com/3/gallery/search/{{sort}}/{{window}}/{{page}}?q=cats",
    "method": "GET",
    "headers": {
        "authorization": "Client-ID {{clientId}}"
    }
}
*/
var settings = {
    async: true,
    crossDomain: true,
//    url: "https://api.imgur.com/3/gallery/search/top/week/1?q=polandball",
    url: "https://api.imgur.com/3/gallery/search/time/all/1?q=polandball",
    method: "GET",
    headers: {
        "authorization": "Client-ID c15b126ab623153"
    }
}


var data;
$.ajax(settings).then(
    function(response) {
        data = response.data;
        console.log(response);
        const imgId = data[0].cover;
        document.getElementById('firstImg').src = `http://i.imgur.com/${imgId}.png`;
        console.log( "$.get succeeded" );
    }, function() {
        console.log( "$.get failed!" );
    }
);


var s2 = {
    "async": true,
    "crossDomain": true,
    "url": "https://api.imgur.com/3/image/NRXGKRn",
    "method": "GET",
    "headers": {
        "authorization": "Client-ID c15b126ab623153"
    }
}

$.ajax(s2).done(function (response) {
    console.log('s2');
    console.log(response);
});


var s3 = {
    "async": true,
    "crossDomain": true,
    "url": "https://api.imgur.com/3/gallery/hot/viral/day/1?showViral=true&mature=true&album_previews=true",
    "method": "GET",
    "headers": {
        "authorization": "Client-ID c15b126ab623153"
    }
}

$.ajax(s3).done(function (response) {
    console.log('s3');
    console.log(response);
});
//"http://imgur.com/a/HqSGy"
//i.imgur.com/2EZ5t3W.jpg


//debugger;

ReactDOM.render(<App data={data} />, document.getElementById('app'));
