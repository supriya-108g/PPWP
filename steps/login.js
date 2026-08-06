When('I click on the Login button', async ({}) => {
  // Step: And I click on the Login button
  // From: features\login.feature:10:5
});

Then('I should be redirected to the Home page dashboard', async ({}) => {
  // Step: Then I should be redirected to the Home page dashboard
  // From: features\login.feature:11:5
});

Then('the dashboard widgets should be visible', async ({}) => {
  // Step: And the dashboard widgets should be visible
  // From: features\login.feature:12:5
});

When('I enter credentials {string} and {string}', async ({}, arg, arg1) => {
  // Step: When I enter credentials "<Username>" and "<Password>"
  // From: features\login.feature:16:5
});

Then('I should see a login error message containing {string}', async ({}, arg) => {
  // Step: Then I should see a login error message containing "<ExpectedError>"
  // From: features\login.feature:18:5
});