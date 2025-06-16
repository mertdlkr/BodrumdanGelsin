import React from 'react';
import './Products.css';

const Products = () => {
  const products = [
    {
      id: 1,
      name: 'Mandalina Kurusu',
      image: 'https://via.placeholder.com/300x300/FF6B35/FFFFFF?text=Mandalina+Kurusu',
      price: '130',
      weight: '80gr',
      description: 'Doğal yöntemlerle kurutulmuş, el seçimi mandalina dilimleri'
    },
    {
      id: 2,
      name: 'Mandalina Lokumu',
      image: 'https://via.placeholder.com/300x300/FF6B35/FFFFFF?text=Mandalina+Lokumu',
      price: '180',
      weight: '300gr',
      description: 'Geleneksel tarif ile hazırlanan, gerçek mandalina aromalı lokum'
    },
    {
      id: 3,
      name: 'Büyük Mandalinalı Soya Mumu',
      image: 'https://via.placeholder.com/300x300/FF6B35/FFFFFF?text=Soya+Mumu+Büyük',
      price: '400',
      weight: '200gr',
      description: '100% doğal soya mumu, uzun süre yanan mandalina kokulu'
    },
    {
      id: 4,
      name: 'Küçük Mandalinalı Soya Mumu',
      image: 'https://via.placeholder.com/300x300/FF6B35/FFFFFF?text=Soya+Mumu+Küçük',
      price: '250',
      weight: '100gr',
      description: 'Kompakt boyut, doğal soya mumu ile mandalina esansı'
    },
    {
      id: 5,
      name: 'Mandalina Sabunu',
      image: 'https://via.placeholder.com/300x300/FF6B35/FFFFFF?text=Mandalina+Sabunu',
      price: '50',
      weight: '100gr',
      description: 'El yapımı, doğal mandalina yağı içeren nemlendirici sabun'
    },
    {
      id: 6,
      name: 'Mandalina Kolonyası',
      image: 'https://via.placeholder.com/300x300/FF6B35/FFFFFF?text=Mandalina+Kolonyası',
      price: '150',
      weight: '200ml',
      description: 'Ferahlatıcı mandalina kolonyası, %80 alkol içerikli'
    },
    {
      id: 7,
      name: 'Mandalina Gazozu (6\'lı)',
      image: 'https://via.placeholder.com/300x300/FF6B35/FFFFFF?text=Mandalina+Gazozu',
      price: '350',
      weight: '200ml x 6',
      description: 'Doğal mandalina aromalı, 6 adet şişe gazlı içecek'
    },
    {
      id: 8,
      name: 'Mandalina Reçeli',
      image: 'https://via.placeholder.com/300x300/FF6B35/FFFFFF?text=Mandalina+Reçeli',
      price: '300',
      weight: '310gr',
      description: 'Ev yapımı, doğal mandalina meyvesinden hazırlanan reçel'
    },
    {
      id: 9,
      name: 'Bodrum\'dan Hediye Kutusu',
      image: 'https://via.placeholder.com/300x300/FF6B35/FFFFFF?text=Hediye+Kutusu',
      price: '1000',
      weight: 'Karma',
      description: 'Özenle seçilmiş mandalina ürünlerinden oluşan hediye seti'
    }
  ];

  return (
    <div className="products-page">
      <div className="page-header">
        <h1>Ürünlerimiz</h1>
        <p>Bodrum'un en özel mandalina ürünlerini keşfedin</p>
      </div>

      <div className="product-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <div className="product-image">
              <img src={product.image} alt={product.name} />
            </div>
            <div className="product-info">
              <h3>{product.name}</h3>
              <p>{product.description}</p>
              <div className="product-price">
                ₺{product.price} <span className="product-weight">{product.weight}</span>
              </div>
              <button className="btn">Sepete Ekle</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products; 