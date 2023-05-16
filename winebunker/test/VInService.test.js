const VinService = require("../src/service/VinService");
const db = require("../src/models");

const vinService = new VinService(db);

test('vinName 조건 검색', async () => {
    const vinName = 'test', offset = 0, limit = 1;
    const findWhere = await vinService.findVinWhere(vinName, offset, limit)
    expect(findWhere.length).toBe(limit)
    expect(findWhere[0].vinName).toEqual('test')
})