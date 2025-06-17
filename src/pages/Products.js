import React from 'react';
import './Products.css';

// Import all product images
import mandalinaKurusu from '../assets/products/mandalina-kurusu-001.jpg';
import mandalinaLokumu from '../assets/products/mandalina-lokumu-001.jpg';
import soyaMumuBuyuk from '../assets/products/soya-mumu-buyuk-001.jpg';
import soyaMumuKucuk from '../assets/products/soya-mumu-kucuk-001.jpg';
import mandalinaSabunu from '../assets/products/mandalina-sabunu-001.jpg';
import mandalinaKolonyasi from '../assets/products/mandalina-kolonyasi-001.jpg';
import mandalinaGazozu from '../assets/products/mandalina-gazozu-001.jpg';
import mandalinaReceli from '../assets/products/mandalina-receli-001.jpg';
import hediyeKutusu from '../assets/products/hediye-kutusu-001.jpg';

const Products = () => {
  const products = [
    {
      id: 1,
      name: 'Mandalina Kurusu',
      image: mandalinaKurusu,
      price: '130',
      weight: '80gr',
      description: 'Doğal yöntemlerle kurutulmuş, el seçimi mandalina dilimleri'
    },
    {
      id: 2,
      name: 'Mandalina Lokumu',
      image: mandalinaLokumu,
      price: '180',
      weight: '300gr',
      description: 'Geleneksel tarif ile hazırlanan, gerçek mandalina aromalı lokum'
    },
    {
      id: 3,
      name: 'Büyük Mandalinalı Soya Mumu',
      image: soyaMumuBuyuk,
      price: '400',
      weight: '200gr',
      description: '100% doğal soya mumu, uzun süre yanan mandalina kokulu'
    },
    {
      id: 4,
      name: 'Küçük Mandalinalı Soya Mumu',
      image: soyaMumuKucuk,
      price: '250',
      weight: '100gr',
      description: 'Kompakt boyut, doğal soya mumu ile mandalina esansı'
    },
    {
      id: 5,
      name: 'Mandalina Sabunu',
      image: mandalinaSabunu,
      price: '50',
      weight: '100gr',
      description: 'El yapımı, doğal mandalina yağı içeren nemlendirici sabun'
    },
    {
      id: 6,
      name: 'Mandalina Kolonyası',
      image: mandalinaKolonyasi,
      price: '150',
      weight: '200ml',
      description: 'Ferahlatıcı mandalina kolonyası, %80 alkol içerikli'
    },
    {
      id: 7,
      name: 'Mandalina Gazozu (6\'lı)',
      image: mandalinaGazozu,
      price: '350',
      weight: '200ml x 6',
      description: 'Doğal mandalina aromalı, 6 adet şişe gazlı içecek'
    },
    {
      id: 8,
      name: 'Mandalina Reçeli',
      image: mandalinaReceli,
      price: '300',
      weight: '310gr',
      description: 'Ev yapımı, doğal mandalina meyvesinden hazırlanan reçel'
    },
    {
      id: 9,
      name: 'Bodrum\'dan Hediye Kutusu',
      image: hediyeKutusu,
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