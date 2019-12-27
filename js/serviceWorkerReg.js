if ('serviceWorker' in navigator) {
	navigator.serviceWorker.register('./serviceWorker.js')
	.then(() => {
		console.log('Hooray! Registration WORKED!');
	})
	.catch(() => {
		console.log('Registration FAILED!!');
	});
} 