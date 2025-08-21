// Config
// ------------
// Description: The configuration file for the website.

export interface Logo {
	src: string
	alt: string
}

export type Mode = 'auto' | 'light' | 'dark'

export interface Config {
	siteTitle: string
	siteDescription: string
	ogImage: string
	logo: Logo
	canonical: boolean
	noindex: boolean
	mode: Mode
	scrollAnimations: boolean
}

export const configData: Config = {
	siteTitle: 'MamaTogether | هم‌پای مادر',
	siteDescription:
		'MamaTogether is a hybrid platform that combines 24/7 AI guidance with oversight from child psychologists to support mothers in daily parenting challenges with smart activities, education, and early screening.',
	ogImage: '/og.jpg',
	logo: {
		src: '/logo.png',
		alt: 'MamaTogether Logo'
	},
	canonical: true,
	noindex: false,
	mode: 'auto',
	scrollAnimations: true
}
