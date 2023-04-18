Feature: User Resistration

  Scenario Outline: Resistration of user is successfully
    Given login
    And accept values of <user> and <pass>
    Then Verify Resistration of user is successfully
    


    Examples: 
      | user  | pass | 
      | name1 | 326556894| 
      | name2 | 235615486|
      | name3 | 869653241|
      | name4 | 265349856|
      | name5 | 265356586|
      | name6 | 754585956|
      | name7 | 959595959|
