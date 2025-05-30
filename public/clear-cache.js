// Script to clear the localStorage cache and debug certificate issues
console.log("Currently stored certificates:", JSON.parse(localStorage.getItem('certificates')));

// Clear localStorage
localStorage.removeItem('certificates');
localStorage.removeItem('projects');
console.log('Cache cleared!');

// Force reload from server (bypass cache)
console.log('Reloading page in 2 seconds...');
setTimeout(() => {
  // Add timestamp to force reload
  window.location.href = window.location.href.split('#')[0] 
    + '?cache=' + Date.now() 
    + (window.location.hash || '');
}, 2000); 