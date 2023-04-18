Feature: verify all filters



@Fuctional @Smoke
Scenario Outline: Filter Option by name
Given open product page
When apply filter by <name> of the filter
Then verify product are arranged according to name

    Examples: 
      | name         | 
      | Name (A to Z) |
      | Name (Z to A) |
      | Price (low to high)|
      | Price (high to low)|
      
