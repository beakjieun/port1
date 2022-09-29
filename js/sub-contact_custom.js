$(document).ready(function(){
    
    //구글맵
    map=new GMaps({
      div: '#map',
      lat: -12.043333,
      lng: -77.028333,
      zoom:17
    });
    
    map.addMarker({
      lat: -12.043333,
      lng: -77.028333,
      title: 'Lima',
    });
    

    
    
});