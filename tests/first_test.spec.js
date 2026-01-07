// const {test, expect} = require('@playwright/test')
// const {hello, helloworld} = require ('./Demo/hello')

// console.log (hello());
// console.log(helloworld());

const {test, expect} = require ('@playwright/test');

test('My first program', async ({page})=> {

    await page.goto('https://google.com')
    await expect(page).toHaveTitle('Google')
})