// Navigation Bar
// ------------
// Description: The navigation bar data for the website.
export interface Logo {
	src: string
	alt: string
	text: string
}

export interface NavSubItem {
	name: string
	link: string
}

export interface NavItem {
	name: string
	link: string
	submenu?: NavSubItem[]
}

export interface NavAction {
	name: string
	link: string
	style: string
	size: string
}

export interface NavData {
	logo: Logo
	navItems: NavItem[]
	navActions: NavAction[]
}

export const navigationBarData: NavData = {
	logo: {
		src: '/logo.png',
		alt: 'MamaTogether Logo',
		text: 'هم‌پای مادر'
	},
	navItems: [
    { name: 'Home', link: '/' },
    { name: 'Features', link: '/features' },
    { name: 'Pricing', link: '/pricing' },
		{
			name: 'Resources',
			link: '#',
			submenu: [
        { name: 'Blog', link: '/blog' },
        { name: 'FAQ', link: '/faq' },
        { name: 'Terms', link: '/terms' }
			]
		},
    { name: 'Contact', link: '/contact' }
	],
  navActions: [{ name: 'Start Free Trial', link: '/', style: 'primary', size: 'lg' }]
}
