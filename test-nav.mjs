import puppeteer from 'puppeteer';

(async () => {
  try {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    
    // Navigate to home page
    await page.goto('http://localhost:5173/', { waitUntil: 'domcontentloaded' });
    
    // Wait a moment
    await page.waitForTimeout(1000);
    
    // Click About link
    const aboutLink = await page.$('a[href="/about"]');
    if (aboutLink) {
      await aboutLink.click();
      await page.waitForTimeout(2000);
    }
    
    // Check nav visibility on About page
    const navInfo = await page.evaluate(() => {
      const nav = document.querySelector('.nav');
      const header = document.querySelector('.header');
      if (!nav) return { nav: 'NOT_FOUND', header: 'N/A' };
      const navStyle = window.getComputedStyle(nav);
      const headerClass = header ? header.className : 'NO_HEADER';
      return {
        nav_display: navStyle.display,
        nav_visibility: navStyle.visibility,
        nav_opacity: navStyle.opacity,
        header_class: headerClass,
        parent_display: window.getComputedStyle(nav.parentElement).display
      };
    });
    
    console.log('Nav Info on About page:', JSON.stringify(navInfo, null, 2));
    
    await browser.close();
    process.exit(0);
  } catch (err) {
    console.error('Error:', err.message);
    process.exit(1);
  }
})();
