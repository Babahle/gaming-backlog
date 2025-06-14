module.exports = {
	content: [
		'./index.html',
		'./src/**/*.{vue,js,ts,jsx,tsx}',
	],
	theme: {
		extend: {
			colors: {
				'text': '#EBE9FC',
				'background': '#1f1f1f',
				'cardBackground': '#292929',
				'modalBackground': 'rgba(41, 41, 41, 0.7)',
				'primary': '#EE4266',
				'primary-2': '#B9334F',
				'primary-3': '#7B1C30',
				'secondary': '#2E4057',
				'secondary-2': '#233041',
				'secondary-3': '#17202C',
				'accent': '#FFE5D4',
				'accent-2': '#CEB9AB',
				'accent-3': '#9D8C81',
				'accent-4': '#9D8C81',
			},
			fontSize: {
				'heading-1': ['4.2rem', {lineHeight: '1.2'}],
				'heading-2': ['3.1rem', {lineHeight: '1.3'}],
				'heading-3': ['2.3rem', {lineHeight: '1.4'}],
				'heading-4': ['1.7rem', {lineHeight: '1.5'}],
				'heading-5': ['1.3rem', {lineHeight: '1.6'}],
				body: ['1rem', {lineHeight: '1.8'}],
			},
		},
	},
	plugins: [],
}