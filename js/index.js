document.addEventListener('DOMContentLoaded', function() {
    // 1. Array de Objetos para o menu (Requisito: Array e Objeto)
    const menuLinks = [
        { nome: "Destaques", href: "#destaques" },
        { nome: "Últimas", href: "#ultimas" },
        { nome: "Contato", href: "#contato" }
    ];

    // Função para formatar o menu (Requisito: Function Declaration)
    // Embora o menu esteja no HTML com Bootstrap, vamos garantir o requisito da função.
    function formatarMenu(links) {
        let menuHTML = '';
        links.forEach(link => {
            menuHTML += `<li class="nav-item"><a class="nav-link" href="${link.href}">${link.nome}</a></li>`;
        });
        // console.log("Menu formatado:", menuHTML); // Descomente para verificar no console
    }
    formatarMenu(menuLinks);

    // Requisito: Function Expression (usada para determinar a saudação)
    const obterSaudacao = function() {
        const hora = new Date().getHours();
        if (hora < 12) {
            return 'Bom dia!';
        } else if (hora < 18) {
            return 'Boa tarde!';
        } else {
            return 'Boa noite!';
        }
    };
    
    // Lógica de Login/Logout
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    const username = localStorage.getItem('username');
    const btnEntrar = document.querySelector('.btn-entrar');
    const saudacaoTexto = obterSaudacao();
    
    if (isLoggedIn === 'true' && btnEntrar) {
        btnEntrar.textContent = `Olá, ${username}`;
        btnEntrar.classList.remove('btn-primary');
        btnEntrar.classList.add('btn-success');
        
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

    // Exibir saudação no topo do conteúdo
    const content = document.querySelector('.content');
    if (content) {
        const div = document.createElement('div');
        if (isLoggedIn === 'true' && username) {
            div.textContent = saudacaoTexto + ' Bem-vindo(a), ' + username + '!';
        } else {
            div.textContent = saudacaoTexto + ' Bem-vindo(a) ao Portal de Notícias!';
        }
        div.style.fontWeight = 'bold';
        div.style.marginBottom = '16px';
        content.insertBefore(div, content.firstChild);
    }

    // O link de registro não existe nesta página, mas mantemos o registro de eventos aqui se houver necessidade futura.
});