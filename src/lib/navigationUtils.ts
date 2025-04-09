export type Page = {
  path: string;
  position: { x: number, y: number };
  title: string;
  // Any other page metadata you need
};

export type PageGraph = {
  [path: string]: Page;
};

// Function to find the siteMap key for a given path, handling dynamic routes
export const findSiteMapKey = (path: string, map: PageGraph): string | null => {
  if (map[path]) {
    return path;
  }
  // Handle dynamic project routes
  if (path.startsWith('/dev/')) {
    const potentialKey = '/dev/[project]';
    if (map[potentialKey]) {
      return potentialKey;
    }
  }
  // Add other dynamic route handlers here if needed
  return null; // Or return a default key like '/'
};


export const siteMap: PageGraph = {
  '/': {
    path: '/',
    position: { x: 0, y: 0 },
    title: 'Home'
  },
  '/dev': {
    path: '/dev',
    position: { x: 0, y: 1 },
    title: 'Development'
  },
  '/dev/[project]': {
    path: '/dev/[project]', // Keep the pattern here
    position: { x: 1, y: 1 },
    title: 'Project' // Title might need dynamic update elsewhere if needed per project
  },
  '/marketing': {
    path: '/marketing',
    position: { x: 0, y: 2 },
    title: 'Marketing'
  },
  '/music': {
    path: '/music',
    position: { x: 0, y: 3 },
    title: 'Music'
  },
  '/contact': {
    path: '/contact',
    position: { x: 0, y: 4 },
    title: 'Contact'
  }
};

export function getNavigationDirection(fromPathKey: string | null, toPathKey: string | null): 'up' | 'down' | 'left' | 'right' | null {
  if (!fromPathKey || !toPathKey) return null; // Can't determine direction

  const fromPage = siteMap[fromPathKey];
  const toPage = siteMap[toPathKey];

  if (!fromPage || !toPage) return 'down'; // Default if somehow pages are not found

  const xDiff = toPage.position.x - fromPage.position.x;
  const yDiff = toPage.position.y - fromPage.position.y;

  // Prioritize horizontal movement if xDiff is not zero
  if (xDiff !== 0) {
      return xDiff > 0 ? 'right' : 'left';
  } else if (yDiff !== 0) { // Otherwise, check vertical movement
      return yDiff > 0 ? 'down' : 'up';
  }

  return null; // No movement detected
} 