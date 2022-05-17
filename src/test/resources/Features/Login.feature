#language:pt
@login

Funcionalidade: Somente usuarios validos podem fazer login
	
	Cenario: Um usuario valido pode fazer login
		Dado o usuario acessa "http://automationpractice.com"
		Quando o usuario deve fazer login com  "Username" and "Password"
		Entao e e redirecionado para a pagina de compras
		
	Cenario: Um usuario invalido nao pode fazer login
		Dado o usuario acessa "http://automationpractice.com"
		Quando o usuario deve fazer login com  "Username" and "Password"
		Entao deve continuar na página de login