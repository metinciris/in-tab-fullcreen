# 🎬 YouTube Tab Fullscreen

<div align="center">

![YouTube Tab Fullscreen Banner](/archive/banner.png)

YouTube videolarını tab içinde tam ekran yapar. Basit, hızlı ve kullanışlı!

![Chrome Extension](https://img.shields.io/badge/Chrome-Extension-red?style=flat-square&logo=google-chrome)
![Version](https://img.shields.io/badge/version-1.0-blue?style=flat-square)
![License](https://img.shields.io/badge/license-MIT-green?style=flat-square)

</div>

## ✨ Özellikler

- ✅ **Tek tuşla tam ekran** - İkona tıkla, video tab içinde tam ekran olsun
- ✅ **Görsel geri bildirim** - İkon rengi değişir (🔴 Normal → 🟢 Aktif)
- ✅ **Basit kullanım** - Karmaşık ayar yok, tek tıkla çalışır
- ✅ **Video kontrolleri** - Play, pause, ses, timeline hepsi çalışır
- ✅ **Otomatik temizleme** - Üst menü, yorumlar, yan panel otomatik gizlenir
- ✅ **Performans** - Hafif ve hızlı, sistemi yormaz

## 🚀 Kurulum

### Chrome Web Store'dan (Yakında)
*Henüz yayınlanmadı*

### Manuel Kurulum

1. Bu repoyu indirin:
   ```bash
   git clone https://github.com/metinciris/in-tab-fullscreen.git
   ```
   veya [ZIP olarak indirin](/archive/main.zip)

2. Chrome'da `chrome://extensions` adresine gidin

3. Sağ üstten **"Geliştirici modu"** açın

4. **"Paketlenmemiş uzantı yükle"** butonuna tıklayın

5. İndirdiğiniz klasörü seçin

6. Hazır! 🎉

## 💡 Kullanım

1. YouTube'da bir video açın
2. Chrome araç çubuğundaki eklenti ikonuna tıklayın
   - İkon 🔴 **kırmızı** → 🟢 **yeşil** olur
   - Video tab içinde tam ekran olur
3. Tekrar tıklayın
   - İkon 🟢 **yeşil** → 🔴 **kırmızı** olur  
   - Normal moda döner

**İkon renginden durumu anlarsınız!**

## 🎯 Avantajları

| Özellik | YouTube Tab Fullscreen | Standart Tam Ekran |
|---------|------------------------|-------------------|
| Tab içinde kalır | ✅ | ❌ |
| Diğer sekmelere geçiş | ✅ Hızlı | ❌ Çıkış yapar |
| Üst menü gizli | ✅ | ❌ |
| Yan panel gizli | ✅ | ❌ |
| Esc ile çıkış | ❌ İkona tıkla | ✅ |

## 🛠️ Teknik Detaylar

- **Manifest Version:** 3
- **Permissions:** `activeTab`, `scripting`
- **Content Scripts:** Otomatik inject
- **Background:** Service Worker
- **CSS:** Custom fullscreen styling

## 📁 Dosya Yapısı

```
in-tab-fullscreen/
├── manifest.json          # Extension manifest
├── background.js          # Service worker
├── content.js            # Content script
├── styles.css            # Fullscreen styles
├── icon16.png            # Normal mod icon (16x16)
├── icon48.png            # Normal mod icon (48x48)
├── icon128.png           # Normal mod icon (128x128)
├── icon16-active.png     # Aktif mod icon (16x16)
├── icon48-active.png     # Aktif mod icon (48x48)
└── icon128-active.png    # Aktif mod icon (128x128)
```

## 🐛 Sorun Giderme

### Eklenti çalışmıyor
1. Sayfayı yenileyin (F5)
2. Eklentiyi yeniden yükleyin
3. Chrome'u yeniden başlatın

### İkon değişmiyor
- Eklentiyi kaldırıp tekrar yükleyin
- Chrome'u tamamen kapatıp açın

### Video görünmüyor
- Console'u açın (F12)
- Hata mesajlarını kontrol edin
- Issue açın: [GitHub Issues](https://github.com/metinciris/in-tab-fullscreen/issues)

## 🤝 Katkıda Bulunma

Katkılar hoş karşılanır! 

1. Bu repoyu fork edin
2. Yeni bir branch oluşturun (`git checkout -b feature/yeniOzellik`)
3. Değişikliklerinizi commit edin (`git commit -am 'Yeni özellik eklendi'`)
4. Branch'inizi push edin (`git push origin feature/yeniOzellik`)
5. Pull Request oluşturun

## 📝 Lisans

Bu proje MIT lisansı altında lisanslanmıştır. Detaylar için [LICENSE](LICENSE) dosyasına bakın.

## 👤 Geliştirici

**Metin Ciris**
- GitHub: [@metinciris](https://github.com/metinciris)
- Repository: [in-tab-fullscreen](https://github.com/metinciris/in-tab-fullscreen)

## ⭐ Destek

Eğer bu proje işinize yaradıysa, yıldız vermeyi unutmayın! ⭐

---

<div align="center">
Made with ❤️ for YouTube lovers
</div>
