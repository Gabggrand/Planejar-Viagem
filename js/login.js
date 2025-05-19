document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('loginForm').addEventListener('submit', function (e) {
        e.preventDefault();

        const email = document.getElementById('email').value.trim();
        const senha = document.getElementById('senha').value;
        const manterLogado = document.getElementById('manterLogado').checked;

        if (!email || !senha) {
            alert('Preencha todos os campos');
            return;
        }

        const usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];

        const usuario = usuarios.find(user => user.email === email && user.senha === senha);

        if (!usuario) {
            const existeEmail = usuarios.some(user => user.email === email);
            if (!existeEmail) {
                alert('Usuário não cadastrado');
            } else {
                alert('Email ou senha inválidos');
            }
            return;
        }

        if (manterLogado) {
            localStorage.setItem('usuarioLogado', JSON.stringify(usuario));
            sessionStorage.removeItem('usuarioLogado'); 
        } else {
            sessionStorage.setItem('usuarioLogado', JSON.stringify(usuario));
            localStorage.removeItem('usuarioLogado');
        }

        alert('Login efetuado com sucesso!');
        window.location.href = '/html/index.html';
    });
});
