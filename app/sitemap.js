// app/sitemap.js - With Dynamic Brands

// Agar aapke paas API hai brands fetch karne ke liye
async function getAllBrands() {
  try {
    const response = await fetch('https://hoorabgroup.com/api/brand', {
      next: { revalidate: 3600 } // Cache for 1 hour
    });
    const data = await response.json();
    return data.applybrand || [];
  } catch (error) {
    console.error('Error fetching brands:', error);
    return [];
  }
}

export default async function sitemap() {
  const brands = await getAllBrands();
  const baseUrl = 'https://www.hoorabgroup.com';

  // Static pages
  const staticPages = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/brand`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/partner`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/career`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/privacy`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.4,
    },
  ];

  // Dynamic brand pages
  const brandPages = brands.map((brand) => ({
    url: `${baseUrl}/brand/${brand._id}`,
    lastModified: new Date(brand.updatedAt || Date.now()),
    changeFrequency: 'weekly',
    priority: 0.7,
  }));

  // Admin pages - NOT INCLUDED intentionally
  // Sirf public pages return karo
  return [...staticPages, ...brandPages];
}