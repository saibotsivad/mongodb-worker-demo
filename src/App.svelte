<script>
	export let url
	export let mongodbResponse
	let buildTime = '__DEPLOY_TIME__'
	let example = `{ filter: { id: '1003-HV' } }`
</script>

<h1>Hello world!</h1>

<p>This is a simple demo site that turns the URL pathname into a <code>filter</code> parameter.</p>

<p>For example, <a href="/1003-HV">/1003-HV</a> will run <code>find</code> with <code>{example}</code></p>

<ul>
	<li>
		<strong>url:</strong>
		{url.pathname}
	</li>
	<li>
		<strong>build:</strong>
		{buildTime}
	</li>
</ul>

<p>Here is what came back from MongoDB:</p>

<pre>{JSON.stringify(mongodbResponse, undefined, 4)}</pre>
