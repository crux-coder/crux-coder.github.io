let mapWrap = document.querySelector('#map');

function initMap() {
    let point = {lat: 44.736226, lng:18.185460};
    let point2 = {lat: 44.737233, lng:18.084839}

    let map = new google.maps.Map(mapWrap,{
        center: point,
        zoom: 7,
        disableDefaultUI: true,
        zoomControl: true,
        maxZoom: 10
    });

    var markerImage = new google.maps.MarkerImage(
        'img/mark.png',
        new google.maps.Size(35,35),
        null, //origin
        null, //anchor
        new google.maps.Size(35,35)
    );

    let marker = new google.maps.Marker({
        position: point,
        map:map,
        icon: markerImage,
    })

    let marker2 = new google.maps.Marker({
        position: point2,
        map:map,
        icon: markerImage,
    })

    

    google.maps.event.addListener(map, 'zoom_changed', function() {

        var pixelSizeAtStartZoom = map.getZoom() * 3; 
        var maxPixelSize = 100; 
    
        var zoom = map.getZoom();
        var relativePixelSize = Math.round(map.getZoom() * 3); 
    
        if(relativePixelSize > maxPixelSize) 
            relativePixelSize = maxPixelSize;
    
        //change the size of the icon
        marker.setIcon(
            new google.maps.MarkerImage(
                marker.getIcon().url, 
                null,
                null,
                null,
                new google.maps.Size(relativePixelSize, relativePixelSize) 
            )
        ); 
        marker2.setIcon(
            new google.maps.MarkerImage(
                marker.getIcon().url, 
                null,
                null,
                null,
                new google.maps.Size(relativePixelSize, relativePixelSize) 
            )
        );       
    });
}