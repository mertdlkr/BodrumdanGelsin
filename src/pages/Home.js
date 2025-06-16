import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';
import workshopsBg from '../assets/workshops-bg.jpg';
import productsBg from '../assets/products-bg.jpg';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="home">
      <div className="hero-section">
        <h1>Bodrum'dan Gelsin</h1>
        <p>Bodrum'un eşsiz lezzetlerini ve el yapımı ürünlerini keşfedin</p>
      </div>

      <div className="home-split">
        <div 
          className="split-section workshops-section"
          onClick={() => navigate('/workshops')}
          style={{
            background: `linear-gradient(rgba(255, 107, 53, 0.7), rgba(255, 140, 66, 0.7)), url(${workshopsBg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        >
          <div className="split-section-content">
            <h2>Workshoplar</h2>
            <p>El yapımı ürünler ve eğitimler</p>
          </div>
        </div>

        <div 
          className="split-section products-section"
          onClick={() => navigate('/products')}
          style={{
            background: `linear-gradient(rgba(255, 165, 0, 0.7), rgba(255, 140, 66, 0.7)), url(${productsBg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        >
          <div className="split-section-content">
            <h2>Ürünlerimiz</h2>
            <p>Bodrum'un en özel ürünleri</p>
          </div>
        </div>
      </div>

      <div className="features-section">
        <div className="feature">
          <h3>El Yapımı Ürünler</h3>
          <p>Bodrum'un ustalarından özenle hazırlanan ürünler</p>
        </div>
        <div className="feature">
          <h3>Türkiye'nin Her Yerine Teslimat</h3>
          <p>Güvenli ve hızlı kargo seçenekleri</p>
        </div>
        <div className="feature">
          <h3>Workshop Eğitimleri</h3>
          <p>Uzman eğitmenler eşliğinde öğrenme fırsatı</p>
        </div>
      </div>
    </div>
  );
};

export default Home; 