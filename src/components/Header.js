import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Sayfa yüklendiğinde giriş durumunu kontrol et
    const loggedIn = localStorage.getItem('isLoggedIn') === 'true';
    setIsLoggedIn(loggedIn);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    setIsLoggedIn(false);
    navigate('/');
  };

  return (
    <header className="header">
      <div className="header-content">
        <Link to="/" className="logo">
          <img src="/logo.png" alt="Bodrum'dan Gelsin Logo" onError={(e) => {
            e.target.style.display = 'none';
            e.target.nextSibling.style.display = 'block';
          }} />
          <span className="logo-text" style={{display: 'none'}}>Bodrum'dan Gelsin</span>
        </Link>
        <nav className="nav-menu">
          <Link to="/" className="nav-link">Ana Sayfa</Link>
          <Link to="/products" className="nav-link">Ürünlerimiz</Link>
          <Link to="/workshops" className="nav-link">Workshoplar</Link>
          <Link to="/about" className="nav-link">Hakkımızda</Link>
          <Link to="/contact" className="nav-link">İletişim</Link>
          {isLoggedIn ? (
            <button onClick={handleLogout} className="nav-link logout-btn">Çıkış Yap</button>
          ) : (
            <Link to="/login" className="nav-link">Giriş Yap</Link>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header; 