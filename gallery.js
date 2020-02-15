function upDate(previewPic){

    var image_src = previewPic.getAttribute("src");
    var image_alt = previewPic.getAttribute("alt");

    image =  document.getElementById('image');

    image.style.backgroundImage = "url('" + image_src + "')";
    image.innerHTML = image_alt;
 }
 
   function unDo(undo){

    image = document.getElementById('image');

    image.style.backgroundImage = "url('')";
    
    image.innerHTML = "Hover over an image below to display here";
   
 }