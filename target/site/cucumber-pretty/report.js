$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("accountManagement.feature");
formatter.feature({
  "line": 2,
  "name": "Account Management",
  "description": "",
  "id": "account-management",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@accountManagement"
    }
  ]
});
formatter.scenarioOutline({
  "line": 6,
  "name": "Create account with valid credentials",
  "description": "",
  "id": "account-management;create-account-with-valid-credentials",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 5,
      "name": "@CreateAccount"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "user is on customer create account page",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "user enters \"\u003cFirstName\u003e\" \"\u003cLastName\u003e\" \"\u003cEmail\u003e\" \"\u003cPassword\u003e\" \"\u003cConfirmPassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "user clicks on create account button",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "customer account page is displayed",
  "keyword": "Then "
});
formatter.examples({
  "line": 14,
  "name": "",
  "description": "",
  "id": "account-management;create-account-with-valid-credentials;",
  "rows": [
    {
      "cells": [
        "FirstName",
        "LastName",
        "Email",
        "Password",
        "ConfirmPassword"
      ],
      "line": 15,
      "id": "account-management;create-account-with-valid-credentials;;1"
    },
    {
      "cells": [
        "Timi",
        "Fab",
        "tim26@yahoo.com",
        "Roseberry.",
        "Roseberry."
      ],
      "line": 16,
      "id": "account-management;create-account-with-valid-credentials;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 16,
  "name": "Create account with valid credentials",
  "description": "",
  "id": "account-management;create-account-with-valid-credentials;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@accountManagement"
    },
    {
      "line": 5,
      "name": "@CreateAccount"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "user is on customer create account page",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "user enters \"Timi\" \"Fab\" \"tim26@yahoo.com\" \"Roseberry.\" \"Roseberry.\"",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "user clicks on create account button",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "customer account page is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "AccountManagementStep.userIsOnCustomerCreateAccountPage()"
});
formatter.result({
  "duration": 13786398600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Timi",
      "offset": 13
    },
    {
      "val": "Fab",
      "offset": 20
    },
    {
      "val": "tim26@yahoo.com",
      "offset": 26
    },
    {
      "val": "Roseberry.",
      "offset": 44
    },
    {
      "val": "Roseberry.",
      "offset": 57
    }
  ],
  "location": "AccountManagementStep.userEnters(String,String,String,String,String)"
});
formatter.result({
  "duration": 1354852200,
  "status": "passed"
});
formatter.match({
  "location": "AccountManagementStep.userClicksOnCreateAccountButton()"
});
formatter.result({
  "duration": 6381825600,
  "status": "passed"
});
formatter.match({
  "location": "AccountManagementStep.customerAccountPageIsDisplayed()"
});
formatter.result({
  "duration": 77186700,
  "status": "passed"
});
});