$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Users/arifs3/eclipse-workspace/FreeCrmBDDFrameworks/src/main/java/Features/login.feature");
formatter.feature({
  "line": 1,
  "name": "Login Action",
  "description": "",
  "id": "login-action",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 5,
      "value": "# Without Example Keyword"
    },
    {
      "line": 6,
      "value": "#Scenario: Successful Login With Valid Credentials"
    },
    {
      "line": 7,
      "value": "#"
    },
    {
      "line": 8,
      "value": "#Given User is on Login Page"
    },
    {
      "line": 9,
      "value": "#When Title of login page"
    },
    {
      "line": 10,
      "value": "#Then User click on \"arifsyed83@gmail.com\" and \"Syedarif@1\""
    },
    {
      "line": 11,
      "value": "#Then User Click on Login Button"
    },
    {
      "line": 12,
      "value": "#Then User is on Home Page1"
    },
    {
      "line": 13,
      "value": "#Then close the browser"
    },
    {
      "line": 17,
      "value": "# With Example keyword"
    }
  ],
  "line": 18,
  "name": "Successful Login With Valid Credentials",
  "description": "",
  "id": "login-action;successful-login-with-valid-credentials",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 20,
  "name": "User is on Login Page",
  "keyword": "Given "
});
formatter.step({
  "line": 21,
  "name": "Title of login page",
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "User click on \"\u003cusername\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "User Click on Login Button",
  "keyword": "Then "
});
formatter.step({
  "line": 24,
  "name": "User is on Home Page1",
  "keyword": "Then "
});
formatter.step({
  "line": 25,
  "name": "close the browser",
  "keyword": "Then "
});
formatter.examples({
  "line": 27,
  "name": "",
  "description": "",
  "id": "login-action;successful-login-with-valid-credentials;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 28,
      "id": "login-action;successful-login-with-valid-credentials;;1"
    },
    {
      "cells": [
        "arifsyed83@gmail.com",
        "Syedarif@1"
      ],
      "line": 29,
      "id": "login-action;successful-login-with-valid-credentials;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 29,
  "name": "Successful Login With Valid Credentials",
  "description": "",
  "id": "login-action;successful-login-with-valid-credentials;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 20,
  "name": "User is on Login Page",
  "keyword": "Given "
});
formatter.step({
  "line": 21,
  "name": "Title of login page",
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "User click on \"arifsyed83@gmail.com\" and \"Syedarif@1\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "User Click on Login Button",
  "keyword": "Then "
});
formatter.step({
  "line": 24,
  "name": "User is on Home Page1",
  "keyword": "Then "
});
formatter.step({
  "line": 25,
  "name": "close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefination.user_is_on_Login_Page()"
});
formatter.result({
  "duration": 9879583700,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.title_of_login_page()"
});
formatter.result({
  "duration": 21676600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "arifsyed83@gmail.com",
      "offset": 15
    },
    {
      "val": "Syedarif@1",
      "offset": 42
    }
  ],
  "location": "LoginStepDefination.user_click_on_Username_and_Password_fields(String,String)"
});
formatter.result({
  "duration": 580450500,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.user_Click_on_Login_Button()"
});
formatter.result({
  "duration": 144499400,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.user_is_on_Home_Page()"
});
formatter.result({
  "duration": 5038201200,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.close_the_browser()"
});
formatter.result({
  "duration": 624464800,
  "status": "passed"
});
});