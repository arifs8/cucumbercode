package stepDefination;



import java.awt.Desktop.Action;
import java.util.ArrayList;
import java.util.List;

import javax.swing.text.Element;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.interactions.Actions;
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
		driver.get("https://www.webwork-tracker.com/sign-in");
		
	}
	

	@When("^Title of login page$")
	public void title_of_login_page() {
		String title = driver.getTitle();
		System.out.println(title);
		Assert.assertEquals("Sign in | WebWork Time Tracker", title);	
	}
	
	@Then("^User click on \"(.*)\" and \"(.*)\"$")
	public void user_click_on_Username_and_Password_fields(String username, String password) {
	    driver.findElement(By.xpath("//input[@type='email' and @name='email']")).sendKeys(username);
	    driver.findElement(By.xpath("//input[@type='password' and @name='password']")).sendKeys(password);
	}
	

       @Then("^User Click on Login Button$")
       public void user_Click_on_Login_Button() throws InterruptedException{
    	   Thread.sleep(2000);
          driver.findElement(By.xpath("//button")).click();
    }

       
	@Then("^User is on Home Page1$")
       public void user_is_on_Home_Page()   {
           String title = driver.getTitle();
           System.out.println("Home page title::" + title);
           Assert.assertEquals("Dashboard - WebWork Tracker", title);         
       }
	
	@Then("^user moves to new conatct page$")
	public void user_moves_to_new_conatct_page() throws InterruptedException{
		
		Actions action = new Actions(driver);
		driver.findElement(By.xpath("(//span[@class='icon icon-down'])[position()=2]")).click();
		driver.findElement(By.linkText("Team")).click();
		Thread.sleep(3000);
		driver.findElement(By.xpath("//span[text()='Invite new user']")).click();
		Thread.sleep(3000);
	

	   
	}
	
	
	
	@Then("^user enters \"([^\"]*)\" and \"([^\"]*)\" and \"([^\"]*)\" and \"([^\"]*)\"$")
	public List<WebElement> user_enters_and_and_and(String firstname, String lastname, String email, String employee) throws InterruptedException{
		
			
			List<WebElement> element = new ArrayList<WebElement>();
			
			
			WebElement ele3 = driver.findElement(By.xpath("//input[@placeholder='First name']"));
			WebElement ele4 = driver.findElement(By.xpath("//input[@placeholder='Last name']"));
			WebElement ele5 = driver.findElement(By.xpath("//input[@placeholder='Email']"));
			WebElement dropdown = driver.findElement(By.xpath("//span[@class='filter-option pull-left icon icon-down' and text()='Employee']"));
			
			Thread.sleep(3000);
			ele3.sendKeys(firstname);
			ele4.sendKeys(lastname);
			ele5.sendKeys(email);
			
			element.add(ele3);
			element.add(ele4);
			element.add(ele5);
			dropdown.click();
			
			driver.findElement(By.xpath("//span[@class='text' and text()='Project Manager']")).click();
			driver.findElement(By.xpath("//button[@name='invite']")).click();
			
			return element;
			
			
	
		
	   
	}
	
	
	
	@Then("^close the browser$")
	public void close_the_browser() throws InterruptedException {
		Thread.sleep(15000);
		
		driver.close();
	    
	}
	
    

}














