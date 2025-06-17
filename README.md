# Bodrum'dan Gelsin - React Web Sitesi

## Proje Hakkında

**Bodrum'dan Gelsin**, Bodrum'un yaz ve tatil atmosferini yansıtan modern bir React web sitesidir. Site, atölye çalışmaları ve ürün satışı için tasarlanmış, turuncu tema renkleriyle Bodrum'un sıcak ve enerjik havasını kullanıcılara sunar.

## 🌟 Özellikler

### Ana Sayfa
- **İkili Bölüm Tasarımı**: Sol tarafta Atölyeler, sağ tarafta Ürünler
- **Interaktif Arka Planlar**: Tıklanabilir bölümler
- **Kompakt Hero Bölümü**: Modern ve minimalist tasarım
- **Gradient Animasyonları**: Görsel çekicilik için animasyonlu efektler

### Sayfa Yapısı
- **Ana Sayfa**: Atölye ve ürün bölümleri
- **Ürünler**: 9 ürün kartı ile grid layout
- **Atölyeler**: Eğitim ve t-shirt satış alanı
- **Hakkımızda**: Şirket bilgileri
- **İletişim**: İletişim formu ve bilgileri
- **Giriş**: Kullanıcı kimlik doğrulama

### Tasarım Özellikleri
- **Turuncu Tema**: Bodrum atmosferini yansıtan renk paleti
- **Responsive Tasarım**: Tüm cihazlarda uyumlu
- **Modern UI/UX**: Hover efektleri ve animasyonlar
- **Gradient Arka Planlar**: Görsel derinlik
- **Pulse Animasyonları**: Dikkat çekici elementler

## 🚀 Kurulum

### Gereksinimler
- Node.js (v14 veya üzeri)
- npm veya yarn

### Adımlar

1. **Projeyi İndirin**
```bash
git clone [repository-url]
cd yeniproje
```

2. **Bağımlılıkları Yükleyin**
```bash
npm install
```

3. **Geliştirme Sunucusunu Başlatın**
```bash
npm start
```

4. **Tarayıcınızda Açın**
```
http://localhost:3000
```

## 📁 Proje Yapısı

```
yeniproje/
├── public/
│   ├── index.html
│   └── logo.png              # Şirket logosu
├── src/
│   ├── components/
│   │   ├── Header.js         # Site başlığı ve navigasyon
│   │   ├── Header.css
│   │   ├── Footer.js         # Site alt bilgisi
│   │   └── Footer.css
│   ├── pages/
│   │   ├── Home.js           # Ana sayfa
│   │   ├── Home.css
│   │   ├── Products.js       # Ürünler sayfası
│   │   ├── Products.css
│   │   ├── Workshops.js      # Atölyeler sayfası
│   │   ├── Workshops.css
│   │   ├── About.js          # Hakkımızda sayfası
│   │   ├── About.css
│   │   ├── Contact.js        # İletişim sayfası
│   │   ├── Contact.css
│   │   ├── Login.js          # Giriş sayfası
│   │   └── Login.css
│   ├── App.js                # Ana uygulama komponenti
│   ├── App.css               # Global stiller
│   └── index.js              # Uygulama giriş noktası
├── package.json
└── README.md
```

## 🛠️ Kullanılan Teknolojiler

- **React**: Frontend framework
- **React Router DOM**: Sayfa yönlendirme
- **CSS3**: Modern styling ve animasyonlar
- **HTML5**: Semantik markup
- **localStorage**: Kullanıcı session yönetimi

## 🎨 Tasarım Renk Paleti

- **Ana Turuncu**: `#FF6B35`
- **Gradient Başlangıç**: `#FF8A50`
- **Gradient Bitiş**: `#FF6B35`
- **Beyaz/Krem**: `#FFFEF7`
- **Metin**: `#333`
- **Mavi (Linkler)**: `#007bff`

## 📱 Responsive Tasarım

Site, aşağıdaki ekran boyutları için optimize edilmiştir:
- **Desktop**: 1200px+
- **Tablet**: 768px - 1199px
- **Mobile**: 320px - 767px

## 🔧 Özelleştirme

### Logo Değiştirme
Logo dosyasını `public/logo.png` konumuna yerleştirin. Desteklenen formatlar: PNG, JPG, SVG

### Renk Temasını Değiştirme
CSS dosyalarındaki CSS custom properties'i düzenleyin:
```css
:root {
  --primary-color: #FF6B35;
  --secondary-color: #FF8A50;
  /* ... diğer renkler */
}
```

### İçerik Düzenleme
Sayfa içeriklerini ilgili `.js` dosyalarından düzenleyebilirsiniz.

## 🚀 Production Build

Production için optimize edilmiş build oluşturmak için:

```bash
npm run build
```

Bu komut `build/` klasöründe optimize edilmiş dosyalar oluşturur.

## 🤝 Katkı Sağlama

1. Fork edin
2. Feature branch oluşturun (`git checkout -b feature/YeniOzellik`)
3. Değişikliklerinizi commit edin (`git commit -am 'Yeni özellik eklendi'`)
4. Branch'inizi push edin (`git push origin feature/YeniOzellik`)
5. Pull Request oluşturun

## 📄 Lisans

Bu proje MIT lisansı altında lisanslanmıştır.

## 📞 İletişim

Herhangi bir sorunuz için iletişim sayfasını kullanabilirsiniz.

---

**© 2025 Bodrum'dan Gelsin - Tüm hakları saklıdır.**
