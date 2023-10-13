const ResourceService = require("../src/service/ResourceService");
const db = require("../src/models");


const resourceService = new ResourceService(db);

afterEach(() => {
    db.sequelize.close();
});

test('리소스 목록 조회', async () => {
    const offset = 0, limit = 10;
    const findList = await resourceService.findAll(offset, limit)
    console.log(findList)
    expect(findList.length).toBe(limit)
})

test('리소스 vinName 조건 검색', async () => {
    const vinName = 'WENTE', offset = 0, limit = 2;
    const findResourceByName = await resourceService.findResourceByName(vinName, offset, limit)
    console.log(findResourceByName)
    expect(findResourceByName.length).toBe(limit)
    expect(findResourceByName[0].dataValues.findResourceByName.vinName).toEqual('test')
})

test('리소스 등록', async () => {
    const transaction = await db.sequelize.transaction();
    const request = JSON.parse('{"purchaseDate":"2023-05-22", "publisherId":"test", "vin":"1", "description":"테스트"}')

    const saveResource = await resourceService.saveResource(request, transaction)

    expect(saveResource.publisherId).toEqual(request.publisherId)
    expect(saveResource.vin).toEqual(request.vin)
    expect(saveResource.description).toEqual(request.description)

    await transaction.rollback();
})