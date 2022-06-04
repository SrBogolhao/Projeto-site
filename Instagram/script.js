var video=window.document.querySelector(`video`);

navigator.mediaDevices.getUserMedia({video:true})
.then(stream =>{
    video.srcObject = strea;
    video.play();
})
.catch(erro=>{
    console.log(error);
})

window.document.querySelector(`button`).addEventListener(`clik`,() =>{
    var canvas = document.querySelector(`canvas`);
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    var context = canvas.getContext(`2d`);
    context.drawImage(`video`, 0, 0);
    link.window = `foto.png`;
    link. href = canvas.toDataURL();
    link.textContent = `clique para baixar a imagem`;
    document.body.appendChild(link);
})