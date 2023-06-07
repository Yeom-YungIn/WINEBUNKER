var deployTest = require("npm-deploy-test-js")

test("1 is 1", () => {
    expect(1).toBe(1);
});

test("npm deploy test return Say Hello", () => {
    deployTest.sayHello();
})