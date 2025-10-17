document.addEventListener('DOMContentLoaded', function() {
	const isLoggedIn = localStorage.getItem('isLoggedIn');
	const username = localStorage.getItem('username');
	const btnEntrar = document.querySelector('.btn-entrar');
	
	if (isLoggedIn === 'true' && btnEntrar) {
		btnEntrar.textContent = 'Você está logado';
		btnEntrar.style.backgroundColor = '#28a745';
		btnEntrar.style.cursor = 'default';
		btnEntrar.addEventListener('click', function(e) {
			e.preventDefault();
			// Opcional: adicionar funcionalidade de logout
			if (confirm('Deseja fazer logout?')) {
				localStorage.removeItem('isLoggedIn');
				localStorage.removeItem('username');
				location.reload();
			}
		});
	}

	const hora = new Date().getHours();
	let saudacao;
	if (hora < 12) {
		saudacao = 'Bom dia!';
	} else if (hora < 18) {
		saudacao = 'Boa tarde!';
	} else {
		saudacao = 'Boa noite!';
	}
	const content = document.querySelector('.content');
	if (content) {
		const div = document.createElement('div');
		if (isLoggedIn === 'true' && username) {
			div.textContent = saudacao + ' Bem-vindo, ' + username + '!';
		} else {
			div.textContent = saudacao + ' Bem-vindo ao Portal de Notícias!';
		}
		div.style.fontWeight = 'bold';
		div.style.marginBottom = '16px';
		content.insertBefore(div, content.firstChild);
	}

	const registrarLink = document.querySelector('.register a');
	if (registrarLink) {
		registrarLink.addEventListener('click', function(e) {
			e.preventDefault();
			window.location.href = 'login.html';
		});
	}
});
