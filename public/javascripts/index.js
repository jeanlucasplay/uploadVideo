// Desabilita botão de subtutuir caso não tenha nenhum arquivo selecionado
const fileInput = document.getElementById('upload');
fileInput.onchange = () => {
    if (fileInput.files.length > 0) {
        const fileName = document.getElementById('upload');
        fileName.textContent = fileInput.files[0].name;
        const submitButton = document.getElementById('submitButton');
        submitButton.removeAttribute('disabled')
    }
}

function upar(input) {
    var freader = new FileReader();
    freader.readAsDataURL(input.files[0]);
    freader.onload = function () {
        document.getElementById("video").src = freader.result;
    }
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