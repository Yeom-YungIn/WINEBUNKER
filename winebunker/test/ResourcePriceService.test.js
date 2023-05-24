const ResourcePriceService = require("../src/service/ResourcePriceService");
const db = require("../src/models");


const resourceServicePrice = new ResourcePriceService(db);

afterEach(() => {
    db.sequelize.close();
});

test('리소스 가격 등록', async () => {
    const transaction = await db.sequelize.transaction();

    const request = JSON.parse('{"resourceId":"8f1762cc-08ff-4d9a-9876-592e1acb3eb4", "price": 10000, "store":"현대유통", "capacity":"750"}')

    const saveResourcePrice = await resourceServicePrice.saveResourcePrice(request, transaction)

    expect(parseInt(saveResourcePrice.price)).toEqual(request.price)
    expect(saveResourcePrice.store).toEqual(request.store)
    expect(saveResourcePrice.capacity).toEqual(request.capacity)

    await transaction.commit()
})