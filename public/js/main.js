$( document ).ready(function() {
    $(".parent-spinner").fadeOut(1000)
 });


 function deletePOST(id){
     document.getElementById('inputID').value = id
 }


 function editPost(id){
    let title = document.getElementById('title').innerText
    let desc = document.getElementById('desc').innerText
    document.getElementById('titlePOST').value = title
    document.getElementById('descPOST').value = desc
    document.getElementById('postID').value = id
 }
 