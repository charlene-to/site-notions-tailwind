// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  // Le tableau 'content' est crucial pour indiquer à Tailwind quels fichiers scanner.
  content: [
    './index.html',
    './pages/**/*.{html,js,ts,jsx,tsx}',
    './*.html', 
  ],
  
  // La section 'theme' est là pour les personnalisations.
  // En la laissant vide (sauf pour 'extend'), vous utilisez toutes les valeurs par défaut de Tailwind.
  theme: {
    extend: {
      // Les animations personnalisées iraient ici, mais nous les laissons vides.
   
    },
  },
  
  // La section 'plugins' est là pour ajouter des fonctionnalités.
  plugins: [],
}