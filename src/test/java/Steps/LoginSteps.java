package Steps;

import org.junit.Assert;

import Allure.AllureReports;
import io.cucumber.java.After;
import io.cucumber.java.pt.Dado;
import io.cucumber.java.pt.Entao;
import io.cucumber.java.pt.Quando;
import io.qameta.allure.Description;
import page.Browser;
import page.DrivenPage;
import page.HomePage;


public class LoginSteps extends AllureReports{		

	@Dado("o usuario acessa {string}")
	public void o_usuario_acessa(String url) {		
		Browser.navigate(url);		
	}
	
	@Quando("o usuario deve fazer login com  {string} and {string}")
	public void o_usuario_deve_fazer_login_com_and(String user, String password) throws Exception  {		
		HomePage homePage = new HomePage();
		DrivenPage drivenPage = new DrivenPage();
		homePage.ButtonLogin();
		drivenPage.DataDriven(user, password);		
		
	}

	@Entao("e e redirecionado para a pagina de compras")
	public void e_e_redirecionado_para_a_pagina_de_compras()  {
		HomePage homePage = new HomePage();
		Assert.assertFalse(homePage.LoginAlert());			
	}
	
	@Description("Este teste não pode passar")
	@Quando("o usuario deve fazer login com  {string} and {string} invalid")
	public void user_must_login_whith_or_invalid(String user, String password) throws Exception {
		HomePage homePage = new HomePage();	
		DrivenPage drivenPage = new DrivenPage();
		homePage.ButtonLogin();
		drivenPage.DataDriven(user, password);
	}

	@Entao("deve continuar na página de login")
	public void deve_continuar_na_página_de_login() {
		HomePage homePage = new HomePage();
		Assert.assertTrue(homePage.LoginAlert());		
	}	
	
	@After
	public void end() {
		HomePage homePage = new HomePage();
		homePage.tearDown();		
	}
	
}