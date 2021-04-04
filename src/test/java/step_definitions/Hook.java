package step_definitions;

import io.cucumber.java.After;
import io.cucumber.java.Before;
import io.cucumber.java.Scenario;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import utils.MyDriver;

public class Hook {

	@Before
	public void setup(){

		System.out.println("#### setup! started######\n");
		MyDriver.get().manage().window().maximize();
	}

	@After
	public void teardown(Scenario scenario){
		//if test failed - do this
		if(scenario.isFailed()){
			System.out.println("Test failed! Check your ScreenShot");
			byte[] screenshot = ((TakesScreenshot) MyDriver.get()).getScreenshotAs(OutputType.BYTES);
			scenario.embed(screenshot, "image/png");
		}else{
			System.out.println("Test completed! Thumbs Up");
		}
		System.out.println("###########-THE END-###################");
		MyDriver.close();
	}
}
