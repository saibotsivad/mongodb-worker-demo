import App from './App.svelte'
import { mongodb } from '@saibotsivad/mongodb'

let db
const find = async (env, name) => {
	if (!db) db = mongodb({
		apiUrl: env.MONGODB_API_URL,
		apiKey: env.MONGODB_API_KEY,
		cluster: env.MONGODB_CLUSTER_NAME,
		database: env.MONGODB_DATABASE_NAME,
		collection: env.MONGODB_COLLECTION_NAME,
	})
	return db.find({ filter: { name } })
}

const html = ({ head, html, css }) => `<!DOCTYPE html>
<head lang="en-US">
	<meta name="viewport" content="width=device-width" />
	<meta charset="UTF-8" />
	<style>
		body { background-color: #e2e2e2; }
		${css.code}
	</style>
	<title>MongoDB+CF Demo</title>
	${head}
</head>
<body>
${html}
</body>`

const htmlResponse = (status, component, headers = {}) => new Response(
	html(component),
	{
		status,
		headers: {
			'Content-Type': 'text/html;charset=UTF-8',
			...headers,
		},
	},
)

async function handleRequest(request, env) {
	const url = new URL(request.url)
	let mongodbResponse
	try {
		mongodbResponse = await find(env, url.pathname.replace(/^\//, ''))
	} catch (error) {
		mongodbResponse = error
	}
	return htmlResponse(200, App.render({ url, mongodbResponse }))
}

export default {
	async fetch(request, env) {
		try {
			return await handleRequest(request, env)
		} catch (e) {
			return new Response(e.message)
		}
	},
}
