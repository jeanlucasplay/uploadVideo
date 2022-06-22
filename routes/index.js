var express = require('express');
var router = express.Router();
const multer = require("multer");

const {uuid} = require('uuidv4')
const path = require("path");
let fs = require ('fs')

fs.readdirSync("./public/assets",  (err, file) => {
  if (err)
    console.log(err);
  else {
    console.log("\nNome do arquivo no diretório atual:");
    file.forEach(file => {
      console.log(file);
      file.replace()
    })
  }
})

const storage = multer.diskStorage({
  destination: function(req,file,cb){
    cb(null,"public/assets/");
  },
  filename: function (req,file,cb) {
    cb(null, file.originalname)
  }
})

const upload = multer({storage});

/*3 GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Indicadores' });

});

router.post('/public/assets',upload.single("file"),(req,res) => {
  res.redirect('/');

});

module.exports = router;