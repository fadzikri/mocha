module.exports = {
	globDirectory: 'views/',
	globPatterns: [
		'**/*.ico'
	],
	swDest: 'views/sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	],
	runtimeCaching: [
		{
			urlPattern: '/',
      		handler: 'CacheFirst',
      		options: {
        	cacheName: 'last-cache',
				expiration: {
					maxEntries: 5,
					maxAgeSeconds: 1,
				},
      		},
		}
	],
	sourcemap: false
};
// nice config workbox :D --> https://stackoverflow.com/questions/66229902/my-pwa-using-workbox-cli-and-its-service-worker-generator-doesnt-work-offline