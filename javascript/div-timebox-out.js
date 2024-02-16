function show_hidden(timebox){
    return document.getElementById(timebox);
}
show_hidden('datebar').onclick=function(){
    show_hidden('timebox').style.display="none";
}
show_hidden('datebar').onclick=function(){
    show_hidden('timebox').style.display="block";
}