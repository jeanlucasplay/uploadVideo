const express = require('express');
let router = express.Router();
const multer = require("multer");

const path = require("path");
let fs = require ('fs')
let arquivos = fs.readdirSync("public/assets/")


//inicio
arquivos.forEach(removemp4)// executa função removemp4
function removemp4(filename,id){ // Remove final .mp4 e transfroma em inteiro
  arquivos[id]=filename.replace(".mp4","");
  arquivos[id]=parseInt(arquivos[id]);
}

function bubbleSort (arr) { // Função de ordernação decrescente
  let len = arr.length;
  let checked;
   do {
    checked = false;
     for (let i = 0; i < len; i++) {
      if (arr[i] < arr[i + 1]) {
        let tmp = arr[i];
        arr[i] = arr[i + 1]
        arr[i + 1] = tmp;
        checked = true;
      }
    }
  } while (checked);
  return arr;
};


let fileNameOld = bubbleSort(arquivos); // Executando a função bubble Sort

fileNameOld.forEach(removevideos)// executa função removemp4
function removevideos(video,id){ // //vamos excluir os difenretes de fileNameOld[0]
    if (id != 0){
            fs.unlinkSync("public/assets/"+fileNameOld[id]+".mp4");
    }
}

fileNameOld = fileNameOld[0]+".mp4";
//console.log(fileNameOld);
//fim


// Função de salvamento
const storage = multer.diskStorage({
  destination: function(req,file,cb){// Definindo local de armazenamento
    cb(null,"public/assets/");
  },
  filename: function (req,file,cb) {// Definindo nome do arquivo
    var data = new Date();
    cb(null,
        data.getFullYear().toString()
        +n (data.getMonth().toString())
        +n (data.getDate().toString())
        +n (data.getHours().toString())
        +n (data.getMinutes().toString())
        +n (data.getSeconds().toString())
        +".mp4");
  }
})

function n(num, len = 2) { //faz o número ficar com 2 digitos
    return `${num}`.padStart(len, '0');
}



const upload = multer({storage});

/*3 GET home page. */
router.get('/', (req, res) => {
    res.render('index', { titleIndica: 'Indicadores',fileNameOld  });
});

router.get('/cadastro', (req, res) => {
    res.render('users', { titleCadastro: 'Cadastro'});
});

router.post('/public/assets',upload.single("file"),(req,res) => {
  arquivos = fs.readdirSync("public/assets/")
  arquivos.forEach(removemp4)// executa função removemp4
  fileNameOld = bubbleSort(arquivos); // Executando a função bubble Sort
    try {
        fileNameOld.forEach(removevideos)// executa função removemp4
    }catch {"deu falha"}
  fileNameOld = fileNameOld[0]+".mp4";
  res.redirect('/');
});

module.exports = router;