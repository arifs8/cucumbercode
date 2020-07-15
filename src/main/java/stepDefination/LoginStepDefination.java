package stepDefination;



import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.testng.Assert;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;




public class LoginStepDefination {

	
	WebDriver driver;
	
	
	@Given("^User is on Login Page$")
	public void user_is_on_Login_Page(){
		System.setProperty("webdriver.chrome.driver", "C:\\Users\\arifs3\\OneDrive - Dell Technologies\\Desktop\\New folder\\PnU - BF- 2004\\GF errors\\MAS4\\New folder\\Sprin-5\\Automation drivers\\chromedriver_win32 (3)\\chromedriver.exe");
		driver = new ChromeDriver();
		driver.get("https://ui.freecrm.com/");
		
	}
	

	@When("^Title of login page$")
	public void title_of_login_page() {
		String title = driver.getTitle();
		System.out.println(title);
		Assert.assertEquals("Cogmento CRM", title);	
	}
	
	@Then("^User click on \"(.*)\" and \"(.*)\"$")
	public void user_click_on_Username_and_Password_fields(String username, String password) {
	    driver.findElement(By.xpath("//input[@type='text' and @name='email']")).sendKeys(username);
	    driver.findElement(By.name("password")).sendKeys(password);
	}
	

       @Then("^User Click on Login Button$")
       public void user_Click_on_Login_Button(){
          driver.findElement(By.xpath("//div[@class='ui fluid large blue submit button']")).click();
    }

       
	@Then("^User is on Home Page1$")
       public void user_is_on_Home_Page() throws InterruptedException   {
//           String title = driver.getTitle();
//           System.out.println("Home page title::" + title);
//           Assert.assertEquals("Cogmento CRM", title);
           Thread.sleep(5000);
           String val1 = driver.findElement(By.xpath("//span[@class='user-display']")).getText();
           System.out.println("HOME PAGE TITLE::" + val1);
           Assert.assertEquals("Syed Arif", val1);
          
          
       }
	
	@Then("^close the browser$")
	public void close_the_browser() {
		
		driver.close();
	    
	}
	
    

}














