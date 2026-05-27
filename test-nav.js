const puppeteer = require('puppeteer');

(async () => {
  try {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    
    // Navigate to home page
    await page.goto('http://localhost:5173/', { waitUntil: 'domcontentloaded' });
    
    // Wait a moment
    await page.waitForTimeout(1000);
    
    // Check if About link is visible
    const aboutLinkVisible = await page.evaluate(() => {
      const link = document.querySelector('a[href="/about"]');
      if (!link) return 'NOT_FOUND';
      const style = window.getComputedStyle(link);
      return style.visibility === 'visible' ? 'VISIBLE' : 'HIDDEN';
    });
    
    console.log('About link on home page:', aboutLinkVisible);
    
    // Click About link
    await page.click('a[href="/about"]');
    
    // Wait for navigation
    await page.waitForTimeout(2000);
    
    // Check nav visibility on About page
    const navVisible = await page.evaluate(() => {
      const nav = document.querySelector('.nav');
      if (!nav) return 'NOT_FOUND';
      const style = window.getComputedStyle(nav);
      return {
        display: style.display,
        visibility: style.visibility,
        opacity: style.opacity
      };
    });
    
    console.log('Nav on About page:', navVisible);
    
    await browser.close();
    process.exit(0);
  } catch (err) {
    console.error('Error:', err);
    process.exit(1);
  }
})();
