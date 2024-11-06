import { useState } from 'react';
import axios from 'axios';
import './Home.css';
import { useNavigate } from 'react-router-dom'; // Para redirecionar após o login

function Home() {
    const [isLogin, setIsLogin] = useState(true);
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        fullName: '',
        username: '',
        confirmPassword: ''
    });
    const [errors, setErrors] = useState({});
    const [message, setMessage] = useState('');
    const navigate = useNavigate();

    const toggleForm = () => {
        setIsLogin(!isLogin);
        setErrors({});
        setMessage('');
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const validateForm = () => {
        let tempErrors = {};

        if (!formData.email) {
            tempErrors.email = "O email é obrigatório.";
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            tempErrors.email = "Email inválido.";
        }

        if (!formData.password) {
            tempErrors.password = "A senha é obrigatória.";
        } else if (formData.password.length < 6) {
            tempErrors.password = "A senha deve ter pelo menos 6 caracteres.";
        }

        if (!isLogin) {
            if (!formData.fullName) {
                tempErrors.fullName = "O nome completo é obrigatório.";
            }

            if (!formData.username) {
                tempErrors.username = "O nome de usuário é obrigatório.";
            }

            if (formData.password !== formData.confirmPassword) {
                tempErrors.confirmPassword = "As senhas não coincidem.";
            }
        }

        setErrors(tempErrors);
        return Object.keys(tempErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!validateForm()) return;

        try {
            const url = isLogin ? '/api/login' : '/api/register';
            const data = isLogin
                ? { email: formData.email, password: formData.password }
                : { 
                    email: formData.email, 
                    password: formData.password,
                    fullName: formData.fullName,
                    username: formData.username
                };

            const response = await axios.post(url, data);

            if (isLogin) {
                const { token } = response.data; // Supondo que o token JWT seja retornado aqui
                localStorage.setItem('token', token); // Armazena o token no localStorage
                setMessage("Login bem-sucedido!");

                navigate('/feed'); // Redireciona para a página protegida
            } else {
                setMessage(response.data.message || "Cadastro realizado com sucesso!");
            }
        } catch (error) {
            setMessage(error.response?.data?.message || "Erro ao tentar enviar os dados.");
            console.error(error);
        }
    };

    return (
        <div className="container">
            <div className="logo-container">
                <img src="/png/icon_transparent.png" alt="Logo do site" className="logo" />
            </div>
            <div className="form-container">
                <img src="/png/liquidEscrita.png" alt="Logo do site" className="logo" />
                <form className="form" onSubmit={handleSubmit}>
                    {!isLogin && (
                        <>
                            <input
                                type="text"
                                name="fullName"
                                placeholder="Nome completo"
                                value={formData.fullName}
                                onChange={handleChange}
                            />
                            {errors.fullName && <p className="error">{errors.fullName}</p>}
                            <input
                                type="text"
                                name="username"
                                placeholder="@Nome de Usuário"
                                value={formData.username}
                                onChange={handleChange}
                            />
                            {errors.username && <p className="error">{errors.username}</p>}
                        </>
                    )}
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={formData.email}
                        onChange={handleChange}
                    />
                    {errors.email && <p className="error">{errors.email}</p>}
                    <input
                        type="password"
                        name="password"
                        placeholder="Senha"
                        value={formData.password}
                        onChange={handleChange}
                    />
                    {errors.password && <p className="error">{errors.password}</p>}
                    {!isLogin && (
                        <input
                            type="password"
                            name="confirmPassword"
                            placeholder="ConfirmaSenha"
                            value={formData.confirmPassword}
                            onChange={handleChange}
                        />
                    )}
                    {errors.confirmPassword && <p className="error">{errors.confirmPassword}</p>}
                    <button type="submit" className="btn">
                        {isLogin ? 'Entrar' : 'Cadastrar-se'}
                    </button>
                </form>
                {message && <p className="message">{message}</p>}
                <p className="toggle-text">
                    {isLogin ? "Não tem uma conta?" : "Já tem uma conta?"} 
                    <span onClick={toggleForm} className="toggle-link">
                        {isLogin ? " Cadastre-se" : " Entre"}
                    </span>
                </p>
            </div>
        </div>
    );
}

export default Home;


// Explicação da Lógica de Login
// Requisição de Login:

// Se o usuário está tentando fazer login (isLogin é true), enviamos apenas email e password para o backend.
// Após a resposta bem-sucedida, salvamos o token de autenticação retornado pelo backend no localStorage.
// Armazenamento do Token:

// O token JWT é armazenado no localStorage com localStorage.setItem('token', token). Ele será usado para autenticação em futuras requisições protegidas.
// Redirecionamento Após Login:

// Após um login bem-sucedido, o usuário é redirecionado para uma página protegida (/dashboard) usando navigate do React Router.
// Erro de Login:

// Se o login falhar, uma mensagem de erro será exibida, extraída da resposta do backend (error.response.data.message), se disponível.
// Essa implementação lida com a lógica básica de autenticação e configuração do frontend para futuras operações em páginas protegidas.