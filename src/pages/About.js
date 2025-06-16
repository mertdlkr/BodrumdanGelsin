import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-page">
      <div className="page-header">
        <h1>Hakkımızda</h1>
        <p>Bodrum'un eşsiz lezzetlerini ve el yapımı ürünlerini tüm Türkiye'ye ulaştırıyoruz</p>
      </div>

      <div className="about-content">
        <section className="about-section">
          <h2>Biz Kimiz?</h2>
          <p>
            Bodrum'dan Gelsin olarak, Bodrum'un eşsiz kültürünü ve el yapımı ürünlerini tüm Türkiye'ye ulaştırmayı hedefliyoruz. 
            Yerel ustalarımızın elinden çıkan özel ürünleri ve workshop eğitimlerimizle, Bodrum'un ruhunu yaşatıyoruz.
          </p>
        </section>

        <section className="about-section">
          <h2>Misyonumuz</h2>
          <p>
            Bodrum'un zengin kültürel mirasını ve el sanatlarını korumak, geliştirmek ve tüm Türkiye'ye tanıtmak için çalışıyoruz. 
            Yerel üreticilerimizi destekleyerek, sürdürülebilir bir üretim modeli oluşturuyoruz.
          </p>
        </section>

        <section className="about-section">
          <h2>Vizyonumuz</h2>
          <p>
            Türkiye'nin her köşesine Bodrum'un eşsiz ürünlerini ulaştırarak, yerel ekonomiyi güçlendirmek ve 
            el sanatlarının yaşatılmasına katkıda bulunmak istiyoruz.
          </p>
        </section>

        <section className="values-section">
          <h2>Değerlerimiz</h2>
          <div className="values-grid">
            <div className="value-card">
              <h3>Kalite</h3>
              <p>En kaliteli malzemeler ve işçilik</p>
            </div>
            <div className="value-card">
              <h3>Sürdürülebilirlik</h3>
              <p>Çevre dostu üretim ve paketleme</p>
            </div>
            <div className="value-card">
              <h3>Yerellik</h3>
              <p>Yerel üreticileri destekleme</p>
            </div>
            <div className="value-card">
              <h3>Yenilikçilik</h3>
              <p>Sürekli gelişim ve yenilik</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About; 