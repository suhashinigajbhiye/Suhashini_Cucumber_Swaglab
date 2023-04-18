package hooks;

import org.openqa.selenium.WebDriver;

import cucumber.api.java.After;
import cucumber.api.java.Before;

public class BaseClass {
	
	protected static WebDriver driver;
	
	//after order will from  first to last
	@Before(order=0)
	public void setup()
	{
		System.out.println("111");
	}
	
	@Before(order=1)
	public void setup2()
	{
		System.out.println("222");
	}
	
	@Before(order=3)
	public void setup3()
	{
		System.out.println("333");
	}
	
	//after order will from last to first
	@After(order=0)
	public void tear()
	{
		System.out.println("11111");
	}
	
	@After(order=2)
	public void tear1()
	{
		System.out.println("22222");
	}
	
	@After(order=3)
	public void tear2()
	{
		System.out.println("33333");
	}

}
