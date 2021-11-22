@Product
Feature: Login Feature

  Background: Open the Login Page
    Given user has launched the Swag Labs Application

  Scenario Outline: Use is able to select the product on Products page
    When User enters username "<UserName>" and  password "<Password>"
    And User clicks on the Login Button
    And user adds a product to the cart "<product>"
    Then User see product is added to the cart

    Examples: 
      | UserName      | Password      | product             |
      | standard_user | secret_sauce  | Sauce Labs Backpack |
     
