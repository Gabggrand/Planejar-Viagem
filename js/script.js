document.addEventListener('DOMContentLoaded', () => { 
    let usuarioLogado = localStorage.getItem('usuarioLogado') || sessionStorage.getItem('usuarioLogado');

    const btnLogin = document.getElementById('btnLogin');
    const btnCadastro = document.getElementById('btnCadastro');
    const userArea = document.getElementById('userArea');
    const userCircle = document.getElementById('userCircle');
    const logoutBtn = document.getElementById('logoutBtn');

    if (usuarioLogado) {
        usuarioLogado = JSON.parse(usuarioLogado);
        const userName = usuarioLogado.nome || usuarioLogado.email || "Usuário";

        if (btnLogin) btnLogin.classList.add('hidden');
        if (btnCadastro) btnCadastro.classList.add('hidden');
        if (userArea) userArea.classList.remove('hidden');
        if (userCircle) userCircle.textContent = userName.charAt(0).toUpperCase();

        if (logoutBtn) logoutBtn.classList.add('hidden');

        if (userArea && logoutBtn) {
            userArea.addEventListener('click', () => {
                logoutBtn.classList.toggle('hidden');
            });
        }

        if (logoutBtn) {
            logoutBtn.addEventListener('click', () => {
                localStorage.removeItem('usuarioLogado');
                sessionStorage.removeItem('usuarioLogado');
                window.location.reload();
            });
        }

    } else {
        if (btnLogin) btnLogin.classList.remove('hidden');
        if (btnCadastro) btnCadastro.classList.remove('hidden');
        if (userArea) userArea.classList.add('hidden');
        if (logoutBtn) logoutBtn.classList.add('hidden');
    }
});
