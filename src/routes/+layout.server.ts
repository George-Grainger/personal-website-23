export function load({ request, cookies }) {
	// Try to get the locale from cookie
	let languages = [(cookies.get('lang') || '').toLowerCase()];
	if (!languages) {
		const acceptLanguages = request.headers.get('accept-language');
		languages = acceptLanguages?.split(',')?.map((lang) => lang.split(';')[0].trim()) ?? [];
	}

	return {
		languages
	};
}