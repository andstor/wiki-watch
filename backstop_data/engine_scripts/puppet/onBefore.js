module.exports = async (page, scenario, vp) => {
  //await require('./loadCookies')(page, scenario);
  //do whatever is related to the login process
  await page.goto('https://ntnu.blackboard.com');
  await page.$eval('#altLogin', elem => elem.click());
  await page.type('#user_id', 'process.env.USERNAME');
  await page.type('#password', 'process.env.PASSWORD');
  await page.$eval('#entry-login', elem => elem.click());
  await page.waitFor(3000);
};
