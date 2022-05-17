$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("classpath:features/Comprar.feature");
formatter.feature({
  "name": "Deve adicionar o produto ao carrinho e registar a compra",
  "description": "",
  "keyword": "Funcionalidade",
  "tags": [
    {
      "name": "@buy"
    }
  ]
});
formatter.scenario({
  "name": "Deve efetuar a compra logado",
  "description": "",
  "keyword": "Cenario",
  "tags": [
    {
      "name": "@buy"
    }
  ]
});
formatter.step({
  "name": "o usuario acessa \"http://automationpractice.com\"",
  "keyword": "Dado "
});
formatter.match({
  "location": "Steps.LoginSteps.o_usuario_acessa(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "o usuario deve fazer login com  \"Username\" and \"Password\"",
  "keyword": "Quando "
});
formatter.match({
  "location": "Steps.LoginSteps.o_usuario_deve_fazer_login_com_and(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "e e redirecionado para a pagina de compras",
  "keyword": "Entao "
});
formatter.match({
  "location": "Steps.LoginSteps.e_e_redirecionado_para_a_pagina_de_compras()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "pesquise o produto \"Printed Summer Dress\"",
  "keyword": "E "
});
formatter.match({
  "location": "Steps.ComprarSteps.pesquise_o_produto(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "adiciona o produto \"Printed Summer Dress\" ao carrinho",
  "keyword": "Quando "
});
formatter.match({
  "location": "Steps.ComprarSteps.adiciona_o_produto_ao_carrinho(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "o produto \"Printed Summer Dress\" deve estar presente no carrinho",
  "keyword": "Entao "
});
formatter.match({
  "location": "Steps.ComprarSteps.o_produto_deve_estar_presente_no_carrinho(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "que deve estar na guia SignIn e clicar em prosseguir com o checkout",
  "keyword": "Dado "
});
formatter.match({
  "location": "Steps.ComprarSteps.que_deve_estar_na_guia_SignIn_e_clicar_em_prosseguir_com_o_checkout()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "deve estar na guia endereco e clicar em prosseguir com o checkout",
  "keyword": "Quando "
});
formatter.match({
  "location": "Steps.ComprarSteps.deve_estar_na_guia_endereco_e_clicar_em_prosseguir_com_o_checkout()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "deve clicar na aba Frete e aceitar os termos",
  "keyword": "Entao "
});
formatter.match({
  "location": "Steps.ComprarSteps.deve_clicar_na_aba_Frete_e_aceitar_os_termos()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "deve prosseguir com o checkout",
  "keyword": "E "
});
formatter.match({
  "location": "Steps.ComprarSteps.deve_prosseguir_com_o_checkout()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "na aba de pagamento clicar em Pay By Check",
  "keyword": "E "
});
formatter.match({
  "location": "Steps.ComprarSteps.na_aba_de_pagamento_clicar_em_Pay_By_Check()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicar em confirmar e verificar se o pedido de compra esta completo",
  "keyword": "Entao "
});
formatter.match({
  "location": "Steps.ComprarSteps.clicar_em_confirmar_e_verificar_se_o_pedido_de_compra_esta_completo()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("classpath:features/Login.feature");
formatter.feature({
  "name": "Somente usuarios validos podem fazer login",
  "description": "",
  "keyword": "Funcionalidade",
  "tags": [
    {
      "name": "@login"
    }
  ]
});
formatter.scenario({
  "name": "Um usuario valido pode fazer login",
  "description": "",
  "keyword": "Cenario",
  "tags": [
    {
      "name": "@login"
    }
  ]
});
formatter.step({
  "name": "o usuario acessa \"http://automationpractice.com\"",
  "keyword": "Dado "
});
formatter.match({
  "location": "Steps.LoginSteps.o_usuario_acessa(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "o usuario deve fazer login com  \"Username\" and \"Password\"",
  "keyword": "Quando "
});
formatter.match({
  "location": "Steps.LoginSteps.o_usuario_deve_fazer_login_com_and(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "e e redirecionado para a pagina de compras",
  "keyword": "Entao "
});
formatter.match({
  "location": "Steps.LoginSteps.e_e_redirecionado_para_a_pagina_de_compras()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Um usuario invalido nao pode fazer login",
  "description": "",
  "keyword": "Cenario",
  "tags": [
    {
      "name": "@login"
    }
  ]
});
formatter.step({
  "name": "o usuario acessa \"http://automationpractice.com\"",
  "keyword": "Dado "
});
formatter.match({
  "location": "Steps.LoginSteps.o_usuario_acessa(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "o usuario deve fazer login com  \"Username\" and \"Password\"",
  "keyword": "Quando "
});
formatter.match({
  "location": "Steps.LoginSteps.o_usuario_deve_fazer_login_com_and(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "deve continuar na página de login",
  "keyword": "Entao "
});
formatter.match({
  "location": "Steps.LoginSteps.deve_continuar_na_página_de_login()"
});
formatter.result({
  "error_message": "java.lang.AssertionError\r\n\tat org.junit.Assert.fail(Assert.java:87)\r\n\tat org.junit.Assert.assertTrue(Assert.java:42)\r\n\tat org.junit.Assert.assertTrue(Assert.java:53)\r\n\tat Steps.LoginSteps.deve_continuar_na_página_de_login(LoginSteps.java:50)\r\n\tat ✽.deve continuar na página de login(classpath:features/Login.feature:14)\r\n",
  "status": "failed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("classpath:features/LoginInvalido.feature");
formatter.feature({
  "name": "Somente usuarios validos podem fazer login",
  "description": "",
  "keyword": "Funcionalidade",
  "tags": [
    {
      "name": "@blocker"
    }
  ]
});
formatter.scenario({
  "name": "Um usuario valido pode fazer login",
  "description": "",
  "keyword": "Cenario",
  "tags": [
    {
      "name": "@blocker"
    }
  ]
});
formatter.step({
  "name": "o usuario acessa \"http://automationpractice\"",
  "keyword": "Dado "
});
formatter.match({
  "location": "Steps.LoginSteps.o_usuario_acessa(java.lang.String)"
});
formatter.result({
  "error_message": "org.openqa.selenium.WebDriverException: unknown error: net::ERR_NAME_NOT_RESOLVED\n  (Session info: chrome\u003d101.0.4951.64)\nBuild info: version: \u00274.0.0-alpha-6\u0027, revision: \u00275f43a29cfc\u0027\nSystem info: host: \u0027UDI-FD7LN33\u0027, ip: \u0027192.168.1.103\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002711.0.12\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 101.0.4951.64, chrome: {chromedriverVersion: 101.0.4951.41 (93c720db8323..., userDataDir: C:\\Users\\rvianaar\\AppData\\L...}, goog:chromeOptions: {debuggerAddress: localhost:59278}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: e50e619aec29c368ebef440ac544b9d4\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:196)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:129)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:53)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:160)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:582)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.get(RemoteWebDriver.java:282)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver$RemoteNavigation.to(RemoteWebDriver.java:935)\r\n\tat page.Browser.navigate(Browser.java:32)\r\n\tat Steps.LoginSteps.o_usuario_acessa(LoginSteps.java:20)\r\n\tat ✽.o usuario acessa \"http://automationpractice\"(classpath:features/LoginInvalido.feature:7)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "o usuario deve fazer login com  \"Username\" and \"Password\"",
  "keyword": "Quando "
});
formatter.match({
  "location": "Steps.LoginSteps.o_usuario_deve_fazer_login_com_and(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "e e redirecionado para a pagina de compras",
  "keyword": "Entao "
});
formatter.match({
  "location": "Steps.LoginSteps.e_e_redirecionado_para_a_pagina_de_compras()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Um usuario invalido nao pode fazer login",
  "description": "",
  "keyword": "Cenario",
  "tags": [
    {
      "name": "@blocker"
    }
  ]
});
formatter.step({
  "name": "o usuario acessa \"http://automationpractice\"",
  "keyword": "Dado "
});
formatter.match({
  "location": "Steps.LoginSteps.o_usuario_acessa(java.lang.String)"
});
formatter.result({
  "error_message": "org.openqa.selenium.WebDriverException: unknown error: net::ERR_NAME_NOT_RESOLVED\n  (Session info: chrome\u003d101.0.4951.64)\nBuild info: version: \u00274.0.0-alpha-6\u0027, revision: \u00275f43a29cfc\u0027\nSystem info: host: \u0027UDI-FD7LN33\u0027, ip: \u0027192.168.1.103\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002711.0.12\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 101.0.4951.64, chrome: {chromedriverVersion: 101.0.4951.41 (93c720db8323..., userDataDir: C:\\Users\\rvianaar\\AppData\\L...}, goog:chromeOptions: {debuggerAddress: localhost:59303}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 7d558d03957a2da50c09d76a14bb7ceb\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:196)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:129)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:53)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:160)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:582)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.get(RemoteWebDriver.java:282)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver$RemoteNavigation.to(RemoteWebDriver.java:935)\r\n\tat page.Browser.navigate(Browser.java:32)\r\n\tat Steps.LoginSteps.o_usuario_acessa(LoginSteps.java:20)\r\n\tat ✽.o usuario acessa \"http://automationpractice\"(classpath:features/LoginInvalido.feature:12)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "o usuario deve fazer login com  \"Username\" and \"Password\"",
  "keyword": "Quando "
});
formatter.match({
  "location": "Steps.LoginSteps.o_usuario_deve_fazer_login_com_and(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "deve continuar na página de login",
  "keyword": "Entao "
});
formatter.match({
  "location": "Steps.LoginSteps.deve_continuar_na_página_de_login()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "passed"
});
formatter.uri("classpath:features/NaoComprar.feature");
formatter.feature({
  "name": "Nao deve comprar sem registrar no site",
  "description": "",
  "keyword": "Funcionalidade",
  "tags": [
    {
      "name": "@notbuy"
    }
  ]
});
formatter.scenario({
  "name": "Nao deve comprar sem fazer login",
  "description": "",
  "keyword": "Cenario",
  "tags": [
    {
      "name": "@notbuy"
    }
  ]
});
formatter.step({
  "name": "o usuario acessa \"http://automationpractice.com\"",
  "keyword": "Dado "
});
formatter.match({
  "location": "Steps.LoginSteps.o_usuario_acessa(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "pesquise o produto \"Printed Summer Dress\"",
  "keyword": "E "
});
formatter.match({
  "location": "Steps.ComprarSteps.pesquise_o_produto(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "adiciona o produto \"Printed Summer Dress\" ao carrinho",
  "keyword": "Quando "
});
formatter.match({
  "location": "Steps.ComprarSteps.adiciona_o_produto_ao_carrinho(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "o produto \"Printed Summer Dress\" deve estar presente no carrinho",
  "keyword": "Entao "
});
formatter.match({
  "location": "Steps.ComprarSteps.o_produto_deve_estar_presente_no_carrinho(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "que deve estar na guia SignIn e clicar em prosseguir com o checkout",
  "keyword": "Dado "
});
formatter.match({
  "location": "Steps.ComprarSteps.que_deve_estar_na_guia_SignIn_e_clicar_em_prosseguir_com_o_checkout()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "nao deve efetuar a compra",
  "keyword": "Entao "
});
formatter.match({
  "location": "Steps.NaoComprarSteps.nao_deve_efetuar_a_compra()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});