import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username === 'tuana' && password === '123') {
      // Giriş başarılı
      localStorage.setItem('isLoggedIn', 'true');
      // Sayfayı yeniden yükleyerek Header'ın güncellenmesini sağla
      window.location.href = '/';
    } else {
      setError('Kullanıcı adı veya şifre hatalı');
    }
  };

  return (
    <div className="login-page">
      <div className="login-form">
        <h2>Giriş Yap</h2>
        {error && <div className="error-message">{error}</div>}
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="username">Kullanıcı Adı</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Şifre</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="btn">Giriş Yap</button>
        </form>
        
        <div className="login-footer">
          <p>Hesabınız yok mu? <a href="#" className="register-link">Kayıt olun</a></p>
        </div>
      </div>
    </div>
  );
};

export default Login; 