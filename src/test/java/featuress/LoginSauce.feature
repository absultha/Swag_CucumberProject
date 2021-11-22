@LoginFeature
Feature: Login Feature Scenarios

  @Regression
  Scenario Outline: Verify Login Functionality with correct username and password
    Given user has launched the Swag Labs Application
    When User enters username "<UserName>" and  password "<Password>"
    And User clicks on the Login Button
    Then User should be landed on the Products Page "<Product>"

    Examples: 
      | UserName      | Password     | Product   |
      | standard_user | secret_sauce | PRODUCTS  |

  @Regression
  Scenario Outline: Verify the error message when we give incorrect username and password
    Given user has launched the Swag Labs Application
    When User enters username "<UserName>" and  password "<Password>"
    And User clicks on the Login Button
    Then User should be getting the "<Error>"

    Examples: 
      | UserName      | Password        | Error                                                                     |
      | standard_user | secret_sauce234 | Epic sadface: Username and password do not match any user in this service |
