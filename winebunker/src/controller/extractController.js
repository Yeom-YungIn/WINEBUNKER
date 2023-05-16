const db = require('../models');
const {createWorker} = require('tesseract.js')
const ResourceService = require("../service/ResourceService");
const ExtractService = require("../service/ExtractService");

const extract = '../views/src/pug/page/extract.pug';

const extractService = new ExtractService(createWorker);

exports.extract = async (req, res) => {
  if (!req.file) {
    res.render(extract, {list: ["이미지 파일을 업로드 해주세요"]})
    return;
  }
  try {
    list = await extractService.extractFile(req)
    res.render(extract, {list: list})
  } catch (err) {
    console.log(err)
    res.render(extract, {list: []})
  }
}

exports.test = (req, res) => {
}