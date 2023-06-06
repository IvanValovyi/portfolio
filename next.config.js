/** @type {import('next').NextConfig} */
const nextConfig = {
	i18n: {
		defaultLocale: "en",
		locales: ["en", "uk"],
		localeDetection: false,
  },
  reactStrictMode: true,
}

module.exports = nextConfig
