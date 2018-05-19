(function($){function new_map($el){var $markers=$el.find('.marker');if(typeof stylemap==='undefined'){stylemap='';}
var args={zoom:16,center:new google.maps.LatLng(0,0),mapTypeId:google.maps.MapTypeId.ROADMAP,styles:stylemap};var map=new google.maps.Map($el[0],args);map.markers=[];$markers.each(function(){add_marker($(this),map);});center_map(map);return map;}
function add_marker($marker,map){var latlng=new google.maps.LatLng($marker.attr('data-lat'),$marker.attr('data-lng'));var marker=new google.maps.Marker({position:latlng,map:map});if($marker.attr('data-icon')){var icon={url:$marker.attr('data-icon')};if($marker.attr('data-width')&&$marker.attr('data-height')){icon.scaledSize=new google.maps.Size($marker.attr('data-width'),$marker.attr('data-height'))}
marker.setIcon(icon);}
map.markers.push(marker);if($marker.html().length>0)
{var infowindow=new google.maps.InfoWindow({content:$marker.html()});google.maps.event.addListener(marker,'click',function(){infowindow.open(map,marker);});}}
function center_map(map){var bounds=new google.maps.LatLngBounds();$.each(map.markers,function(i,marker){var latlng=new google.maps.LatLng(marker.position.lat(),marker.position.lng());bounds.extend(latlng);});if(map.markers.length==1)
{map.setCenter(bounds.getCenter());map.setZoom(16);}
else
{map.fitBounds(bounds);}}
var map=null;$(document).ready(function(){$('.acf-map').each(function(){map=new_map($(this));});});})(jQuery);