package step_definitions;

import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import org.junit.Assert;
import pages.LoginPage;
import utils.ConfigurationReader;
import utils.MyDriver;

public class LoginSteps {
	LoginPage loginPage = new LoginPage();

	@Given("User is on the login page")
	public void user_is_on_the_login_page() {
		MyDriver.get().get(ConfigurationReader.getProperty("url"));
		String expected = "The Internet";
		String actual = MyDriver.get().getTitle();
		Assert.assertEquals(expected, actual);
		System.out.println("::Landing Page Assertion successful::");

	}

	@Given("User enter the username as {string} and password as {string}")
	public void user_enter_the_username_and_password(String username, String password) {
		loginPage.username.sendKeys(username);
		loginPage.password.sendKeys(password);

	}

	@Then("Click on login button")
	public void click_on_login_button() {

		loginPage.loginButton.click();
		//3 seconds delay to see the result in page.
		try {
			Thread.sleep(3000);
		} catch (InterruptedException e) {
			e.printStackTrace();
		}
	}

	@Then("Verify that you are in login page")
	public void verify_that_you_are_in_login_page() {

		String expected = "You logged into a secure area!\n" +
				"×";

		String actual = loginPage.afterLoginVerification.getText();

		Assert.assertEquals(expected, actual);
		System.out.println("::Assertion successful::");
		//3 seconds delay to see the result in page.
		try {
			Thread.sleep(3000);
		} catch (InterruptedException e) {
			e.printStackTrace();
		}
	}


	@Given("User enter the {string} and {string}")
	public void user_enter_the_and(String username, String password) {
		loginPage.username.sendKeys(username);
		loginPage.password.sendKeys(password);


	}

	@Then("Verify the error message")
	public void verify_the_error_message() {

		String expectedUseraname="Your username is invalid!\n" +
				"×";
		String expectedUsername="Your password is invalid!\n" +
				"×";
		String actual=loginPage.loginFail.getText();


		if(actual.contains("username")) {
			Assert.assertEquals(expectedUseraname, actual);
			System.out.println("::Username Assertion successful::");
		}else {
			Assert.assertEquals(expectedUsername, actual);
			System.out.println("::Password Assertion successful::");
		}


	}

}
