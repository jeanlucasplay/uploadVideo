var input = document.getElementById("upload")
var caminho = "public/assets/${filename}";
var teste = caminho
console.log(teste)

function findvideo() {
    var video = document.getElementById('video');
    var source = document.getElementById('src');
    source.setAttribute('src', caminho);
    video.load();
    video.play();
}

function upar(input) {
    var freader = new FileReader();
    freader.readAsDataURL(input.files[0]);
    freader.onload = function () {
        document.getElementById("video").src = freader.result;
    }
}

function srcnovo() {
    var caminhonovo = document.getElementById("src");
    var video = document.getElementById("video");
    caminhonovo.setAttribute('src',"assets/video.mp4");
}

function salvar() {
    let confirmAction = confirm("Você irá substituir o vídeo pemanentemente");
    if (confirmAction == true) {
        //aqui salva
        //var data = new FormData();
        //data.append("", new Blob(input.files[0]), {type: "video/mp4"});
        //fetch("1.mp4", { method: "POST", body: data });
        alert("Vídeo substituído com sucesso");
    } else {
        // if false
        alert("o vídeo não foi substituído");
    }
}