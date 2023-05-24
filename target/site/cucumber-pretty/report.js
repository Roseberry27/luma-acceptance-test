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
        "tim24@yahoo.com",
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
  "name": "user enters \"Timi\" \"Fab\" \"tim24@yahoo.com\" \"Roseberry.\" \"Roseberry.\"",
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
  "duration": 7250615900,
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
      "val": "tim24@yahoo.com",
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
  "duration": 1167823500,
  "status": "passed"
});
formatter.match({
  "location": "AccountManagementStep.userClicksOnCreateAccountButton()"
});
formatter.result({
  "duration": 1485348400,
  "status": "passed"
});
formatter.match({
  "location": "AccountManagementStep.customerAccountPageIsDisplayed()"
});
formatter.result({
  "duration": 44531100,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 20,
  "name": "Create duplicate account with an existing credential",
  "description": "",
  "id": "account-management;create-duplicate-account-with-an-existing-credential",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 19,
      "name": "@duplicateAccount"
    }
  ]
});
formatter.step({
  "line": 21,
  "name": "user is on customer create account page",
  "keyword": "Given "
});
formatter.step({
  "line": 22,
  "name": "user enters \"\u003cFirstName\u003e\" \"\u003cLastName\u003e\" \"\u003cEmail\u003e\" \"\u003cPassword\u003e\" \"\u003cConfirmPassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "user clicks on create account button",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "error message displayed",
  "keyword": "Then "
});
formatter.examples({
  "line": 28,
  "name": "",
  "description": "",
  "id": "account-management;create-duplicate-account-with-an-existing-credential;",
  "rows": [
    {
      "cells": [
        "FirstName",
        "LastName",
        "Email",
        "Password",
        "ConfirmPassword"
      ],
      "line": 29,
      "id": "account-management;create-duplicate-account-with-an-existing-credential;;1"
    },
    {
      "cells": [
        "Timi",
        "Fab",
        "tim24@yahoo.com",
        "Roseberry.",
        "Roseberry."
      ],
      "line": 30,
      "id": "account-management;create-duplicate-account-with-an-existing-credential;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 30,
  "name": "Create duplicate account with an existing credential",
  "description": "",
  "id": "account-management;create-duplicate-account-with-an-existing-credential;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@accountManagement"
    },
    {
      "line": 19,
      "name": "@duplicateAccount"
    }
  ]
});
formatter.step({
  "line": 21,
  "name": "user is on customer create account page",
  "keyword": "Given "
});
formatter.step({
  "line": 22,
  "name": "user enters \"Timi\" \"Fab\" \"tim24@yahoo.com\" \"Roseberry.\" \"Roseberry.\"",
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
  "line": 23,
  "name": "user clicks on create account button",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "error message displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "AccountManagementStep.userIsOnCustomerCreateAccountPage()"
});
formatter.result({
  "duration": 5172074500,
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
      "val": "tim24@yahoo.com",
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
  "duration": 1312625600,
  "status": "passed"
});
formatter.match({
  "location": "AccountManagementStep.userClicksOnCreateAccountButton()"
});
formatter.result({
  "duration": 618503200,
  "status": "passed"
});
formatter.match({
  "location": "AccountManagementStep.errorMessageDisplayed()"
});
formatter.result({
  "duration": 397604000,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 33,
  "name": "Sign in with an existing credential",
  "description": "",
  "id": "account-management;sign-in-with-an-existing-credential",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 32,
      "name": "@signIn"
    }
  ]
});
formatter.step({
  "line": 34,
  "name": "user is on customer Sign in page",
  "keyword": "Given "
});
formatter.step({
  "line": 35,
  "name": "user enters \"\u003cEmail\u003e\" \"\u003cPassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 36,
  "name": "user clicks on Sign in button",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "my account page is displayed",
  "keyword": "Then "
});
formatter.examples({
  "line": 41,
  "name": "",
  "description": "",
  "id": "account-management;sign-in-with-an-existing-credential;",
  "rows": [
    {
      "cells": [
        "Email",
        "Password"
      ],
      "line": 42,
      "id": "account-management;sign-in-with-an-existing-credential;;1"
    },
    {
      "cells": [
        "tim24@yahoo.com",
        "Roseberry."
      ],
      "line": 43,
      "id": "account-management;sign-in-with-an-existing-credential;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 43,
  "name": "Sign in with an existing credential",
  "description": "",
  "id": "account-management;sign-in-with-an-existing-credential;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@accountManagement"
    },
    {
      "line": 32,
      "name": "@signIn"
    }
  ]
});
formatter.step({
  "line": 34,
  "name": "user is on customer Sign in page",
  "keyword": "Given "
});
formatter.step({
  "line": 35,
  "name": "user enters \"tim24@yahoo.com\" \"Roseberry.\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 36,
  "name": "user clicks on Sign in button",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "my account page is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "AccountManagementStep.userIsOnCustomerSignInPage()"
});
formatter.result({
  "duration": 4968970100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "tim24@yahoo.com",
      "offset": 13
    },
    {
      "val": "Roseberry.",
      "offset": 31
    }
  ],
  "location": "AccountManagementStep.userEnters(String,String)"
});
formatter.result({
  "duration": 680007900,
  "status": "passed"
});
formatter.match({
  "location": "AccountManagementStep.userClicksOnSignInButton()"
});
formatter.result({
  "duration": 1365056700,
  "status": "passed"
});
formatter.match({
  "location": "AccountManagementStep.myAccountPageIsDisplayed()"
});
formatter.result({
  "duration": 95059100,
  "status": "passed"
});
});