
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "tailwindui.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

module.exports = nextConfig;

module.exports = {
  env: {
    "API_TRANSLATE_URL_4":"https://script.google.com/macros/s/AKfycbybWf76PT7300gs1ERJ6n5_Uy2hIBUfl6hNC7GoHjLdftGzRjbZSTvlOW01zFvb8I4/exec",
	"API_TRANSLATE_URL_5":"https://script.google.com/macros/s/AKfycbzEz6oXfIilm0F9SiUfOLrtApG13F8UYYzKvudDpIVdVkhCDBPf_WaBXwwGLMFyY79j/exec",
  "SHEET_URL":"https://sheetdb.io/api/v1/dwyrwredid4si"

  }
}