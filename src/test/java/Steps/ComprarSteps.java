package Steps;

import org.junit.Assert;

import io.cucumber.java.pt.Dado;
import io.cucumber.java.pt.E;
import io.cucumber.java.pt.Entao;
import io.cucumber.java.pt.Quando;
import page.HomePage;

public class ComprarSteps {	
	
	
	@Entao("pesquise o produto {string}")
	public void pesquise_o_produto(String product) {		
		HomePage homePage = new HomePage();
		homePage.SearchProduct(product);		
	}
	
	@Quando("adiciona o produto {string} ao carrinho")
	public void adiciona_o_produto_ao_carrinho(String product) {
		HomePage homePage = new HomePage();
		homePage.AddProductToCart();
	}
	
	@Entao("o produto {string} deve estar presente no carrinho")
	public void o_produto_deve_estar_presente_no_carrinho(String product) {
		HomePage homePage = new HomePage();		
		Assert.assertTrue(homePage.ItemInCart());
	}
	
	@Dado("que deve estar na guia SignIn e clicar em prosseguir com o checkout")
	public void que_deve_estar_na_guia_SignIn_e_clicar_em_prosseguir_com_o_checkout() {
		HomePage homePage = new HomePage();
		homePage.SumarioProceed();
	}
	
	@Quando("deve estar na guia endereco e clicar em prosseguir com o checkout")
	public void deve_estar_na_guia_endereco_e_clicar_em_prosseguir_com_o_checkout() {
		HomePage homePage = new HomePage();
		homePage.AddressProceed();
	}
	
	@Entao("deve clicar na aba Frete e aceitar os termos")
	public void deve_clicar_na_aba_Frete_e_aceitar_os_termos() {
		HomePage homePage = new HomePage();
		homePage.AgreeTerms();
	}
	
	@E("deve prosseguir com o checkout")
	public void deve_prosseguir_com_o_checkout() {
		HomePage homePage = new HomePage();
		homePage.ShippingProceed();
	}
	
	@E("na aba de pagamento clicar em Pay By Check")
	public void na_aba_de_pagamento_clicar_em_Pay_By_Check(){
		HomePage homePage = new HomePage();
		homePage.Payment();
	}
	
	@Entao("clicar em confirmar e verificar se o pedido de compra esta completo")
	public void clicar_em_confirmar_e_verificar_se_o_pedido_de_compra_esta_completo() {
		HomePage homePage = new HomePage();
		homePage.ConfirmPayment();
		Assert.assertTrue(homePage.CompleteOrderAlert());		
	}

}
