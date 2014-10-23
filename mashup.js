// JavaScript Document

	
///instagram	

      $.ajax({
        url: 	'https://api.instagram.com/v1/tags/brooklynbridge/media/recent?client_id=61e21cfee4754af6a970bc6fbb4d3363&count=16',
        dataType: 'jsonp',
        success: function(result){
          for (var i = 0; i < result.data.length; i++){
            var url = result.data[i].images.thumbnail.url;
            $('#id'+(i+1)).append('<img src="' + url + '"/>');
			$('#ids'+(i+1)).append('<img src="' + url + '"/>');
          }
        }
      });
	  
	  
	  


//WU Underground
var condsarray = {LightRain:'lightrain3.jpg', Rain:'lightrain3.jpg', Overcast:'overcast.jpg'};


function backImage(obj) 
{
      var img1 = condsarray[obj];
      return(img1);    
}

  $.ajax({
	  url : "http://api.wunderground.com/api/214e7c6b6a047461/geolookup/conditions/q/NY/New_York.json",
	  dataType : "jsonp",
	  success : function(parsed_json) {
	 //returns the current temperature
	  var temp_f = parsed_json['current_observation']['temp_f'];
	  $('#tempnow').append("Temperture: "+temp_f+" F ");
	  
	  //returns the weather condition
	  var conds = parsed_json['current_observation']['weather'];
	  var condsnosp = conds.replace( /\s/g, "");
	  $('#condsnow').append("Conditions: "+conds);
	  
       //sets the background image associated with the weather condition
	  var weatherimg = backImage(condsnosp);
	  $('#weathert').css("background-image", "url("+weatherimg+")"); 
	  
	  
	  }
  });


////though about but did not end up using the following, may combine or refactor later
//google images	  
/*	 $.ajax({
	  url : "https://www.googleapis.com/customsearch/v1?key=AIzaSyBdM4FHTAyUqL_AVjwuFgxlHpTukRvV1k4&cx=YOUR_CSE_ID&q=brooklyn+bridge&searchType=image&fileType=jpg&imgSize=small&alt=json",
	  dataType: 'jsonp',
        success: function(result){
          for (var i = 0; i < 10; i++){
            var url = result.url[i];
            $('#bkbridge').append('<img src="' + url + '"/>');
	  		}
		}
  });  
	*/



//flickr
/*
$.ajax({
	  url : "https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=47c75766d59a8ec90b18846a0ab65319&tags=broklyn+bridge&per_page=10&format=rest&api_sig=a9c8738d6e45ce277a9362706965a0a7",
	  dataType: 'json',
      success:  function jsonFlickrApi(rsp) {
			window.rsp = rsp;
			console.log(rsp);
			var s = "total number is: " + rsp.photos.photo.length + "<br/>";
					// should return the following result
					//	<photos page="2" pages="89" perpage="10" total="881">
					//		<photo id="2636" owner="47058503995@N01" 
					//			secret="a123456" server="2" title="test_04"
					//			ispublic="1" isfriend="0" isfamily="0" />
					//	<photo id="2635" owner="47058503995@N01"
					//		secret="b123456" server="2" title="test_03"
					//		ispublic="0" isfriend="1" isfamily="1" />
					//</photos>
					// https://farm{farm-id}.staticflickr.com/{server-id}/{id}_{secret}.jpg
			for (var i=0; i < rsp.photos.photo.length; i++) {
				photo = rsp.photos.photo[i];
			  	url = "http://farm" + photo.farm + ".static.flickr.com/" + 
				photo.server + "/" + photo.id + "_" + photo.secret + "_" + "t.jpg";
			  	$('#bkbridge').append('<img src="' + url + '"/>');
				$('#bkbridge').append('hi');
			}
		
			$('#bkbridge').append(s);
		}
});

*/

/* $.fn.flickrPhoto = function(options){
        var settings = $.extend({
            url : '',
            key : '',
            secret : ''
            }, options),
            id,
            method = 'flickr.photos.getInfo',
            format = 'json',
            collection = this;
        id = settings.url.match(/\/photos\/(.*)/)[1].split('/')[1];
        $.ajax({
            url: 'http://www.flickr.com/services/rest/?method='+method+'&format='+format+'&api_key='+settings.key,
            dataType: 'jsonp',
            data: {'photo_id':id},
            type: 'GET',
            jsonpCallback: 'jsonFlickrApi',
            success: function(data){
                collection.each(function(){
                    $(this).append('<img src="http://farm'+data.photo.farm+'.static.flickr.com/'+data.photo.server+'/'+id+'_'+data.photo.secret+'.jpg">');
                });
            }
        });
        return collection;
    };*/
/// });
