function getdate(){
    var dateinfo=new Date();
    var thedate=dateinfo.toLocaleString();
    document.getElementById("datebar").innerHTML =thedate;
}
    setInterval("getdate();",1000);
