const db = require('../models');

const multer = require('multer')
const fs = require('fs')
const upload = multer()
const {createWorker} = require('tesseract.js')

const extract = '../views/src/pug/page/extract.pug';

const saveFile = async (file) => { new Promise((resolve, reject) =>
    fs.writeFile('./public/uploads/receipt.png', file.buffer, (err) => err ? reject('An error occurred: ' + err.message) : resolve({uploaded: true}))) }

exports.extract = async (req, res) => {
  // if (!req.file) {
  //   res.sendStatus(400, 'Cannot find file on request')
  // }
  // console.log(req)
  console.log(req.file)
  try {
    // await saveFile(req.file)
    const worker = await createWorker()
    await worker.load();
    await worker.loadLanguage('eng+fra+frm+kor+ita+ita_old+spa+spa_old+por+deu');
    await worker.initialize('eng+fra+frm+kor+ita+ita_old+spa+spa_old+por+deu');
    const text = await worker.recognize(req.file.buffer);
    await worker.terminate();

    var list = text.data.text.split('\n')
    const reg = /[\{\}\[\]\/?.,;:|\)*~`!^\-+<>@\#$%&§“\\\=\(\'\"]/gi

    for (var i = 0;  i < list.length; i ++){
      list[i] = list[i].replace(reg,'').trim()
    }
    list = list.filter((element) => element !== '')
  } catch (err) {
    console.log(err)
  }

  res.render(extract, {list: list})
}

exports.test = (req, res) => {
  res.send("extract")
}