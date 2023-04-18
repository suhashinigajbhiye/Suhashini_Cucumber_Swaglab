package stepDefination;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import io.github.bonigarcia.wdm.WebDriverManager;

public class LoginWithParameters {
	WebDriver driver;
	
	@Given("open page")
	public void open_page() throws InterruptedException {
		

		WebDriverManager.chromedriver().setup();
		driver = new ChromeDriver();
		driver.get("https://www.saucedemo.com/");
		Thread.sleep(3000);
	   
	}

	@When("username  as {string} in username field")
	public void username_as_in_username_field(String string) {
		WebElement username=driver.findElement(By.xpath("//input[@id='user-name']"));
		username.sendKeys("standard_user");
	    
	}

	@When("password   as {string} in password field")
	public void password_as_in_password_field(String string) {
		WebElement password=driver.findElement(By.xpath("//input[@id='password']"));
		password.sendKeys("secret_sauce");
	    
	}

	@When("click button")
	public void click_button() {
		WebElement login=driver.findElement(By.xpath("//input[@id='login-button']"));
		login.click();
	    
	}

	@Then("page should appear")
	public void page_should_appear() {
		System.out.println("My Home Page is Opening");
	    driver.close();
	    
	}

}
