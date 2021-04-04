$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/login.feature");
formatter.feature({
  "name": "Login",
  "description": "  I should be able the login to functionality",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@regression"
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is on the login page",
  "keyword": "Given "
});
formatter.match({
  "location": "step_definitions.LoginSteps.user_is_on_the_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Login with valid credentials using Login button",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@regression"
    },
    {
      "name": "@Positive"
    }
  ]
});
formatter.step({
  "name": "User enter the username as \"tomsmith\" and password as \"SuperSecretPassword!\"",
  "keyword": "And "
});
formatter.match({
  "location": "step_definitions.LoginSteps.user_enter_the_username_and_password(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on login button",
  "keyword": "Then "
});
formatter.match({
  "location": "step_definitions.LoginSteps.click_on_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Verify that you are in login page",
  "keyword": "Then "
});
formatter.match({
  "location": "step_definitions.LoginSteps.verify_that_you_are_in_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Login with invalid credentials",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Negative"
    }
  ]
});
formatter.step({
  "name": "User enter the \"\u003cusername\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "Click on login button",
  "keyword": "Then "
});
formatter.step({
  "name": "Verify the error message",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ]
    },
    {
      "cells": [
        "tomsmith1",
        "SuperSecretPassword!"
      ]
    },
    {
      "cells": [
        "tomsmith",
        "SuperSecretPassword!123"
      ]
    },
    {
      "cells": [
        "tomsmith123",
        "SuperSecretPassword!123"
      ]
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is on the login page",
  "keyword": "Given "
});
formatter.match({
  "location": "step_definitions.LoginSteps.user_is_on_the_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Login with invalid credentials",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@regression"
    },
    {
      "name": "@Negative"
    }
  ]
});
formatter.step({
  "name": "User enter the \"tomsmith1\" and \"SuperSecretPassword!\"",
  "keyword": "And "
});
formatter.match({
  "location": "step_definitions.LoginSteps.user_enter_the_and(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on login button",
  "keyword": "Then "
});
formatter.match({
  "location": "step_definitions.LoginSteps.click_on_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Verify the error message",
  "keyword": "Then "
});
formatter.match({
  "location": "step_definitions.LoginSteps.verify_the_error_message()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is on the login page",
  "keyword": "Given "
});
formatter.match({
  "location": "step_definitions.LoginSteps.user_is_on_the_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Login with invalid credentials",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@regression"
    },
    {
      "name": "@Negative"
    }
  ]
});
formatter.step({
  "name": "User enter the \"tomsmith\" and \"SuperSecretPassword!123\"",
  "keyword": "And "
});
formatter.match({
  "location": "step_definitions.LoginSteps.user_enter_the_and(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on login button",
  "keyword": "Then "
});
formatter.match({
  "location": "step_definitions.LoginSteps.click_on_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Verify the error message",
  "keyword": "Then "
});
formatter.match({
  "location": "step_definitions.LoginSteps.verify_the_error_message()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is on the login page",
  "keyword": "Given "
});
formatter.match({
  "location": "step_definitions.LoginSteps.user_is_on_the_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Login with invalid credentials",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@regression"
    },
    {
      "name": "@Negative"
    }
  ]
});
formatter.step({
  "name": "User enter the \"tomsmith123\" and \"SuperSecretPassword!123\"",
  "keyword": "And "
});
formatter.match({
  "location": "step_definitions.LoginSteps.user_enter_the_and(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on login button",
  "keyword": "Then "
});
formatter.match({
  "location": "step_definitions.LoginSteps.click_on_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Verify the error message",
  "keyword": "Then "
});
formatter.match({
  "location": "step_definitions.LoginSteps.verify_the_error_message()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});