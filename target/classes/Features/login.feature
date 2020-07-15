Feature: Login Action 



# Without Example Keyword
#Scenario: Successful Login With Valid Credentials
#
#Given User is on Login Page
#When Title of login page 
#Then User click on "arifsyed83@gmail.com" and "Syedarif@1"
#Then User Click on Login Button
#Then User is on Home Page1
#Then close the browser



# With Example keyword
Scenario Outline: Successful Login With Valid Credentials

Given User is on Login Page
When Title of login page 
Then User click on "<username>" and "<password>"
Then User Click on Login Button
Then User is on Home Page1
Then close the browser

Examples:
	| username | password |
	|arifsyed83@gmail.com | Syedarif@1 |










#Scenario: user is able to create a new contact
#
#Given user is already on home page
#When user mouse over on contacts link
#Then user clicks on New contact link
#Then user enters firstname and second name
#Then user clicks on save button
#Then verify new contact created
# 
 