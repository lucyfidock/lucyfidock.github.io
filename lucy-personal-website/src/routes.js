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
  }
};

// Simple router class to manage navigation
export class Router {
  constructor() {
    this.currentRoute = 'home';
    this.listeners = [];
  }

  // Navigate to a route
  navigate(routeName) {
    if (routes[routeName]) {
      this.currentRoute = routeName;
      this.notifyListeners();
      // Update URL hash for better UX (optional)
      window.location.hash = routes[routeName].path;
    }
  }

  // Get current route
  getCurrentRoute() {
    return this.currentRoute;
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
    this.listeners.forEach(callback => callback(this.currentRoute));
  }

  // Initialize router (check URL hash on load)
  init() {
    const hash = window.location.hash.slice(1) || '/';
    const route = Object.keys(routes).find(key => routes[key].path === hash);
    if (route) {
      this.currentRoute = route;
    }
  }
}

// Create and export a singleton router instance
export const router = new Router();