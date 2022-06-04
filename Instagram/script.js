var video = document.querySelector(`video`);

navigator.mediaDevices.getUserMedia({video:true})
.then(stream =>{
    video.srcObject = stream;
    video.play();
})
.catch(error=>{
    console.log(error);
})

    var canvas = document.querySelector(`canvas`);
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    var context = canvas.getContext(`2d`);
    context.drawImage(`video`, 0, 0);
    link.window = `photo.png`;
    link. href = canvas.toDataURL();
    link.textContent = `clique para baixar a imagem`;
    document.body.appendChild(link);
