package Steps;

import org.junit.Assert;

import io.cucumber.java.pt.Entao;
import page.HomePage;

public class NaoComprarSteps {
	
	@Entao("nao deve efetuar a compra")
	public void nao_deve_efetuar_a_compra() {
		HomePage homePage = new HomePage();		
		Assert.assertTrue(homePage.NotLogged());
//		Assert.assertFalse(homePage.NotLogged());	
	}

}
