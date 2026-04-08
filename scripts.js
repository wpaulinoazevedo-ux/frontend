/*
  --------------------------------------------------------------------------------------
	Funções de mudanças de visualização de elementos
  --------------------------------------------------------------------------------------
*/

function opcaoEscolhida(elemento1) {
	menu = elemento1;
	subTela.classList.remove("oculto");
	subTela.classList.add("subTela");
	document.getElementById('form_alt_veiculo').reset();
	if (menu == "Veiculos") {
		bt_veiculos.classList.replace("botao_menu", "botao_selecionado");
		bt_servicos.classList.replace("botao_selecionado", "botao_menu");
		bt_cadastrar.classList.replace("botao_selecionado", "botao_menu");
		bt_pesquisar.classList.replace("botao_selecionado", "botao_menu");
		div_pesquisa_veiculos.classList.replace("conteudo", "oculto");
		div_cadastra_veiculos.classList.replace("visivel", "oculto");
		div_pesquisa_servicos.classList.replace("conteudo", "oculto");
		div_cadastra_servicos.classList.replace("conteudo", "oculto");
	}
	else if (menu == "Servicos") {
		bt_servicos.classList.replace("botao_menu", "botao_selecionado");
		bt_veiculos.classList.replace("botao_selecionado", "botao_menu");
		bt_cadastrar.classList.replace("botao_selecionado", "botao_menu");
		bt_pesquisar.classList.replace("botao_selecionado", "botao_menu");
		div_pesquisa_veiculos.classList.replace("conteudo", "oculto");
		div_cadastra_veiculos.classList.replace("visivel", "oculto");
		div_pesquisa_servicos.classList.replace("conteudo", "oculto");
		div_cadastra_servicos.classList.replace("conteudo", "oculto");
	}
	conteudo.classList.replace("conteudo", "oculto");
	retorno.classList.replace("retorno", "oculto");
	divBotoes.classList.remove("divOculta");
	divBotoes.classList.add("divBtsPesCad");
}

function formulario_pesquisar() {
	conteudo.classList.replace("oculto", "conteudo");
	document.getElementById('form_alt_veiculo').reset();
	if (menu == "Veiculos") {
		bt_cadastrar.classList.replace("botao_selecionado", "botao_menu");
		bt_pesquisar.classList.replace("botao_menu", "botao_selecionado");
		div_pesquisa_veiculos.classList.replace("oculto", "conteudo");
		div_cadastra_veiculos.classList.replace("visivel", "oculto");
		div_pesquisa_servicos.classList.replace("conteudo", "oculto");
		div_cadastra_servicos.classList.replace("conteudo", "oculto");
		div_alterar_veiculos.classList.replace("visivel", "oculto");
	}
	else if (menu == "Servicos") {
		bt_cadastrar.classList.replace("botao_selecionado", "botao_menu");
		bt_pesquisar.classList.replace("botao_menu", "botao_selecionado");
		div_pesquisa_veiculos.classList.replace("conteudo", "oculto");
		div_cadastra_veiculos.classList.replace("visivel", "oculto");
		div_pesquisa_servicos.classList.replace("oculto", "conteudo");
		div_cadastra_servicos.classList.replace("conteudo", "oculto");
		div_alterar_veiculos.classList.replace("visivel", "oculto");
	}
	retorno.classList.replace("retorno", "oculto");
}

function formulario_cadastrar() {
	conteudo.classList.replace("oculto", "conteudo");
	document.getElementById('form_alt_veiculo').reset();
	if (menu == "Veiculos") {
		bt_pesquisar.classList.replace("botao_selecionado", "botao_menu");
		bt_cadastrar.classList.replace("botao_menu", "botao_selecionado");
		div_pesquisa_veiculos.classList.replace("conteudo", "oculto");
		div_cadastra_veiculos.classList.replace("oculto", "visivel");
		div_pesquisa_servicos.classList.replace("conteudo", "oculto");
		div_cadastra_servicos.classList.replace("conteudo", "oculto");
		div_alterar_veiculos.classList.replace("visivel", "oculto");
	}
	else if (menu == "Servicos") {
		bt_pesquisar.classList.replace("botao_selecionado", "botao_menu");
		bt_cadastrar.classList.replace("botao_menu", "botao_selecionado");
		div_pesquisa_veiculos.classList.replace("conteudo", "oculto");
		div_cadastra_veiculos.classList.replace("visivel", "oculto");
		div_pesquisa_servicos.classList.replace("conteudo", "oculto");
		div_cadastra_servicos.classList.replace("oculto", "conteudo");
		div_alterar_veiculos.classList.replace("visivel", "oculto");
	}
	retorno.classList.replace("retorno", "oculto");
}

/*
  --------------------------------------------------------------------------------------
	Função ativada a partir de clique no botão para pesquisar algum registro.
  --------------------------------------------------------------------------------------
*/
function pesquisar() {
	document.getElementById('conteudoTabelaVeiculos').innerHTML = "";
	document.getElementById('conteudoTabelaServicos').innerHTML = "";
	document.getElementById('conteudoTabelaComentarios').innerHTML = "";
	if (menu == "Veiculos") {
		divTabelaServicos.classList.replace("visivel", "oculto");
		divTabelaVeiculos.classList.replace("oculto", "visivel");
		divTabelaComentarios.classList.replace("visivel", "oculto");

		let placa = document.getElementById("psv_placa").value;
		if (placa == "") {
			getListVeiculos();
		} else {
			getListVeiculo(placa);
		}
	}
	else if (menu == "Servicos") {
		divTabelaVeiculos.classList.replace("visivel", "oculto");
		divTabelaServicos.classList.replace("oculto", "visivel");
		divTabelaComentarios.classList.replace("visivel", "oculto");

		let requisicao = document.getElementById("pss_requisicao").value;
		if (requisicao == "") {
			getListServicos();
		}
		else {
			divTabelaComentarios.classList.replace("oculto", "visivel");
			getListServico(requisicao);
			setTimeout(() => { getListComentarios(requisicao) });
		}
	}
	retorno.classList.replace("oculto", "retorno");
	document.getElementById('psv_placa').value = "";
	document.getElementById('pss_requisicao').value = "";
}

/*
  --------------------------------------------------------------------------------------
	Função ativada a partir de clique no botão para cadastrar algum 
	registro.
  --------------------------------------------------------------------------------------
*/

function cadastrar() {
	document.getElementById('conteudoTabelaVeiculos').innerHTML = "";
	document.getElementById('conteudoTabelaServicos').innerHTML = "";
	document.getElementById('conteudoTabelaComentarios').innerHTML = "";
	if (menu == "Veiculos") {
		divTabelaServicos.classList.replace("visivel", "oculto");
		divTabelaVeiculos.classList.replace("oculto", "visivel");
		let placa = document.getElementById("cdv_placa").value;
		let marca = document.getElementById("cdv_marca").value;
		let modelo = document.getElementById("cdv_modelo").value;
		let versao = document.getElementById("cdv_versao").value;
		let ano = document.getElementById("cdv_ano").value;
		let cor = document.getElementById("cdv_cor").value;
		let cpf = document.getElementById("cdv_cpf").value;
		let nome = document.getElementById("cdv_cliente").value;
		let telefone = document.getElementById("cdv_telefone").value;
		postVeiculo(nome, cpf, telefone, placa, marca, modelo, versao, ano, cor);
	}
	else if (menu == "Servicos") {
		divTabelaVeiculos.classList.replace("visivel", "oculto");
		divTabelaServicos.classList.replace("oculto", "visivel");
		let placa = document.getElementById("cds_placa").value;
		let valor = document.getElementById("cds_valor").value;
		let comentario = document.getElementById("cds_comentario").value;
		postServico(placa, valor, comentario);
	}
	retorno.classList.replace("oculto", "retorno");
}

/*
  --------------------------------------------------------------------------------------
	Função para adicionar comentário.
  --------------------------------------------------------------------------------------
*/

function adicionarComentario(id, comentario) {
	if (comentario != "") {
		postComentario(id, comentario);
		divTabelaComentarios.classList.replace("oculto", "visivel");
		getListComentarios(id);
	}
}

/*
  --------------------------------------------------------------------------------------
  Função para obter a lista de todos os serviços existentes via 
  requisição GET
  --------------------------------------------------------------------------------------
*/
const getListServicos = async () => {
	let url = 'http://127.0.0.1:5001/servicos';
	fetch(url, {
		method: 'get',
	})
		.then((response) => response.json())
		.then((data) => {
			data.servicos.forEach(item => insertListServicos(item.id, item.placa, item.valor))
		})
		.catch((error) => {
			console.error('Error:', error);
		});
}

/*
  --------------------------------------------------------------------------------------
  Função para obter a lista existente de um serviço específico via 
  requisição GET
  --------------------------------------------------------------------------------------
*/

const getListServico = async (id) => {
	let url = 'http://127.0.0.1:5001/servico?id=' + id;
	fetch(url, {
		method: 'get',
	})
		.then((response) => response.json())
		.then((data) => {
			insertListServicos(data.id, data.placa, data.valor.toFixed(2))
		})
		.catch((error) => {
			console.error('Error:', error);
		});
}

/*
  --------------------------------------------------------------------------------------
  Função para obter a lista existente de um serviço específico via 
  requisição GET sem adicionar botão
  --------------------------------------------------------------------------------------
*/

const getListServicoSemBotao = async (id) => {
	let url = 'http://127.0.0.1:5001/servico?id=' + id;
	fetch(url, {
		method: 'get',
	})
		.then((response) => response.json())
		.then((data) => {
			insertListServicosSemBotao(data.id, data.placa, data.valor.toFixed(2))
		})
		.catch((error) => {
			console.error('Error:', error);
		});
}

/*
  --------------------------------------------------------------------------------------
  Função para inserir lista de serviços no corpo da tabela.
  --------------------------------------------------------------------------------------
*/

const insertListServicos = (id, placa, valor) => {
	var item = [id, placa, valor];
	var tabela = document.getElementById('conteudoTabelaServicos');
	var linha = tabela.insertRow();

	for (var i = 0; i < item.length; i++) {
		var cel = linha.insertCell(i);
		cel.textContent = item[i];
	}
	criarBotaoVisualizar(linha.insertCell(-1), id);
}

/*
  --------------------------------------------------------------------------------------
  Função para inserir lista de serviços no corpo da tabela sem botões.
  --------------------------------------------------------------------------------------
*/

const insertListServicosSemBotao = (id, placa, valor) => {
	var item = [id, placa, valor];
	var tabela = document.getElementById('conteudoTabelaServicos');
	var linha = tabela.insertRow();

	for (var i = 0; i < item.length; i++) {
		var cel = linha.insertCell(i);
		cel.textContent = item[i];
	}
}

/*
  --------------------------------------------------------------------------------------
  Função para cadastrar um serviço via requisição POST
  --------------------------------------------------------------------------------------
*/

const postServico = async (inputPlaca, inputValor, inputComentario) => {
	const formData = new FormData();
	const valor = inputValor.replace(',', '.');
	formData.append('placa', inputPlaca);
	formData.append('valor', valor);

	let url = 'http://127.0.0.1:5001/servico';
	fetch(url, {
		method: 'post',
		body: formData
	})
		.then((response) => response.json())
		.then(data => {
			getListServicoSemBotao(data.id)
			adicionarComentario(data.id, inputComentario)
		})
		.catch((error) => {
			console.error('Error:', error);
		});
}

/*
  --------------------------------------------------------------------------------------
  Função para adicionar um novo veículo via requisição POST
  --------------------------------------------------------------------------------------
*/

const postVeiculo = async (inputNome, inputCpf, inputTelefone, inputPlaca,
	inputMarca, inputModelo, inputVersao, inputAno, inputCor) => {
	const formData = new FormData();
	formData.append('nome', inputNome);
	formData.append('cpf', inputCpf);
	formData.append('telefone', inputTelefone);
	formData.append('placa', inputPlaca);
	formData.append('marca', inputMarca);
	formData.append('modelo', inputModelo);
	formData.append('versao', inputVersao);
	formData.append('ano', inputAno);
	formData.append('cor', inputCor);
	formData.append('status', 1);

	let url = 'http://127.0.0.1:5001/veiculo';
	fetch(url, {
		method: 'post',
		body: formData
	})
		.then((response) => response.json())
		.then(data => {
			getListVeiculo(data.placa)
		})
		;
	alert("Veiculo cadastrado!")
}

/*
  --------------------------------------------------------------------------------------
  Função para obter a lista de todos os veículos existentes via 
  requisição GET
  --------------------------------------------------------------------------------------
*/

const getListVeiculos = async () => {
	let url = 'http://127.0.0.1:5001/veiculos';
	fetch(url, {
		method: 'get',
	})
		.then((response) => response.json())
		.then((data) => {
			data.veiculos.forEach(item => insertListVeiculos(item.placa,
				item.nome, item.modelo, item.status, item.marca, item.cpf,
				item.telefone, item.versao, item.ano, item.cor
			))
		})
		.catch((error) => {
			console.error('Error:', error);
		});
}
/*
  --------------------------------------------------------------------------------------
  Função para alterar o cadaastro de um veículo via requisição PUT
  --------------------------------------------------------------------------------------
*/

const putVeiculo = async (placa_atual, inputNome, inputCpf, inputTelefone,
	inputPlaca, inputMarca, inputModelo, inputVersao, inputAno, inputCor) => {
	const formData = new FormData();
	formData.append('nome', inputNome);
	formData.append('cpf', inputCpf);
	formData.append('telefone', inputTelefone);
	formData.append('placa', inputPlaca);
	formData.append('marca', inputMarca);
	formData.append('modelo', inputModelo);
	formData.append('versao', inputVersao);
	formData.append('ano', inputAno);
	formData.append('cor', inputCor);
	formData.append('status', 1);
	const url = 'http://127.0.0.1:5001/veiculo?placa=' + placa_atual;
	fetch(url, {
		method: 'put',
		body: formData
	})
		.then((response) => response.json());
	alert("Cadastro alterado!");
	document.getElementById('conteudoTabelaVeiculos').innerHTML = "";
	document.getElementById("divTabelaVeiculos").classList.replace("visivel", "oculto");
}
/*
  --------------------------------------------------------------------------------------
  Função para obter a lista de um veículo filtrando por placa via 
  requisição GET
  --------------------------------------------------------------------------------------
*/

const getListVeiculo = async (placa) => {
	let url = 'http://127.0.0.1:5001/veiculo?placa=' + placa;
	fetch(url, {
		method: 'get',
	})
		.then((response) => response.json())
		.then((data) => {
			insertListVeiculos(data.placa, data.nome, data.modelo, data.status)
		})
		.catch((error) => {
			console.error('Error:', error);
		});
}

/*
  --------------------------------------------------------------------------------------
  Função para inserir lista de veículos no corpo da tabela.
  --------------------------------------------------------------------------------------
*/

const insertListVeiculos = (placa, nome, modelo, status, marca, cpf,
	telefone, versao, ano, cor) => {
	var item = [placa, nome, modelo];
	var tabela = document.getElementById('conteudoTabelaVeiculos');
	var linha = tabela.insertRow();

	for (var i = 0; i < item.length; i++) {
		var cel = linha.insertCell(i);
		cel.textContent = item[i];
	}
	criarBotaoAtualizar(linha.insertCell(-1), placa);
	criarBotaoStatus(linha.insertCell(-1), placa, nome, modelo, status, marca, cpf,
		telefone, versao, ano, cor);
}

/*
  --------------------------------------------------------------------------------------
  Função para inserir lista de placas no corpo da tabela.
  --------------------------------------------------------------------------------------
*/
const insertListPlacas = (placa, nome, modelo, status, marca, cpf,
	telefone, versao, ano, cor) => {
	var item = [placa, nome, modelo];
	var tabela = document.getElementById('conteudoTabelaVeiculos');
	var linha = tabela.insertRow();

	for (var i = 0; i < item.length; i++) {
		var cel = linha.insertCell(i);
		cel.textContent = item[i];
	}
	criarBotaoAtualizar(linha.insertCell(-1), placa);
	criarBotaoStatus(linha.insertCell(-1), placa, nome, modelo, status, marca, cpf,
		telefone, versao, ano, cor);
}

/*
  --------------------------------------------------------------------------------------
  Função para adicionar um novo comentário associado a um serviço via 
  requisição POST
  --------------------------------------------------------------------------------------
*/

const postComentario = async (inputServico, inputComentario) => {
	const formData = new FormData();
	formData.append('servico', inputServico);
	formData.append('texto', inputComentario);

	let url = 'http://127.0.0.1:5001/comentario';
	fetch(url, {
		method: 'post',
		body: formData
	})
		.then((response) => response.json())
		.catch((error) => {
			console.error('Error:', error);
		});
}

/*
  --------------------------------------------------------------------------------------
  Função para coletar todos os comentários de um serviço via 
  requisição GET
  --------------------------------------------------------------------------------------
*/

const getListComentarios = async (servico) => {
	let url = 'http://127.0.0.1:5001/comentarios/servico?servico=' + servico;
	fetch(url, {
		method: 'get',
	})
		.then((response) => response.json())
		.then((data) => {
			data.comentarios.forEach(item => insertListComentarios(item.servico, item.texto, item.atualizacao))
		})
		.catch((error) => {
			console.error('Error:', error);
		});
}

/*
  --------------------------------------------------------------------------------------
  Função para inserir lista de comentásrios no corpo da tabela.
  --------------------------------------------------------------------------------------
*/

const insertListComentarios = (servico, texto, atualizacao) => {
	var item = [servico, texto, atualizacao];
	var tabela = document.getElementById('conteudoTabelaComentarios');
	var linha = tabela.insertRow();

	for (var i = 0; i < item.length; i++) {
		var cel = linha.insertCell(i);
		cel.textContent = item[i];
	}
}

/*
  --------------------------------------------------------------------------------------
  Cria um botão de atualizar registros da tabela de veículos.
  --------------------------------------------------------------------------------------
*/

const criarBotaoAtualizar = (tabela, placa) => {
	let botao = document.createElement("input");
	botao.type = "button";
	botao.value = "Atualizar";
	botao.className = "close";

	botao.onclick = function () {
		getListVeiculoCompleto(placa);
	};

	tabela.appendChild(botao);
}


/*
  --------------------------------------------------------------------------------------
  Cria um botão para ativar ou desativar registros da tabela de veículos.
  --------------------------------------------------------------------------------------
*/

const criarBotaoStatus = (tabela, placa, nome, modelo, status, marca, cpf, telefone, versao, ano, cor) => {

	if (status === 1) {
		let botao = document.createElement("input");
		botao.type = "button";
		botao.value = "Desativar";
		botao.className = "desativar";

		botao.onclick = function () {
			let url = 'http://127.0.0.1:5001/veiculo?placa=' + placa;
			fetch(url, { method: 'delete' })
				.then(() => {
					alert("Veículo desativado!");
					document.getElementById('conteudoTabelaVeiculos').innerHTML = "";
					getListVeiculos();
				});
		};
		tabela.appendChild(botao);
	}
	else if (status === 0) {
		let botao = document.createElement("input");
		botao.type = "button";
		botao.value = "Ativar";
		botao.className = "ativar";

		botao.onclick = function () {
			putVeiculo(placa, nome, cpf, telefone, placa, marca, modelo, versao, ano, cor);
		};
		tabela.appendChild(botao);
	}
}

/*
  --------------------------------------------------------------------------------------
  Cria um botão para visualizar registros da tabela de serviços.
  --------------------------------------------------------------------------------------
*/

const criarBotaoVisualizar = (tabela, id) => {
	let botao = document.createElement("input");
	botao.type = "button";
	botao.value = "Visualizar";
	botao.className = "close";
	botao.onclick = function () {
		document.getElementById("conteudoTabelaServicos").innerHTML = "";
		document.getElementById("conteudoTabelaComentarios").innerHTML = "";
		getListServicoSemBotao(id);
		getListComentarios(id);
		document.getElementById("divTabelaServicos").classList.replace("oculto", "visivel");
		document.getElementById("divTabelaComentarios").classList.replace("oculto", "visivel");
	};
	tabela.appendChild(botao);
}

/*
  --------------------------------------------------------------------------------------
  Cria um botão para atualizar registro da tabela de veículos.
  --------------------------------------------------------------------------------------
*/

function alterarVeiculo() {
	let close = document.getElementsByClassName("atualizar");
	let i;
	for (i = 0; i < close.length; i++) {
		close[i].onclick = function () {
			let div = this.parentElement.parentElement;
			let placa = div.getElementsByTagName('td')[0].innerHTML;
			getListVeiculoCompleto(placa);
		}
	}
}

/*
  --------------------------------------------------------------------------------------
  Cria um botão para desativar registro da tabela de veículos.
  --------------------------------------------------------------------------------------
*/

function desativarVeiculo() {
	let close = document.getElementsByClassName("desativar");
	let i;
	for (i = 0; i < close.length; i++) {
		close[i].onclick = function () {
			let div = this.parentElement.parentElement;
			let placa = div.getElementsByTagName('td')[0].innerHTML;
			let url = 'http://127.0.0.1:5001/veiculo?placa=' + placa;
			fetch(url, {
				method: 'delete',
			})
		}
	}
}

function ativarVeiculo(placa, nome, modelo, status, marca, cpf,
	telefone, versao, ano, cor) {
	let close = document.getElementsByClassName("ativar");
	let i;
	for (i = 0; i < close.length; i++) {
		close[i].onclick = function () {
			let div = this.parentElement.parentElement;
			let placa = div.getElementsByTagName('td')[0].innerHTML;
			putVeiculo(placa, nome, cpf, telefone, placa, marca, modelo, versao, ano, cor);
		}
	}
}

/*
  --------------------------------------------------------------------------------------
  Coleta todos os dados da tabela veículos para uma determinada placa.
  --------------------------------------------------------------------------------------
*/

const getListVeiculoCompleto = async (placa) => {
	let url = 'http://127.0.0.1:5001/veiculo?placa=' + placa;
	fetch(url, {
		method: 'get',
	})
		.then((response) => response.json())
		.then((data) => {
			preencherAtualizacaoVeiculo(data.placa, data.placa, data.nome, data.marca,
				data.modelo, data.versao, data.cpf, data.telefone,
				data.ano, data.cor, data.status)
		})
		.catch((error) => {
			console.error('Error:', error);
		});
}

/*
  --------------------------------------------------------------------------------------
  Preenche elementos com os dados coletados em getListVeiculoCompleto.
  --------------------------------------------------------------------------------------
*/

function preencherAtualizacaoVeiculo(placa_atual, placa, nome, marca, modelo, versao, cpf, telefone, ano, cor, status) {
	document.getElementById("alt_placa").value = placa;
	document.getElementById("alt_cliente").value = nome;
	document.getElementById("alt_marca").value = marca;
	document.getElementById("alt_modelo").value = modelo;
	document.getElementById("alt_versao").value = versao;
	document.getElementById("alt_cpf").value = cpf;
	document.getElementById("alt_telefone").value = telefone;
	document.getElementById("alt_ano").value = ano;
	document.getElementById("alt_cor").value = cor;
	document.getElementById("placa_atual").value = placa_atual;
	document.getElementById("alt_status").value = status;
	div_alterar_veiculos.classList.replace("oculto", "visivel");
	div_cadastra_veiculos.classList.replace("visivel", "oculto");
	document.getElementById('form_cadastrar_veiculo').reset();
}

/*
  --------------------------------------------------------------------------------------
  Passa os dados para a função de alterar informações de veículos.
  --------------------------------------------------------------------------------------
*/

function atualizarVeiculo() {
	placa = document.getElementById("alt_placa").value;
	nome = document.getElementById("alt_cliente").value;
	marca = document.getElementById("alt_marca").value;
	modelo = document.getElementById("alt_modelo").value;
	versao = document.getElementById("alt_versao").value;
	cpf = document.getElementById("alt_cpf").value;
	telefone = document.getElementById("alt_telefone").value;
	ano = document.getElementById("alt_ano").value;
	cor = document.getElementById("alt_cor").value;
	placa_atual = document.getElementById("placa_atual").value;
	putVeiculo(placa_atual, nome, cpf, telefone, placa, marca, modelo, versao, ano, cor);
	document.getElementById('form_alt_veiculo').reset();
	div_alterar_veiculos.classList.replace("visivel", "oculto");
}


/*
  --------------------------------------------------------------------------------------
  Função assíncrona para buscar as marcas na API
  --------------------------------------------------------------------------------------
*/
async function carregarMarcas(elemento) {
	const url = 'https://my-json-server.typicode.com/wpaulinoazevedo-ux/marcas-api/marcas';
	if (!elemento || elemento.options.length > 1) return;
	try {
		const response = await fetch(url);
		const marcas = await response.json();
		elemento.innerHTML = '<option value="">Selecione uma marca</option>';
		marcas.forEach(item => {
			const option = document.createElement('option');
			option.value = item.marca;
			option.text = item.marca;
			elemento.appendChild(option);
		});
	} catch (erro) {
		console.error('Erro ao carregar marcas:', erro);
	}
}

/*
  --------------------------------------------------------------------------------------
  Função assíncrona para buscar os modelos na API
  --------------------------------------------------------------------------------------
*/

async function carregarModelos(marcaSelecionada) {
	const url = 'https://my-json-server.typicode.com/wpaulinoazevedo-ux/modelos-api/modelos';
	const selectModelo = document.getElementById('cdv_modelo');
	if (!marcaSelecionada) {
		selectModelo.innerHTML = '<option value="">Selecione uma marca primeiro</option>';
		return;
	}
	try {
		const response = await fetch(url);
		const todosModelos = await response.json();
		const modelosFiltrados = todosModelos.filter(item => item.marca === marcaSelecionada);
		selectModelo.innerHTML = '<option value="">Selecione um modelo</option>';
		modelosFiltrados.forEach(item => {
			const option = document.createElement('option');
			option.value = item.modelo;
			option.text = item.modelo;
			selectModelo.appendChild(option);
		});
	} catch (erro) {
		console.error('Erro ao carregar modelos:', erro);
		selectModelo.innerHTML = '<option value="">Erro ao carregar modelos</option>';
	}
}

/*
  --------------------------------------------------------------------------------------
  Função assíncrona para buscar as versões na API
  --------------------------------------------------------------------------------------
*/

async function carregarVersoes(modeloSelecionado) {
	const url = 'https://my-json-server.typicode.com/wpaulinoazevedo-ux/versoes-api/versoes';
	const selectVersao = document.getElementById('cdv_versao');
	if (!modeloSelecionado) {
		selectVersao.innerHTML = '<option value="">Selecione uma marca primeiro</option>';
		return;
	}
	try {
		const response = await fetch(url);
		const todasVersoes = await response.json();
		const versoesFiltradas = todasVersoes.filter(item => item.modelo === modeloSelecionado);
		selectVersao.innerHTML = '<option value="">Selecione uma versão</option>';
		versoesFiltradas.forEach(item => {
			const option = document.createElement('option');
			option.value = item.versao;
			option.text = item.versao;
			selectVersao.appendChild(option);
		});
	} catch (erro) {
		console.error('Erro ao carregar versões:', erro);
		selectModelo.innerHTML = '<option value="">Erro ao carregar versões</option>';
	}
}

/*
  --------------------------------------------------------------------------------------
  Função assíncrona para buscar as cores na API
  --------------------------------------------------------------------------------------
*/
async function carregarCores(elemento) {
	const url = 'https://my-json-server.typicode.com/wpaulinoazevedo-ux/cores-api/cores';
	if (!elemento || elemento.options.length > 1) return;
	try {
		const response = await fetch(url);
		const cores = await response.json();
		elemento.innerHTML = '<option value="">Selecione uma cor</option>';
		cores.forEach(item => {
			const option = document.createElement('option');
			option.value = item.cor;
			option.text = item.cor;
			elemento.appendChild(option);
		});
	} catch (erro) {
		console.error('Erro ao carregar cores:', erro);
	}
}
/*
  --------------------------------------------------------------------------------------
  Função assíncrona para buscar as placas na API
  --------------------------------------------------------------------------------------
*/
async function carregarPlacas() {
	const url = 'http://127.0.0.1:5001/veiculos';
	if (!document.getElementById("cds_placa") || document.getElementById("cds_placa").options.length > 1) return;
	try {
		const response = await fetch(url);
		const placas = await response.json();
		document.getElementById("cds_placa").innerHTML = '<option value="">Selecione uma placa...</option>';
		placas.veiculos.forEach(item => {
			const option = document.createElement('option');
			option.value = item.placa;
			option.text = item.placa;
			document.getElementById("cds_placa").appendChild(option);
		});
	} catch (erro) {
		console.error('Erro ao carregar placas:', erro);
	}
}
