#language:pt
@buy

Funcionalidade: Deve adicionar o produto ao carrinho e registar a compra
	
	Cenario: Deve efetuar a compra logado
		Dado o usuario acessa "http://automationpractice.com"
		Quando o usuario deve fazer login com  "Username" and "Password"
		Entao e e redirecionado para a pagina de compras			
  		E pesquise o produto "Printed Summer Dress"
  		Quando adiciona o produto "Printed Summer Dress" ao carrinho
  		Entao o produto "Printed Summer Dress" deve estar presente no carrinho
  		Dado que deve estar na guia SignIn e clicar em prosseguir com o checkout
  		Quando deve estar na guia endereco e clicar em prosseguir com o checkout
  		Entao deve clicar na aba Frete e aceitar os termos  	
  		E deve prosseguir com o checkout
  		E na aba de pagamento clicar em Pay By Check
  		Entao clicar em confirmar e verificar se o pedido de compra esta completo