package runner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.*;
@RunWith(Cucumber.class)
@CucumberOptions(features= {".//Feature//SelectProduct.feature",".//Feature//Filter.feature",".//Feature//Login.feature",".//Feature//LoginWithParameters.feature"},
         glue= {"stepDefination"},
         dryRun=false,
         monochrome=true,
        //tags="@functional",
        
        
        //tags="{@functional","smoke"}or
        //tags="{@functional,@smoke"}and
        //tags="{@functional,~@smoke"}not
        
        
        plugin= {"pretty","html:target/test-output","json:abc/cucumber.json","junit:cucumber-report/cucumber.xml"}
         )

public class FilterRunner {
	
}
	
	         
	     
	


