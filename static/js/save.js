var canvas = document.getElementById('canvas');
var saveButton = document.getElementById('submit');

saveButton.addEventListener('click',saveImage);

 function saveImage(){

    var data = canvas.toDataURL();
    
    var request = new XMLHttpRequest();
    
    request.onreadystatechange = function(){
        if(request.readyState == 4 && request.status == 200){
            var response = request.responseText;
            window.open(data, '_blank', 'location=0, menubar=0');
        }
    }
    
    request.open('POST', 'save.php', true);
    request.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    request.send('img='+data);
    
 }
 
 