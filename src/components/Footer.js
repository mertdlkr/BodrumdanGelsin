import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Bodrum'dan Gelsin</h3>
          <p>Bodrum'un eşsiz lezzetlerini ve el yapımı ürünlerini tüm Türkiye'ye ulaştırıyoruz.</p>
        </div>
        
        <div className="footer-section">
          <h3>Hızlı Bağlantılar</h3>
          <ul>
            <li><Link to="/products">Ürünlerimiz</Link></li>
            <li><Link to="/workshops">Workshoplar</Link></li>
            <li><Link to="/about">Hakkımızda</Link></li>
            <li><Link to="/contact">İletişim</Link></li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h3>İletişim</h3>
          <ul>
            <li>Adres: Bodrum, Muğla</li>
            <li>Telefon: +90 XXX XXX XX XX</li>
            <li>E-posta: info@bodrumdangelsin.com</li>
          </ul>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; 2025 Bodrum'dan Gelsin. Tüm hakları saklıdır.</p>
      </div>
    </footer>
  );
};

export default Footer; 