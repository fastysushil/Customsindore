type="text/javascript">
  // Initialize Google Translate
  function googleTranslateElementInit() {
    new google.translate.TranslateElement({ pageLanguage: 'en' }, 'google_translate_element');
  }

  // Optional: Sync dropdown with Google Translate
  document.getElementById('languageSwitcher').addEventListener('change', function () {
    var language = this.value;
    var iframe = document.querySelector('iframe.goog-te-menu-frame');
    if (iframe) {
      var innerDoc = iframe.contentDocument || iframe.contentWindow.document;
      var langButtons = innerDoc.querySelectorAll('.goog-te-menu2-item span.text');
      langButtons.forEach(function (button) {
        if (button.innerText.toLowerCase().includes(language)) {
          button.click();
        }
      });
    }
  });

// Font Resizing Logic
function adjustFontSize(size) {
  const root = document.documentElement;
  if (size === 'small') {
    root.style.setProperty('--base-font-size', '14px');
  } else if (size === 'normal') {
    root.style.setProperty('--base-font-size', '16px');
  } else if (size === 'large') {
    root.style.setProperty('--base-font-size', '18px');
  }
}

