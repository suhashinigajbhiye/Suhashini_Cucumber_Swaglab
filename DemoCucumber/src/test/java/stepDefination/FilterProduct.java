package stepDefination;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import io.github.bonigarcia.wdm.WebDriverManager;

public class FilterProduct {
	
	WebDriver driver;
	
	@Given("open product page")
	public void open_product_page() {
		
		WebDriverManager.chromedriver().setup();
		driver=new ChromeDriver();
		driver.get("https://www.saucedemo.com/");

		WebElement username=driver.findElement(By.xpath("//input[@id='user-name']"));
  		WebElement password=driver.findElement(By.xpath("//input[@id='password']"));
  		WebElement login=driver.findElement(By.xpath("//input[@id='login-button']"));
  	
  		username.sendKeys("standard_user");
 		password.sendKeys("secret_sauce");
 		login.click();
 		driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
	    
	}

	

	

	@When("apply filter by (.*) of the filter")
	public void apply_filter_by_of_the_filter(String string) throws InterruptedException {
		
		System.out.println("==========================================="+string);
		driver.findElement(By.xpath("//select[@class='product_sort_container']")).click();
		System.out.println("//option[contains(text(),'Name (Z to A)')]");
		System.out.println("//option[contains(text(),'"+string+"')]");
		driver.findElement(By.xpath("//option[contains(text(),'"+string+"')]")).click();
		Thread.sleep(3000);
		
		
	    
	}

	
	@Then("verify product are arranged according to name")
	public void verify_product_are_arranged_according_to_name() {
		
	    
	}
	
	

}
	
	

