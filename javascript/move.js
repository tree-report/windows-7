document.getElementById("windows").addEventListener("dragstart",function(event){
    event.dataTransfer.setData("text/plain",event.target.id);
    });
    document.e=getElementById("windows").addEventListener("dragover",function(event){
    event.preventDefault();
    });
    event.dataTransfer.effectAllowed = "move";