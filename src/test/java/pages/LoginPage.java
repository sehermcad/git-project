package pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import utils.MyDriver;

public class LoginPage {
    public LoginPage(){
        PageFactory.initElements(MyDriver.get(), this);
    }

    @FindBy(xpath = "//input[@id='username']")
    public WebElement username;

    @FindBy(xpath = "//input[@id='password']")
    public WebElement password;

    @FindBy(xpath = "//i[contains(text(),'Login')]")
    public WebElement loginButton;

    @FindBy(xpath = "//div[@id='flash']")
    public WebElement afterLoginVerification;

    @FindBy(xpath = "//div[@id='flash']")
    public WebElement loginFail;



}
