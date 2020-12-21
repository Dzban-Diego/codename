var czek = ""
var czek2 = ""

var roomname = getParameterByName("r")

window.onload = function() {
    console.log("czekam")
    czek = setTimeout(get,1000)
    czek2 = setTimeout(get,1100)
}

function get(){
    jQuery.get('http://klimczewski.pl/tajniacy/rooms/'+roomname+'/key.txt', function(data) {
        key = data.split(",") 
    });
    convert()
}

var key = ""

alert("Czy jesteś pewien że jesteś prowadzącym? Jeśli nie jesteś nie klikaj OK. Jeśli jesteś prowadzącym nie pokazuj tej strony innym graczom. Miłj gry życzy Michał :).")

function convert() {
    if(key[25] == "mred"){
        card.style.backgroundImage = 'url("grafika/mapr.jpg")'
    }else{
        card.style.backgroundImage = 'url("grafika/mapb.jpg")'
    }
    for(i=0; i<25 ;i++){
        var x = "url('grafika/" + key[i] + ".jpg')"
        document.getElementById("c" + i).style.backgroundImage = x
    }
};

function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}