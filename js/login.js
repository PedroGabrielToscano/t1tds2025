document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.querySelector('.form-login');
    
    if (loginForm) {
        // Requisito: Arrow Function (usada como Event Listener)
        loginForm.addEventListener('submit', (e) => { 
            e.preventDefault();
            
            const username = document.querySelector('input[name="username"]').value;
            const button = this.querySelector('button[type="submit"]');
            
            button.style.backgroundColor = '#28a745';
            button.textContent = 'Logado com sucesso!';
            button.style.cursor = 'default';
            
            // Simulação de login usando localStorage
            localStorage.setItem('isLoggedIn', 'true');
            localStorage.setItem('username', username);
            
            setTimeout(() => {
                window.location.href = 'index.html';
            }, 1000);
        });
    }

    const registrarLink = document.querySelector('.register a');
    if (registrarLink) {
        registrarLink.addEventListener('click', function(e) {
            e.preventDefault();
            window.location.href = 'index.html'; // Mantive o redirecionamento para 'index.html' por não ter uma página de registro separada.
        });
    }
});