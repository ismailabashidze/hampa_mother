// i18n Configuration
// ------------
// Description: Internationalization configuration for the website.

export interface Language {
	code: string
	name: string
	nativeName: string
	flag: string
	dir: 'ltr' | 'rtl'
}

export const languages: Language[] = [
	{
		code: 'en',
		name: 'English',
		nativeName: 'English',
		flag: '🇺🇸',
		dir: 'ltr'
	},
	{
		code: 'fa',
		name: 'Persian',
		nativeName: 'فارسی',
		flag: '🇮🇷',
		dir: 'rtl'
	}
]

export const defaultLanguage = 'en'

export function getLanguageByCode(code: string): Language | undefined {
	return languages.find(lang => lang.code === code)
}

export function isValidLanguage(code: string): boolean {
	return languages.some(lang => lang.code === code)
}

export function getLanguageFromUrl(pathname: string): string {
	const segments = pathname.split('/').filter(Boolean)
	const firstSegment = segments[0]
	
	if (firstSegment && isValidLanguage(firstSegment)) {
		return firstSegment
	}
	
	return defaultLanguage
}

export function removeLanguageFromUrl(pathname: string): string {
	const segments = pathname.split('/').filter(Boolean)
	const firstSegment = segments[0]
	
	if (firstSegment && isValidLanguage(firstSegment)) {
		return '/' + segments.slice(1).join('/')
	}
	
	return pathname
}

export function addLanguageToUrl(pathname: string, language: string): string {
	const cleanPath = removeLanguageFromUrl(pathname)
	return `/${language}${cleanPath === '/' ? '' : cleanPath}`
}