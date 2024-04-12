/** @type {import('next').NextConfig} */
const nextConfig = {
	i18n: {
		defaultLocale: "en",
		locales: ["en", "uk"],
		localeDetection: true,
  },
  reactStrictMode: true,
}

module.exports = nextConfig
