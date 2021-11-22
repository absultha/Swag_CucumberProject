package StepDefs;

import java.util.concurrent.TimeUnit;
import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.WebDriverWait;

import io.cucumber.java.en.And;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;



public class Loginstepdefs {

	WebDriver driver = BaseClassProject.driver;
	 @Given("^user has launched the Swag Labs Application$")
	    public void user_has_launched_the_swag_labs_application() throws Throwable {
		 driver.get("https://www.saucedemo.com/");
	        driver.manage().window().maximize();
	        driver.manage().timeouts().implicitlyWait(4000, TimeUnit.MILLISECONDS);
	        WebDriverWait wait = new WebDriverWait(driver,30);  
	    }

	    @When("^User enters username \"([^\"]*)\" and  password \"([^\"]*)\"$")
	    public void user_enters_username_something_and_password_something(String UserNameVal, String PasswordVal) throws Throwable {
	    	WebElement UserName = driver.findElement(By.xpath("//input[@id='user-name']"));
	        UserName.sendKeys(UserNameVal);
	        
	        WebElement Password = driver.findElement(By.xpath("//input[@name='password']"));
	        Password.sendKeys(PasswordVal); 
	    }

	   
	    @Then("^User should be landed on the Products Page \"([^\"]*)\"$")
	    public void user_should_be_landed_on_the_products_page_something(String product) throws Throwable {
	    	
	    	WebElement HomePage = driver.findElement(By.xpath("//*[@class=\"title\"]"));
	    	String Actualmsg = HomePage.getText();
	    	Assert.assertEquals(product, Actualmsg);
	    }

	    @And("^User clicks on the Login Button$")
	    public void user_clicks_on_the_login_button() throws Throwable {
	    	WebElement LoginButton = driver.findElement(By.xpath("//input[@name='login-button']"));
	        LoginButton.click();
	    }
	    
	    @Then("^User should be getting the \"([^\"]*)\"$")
	    public void user_should_be_getting_the_something(String error) throws Throwable {
         
        WebElement Error = driver.findElement(By.xpath("//*[@data-test='error']"));
			
			String Actualmsg = Error.getText();
			
			Assert.assertEquals(error, Actualmsg);
	    }
	    
}

  


