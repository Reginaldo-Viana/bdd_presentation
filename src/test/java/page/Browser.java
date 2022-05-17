package page;

import org.junit.rules.TestWatcher;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;

import io.github.bonigarcia.wdm.WebDriverManager;

public class Browser extends TestWatcher {	
	
	protected static WebDriver driver;
		
	
	public static void navigate(String url){			
		
		ChromeOptions options = new ChromeOptions();
//		options.addArguments("test-type");
//		options.addArguments("--disable-popup-blocking");
//		options.addArguments("--disable-web-security");
//		options.addArguments("--disable-notifications");
//		options.addArguments("--disable-session-crashed-bubble");
//		options.addArguments("--profile-directory=Default");
//		options.addArguments("--user-data-dir=C:/Temp/ChromeProfile");
		options.addArguments("-force-device-scale-factor=1.2");
		
		
		
		WebDriverManager.chromedriver().setup();		
		driver = new ChromeDriver(options);
		driver.manage().window().maximize();
		driver.navigate().to(url);	
		
				
	}
		


	public static WebDriver getDriver() {
		return driver;
	}

	public static void setDriver(WebDriver driver) {
		Browser.driver = driver;
	}
	
}


	
