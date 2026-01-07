import {test, expect} from '@playwright/test';

test ('assertions demo', async({page}) => {

    await page.goto('https://kitchen.applitools.com/');
    await page.pause();

    // Assertions
    // check element present or not
    await expect (page.getByRole('heading', { name: 'The Kitchen' })).toHaveCount(1);
    
    if (await page.$('heading', {name: 'The Kitchen'})){

        await page.getByRole('heading', {name: 'The Kitchen'}).click();

    }

    // check element is hidden or visible

    await expect (page.getByRole('heading', { name: 'The Kitchen' })).toBeVisible();
    await expect.soft (page.getByRole('heading', { name: 'The Kitchen' })).toBeHidden();

    // check element is enabled or disabled

    await expect (page.getByRole('heading', { name: 'The Kitchen' })).toBeEnabled();
    // await expect.soft (page.getByRole('heading', { name: 'The Kitchen' })).toBeDisabled();

    // check value matches or not

    await expect (page.getByRole('heading', { name: 'The Kitchen' })).toHaveText('The Kitchen');
    await expect.soft (page.getByRole('heading', { name: 'The Kitchen' })).not.toHaveText('The Kitchen');

    // check attribute value
    await expect (page.getByRole('heading', { name: 'The Kitchen' })).toHaveAttribute('class', 'chakra-heading css-dpmy2a');
    await expect (page.getByRole('heading', { name: 'The Kitchen' })).toHaveClass('chakra-heading css-dpmy2a');

    // check page URL and Title

    await expect(page).toHaveURL('https://kitchen.applitools.com/');
    await expect(page).toHaveTitle(/.*Kitchen/);

    // visual Validation with Screenshorts
    
    await page.pause();
    await expect(page).toHaveScreenshot();

})