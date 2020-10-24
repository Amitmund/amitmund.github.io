if ('WebAssembly' in window) {
	WebAssembly.instantiateStreaming(fetch('/wasm/goAlert.wasm'))
	.then(result => 
		document.getElementById('wasm').innerHTML = 
		result.instance.exports._main()
		);
}