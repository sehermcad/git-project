@regression
Feature: Login
  I should be able the login to functionality
  Background:
    Given User is on the login page

  @Positive
  Scenario: Login with valid credentials using Login button
    And User enter the username as "tomsmith" and password as "SuperSecretPassword!"
    Then Click on login button
    Then Verify that you are in login page

#Testing with negative scenario.
  @Negative
  Scenario Outline: Login with invalid credentials
    And User enter the "<username>" and "<password>"
    Then Click on login button
    Then Verify the error message
    Examples:
      | username    | password                |
      | tomsmith1   | SuperSecretPassword!    |
      | tomsmith    | SuperSecretPassword!123 |
      | tomsmith123 | SuperSecretPassword!123 |