# 📸 Gerçek Fotoğrafları Yükledikten Sonra Kullanılacak Kod

## 🔄 Products.js Dosyasında Değiştirilecek Kısım

Fotoğrafları `yeniproje/src/assets/products/` klasörüne yükledikten sonra, `Products.js` dosyasının başında şu kodu kullanın:

### Import Kısmı (Dosyanın En Üstü):
```javascript
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
```

### Ürün Listesi (products array):
```javascript
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
```

## 📋 Adım Adım Talimatlar:

1. **Fotoğrafları yükleyin:** 
   - `yeniproje/src/assets/products/` klasörüne
   - Tam isimleri ile (örn: `mandalina-kurusu-001.jpg`)

2. **Products.js dosyasını açın**

3. **Mevcut placeholder URL'leri silin**

4. **Yukarıdaki kodu kopyalayın ve yapıştırın**

5. **Sayfayı yenileyin:** `npm start`

## ✅ Kontrol Listesi:

- [ ] 9 adet fotoğraf doğru isimlerde yüklendi
- [ ] Import statements eklendi
- [ ] image: placeholder URL'ler değiştirildi
- [ ] Hata mesajları kayboldu
- [ ] Fotoğraflar sitede görünüyor

## 🚨 Önemli Notlar:

- Dosya isimleri **tamamen aynı** olmalı
- Büyük/küçük harf **önemli**
- Dosya uzantısı **mutlaka .jpg** olmalı
- Türkçe karakter kullanmayın 