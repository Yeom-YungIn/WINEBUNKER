const db = require('../models');

const express = require('express')
const multer = require('multer')
const fs = require('fs')
const upload = multer()
const {createWorker} = require('tesseract.js')

const search = '../views/src/pug/page/search.pug';

exports.search = async (req, res) => {
  console.log(req.query.search)
  const resource = await db.resource.findAll({
    attributes: ['id', 'vin', 'publisherId', 'issued'],
    include: [
      {
        model: db.vin,
        as: 'vinInfo',
        attributes: ['vinSn', 'vinName'],
        where: {'vin_name': req.query.search}
      },
    ]
  });

  res.render(search, { resource })
};

const saveFile = async (file) => { new Promise((resolve, reject) =>
    fs.writeFile('./public/uploads/receipt.png', file.buffer, (err) => err ? reject('An error occurred: ' + err.message) : resolve({uploaded: true}))) }

exports.extract = async (req, res) => {
  if (!req.file)
    res.sendStatus(400, 'Cannot find file on request')

  try {
    // await saveFile(req.file)
    const worker = await createWorker()

    await worker.load();
    await worker.loadLanguage('eng');
    await worker.initialize('eng');
    const { data: { text } } = await worker.recognize(`./winebunker/src/public/textbook.png`);
    await worker.terminate();
    console.log('ㅡㅡㅡㅡㅡㅡㅡ')
    console.log(text)
  } catch (err) {
    console.log(err)
  }

}