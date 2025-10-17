document.addEventListener('DOMContentLoaded', function() {
	const loginForm = document.querySelector('.form-login');
	
	if (loginForm) {
		loginForm.addEventListener('submit', function(e) {
			e.preventDefault();
			
			const username = document.querySelector('input[name="username"]').value;
			const button = this.querySelector('button[type="submit"]');
			
			button.style.backgroundColor = '#28a745';
			button.textContent = 'Logado com sucesso!';
			button.style.cursor = 'default';
			
			localStorage.setItem('isLoggedIn', 'true');
			localStorage.setItem('username', username);
			
			setTimeout(function() {
				window.location.href = 'index.html';
			}, 1000);
		});
	}
});
