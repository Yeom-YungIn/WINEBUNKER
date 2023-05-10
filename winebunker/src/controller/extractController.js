const db = require('../models');
const {createWorker} = require('tesseract.js')

const index = '../views/src/pug/index.pug';
const extract = '../views/src/pug/page/extract.pug';

exports.extract = async (req, res) => {
  if (!req.file) {
    const resource = await db.resource.findAll({
      attributes: ['id', 'vin', 'publisherId', 'issued'],
      limit: 10,
      include: [
        {
          model: db.vin,
          as: 'vinInfo',
          attributes: ['vinSn', 'vinName']
        }
      ]
    });
    res.render(index, { resource })
    return resource;
  }
  try {
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
  return;
  console.log('~~~~~~~~~~~~')
}

exports.test = (req, res) => {
  res.send("extract")
}