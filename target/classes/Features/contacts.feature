Feature: Free WebWorl Create Contact

# With Example keyword
Scenario Outline: Create a new Contact scenatrio

Given User is on Login Page
When Title of login page 
Then User click on "<username>" and "<password>"
Then User Click on Login Button
Then User is on Home Page1
Then user moves to new conatct page
Then user enters "<firstname>" and "<lastname>" and "<email>" and "<employee>"
Then close the browser

Examples:
	| username | password |firstname |lastname|email|employee|
	|arifsyed83@gmail.com | Syedarif@1 | Sreshma | shaik | 1arifreshma786@gmail.com|qqqq|
	|arifsyed83@gmail.com | Syedarif@1 | Afroz | shaik | afroz786@gmail.com|qqqq|
	|arifsyed83@gmail.com | Syedarif@1 | Altaf | shaik | altaf786@gmail.com|qqqq|
	