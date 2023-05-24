@accountManagement
Feature: Account Management


@CreateAccount
Scenario Outline: Create account with valid credentials
  Given user is on customer create account page
  When user enters "<FirstName>" "<LastName>" "<Email>" "<Password>" "<ConfirmPassword>"
  And user clicks on create account button
  Then customer account page is displayed



  Examples:
  |FirstName|LastName|Email|Password|ConfirmPassword|
  |Timi     |Fab     |tim26@yahoo.com|Roseberry.|Roseberry.|


  @duplicateAccount
  Scenario Outline: Create duplicate account with an existing credential
    Given user is on customer create account page
    When user enters "<FirstName>" "<LastName>" "<Email>" "<Password>" "<ConfirmPassword>"
    And user clicks on create account button
    Then error message displayed



    Examples:
      |FirstName|LastName|Email|Password|ConfirmPassword|
      |Timi     |Fab     |tim25@yahoo.com|Roseberry.|Roseberry.|

  @signIn
  Scenario Outline: Sign in with an existing credential
    Given user is on customer Sign in page
    When user enters "<Email>" "<Password>"
    And user clicks on Sign in button
    Then my account page is displayed



    Examples:
      |Email|Password|
      |tim25@yahoo.com|Roseberry.|


