import {test, expect} from '@playwright/test';

test.skip ('test1', async({page}) => {

    // 

})

test ('not yet ready', async({page}) => {

    test.fail();

})

test.fixme('test to be fixed', async({page}) => {
    //...
})

test('slow test', async({page}) => {
    test.slow();
    // ...
})

test('skip this test', async ({ page, browserName }) => {
  test.skip(browserName === 'firefox', 'Still working on it');
});

//TAGS

test('test login page @smoke', async({}) => {
    // ...
    // opposite of grep 
    // --grep-invert "@smoke"
})