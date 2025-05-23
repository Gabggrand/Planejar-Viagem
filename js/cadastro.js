document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('cadastroForm').addEventListener('submit', function (e) {
        e.preventDefault();

        const nome = document.getElementById('nome').value.trim();
        const email = document.getElementById('email').value.trim();
        const senha = document.getElementById('senha').value;
        const confirmarSenha = document.getElementById('confirmarSenha').value;

        if (!nome || !email || !senha || !confirmarSenha) {
            alert('Preencha todos os campos');
            return;
        }

        if (senha !== confirmarSenha) {
            alert('As senhas não coincidem');
            return;
        }

        const usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];

        const usuarioExistente = usuarios.find(usuario => usuario.email === email);

        if (usuarioExistente) {
            alert('Usuário já cadastrado');
            return;
        }

        const novoUsuario = { nome, email, senha };
        usuarios.push(novoUsuario);
        localStorage.setItem('usuarios', JSON.stringify(usuarios));

        alert('Cadastro realizado com sucesso! Faça o login para continuar.');
        window.location.href = 'login.html';
    });
});
