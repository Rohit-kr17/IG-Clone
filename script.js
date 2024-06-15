var arr = [
    {dp: "https://images.unsplash.com/photo-1618747946260-9511b46b1ac7?q=80&w=1918&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", img: "https://images.unsplash.com/photo-1635359037330-4ead33d99bc9?q=80&w=1885&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {dp: "https://images.unsplash.com/photo-1628266857311-f759c7a73bc6?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", img: "https://images.unsplash.com/photo-1635358154434-5254df331548?q=80&w=1885&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {dp: "https://images.unsplash.com/photo-1608232796550-4a9a2673e95b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", img: "https://images.unsplash.com/photo-1627216396463-b50a7253eadf?q=80&w=1885&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {dp: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", img: "https://images.unsplash.com/photo-1469460340997-2f854421e72f?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    { dp: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", img: "https://images.unsplash.com/photo-1506610154363-2e1a8c573d2d?q=80&w=2044&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    { dp: "https://images.unsplash.com/photo-1635358155715-a5b1cab0a830?q=80&w=1936&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", img: "https://images.unsplash.com/photo-1635358155722-078cb1ca8080?q=80&w=1885&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
   
    
]

var clutter = ""
arr.forEach(function(elem, idx){
    clutter += `<div class="story">
    <img id ="${idx}" src="${elem.dp}" alt="">
    </div>`
})

document.querySelector("#storyian").innerHTML = clutter

var grow = 0
document.querySelector("#storyian").addEventListener("click", function(dets){
    document.querySelector("#full-scr").style.display = "block"
    document.querySelector("#full-scr").style.backgroundImage = `url(${arr[dets.target.id].img})`
    // console.log(arr[dets.target.id].img)
    setTimeout(function(){
        document.querySelector("#full-scr").style.display = "none"
    },3000) 
    if(grow<100){
        setInterval(function(){
            document.querySelector("#growth").style.width = `${grow++}%`  
        },30)
    }else{
        grow = 0
    }
    
})

document.querySelectorAll(".heart-button").forEach(function (likeButton) {
    likeButton.addEventListener("click", function () {
        toggleLike(this);
    });
});

document.querySelectorAll(".post-image").forEach(function (postImage) {
    postImage.addEventListener("dblclick", function () {
        let heartButton = this.parentElement.querySelector(".heart-button");
        toggleLike(heartButton);
    });
});

function toggleLike(button) {
    button.classList.toggle("liked");
    if (button.classList.contains("liked")) {
        button.innerHTML = "&#9829;"; // filled heart
    } else {
        button.innerHTML = "&#9825;"; // empty heart
    }
}
