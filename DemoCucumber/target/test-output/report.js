$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:Feature/Filter.feature");
formatter.feature({
  "name": "verify all filters",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Filter Option by name",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Fuctional"
    },
    {
      "name": "@Smoke"
    }
  ]
});
formatter.step({
  "name": "open product page",
  "keyword": "Given "
});
formatter.step({
  "name": "apply filter by \u003cname\u003e of the filter",
  "keyword": "When "
});
formatter.step({
  "name": "verify product are arranged according to name",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "name"
      ]
    },
    {
      "cells": [
        "Name (A to Z)"
      ]
    },
    {
      "cells": [
        "Name (Z to A)"
      ]
    },
    {
      "cells": [
        "Price (low to high)"
      ]
    },
    {
      "cells": [
        "Price (high to low)"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Filter Option by name",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Fuctional"
    },
    {
      "name": "@Smoke"
    }
  ]
});
formatter.step({
  "name": "open product page",
  "keyword": "Given "
});
formatter.match({
  "location": "FilterProduct.open_product_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "apply filter by Name (A to Z) of the filter",
  "keyword": "When "
});
formatter.match({
  "location": "FilterProduct.apply_filter_by_of_the_filter(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify product are arranged according to name",
  "keyword": "Then "
});
formatter.match({
  "location": "FilterProduct.verify_product_are_arranged_according_to_name()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Filter Option by name",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Fuctional"
    },
    {
      "name": "@Smoke"
    }
  ]
});
formatter.step({
  "name": "open product page",
  "keyword": "Given "
});
formatter.match({
  "location": "FilterProduct.open_product_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "apply filter by Name (Z to A) of the filter",
  "keyword": "When "
});
formatter.match({
  "location": "FilterProduct.apply_filter_by_of_the_filter(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify product are arranged according to name",
  "keyword": "Then "
});
formatter.match({
  "location": "FilterProduct.verify_product_are_arranged_according_to_name()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Filter Option by name",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Fuctional"
    },
    {
      "name": "@Smoke"
    }
  ]
});
formatter.step({
  "name": "open product page",
  "keyword": "Given "
});
formatter.match({
  "location": "FilterProduct.open_product_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "apply filter by Price (low to high) of the filter",
  "keyword": "When "
});
formatter.match({
  "location": "FilterProduct.apply_filter_by_of_the_filter(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify product are arranged according to name",
  "keyword": "Then "
});
formatter.match({
  "location": "FilterProduct.verify_product_are_arranged_according_to_name()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Filter Option by name",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Fuctional"
    },
    {
      "name": "@Smoke"
    }
  ]
});
formatter.step({
  "name": "open product page",
  "keyword": "Given "
});
formatter.match({
  "location": "FilterProduct.open_product_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "apply filter by Price (high to low) of the filter",
  "keyword": "When "
});
formatter.match({
  "location": "FilterProduct.apply_filter_by_of_the_filter(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify product are arranged according to name",
  "keyword": "Then "
});
formatter.match({
  "location": "FilterProduct.verify_product_are_arranged_according_to_name()"
});
formatter.result({
  "status": "passed"
});
formatter.uri("file:Feature/SelectProduct.feature");
formatter.feature({
  "name": "Select Product",
  "description": "",
  "keyword": "Feature"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "login into application",
  "keyword": "Given "
});
formatter.match({
  "location": "SelectProduct.login_into_application()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Select with product name",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@functional"
    },
    {
      "name": "@sanity"
    }
  ]
});
formatter.step({
  "name": "click on product with Name as a\"Sauce Labs Backpack\"",
  "keyword": "When "
});
formatter.match({
  "location": "SelectProduct.click_on_product_with_Name_as_a(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "product page should open",
  "keyword": "Then "
});
formatter.match({
  "location": "SelectProduct.product_page_should_open()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "add it to cart",
  "keyword": "And "
});
formatter.match({
  "location": "SelectProduct.add_it_to_cart()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify product is add to cart",
  "keyword": "And "
});
formatter.match({
  "location": "SelectProduct.verify_product_is_add_to_cart()"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "login into application",
  "keyword": "Given "
});
formatter.match({
  "location": "SelectProduct.login_into_application()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Click on multiple product",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@sanity"
    }
  ]
});
formatter.step({
  "name": "click on product",
  "rows": [
    {
      "cells": [
        "id",
        "NameOfProduct",
        "details"
      ]
    },
    {
      "cells": [
        "1",
        "Sauce Labs Backpack",
        "carry.allTheThings() with the sleek"
      ]
    },
    {
      "cells": [
        "2",
        "Sauce Labs Bike Light",
        "A red light isnt the desired state in testing but it sure helps when riding your bike at night"
      ]
    },
    {
      "cells": [
        "3",
        "Sauce Labs Bolt T-Shirt",
        "Get your testing superhero on with the Sauce Labs bolt T-shirt"
      ]
    },
    {
      "cells": [
        "4",
        "Sauce Labs Fleece Jacket",
        "Its not every day that you come across a midweight quarter-zip fleece jacket"
      ]
    },
    {
      "cells": [
        "5",
        "Sauce Labs Onesie",
        "Rib snap infant onesie for the junior automation engineer in development"
      ]
    },
    {
      "cells": [
        "6",
        "Test.allTheThings() T-Shirt (Red)",
        "Super-soft and comfy ringspun combed cotton"
      ]
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "SelectProduct.click_on_product(DataTable)"
});
formatter.result({
  "status": "passed"
});
});