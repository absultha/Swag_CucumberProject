$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/java/featuress/LoginSauce.feature");
formatter.feature({
  "name": "Login Feature Scenarios",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@LoginFeature"
    }
  ]
});
formatter.scenarioOutline({
  "name": "Verify Login Functionality with correct username and password",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "name": "user has launched the Swag Labs Application",
  "keyword": "Given "
});
formatter.step({
  "name": "User enters username \"\u003cUserName\u003e\" and  password \"\u003cPassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "User clicks on the Login Button",
  "keyword": "And "
});
formatter.step({
  "name": "User should be landed on the Products Page \"\u003cProduct\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "UserName",
        "Password",
        "Product"
      ]
    },
    {
      "cells": [
        "standard_user",
        "secret_sauce",
        "PRODUCTS"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Verify Login Functionality with correct username and password",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@LoginFeature"
    },
    {
      "name": "@Regression"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user has launched the Swag Labs Application",
  "keyword": "Given "
});
formatter.match({
  "location": "Loginstepdefs.user_has_launched_the_swag_labs_application()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters username \"standard_user\" and  password \"secret_sauce\"",
  "keyword": "When "
});
formatter.match({
  "location": "Loginstepdefs.user_enters_username_something_and_password_something(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on the Login Button",
  "keyword": "And "
});
formatter.match({
  "location": "Loginstepdefs.user_clicks_on_the_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should be landed on the Products Page \"PRODUCTS\"",
  "keyword": "Then "
});
formatter.match({
  "location": "Loginstepdefs.user_should_be_landed_on_the_products_page_something(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Verify the error message when we give incorrect username and password",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "name": "user has launched the Swag Labs Application",
  "keyword": "Given "
});
formatter.step({
  "name": "User enters username \"\u003cUserName\u003e\" and  password \"\u003cPassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "User clicks on the Login Button",
  "keyword": "And "
});
formatter.step({
  "name": "User should be getting the \"\u003cError\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "UserName",
        "Password",
        "Error"
      ]
    },
    {
      "cells": [
        "standard_user",
        "secret_sauce234",
        "Epic sadface: Username and password do not match any user in this service"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Verify the error message when we give incorrect username and password",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@LoginFeature"
    },
    {
      "name": "@Regression"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user has launched the Swag Labs Application",
  "keyword": "Given "
});
formatter.match({
  "location": "Loginstepdefs.user_has_launched_the_swag_labs_application()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters username \"standard_user\" and  password \"secret_sauce234\"",
  "keyword": "When "
});
formatter.match({
  "location": "Loginstepdefs.user_enters_username_something_and_password_something(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on the Login Button",
  "keyword": "And "
});
formatter.match({
  "location": "Loginstepdefs.user_clicks_on_the_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should be getting the \"Epic sadface: Username and password do not match any user in this service\"",
  "keyword": "Then "
});
formatter.match({
  "location": "Loginstepdefs.user_should_be_getting_the_something(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/java/featuress/Product.feature");
formatter.feature({
  "name": "Login Feature",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@Product"
    }
  ]
});
formatter.scenarioOutline({
  "name": "Use is able to select the product on Products page",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User enters username \"\u003cUserName\u003e\" and  password \"\u003cPassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "User clicks on the Login Button",
  "keyword": "And "
});
formatter.step({
  "name": "user adds a product to the cart \"\u003cproduct\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "User see product is added to the cart",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "UserName",
        "Password",
        "product"
      ]
    },
    {
      "cells": [
        "standard_user",
        "secret_sauce",
        "Sauce Labs Backpack"
      ]
    }
  ]
});
formatter.background({
  "name": "Open the Login Page",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user has launched the Swag Labs Application",
  "keyword": "Given "
});
formatter.match({
  "location": "Loginstepdefs.user_has_launched_the_swag_labs_application()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Use is able to select the product on Products page",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Product"
    }
  ]
});
formatter.step({
  "name": "User enters username \"standard_user\" and  password \"secret_sauce\"",
  "keyword": "When "
});
formatter.match({
  "location": "Loginstepdefs.user_enters_username_something_and_password_something(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on the Login Button",
  "keyword": "And "
});
formatter.match({
  "location": "Loginstepdefs.user_clicks_on_the_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user adds a product to the cart \"Sauce Labs Backpack\"",
  "keyword": "And "
});
formatter.match({
  "location": "ProductCart.user_adds_a_product_to_the_cart_something(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User see product is added to the cart",
  "keyword": "Then "
});
formatter.match({
  "location": "ProductCart.user_see_product_is_added_to_the_cart()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});