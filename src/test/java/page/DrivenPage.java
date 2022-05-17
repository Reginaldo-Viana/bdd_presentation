package page;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;

import org.apache.poi.hssf.usermodel.HSSFCell;
import org.apache.poi.hssf.usermodel.HSSFSheet;
import org.apache.poi.hssf.usermodel.HSSFWorkbook;
import org.apache.poi.ss.usermodel.Cell;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import Allure.AllureReports;
import io.github.bonigarcia.wdm.WebDriverManager;

public class DrivenPage extends TimePage {	

	@FindBy(name = "email")
	protected static WebElement SubmitEmail;
	@FindBy(name = "passwd")
	protected static WebElement SubmitPassword;
	@FindBy(name = "SubmitLogin")
	protected WebElement ClickSignIn;

	public void ClickLogin() {
		ClickSignIn.click();
		waitMilliseconds(1000);
	}

	public void DataDrivenInvalid(String userInvalid, String passwordInvalid) {
		userInvalid = " ";
		passwordInvalid = " ";
		ClickSignIn.click();
		waitMilliseconds(1000);
	}

	public void DataDriven(String user, String password) throws Exception {

		HSSFWorkbook workbook;
		HSSFSheet sheet;
		HSSFCell cell;

		File src = new File("src\\worksheets\\data.xls");

		// Load the file.
		FileInputStream finput = new FileInputStream(src);

		// Load he workbook.
		workbook = new HSSFWorkbook(finput);

		// Load the sheet in which data is stored.
		sheet = workbook.getSheetAt(0);

		for (int i = 1; i <= sheet.getLastRowNum(); i++) {
			// Import data for Email.
			cell = sheet.getRow(i).getCell(0);
			cell.setCellType(Cell.CELL_TYPE_STRING);
			user = cell.getStringCellValue();
			SubmitEmail.sendKeys(user);
			System.out.println("User = " + user);

			// Import data for password.
			cell = sheet.getRow(i).getCell(1);
			cell.setCellType(Cell.CELL_TYPE_STRING);
			password = cell.getStringCellValue();
			SubmitPassword.sendKeys(password);
			AllureReports.print(driver);
			ClickSignIn.click();
			System.out.println("Password = " + password);

			try (// Write data in the excel.
					FileOutputStream foutput = new FileOutputStream(src)) {
			}

			// Specify the message needs to be written.
			String message = "Data Imported Successfully.";

			// Create cell where data needs to be written.
			sheet.getRow(i).createCell(3).setCellValue(message);

			// Specify the file in which data needs to be written.
			FileOutputStream fileOutput = new FileOutputStream(src);

			// finally write content
			workbook.write(fileOutput);

			// close the file
			fileOutput.close();
		}

	}
	
	public DrivenPage() {
		PageFactory.initElements(Browser.getDriver(), this);
	}

	public DrivenPage(WebDriverManager driver) {

	}
}
