const queryGenerate = require('xlsx_query_generate')

test("1 is 1", () => {
    expect(1).toBe(1);
});

test('xlsx_query_generate test', async () => {
    const GQ = new queryGenerate.GenerateQueryC()
    const createPkQuery = await GQ.createPkQ("tableName")
    console.log(createPkQuery)
})