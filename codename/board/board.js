var cli = "grafika/word.jpg"
var cell = ""
var urle = 'url("grafika/word.jpg")'
var hide = false
var words = ""
var czek = ""
var czek2 = ""
var roomname = getParameterByName("r")
console.log("roomname")

window.onload = function() {
    czek = setTimeout(refresh,1000)
    czek2 = setTimeout(refresh,1100)
}

function refresh(){
    jQuery.get('http://klimczewski.pl/tajniacy/rooms/'+roomname+'/words.txt', function(data) {
        words = data.split(",")
    })
    console.log(words)
    reset()
    leaderurl()
}

function chcli(s){
    hide = true
    if(s == "kill"){
        urle = 'url("grafika/kill.jpg")';
    }else{
        var w = Math.floor(Math.random() * 2);
        if(w==1){
            urle = 'url("grafika/' + s + 'w.jpg")'
        }else{
            urle = 'url("grafika/' + s + 'm.jpg")'
        }
    }            
}

function clicku(z){
    var cell2 = document.getElementById("c" + z)
    cell2.style.backgroundImage = urle
    if(hide==true){
        cell2.innerHTML = ""
        hide = false
        cli = "grafika/word.jpg"
        urle = 'url("grafika/word.jpg")'
    }else if(hide==false){
        cell2.innerHTML = words[z].toUpperCase();
        hide = false
        cli = "grafika/word.jpg"
        urle = 'url("grafika/word.jpg")'
    }
}

function reset(){
    for(i=0; i<25 ;i++){
        document.getElementById("c" + i).innerHTML= words[i].toUpperCase();
    }
}

function leaderurl() {
    slot = document.getElementById("leader")
    slot.innerHTML += "http://klimczewski.pl/tajniacy/leader/?r="+roomname
}

function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}

var copyText = ""

function copy() {
    copyText = document.getElementById("leader").innerHTML;
    copyToClipboard(copyText)
}

function copyToClipboard(text) {
    var dummy = document.createElement("textarea");
    document.body.appendChild(dummy);
    dummy.value = text;
    dummy.select();
    document.execCommand("copy");
    document.body.removeChild(dummy);
}