console.log('🚀 YouTube Tab Fullscreen service worker başlatıldı');

// İkon yolları
const normalIcon = {
  "16": "icon16.png",
  "48": "icon48.png",
  "128": "icon128.png"
};

const activeIcon = {
  "16": "icon16-active.png",
  "48": "icon48-active.png",
  "128": "icon128-active.png"
};

// Content script'in yüklenip yüklenmediğini kontrol et
async function isContentScriptReady(tabId) {
  try {
    const response = await chrome.tabs.sendMessage(tabId, { action: 'ping' });
    return response && response.ready;
  } catch {
    return false;
  }
}

// Content script'i inject et
async function injectContentScript(tabId) {
  try {
    console.log('💉 Content script inject ediliyor...');
    
    await chrome.scripting.executeScript({
      target: { tabId: tabId },
      files: ['content.js']
    });
    
    await chrome.scripting.insertCSS({
      target: { tabId: tabId },
      files: ['styles.css']
    });
    
    console.log('✅ Content script inject edildi');
    return true;
  } catch (error) {
    console.error('❌ Inject hatası:', error);
    return false;
  }
}

// Extension icon'a tıklandığında
chrome.action.onClicked.addListener(async (tab) => {
  console.log('📌 İkona tıklandı, tab:', tab.id);
  
  // YouTube'da değilse uyar
  if (!tab.url?.includes('youtube.com')) {
    alert('Bu eklenti sadece YouTube sayfalarında çalışır!');
    return;
  }
  
  try {
    // Content script hazır mı kontrol et
    const isReady = await isContentScriptReady(tab.id);
    
    // Değilse inject et
    if (!isReady) {
      console.log('⏳ Content script hazır değil, inject ediliyor...');
      const injected = await injectContentScript(tab.id);
      if (!injected) {
        alert('Bir hata oluştu. Lütfen sayfayı yenileyin (F5)!');
        return;
      }
      // Inject'ten sonra kısa bir bekleme
      await new Promise(resolve => setTimeout(resolve, 100));
    }
    
    // Şimdi toggle mesajını gönder
    const response = await chrome.tabs.sendMessage(tab.id, { action: 'toggleFullscreen' });
    
    console.log('✅ Yanıt alındı:', response);
    
    if (response && response.success) {
      // İkonu güncelle
      const iconToUse = response.isActive ? activeIcon : normalIcon;
      await chrome.action.setIcon({
        tabId: tab.id,
        path: iconToUse
      });
      
      console.log(`🎨 İkon güncellendi: ${response.isActive ? 'YEŞİL (aktif)' : 'KIRMIZI (normal)'}`);
    }
  } catch (error) {
    console.error('❌ Hata:', error);
    alert('Bir hata oluştu. Lütfen sayfayı yenileyin (F5) ve tekrar deneyin!');
  }
});

// Tab güncellendiğinde ikonu sıfırla
chrome.tabs.onUpdated.addListener(async (tabId, changeInfo, tab) => {
  if (changeInfo.status === 'complete' && tab.url?.includes('youtube.com')) {
    await chrome.action.setIcon({
      tabId: tabId,
      path: normalIcon
    });
    console.log('🔄 Sayfa yüklendi, ikon sıfırlandı');
  }
});
