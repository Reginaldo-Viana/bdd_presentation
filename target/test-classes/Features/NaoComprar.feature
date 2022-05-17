#language:pt
@notbuy

Funcionalidade: Nao deve comprar sem registrar no site

	Cenario: Nao deve comprar sem fazer login			
			Dado o usuario acessa "http://automationpractice.com"
			E pesquise o produto "Printed Summer Dress"
  		Quando adiciona o produto "Printed Summer Dress" ao carrinho
  		Entao o produto "Printed Summer Dress" deve estar presente no carrinho
  		Dado que deve estar na guia SignIn e clicar em prosseguir com o checkout
  		Entao nao deve efetuar a compra 		