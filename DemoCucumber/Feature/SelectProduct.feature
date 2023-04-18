Feature: Select Product

Background:
Given login into application

@functional
@sanity
Scenario: Select with product name

        When click on product with Name as a"Sauce Labs Backpack"
        Then product page should open
        And add it to cart
        And verify product is add to cart
        
@sanity        
Scenario: Click on multiple product 
        Then click on product
        

     
      | id  | NameOfProduct | details |
      | 1 | Sauce Labs Backpack   | carry.allTheThings() with the sleek |
      | 2 | Sauce Labs Bike Light | A red light isnt the desired state in testing but it sure helps when riding your bike at night |
      | 3 | Sauce Labs Bolt T-Shirt | Get your testing superhero on with the Sauce Labs bolt T-shirt |
      | 4 | Sauce Labs Fleece Jacket | Its not every day that you come across a midweight quarter-zip fleece jacket  |
      | 5 | Sauce Labs Onesie | Rib snap infant onesie for the junior automation engineer in development  |
      | 6 | Test.allTheThings() T-Shirt (Red) |  Super-soft and comfy ringspun combed cotton  |