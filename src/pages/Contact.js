import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Mesajınız gönderildi!');
  };

  const handleWhatsApp = () => {
    window.open('https://wa.me/+905551234567', '_blank');
  };

  return (
    <div className="contact-page">
      <div className="contact-header">
        <h1>İletişim</h1>
        <p>Sorularınız ve önerileriniz için bizimle iletişime geçin</p>
      </div>

      <div className="contact-container">
        <div className="contact-form-section">
          <h2>Bize Yazın</h2>
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Ad Soyad *</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Adınız ve soyadınız"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">E-posta *</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="ornek@email.com"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="phone">Telefon</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                placeholder="0555 123 45 67"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="subject">Konu *</label>
              <select
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
              >
                <option value="">Konu seçiniz</option>
                <option value="genel">Genel Bilgi</option>
                <option value="urun">Ürün Hakkında</option>
                <option value="workshop">Workshop Hakkında</option>
                <option value="siparis">Sipariş</option>
                <option value="destek">Destek</option>
                <option value="oneri">Öneri/Şikayet</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="message">Mesajınız *</label>
              <textarea
                id="message"
                name="message"
                placeholder="Mesajınızı buraya yazın..."
                value={formData.message}
                onChange={handleChange}
                required
                rows="6"
              ></textarea>
            </div>

            <button type="submit" className="submit-btn">Mesaj Gönder</button>
          </form>
        </div>

        <div className="contact-info-section">
          <h2>İletişim Bilgileri</h2>
          
          <div className="info-item">
            <div className="info-icon email-icon">📧</div>
            <div className="info-content">
              <h3>E-posta</h3>
              <p>info@bodrumdangelsin.com</p>
              <p>siparis@bodrumdangelsin.com</p>
            </div>
          </div>

          <div className="info-item">
            <div className="info-icon phone-icon">📞</div>
            <div className="info-content">
              <h3>Telefon</h3>
              <p>+90 252 XXX XX XX</p>
              <p>+90 555 XXX XX XX</p>
            </div>
          </div>

          <div className="info-item">
            <div className="info-icon location-icon">📍</div>
            <div className="info-content">
              <h3>Adres</h3>
              <p>Bodrum, Muğla</p>
              <p>Türkiye</p>
            </div>
          </div>

          <div className="info-item">
            <div className="info-icon time-icon">🕒</div>
            <div className="info-content">
              <h3>Çalışma Saatleri</h3>
              <p>Pazartesi - Cuma: 09:00 - 18:00</p>
              <p>Cumartesi: 10:00 - 16:00</p>
              <p>Pazar: Kapalı</p>
            </div>
          </div>

          <div className="whatsapp-section">
            <h3>Hızlı İletişim</h3>
            <p>Acil durumlar ve hızlı sorular için WhatsApp üzerinden de bizimle iletişime geçebilirsiniz.</p>
            <button onClick={handleWhatsApp} className="whatsapp-btn">
              WhatsApp ile İletişim
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact; 