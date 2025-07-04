import React from 'react';
import './Workshops.css';

// Workshop fotoğrafları
import workshop1 from '../assets/workshops/workshop1.jpg';
import workshop2 from '../assets/workshops/workshop2.jpg';
import tshirt1 from '../assets/workshops/tshirt1.jpg';
import tshirt2 from '../assets/workshops/tshirt2.jpg';

const Workshops = () => {
  const workshops = [
    {
      id: 1,
      title: 'Yoga Workshopu',
      description: 'Bodrum\'un ustalarından el yapımı ürünler yapmayı öğrenin',
      image: workshop1,
      price: '₺2500',
      duration: '16/08/2025'
    },
    {
      id: 2,
      title: 'Mandalina Workshopu',
      description: 'Kendi tasarımlarınızı oluşturun ve üretin',
      image: workshop2,
      price: '₺2500',
      duration: '16/08/2025'
    }
  ];

  const tshirts = [
    {
      id: 1,
      name: 'Bodrum Tasarım Tişört',
      image: tshirt1,
      price: '₺500',
      sizes: ['S', 'M', 'L', 'XL']
    },
    {
      id: 2,
      name: 'Bodrum Tasarım Tişört',
      image: tshirt2,
      price: '₺500',
      sizes: ['S', 'M', 'L', 'XL']
    }
  ];

  return (
    <div className="workshops-page">
      <div className="page-header">
        <h1>Workshoplar ve Tişörtler</h1>
        <p>El yapımı ürünler ve özel tasarım tişörtler</p>
      </div>

      <section className="workshops-section">
        <h2>Workshop Eğitimleri</h2>
        <div className="workshop-grid">
          {workshops.map((workshop) => (
            <div key={workshop.id} className="workshop-card">
              <div className="workshop-image">
                <img src={workshop.image} alt={workshop.title} />
              </div>
              <div className="workshop-info">
                <h3>{workshop.title}</h3>
                <p>{workshop.description}</p>
                <div className="workshop-details">
                  <span className="duration">{workshop.duration}</span>
                  <span className="price">{workshop.price}</span>
                </div>
                <button className="btn">Kayıt Ol</button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="tshirts-section">
        <h2>Özel Tasarım Tişörtler</h2>
        <div className="tshirt-grid">
          {tshirts.map((tshirt) => (
            <div key={tshirt.id} className="tshirt-card">
              <div className="tshirt-image">
                <img src={tshirt.image} alt={tshirt.name} />
              </div>
              <div className="tshirt-info">
                <h3>{tshirt.name}</h3>
                <div className="tshirt-sizes">
                  {tshirt.sizes.map((size) => (
                    <span key={size} className="size">{size}</span>
                  ))}
                </div>
                <div className="tshirt-price">{tshirt.price}</div>
                <button className="btn">Sepete Ekle</button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Workshops; 