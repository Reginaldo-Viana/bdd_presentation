package page;

import org.openqa.selenium.WebDriver;

public class TimePage {

	protected WebDriver driver = Browser.getDriver();	

	public TimePage() {

	}

	protected void wait(int seconds) {
		try {
			Thread.sleep(seconds * 100);
		} catch (InterruptedException e) {
			throw new RuntimeException(e);
		}
	}

	protected void waitMilliseconds(int milliseconds) {
		try {
			Thread.sleep(milliseconds);
		} catch (InterruptedException e) {
			throw new RuntimeException(e);
		}
	}	
}	

