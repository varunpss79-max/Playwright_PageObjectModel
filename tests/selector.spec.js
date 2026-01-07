import {test, expect} from '@playwright/test';

test ('selectors demo', async({page}) => {

   await page.goto ('https://www.saucedemo.com/')
 

   // using any object property
   await  page.click('id=user-name')
   await page.locator('id=user-name').fill('varun')

   // using css selector
   // #login-button
   await page.locator('#login-button').click();

     await page.pause();
   // using XPath
   await page.locator('//*[@id="password"]').fill('vaeun34')

   //using Text
   await page.locator('text=LOGIN').click();
   await page.locator('input:has-text("LOGIN")').click();

   // using getByRole and locator filter
//    await page.getByRole('listitem').filter({ hasText: 'Product 2' }).getByRole('button', { name: 'Add to cart' }).click();

// const newEmail = page.getByRole('button', { name: 'New' });
// const dialog = page.getByText('Confirm security settings');
// await expect(newEmail.or(dialog).first()).toBeVisible();
// if (await dialog.isVisible())
//   await page.getByRole('button', { name: 'Dismiss' }).click();
// await newEmail.click();

await expect (page).toHaveURL(/Dashboard/);
await expect(locator).toHaveURL(/dashboard/);

});