import React from 'react';
import './About.css';
import aboutImage from '../assets/about/about-image.jpg';

const About = () => {
  return (
    <div className="about-page">
      {/* Hero Section */}
      <div className="hero-section">
        <div className="hero-content">
          <h1>Hakkımızda</h1>
          <p>Bodrum'un eşsiz kültürünü tüm Türkiye'ye taşıyoruz</p>
        </div>
      </div>

      {/* Story Section */}
      <div className="story-section">
        <div className="story-content">
          <div className="story-image">
            <img src={aboutImage} alt="Bodrum'dan Gelsin Hikayesi" />
          </div>
          <div className="story-text">
            <h2>Hikayemiz</h2>
            <p>
              Bodrum'dan Gelsin, Bodrum'un eşsiz mandalina bahçelerinden ilham alan ve doğallığı merkezine koyan bir markadır. Üreticiden doğrudan alınan mandalinaları, el emeğiyle katma değerli ürünlere dönüştürerek hem yerel ekonomiyi destekliyor hem de tüketicilere sağlıklı ve özgün tatlar sunuyoruz. Amacımız; Bodrum'un bereketli topraklarını, doğanın cömertliğini ve sürdürülebilir üretimi herkesle buluşturmak.
            </p>
          </div>
        </div>
      </div>

      {/* Mission & Vision Cards */}
      <div className="mission-vision-section">
        <div className="mv-card mission-card">
          <div className="mv-icon">🎯</div>
          <h3>Misyonumuz</h3>
          <p>
            Bodrum'un köylerindeki yerel üreticileri destekleyerek, el yapımı ürünleri ve 
            geleneksel sanatları modern dünyada yaşatmak. Kaliteli, özgün ve sürdürülebilir 
            ürünlerle müşterilerimize Bodrum'un eşsiz deneyimini sunmak.
          </p>
        </div>
        <div className="mv-card vision-card">
          <div className="mv-icon">👁️</div>
          <h3>Vizyonumuz</h3>
          <p>
            Türkiye'nin en güvenilir el yapımı ürün platformu olmak. Geleneksel sanatları 
            modern yaşamla buluştururak, kültürel mirasımızın gelecek nesillere aktarılmasına 
            katkıda bulunmak ve yerel ekonomiyi güçlendirmek.
          </p>
        </div>
      </div>

      {/* Values Section */}
      <div className="values-section">
        <h2>Değerlerimiz</h2>
        <p className="values-subtitle">Çalışmalarımızı yönlendiren temel ilkelerimiz</p>
        
        <div className="values-grid">
          <div className="value-card">
            <div className="value-icon">🤝</div>
            <h3>Güven</h3>
            <p>Müşterilerimizle ve üreticilerimizle kurduğumuz güven ilişkisi her şeyden önce gelir.</p>
          </div>
          <div className="value-card">
            <div className="value-icon">⭐</div>
            <h3>Kalite</h3>
            <p>Sadece en kaliteli ürünleri seçiyor, titizlikle kontrol ediyoruz.</p>
          </div>
          <div className="value-card">
            <div className="value-icon">🌱</div>
            <h3>Sürdürülebilirlik</h3>
            <p>Çevreye duyarlı üretim ve sürdürülebilir iş modelleri benimsiyoruz.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About; 