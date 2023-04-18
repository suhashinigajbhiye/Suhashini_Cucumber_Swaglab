package stepDefination;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;

public class AcceptInputValue {
	
	
	
	@Given("login")
	public void login() {
	    
	}

	@Given("accept values of (.*) and (.{9})")
	//@Given("accept values of (.*) and ([0-9]*)")
	//@Given("accept values of (.*) and ([0-9]+)")
	//@Given("accept values of (.*) and (?:235615486|869653241)")
	//@Given("accept values of (.*) and (.(?:235615486|869653241))")
	
	
	public void accept_values_of_name_and(String user, Integer pass) {
		System.out.println("======="+user+"========"+pass);
	}
	
	

	@Then("Verify Resistration of user is successfully")
	public void verify_Resistration_of_user_is_successfully() {
		System.out.println("Verify Resistration of user is successfully"); 
	}

}
