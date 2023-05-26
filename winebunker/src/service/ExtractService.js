const db = require("../models");

class ExtractService {
    constructor(worker) {
        this.worker = worker
    }

    async createWorker(){
        const worker = await this.worker()
        await worker.load()
        await worker.loadLanguage('eng+fra+frm+kor+ita+spa+por+deu');
        await worker.initialize('eng+fra+frm+kor+ita+spa+por+deu');
        return worker
    }

    async extractFile(req, res, next) {
        try {
            const newWorker = await this.createWorker()
            const text = await newWorker.recognize(req.file.buffer);
            await newWorker.terminate();

            var list = text.data.text.split('\n')
            const reg = /[\{\}\[\]\/?.,;:|\)*~`!^\-+<>@\#$%&§“\\\=\(\'\"]/gi

            for (var i = 0;  i < list.length; i ++){
                list[i] = list[i].replace(reg,'').trim()
            }
            list = list.filter((element) => element !== '')
        } catch (e) {
            console.log(e)
            return e
        }
        return list
    }
}

module.exports = ExtractService;
