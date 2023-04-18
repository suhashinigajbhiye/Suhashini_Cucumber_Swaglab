Feature: Validating the authentic users

  Background:
  Given open page
  
  
  Scenario: Validuser validpass
    
    When  username  as "standard_user" in username field
    And  password   as "secret_sauce" in password field
    And click button
    Then page should appear
    
    
  Scenario: InValiduser validpass
 
    When username  as "standard" in username field
    And password   as "secret_sauce" in password field
    And click button
    Then page should appear
    
    
  Scenario: Validuser Invalidpass
   When username  as "standard_user" in username field
    And password   as "secret" in password field
    And click button
    Then page should appear
    
    
    
  Scenario: InValiduser Invalidpass
    
    When username  as "standard" in username field
    And password   as "secret" in password field
    And click button
    Then page should appear
