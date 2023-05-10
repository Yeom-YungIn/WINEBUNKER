const indexCotroller = require("../src/controller/indexCotroller");

test('메인 조회', () => {
    const findList = indexCotroller.resourceList()
    console.log(findList)
})