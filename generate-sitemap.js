import { SitemapStream, streamToPromise } from 'sitemap';
import { createWriteStream } from 'fs';


const hostname = 'https://pixelworld.ae'; // Replace with your actual domain

// Define your static and dynamic routes
const staticRoutes = [
    { url: '/', changefreq: 'daily', priority: 1.0 },
    { url: '/aboutus', changefreq: 'weekly', priority: 0.8 },
    { url: '/services', changefreq: 'weekly', priority: 0.8 },
    { url: '/products', changefreq: 'weekly', priority: 0.8 },
    { url: '/blog', changefreq: 'weekly', priority: 0.8 },
    { url: '/faq', changefreq: 'monthly', priority: 0.7 },
];

// Add dynamic routes with sample keys (replace with actual data)
const dynamicRoutes = [
    // Dynamic products
    { url: '/product/digital-kiosks', changefreq: 'weekly', priority: 0.9 },
    { url: '/product/led-screens', changefreq: 'weekly', priority: 0.9 },
    { url: '/product/led-lightings', changefreq: 'weekly', priority: 0.9 },
    { url: '/product/led-supplies', changefreq: 'weekly', priority: 0.9 },


    // Dynamic blog posts
    { url: '/blog/why-outdoor-led-screens-and-displays-are-popular-in-dubai', changefreq: 'monthly', priority: 0.8 },
    { url: '/blog/how-pixelworld-is-transforming-conferences-exhibitions-and-festivals', changefreq: 'monthly', priority: 0.8 },
    { url: '/blog/how-to-choose-the-best-led-screen-for-your-business-needs', changefreq: 'monthly', priority: 0.8 },
    { url: '/blog/the-power-of-curved-led-screens-in-creating-immersive-customer-experiences-with-pixelworld', changefreq: 'monthly', priority: 0.8 },
    { url: '/blog/outdoorled-screens-with-pixelworld-enhancing-public-spaces-and-urban-landscapes', changefreq: 'monthly', priority: 0.8 },
    { url: '/blog/why-led-screens-are-the-future-of-digital-advertising-in-the-uae-and-why-choose-pixelworld', changefreq: 'monthly', priority: 0.8 },


];


const generateSitemap = async () => {
    const sitemap = new SitemapStream({ hostname });
    const writeStream = createWriteStream('./public/sitemap.xml');

    sitemap.pipe(writeStream);

    // Add static routes
    staticRoutes.forEach((route) => sitemap.write(route));

    // Add dynamic routes
    dynamicRoutes.forEach((route) => sitemap.write(route));

    sitemap.end();

    await streamToPromise(sitemap); // Ensures the sitemap is written completely
    console.log('Sitemap generated successfully!');
};

generateSitemap().catch((err) => console.error('Error generating sitemap:', err));