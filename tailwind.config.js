/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#868686",
        secondary: "#4E4B4B",
        special: "#D4D4D4",
        specialOne: "#F5F5F5"
      },
      backgroundImage: (theme) => ({
        "banner": "url(/images/Banner.png)",
        "Shopbanner": "url(/images/ShopBanner.png)",
        "ContactBanner": "url(/images/contact.png)",
        "CartBanner": "url(/images/CartBanner.png)",
      })
    },
  },
  plugins: [],
}

