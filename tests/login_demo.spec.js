const { expect,test } = require("@playwright/test");

test ('demo login test', async ({page})=> {
    await page.goto('https://demo.applitools.com/')
    // await page.pause();
    await page.getByRole('textbox', { name: 'Enter your username' }).fill('varun');
    await page.getByRole('textbox', { name: 'Enter your password' }).fill('vanu1234');
    await page.waitForSelector('text= Sign in', {timeout: 4000});
    // await expect(page.locator("text=sign in")).toHaveCount(1);
    await page.getByRole('link', { name: 'Sign in' }).click();

})


test ('demo login test 2', async ({page})=> {
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    // await page.pause();
    await page.getByRole('textbox', { name: 'Username' }).fill('Admin');
  await page.getByRole('textbox', { name: 'Password' }).fill('admin123');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByText('Reshab Patel').click();
  await page.getByRole('menuitem', { name: 'Logout' }).click();

})

test.only ('demo login test 3', async ({page})=> {

    await page.goto('https://admin-demo.nopcommerce.com/login?returnUrl=%2Fadmin%2F');
  await page.getByRole('textbox', { name: 'Email:' }).fill('admin@yourstore.com');
  await page.getByRole('textbox', { name: 'Password:' }).fill('admin');
  await page.getByRole('button', { name: 'Log in' }).click();

    // await page.pause();

})