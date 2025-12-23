function removeElements() {
  // Remove the related videos section (right sidebar)
  const relatedElement = document.querySelector('#related');
  if (relatedElement) {
    relatedElement.style.display = 'none';
    console.log('YouTube Zen Mode: Removed #related section');
  }
  
  // Remove the comments section
  const commentsElement = document.querySelector('#comments');
  if (commentsElement) {
    commentsElement.style.display = 'none';
    console.log('YouTube Zen Mode: Removed #comments section');
  }

  // Remove the related videos after the video ends
  const endScreenElement = document.querySelector('.ytp-fullscreen-grid-stills-container');
  if (endScreenElement) {
    endScreenElement.style.display = 'none';
    console.log('YouTube Zen Mode: Removed end screen related videos');
  }
}

// Run immediately when script loads
removeElements();

// YouTube is a Single Page Application (SPA), so we need to watch for navigation changes
// Use MutationObserver to detect when the page content changes
const observer = new MutationObserver((mutations) => {
  removeElements();
});

// Start observing the document for changes
observer.observe(document.body, {
  childList: true,
  subtree: true
});

// Also listen for URL changes (for SPA navigation)
let lastUrl = location.href;
new MutationObserver(() => {
  const url = location.href;
  if (url !== lastUrl) {
    lastUrl = url;
    // Wait a bit for the page to load
    setTimeout(removeElements, 500);
  }
}).observe(document, { subtree: true, childList: true });

console.log('YouTube Zen Mode: Extension loaded');
