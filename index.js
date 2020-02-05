var width = (window.innerWidth > 0) ? window.innerWidth : screen.width;

if( width>1090 ){
    function open_sidebar(){
        document.getElementById('right').style.width = "33%";
        document.getElementById('left').style.width = "33%";
        document.getElementById('wildcard').style.width = "100%";
        document.getElementById('closebutton').style.display = "block";
    }
    function close_sidebar(){
        document.getElementById('right').style.width = "0";
        document.getElementById('left').style.width = "0";
        document.getElementById('wildcard').style.width = "0";
        document.getElementById('closebutton').style.display = "none";
    }
}
else{
    function open_sidebar(){
        document.getElementById('right').style.width = "50%";
        document.getElementById('left').style.width = "50%";
        //document.getElementById('wildcard').style.width = "100%";
        document.getElementById('closebutton').style.display = "block";
    }
    function close_sidebar(){
        document.getElementById('right').style.width = "0";
        document.getElementById('left').style.width = "0";
        document.getElementById('wildcard').style.width = "0";
        document.getElementById('closebutton').style.display = "none";
    }
}

