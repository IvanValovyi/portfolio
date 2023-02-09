/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
	  "./app/**/*.{js,ts,jsx,tsx}",
	  "./pages/**/*.{js,ts,jsx,tsx}",
	  "./components/**/*.{js,ts,jsx,tsx}",
  
	  // Or if using `src` directory:
	  "./src/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		container:{
			padding:{
				DEFAULT: "20px",
				lg:"40px"
			},
			center:true
		},
	  extend: {},
	  colors:{
		primaryBg:"#FFFFFF",
		primaryBgDark:"#181D31",
		secondaryBg:"#E4E4EC",
		secondaryBgDark:"#23232F",
		accentBg:"#1F1F23",
		accentBgDark:"#EBECFF",
		toogleBgDark:"#F0E9D2",
		textMain:"#0C0C0D",
		textMainDark:"#EFF0F9",
		textAccent:"#FFFFFF",
		textAccentDark:"#343537",
		borderDefault:"#242424",
		borderDefaultDark:"#E8E8E8",
		borderSecondary:"#9A9A9A",
		borderSecondaryDark:"#616161",
		linkColor:"#CFB86E",
		linkColorDark:"#F0E9D2",
	  }
	},
	plugins: [],
	darkMode: 'class',
 }