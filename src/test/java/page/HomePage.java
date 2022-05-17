package page;

import java.io.BufferedReader;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import Allure.AllureReports;
import io.cucumber.java.After;
import io.github.bonigarcia.wdm.WebDriverManager;

public class HomePage extends TimePage {

	static final Runtime run = Runtime.getRuntime();
	static Process pro;
	static BufferedReader read;

	public HomePage() {
		PageFactory.initElements(Browser.getDriver(), this);
	}

	public HomePage(WebDriverManager driver) {

	}

	@FindBy(xpath = "//a[@title='Log in to your customer account']")
	protected WebElement ButtonLogin;
	@FindBy(name = "SubmitLogin")
	protected WebElement ClickSignIn;
	@FindBy(xpath = "//*[@id='center_column']/div[1]")
	protected WebElement AlertLogin;
	@FindBy(css = "#search_query_top")
	protected WebElement SubmitSearch;
	@FindBy(name = "submit_search")
	protected WebElement ButtonSearch;
	@FindBy(xpath = "//*[@id='center_column']/ul/li[1]/div/div[1]/div/a[1]/img")
	protected WebElement SelectElement;
	@FindBy(xpath = "//*[@id='add_to_cart']/button/span")
	protected WebElement addProductToCart;
	@FindBy(xpath = "//*[@id='layer_cart']/div[1]/div[2]/div[4]/a")
	protected WebElement ProceedButton;
	@FindBy(xpath = "//*[@id='header']/div[3]/div/div/div[3]/div/a")
	protected WebElement CheckCart;
	@FindBy(xpath = "//*[@id='center_column']/p[2]/a[1]/span")
	protected WebElement SummaryProceed;
	@FindBy(xpath = "//*[@id='center_column']/form/p/button/span")
	protected WebElement AddressProceed;
	@FindBy(xpath = "//*[@id='cgv']")
	protected WebElement AgreeTerms;
	@FindBy(xpath = "//*[@id='form']/p/button/span")
	protected WebElement ShippingProceed;
	@FindBy(xpath = "//*[@id='HOOK_PAYMENT']/div[2]/div/p/a")
	protected WebElement PayByCheckProceed;
	@FindBy(xpath = "//*[@id='cart_navigation']/button/span")
	protected WebElement confirmOrder;
	@FindBy(xpath = "//*[@id='center_column']/p[1]")
	protected WebElement AlertOrderComplete;
	@FindBy(xpath = "//*[@id='login_form']/h3")
	protected WebElement NotLoggedIn;

	public void ButtonLogin() {
		waitMilliseconds(1000);
		ButtonLogin.click();
		waitMilliseconds(1000);
		AllureReports.print(driver);
	}

	public void ClickLogin() {
		ClickSignIn.click();
		waitMilliseconds(1000);
		AllureReports.print(driver);
	}

	public boolean LoginAlert() {
		waitMilliseconds(1000);
		String Alert = AlertLogin.getText();
		waitMilliseconds(1000);
		AllureReports.print(driver);
		if (Alert.contains("There is 1 error")) {
			return true;
		} else {
			return false;
		}

	}

	public void SearchProduct(String product) {
		waitMilliseconds(1000);
		SubmitSearch.sendKeys(product);
		waitMilliseconds(1000);
		AllureReports.print(driver);
		ButtonSearch.click();
		waitMilliseconds(1000);
		AllureReports.print(driver);
	}

	public void AddProductToCart() {
		waitMilliseconds(2000);
		SelectElement.click();
		waitMilliseconds(5000);
		AllureReports.print(driver);
		addProductToCart.click();
		waitMilliseconds(5000);
		AllureReports.print(driver);
		ProceedButton.click();
		waitMilliseconds(5000);
		AllureReports.print(driver);
	}

	public boolean ItemInCart() {
		waitMilliseconds(1000);
		String cart = CheckCart.getText();
		AllureReports.print(driver);
		waitMilliseconds(1000);
		if (cart.contains("Product")) {
			return true;
		} else {
			return false;
		}
	}

	public void SumarioProceed() {
		waitMilliseconds(1000);
		SummaryProceed.click();
		AllureReports.print(driver);
		waitMilliseconds(1000);
	}

	public void AddressProceed() {
		waitMilliseconds(1000);
		AddressProceed.click();
		AllureReports.print(driver);
		waitMilliseconds(1000);
	}

	public void AgreeTerms() {
		waitMilliseconds(1000);
		AgreeTerms.click();
		AllureReports.print(driver);
		waitMilliseconds(1000);
	}

	public void ShippingProceed() {
		waitMilliseconds(1000);
		ShippingProceed.click();
		AllureReports.print(driver);
		waitMilliseconds(1000);
	}

	public void Payment() {
		waitMilliseconds(1000);
		PayByCheckProceed.click();
		AllureReports.print(driver);
		waitMilliseconds(1000);
	}

	public void ConfirmPayment() {
		waitMilliseconds(1000);
		confirmOrder.click();
		AllureReports.print(driver);
		waitMilliseconds(1000);
	}

	public boolean CompleteOrderAlert() {
		waitMilliseconds(1000);
		String AlertaOrdem = AlertOrderComplete.getText();
		waitMilliseconds(1000);
		if (AlertaOrdem.contains("Your order on My Store is complete.")) {
			return true;
		} else {
			return false;
		}
	}

	public boolean NotLogged() {
		waitMilliseconds(1000);
		AllureReports.print(driver);
		String Text = NotLoggedIn.getText();
		waitMilliseconds(1000);
		if (Text.contains("ALREADY REGISTERED?")) {
			return true;
		} else {
			return false;
		}
	}

	@After
	public void tearDown() {
		AllureReports.print(driver);
		driver.close();

	}
}
