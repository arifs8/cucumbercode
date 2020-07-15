package Runner;

import org.junit.runner.RunWith;
import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		features ="C://Users//arifs3//eclipse-workspace//FreeCrmBDDFrameworks//src//main//java//Features//login.feature",
		glue= {"stepDefination"},
		format= {"pretty","html:test-outout" , "json:json_output/cucumber.json" , "junit:junit_xml/cucumber.xml"},
		dryRun=false,
		strict=true,
		monochrome=true
		
		)

public class TestRunner {

}
 