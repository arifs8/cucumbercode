$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Users/arifs3/eclipse-workspace/FreeCrmBDDFrameworks/src/main/java/Features/contacts.feature");
formatter.feature({
  "line": 1,
  "name": "Free WebWorl Create Contact",
  "description": "",
  "id": "free-webworl-create-contact",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 3,
      "value": "# With Example keyword"
    }
  ],
  "line": 4,
  "name": "Create a new Contact scenatrio",
  "description": "",
  "id": "free-webworl-create-contact;create-a-new-contact-scenatrio",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 6,
  "name": "User is on Login Page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "Title of login page",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "User click on \"\u003cusername\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "User Click on Login Button",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "User is on Home Page1",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "user moves to new conatct page",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "user enters \"\u003cfirstname\u003e\" and \"\u003clastname\u003e\" and \"\u003cemail\u003e\" and \"\u003cemployee\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "close the browser",
  "keyword": "Then "
});
formatter.examples({
  "line": 15,
  "name": "",
  "description": "",
  "id": "free-webworl-create-contact;create-a-new-contact-scenatrio;",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "firstname",
        "lastname",
        "email",
        "employee"
      ],
      "line": 16,
      "id": "free-webworl-create-contact;create-a-new-contact-scenatrio;;1"
    },
    {
      "cells": [
        "arifsyed83@gmail.com",
        "Syedarif@1",
        "Sreshma",
        "shaik",
        "1arifreshma786@gmail.com",
        "qqqq"
      ],
      "line": 17,
      "id": "free-webworl-create-contact;create-a-new-contact-scenatrio;;2"
    },
    {
      "cells": [
        "arifsyed83@gmail.com",
        "Syedarif@1",
        "Afroz",
        "shaik",
        "afroz786@gmail.com",
        "qqqq"
      ],
      "line": 18,
      "id": "free-webworl-create-contact;create-a-new-contact-scenatrio;;3"
    },
    {
      "cells": [
        "arifsyed83@gmail.com",
        "Syedarif@1",
        "Altaf",
        "shaik",
        "altaf786@gmail.com",
        "qqqq"
      ],
      "line": 19,
      "id": "free-webworl-create-contact;create-a-new-contact-scenatrio;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 17,
  "name": "Create a new Contact scenatrio",
  "description": "",
  "id": "free-webworl-create-contact;create-a-new-contact-scenatrio;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 6,
  "name": "User is on Login Page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "Title of login page",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "User click on \"arifsyed83@gmail.com\" and \"Syedarif@1\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "User Click on Login Button",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "User is on Home Page1",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "user moves to new conatct page",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "user enters \"Sreshma\" and \"shaik\" and \"1arifreshma786@gmail.com\" and \"qqqq\"",
  "matchedColumns": [
    2,
    3,
    4,
    5
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefination.user_is_on_Login_Page()"
});
formatter.result({
  "duration": 8040611901,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.title_of_login_page()"
});
formatter.result({
  "duration": 13395299,
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
  "duration": 408225499,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.user_Click_on_Login_Button()"
});
formatter.result({
  "duration": 4118832200,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.user_is_on_Home_Page()"
});
formatter.result({
  "duration": 19462800,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.user_moves_to_new_conatct_page()"
});
formatter.result({
  "duration": 8648861199,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Sreshma",
      "offset": 13
    },
    {
      "val": "shaik",
      "offset": 27
    },
    {
      "val": "1arifreshma786@gmail.com",
      "offset": 39
    },
    {
      "val": "qqqq",
      "offset": 70
    }
  ],
  "location": "LoginStepDefination.user_enters_and_and_and(String,String,String,String)"
});
formatter.result({
  "duration": 3755070201,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.close_the_browser()"
});
formatter.result({
  "duration": 15480451699,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "Create a new Contact scenatrio",
  "description": "",
  "id": "free-webworl-create-contact;create-a-new-contact-scenatrio;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 6,
  "name": "User is on Login Page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "Title of login page",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "User click on \"arifsyed83@gmail.com\" and \"Syedarif@1\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "User Click on Login Button",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "User is on Home Page1",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "user moves to new conatct page",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "user enters \"Afroz\" and \"shaik\" and \"afroz786@gmail.com\" and \"qqqq\"",
  "matchedColumns": [
    2,
    3,
    4,
    5
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefination.user_is_on_Login_Page()"
});
formatter.result({
  "duration": 5327947400,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.title_of_login_page()"
});
formatter.result({
  "duration": 13841199,
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
  "duration": 580081500,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.user_Click_on_Login_Button()"
});
formatter.result({
  "duration": 4150253301,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.user_is_on_Home_Page()"
});
formatter.result({
  "duration": 20535001,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.user_moves_to_new_conatct_page()"
});
formatter.result({
  "duration": 8335809899,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Afroz",
      "offset": 13
    },
    {
      "val": "shaik",
      "offset": 25
    },
    {
      "val": "afroz786@gmail.com",
      "offset": 37
    },
    {
      "val": "qqqq",
      "offset": 62
    }
  ],
  "location": "LoginStepDefination.user_enters_and_and_and(String,String,String,String)"
});
formatter.result({
  "duration": 3716731600,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.close_the_browser()"
});
formatter.result({
  "duration": 15598160800,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "Create a new Contact scenatrio",
  "description": "",
  "id": "free-webworl-create-contact;create-a-new-contact-scenatrio;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 6,
  "name": "User is on Login Page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "Title of login page",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "User click on \"arifsyed83@gmail.com\" and \"Syedarif@1\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "User Click on Login Button",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "User is on Home Page1",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "user moves to new conatct page",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "user enters \"Altaf\" and \"shaik\" and \"altaf786@gmail.com\" and \"qqqq\"",
  "matchedColumns": [
    2,
    3,
    4,
    5
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefination.user_is_on_Login_Page()"
});
formatter.result({
  "duration": 6252213699,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.title_of_login_page()"
});
formatter.result({
  "duration": 15564701,
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
  "duration": 516580200,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.user_Click_on_Login_Button()"
});
formatter.result({
  "duration": 4398519300,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.user_is_on_Home_Page()"
});
formatter.result({
  "duration": 20125600,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.user_moves_to_new_conatct_page()"
});
formatter.result({
  "duration": 7835449699,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Altaf",
      "offset": 13
    },
    {
      "val": "shaik",
      "offset": 25
    },
    {
      "val": "altaf786@gmail.com",
      "offset": 37
    },
    {
      "val": "qqqq",
      "offset": 62
    }
  ],
  "location": "LoginStepDefination.user_enters_and_and_and(String,String,String,String)"
});
formatter.result({
  "duration": 3661728201,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.close_the_browser()"
});
formatter.result({
  "duration": 15404666399,
  "status": "passed"
});
});