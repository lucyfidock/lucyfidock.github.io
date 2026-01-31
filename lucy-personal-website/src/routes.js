// routes.js - Route configuration and navigation logic

export const routes = {
  home: {
    path: '/',
    name: 'Home',
    component: 'HomePage'
  },
  about: {
    path: '/about',
    name: 'About',
    component: 'AboutPage'
  },
  cv: {
    path: '/cv',
    name: 'CV',
    component: 'CvPage'
  },
  blog: {
    path: '/blog',
    name: 'Blog',
    component: 'BlogPage'
  },
  blogPost: {
    path: '/blog/:slug',
    name: 'Blog Post',
    component: 'BlogPost',
    hideFromNav: true  // don't show in navigation
  }
};

// Simple router class to manage navigation
export class Router {
  constructor() {
    this.currentRoute = 'home';
    this.routeParams = {};
    this.listeners = [];
  }

  // Navigate to a route with optional parameters
  navigate(routeName, params = {}) {
    if (routes[routeName]) {
      this.currentRoute = routeName;
      this.routeParams = params;
      this.notifyListeners();
      
      // Build URL with parameters
      let path = routes[routeName].path;
      Object.keys(params).forEach(key => {
        path = path.replace(`:${key}`, params[key]);
      });
      
      // Update URL hash for better UX
      window.location.hash = path;
    }
  }

  // Get current route
  getCurrentRoute() {
    return this.currentRoute;
  }

  // Get current route parameters
  getRouteParams() {
    return this.routeParams;
  }

  // Add listener for route changes
  addListener(callback) {
    this.listeners.push(callback);
  }

  // Remove listener
  removeListener(callback) {
    this.listeners = this.listeners.filter(listener => listener !== callback);
  }

  // Notify all listeners of route change
  notifyListeners() {
    this.listeners.forEach(callback => callback(this.currentRoute, this.routeParams));
  }

  // Match a hash to a route pattern
  matchRoute(hash) {
    const path = hash.slice(1) || '/';
    
    // Try exact match first
    const exactMatch = Object.keys(routes).find(key => routes[key].path === path);
    if (exactMatch) {
      return { route: exactMatch, params: {} };
    }

    // Try pattern matching for dynamic routes
    for (const [routeName, route] of Object.entries(routes)) {
      const pattern = route.path;
      const regex = new RegExp('^' + pattern.replace(/:[^/]+/g, '([^/]+)') + '$');
      const match = path.match(regex);
      
      if (match) {
        // Extract parameter names and values
        const paramNames = (pattern.match(/:[^/]+/g) || []).map(p => p.slice(1));
        const params = {};
        paramNames.forEach((name, index) => {
          params[name] = match[index + 1];
        });
        
        return { route: routeName, params };
      }
    }
    
    return null;
  }

  // Initialize router (check URL hash on load)
  init() {
    const hash = window.location.hash || '#/';
    const match = this.matchRoute(hash);
    
    if (match) {
      this.currentRoute = match.route;
      this.routeParams = match.params;
    }
    
    // Listen for hash changes
    window.addEventListener('hashchange', () => {
      const hash = window.location.hash || '#/';
      const match = this.matchRoute(hash);
      
      if (match) {
        this.currentRoute = match.route;
        this.routeParams = match.params;
        this.notifyListeners();
      }
    });
  }
}

// Create and export a singleton router instance
export const router = new Router();