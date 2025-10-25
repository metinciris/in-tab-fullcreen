// Tab içinde tam ekran durumunu tutan değişken
let isTabFullscreen = false;

// Tam ekran modunu aç/kapat
function toggleTabFullscreen() {
  const player = document.querySelector('#movie_player');
  
  if (!player) {
    console.log('YouTube player bulunamadı');
    return false;
  }

  isTabFullscreen = !isTabFullscreen;
  
  if (isTabFullscreen) {
    // Tab fullscreen moduna geç
    document.body.classList.add('yt-tab-fullscreen');
    console.log('Tab fullscreen AÇILDI');
  } else {
    // Normal moda dön
    document.body.classList.remove('yt-tab-fullscreen');
    console.log('Tab fullscreen KAPANDI');
  }
  
  return isTabFullscreen;
}

// Extension'dan gelen mesajları dinle
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  console.log('Mesaj alındı:', request);
  
  if (request.action === 'ping') {
    // Content script hazır olduğunu bildir
    sendResponse({ ready: true });
  } else if (request.action === 'toggleFullscreen') {
    const newState = toggleTabFullscreen();
    sendResponse({ success: true, isActive: newState });
  } else if (request.action === 'getState') {
    sendResponse({ isActive: isTabFullscreen });
  }
  
  return true; // Async response için
});

console.log('✅ YouTube Tab Fullscreen yüklendi. İkona tıklayabilirsiniz!');
