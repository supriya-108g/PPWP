@login
Feature: SuiteCRM Login Functionality

  Background:
    Given I navigate to the SuiteCRM login page

  @Supriya 
  Scenario: Successful Login with Valid Credentials
    When I enter valid credentials from Excel sheet "LoginData" for scenario "Valid Login"
    And I click on the Login button
    Then I should be redirected to the Home page dashboard
    And the dashboard widgets should be visible

  @Supriya
  Scenario Outline: Unsuccessful Login with Invalid Credentials
    When I enter credentials "<Username>" and "<Password>"
    And I click on the Login button
    Then I should see a login error message containing "<ExpectedError>"