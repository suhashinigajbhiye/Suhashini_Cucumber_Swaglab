Feature: Validating the authentic user

  Background:
  Given landing page is open
  
  
  Scenario: Valid user valid pass
    
    When entered username 
    And entered password   
    And click on button
    Then home page should appear
    
    
  Scenario: InValid user valid pass
 
    When entered username  
    And entered password   
    And click on button
    Then home page should appear
    
    
  Scenario: Valid user Invalid pass
   When entered username  
    And entered password   
    And click on button
    Then home page should appear
    
    
    
  Scenario: InValid user Invalid pass
    
    When entered username  
    And entered password   
    And click on button
    Then home page should appear
