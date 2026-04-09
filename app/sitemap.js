// app/sitemap.js - For hoorabgroup.com (without www)

// Fetch brands from API
async function getAllBrands() {
  try {
    const response = await fetch('https://hoorabgroup.com/api/brand', {
      next: { revalidate: 3600 } // Cache for 1 hour
    });
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const data = await response.json();
    return data.applybrand || [];
  } catch (error) {
    console.error('Error fetching brands:', error);
    return [];
  }
}

export default async function sitemap() {
  const brands = await getAllBrands();
  const baseUrl = 'https://hoorabgroup.com'; // WITHOUT www

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

  // Return all public pages
  return [...staticPages, ...brandPages];
}

// Optional: For better performance
export const dynamic = 'force-dynamic';
export const revalidate = 3600;