package stepDefination;

import java.util.List;
import java.util.Map;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class SelectProduct {
	
	@Given("login into application")
	public void login_into_application() {
	    
	}

	@When("click on product with Name as a{string}")
	public void click_on_product_with_Name_as_a(String string) {
	   
	}

	@Then("product page should open")
	public void product_page_should_open() {
	    
	}

	@Then("add it to cart")
	public void add_it_to_cart() {
	    
	}

	@Then("verify product is add to cart")
	public void verify_product_is_add_to_cart() {
	    
	}

	@Then("click on product")
	public void click_on_product(io.cucumber.datatable.DataTable dataTable) {
	    
		List<Map<String , String>> recivedata=dataTable.asMaps(String.class, String.class);
		System.out.println(recivedata);
		System.out.println(recivedata.get(0).get("id"));
		System.out.println(recivedata.get(0).get("NameOfProduct"));
		System.out.println(recivedata.get(0).get("details"));
		
		
		System.out.println(recivedata.get(1).get("idroduct"));
		System.out.println(recivedata.get(1).get("details"));
		
	}

}
