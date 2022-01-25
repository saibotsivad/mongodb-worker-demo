# mongodb-worker-demo

This is a demo of interacting with the MongoDB Atlas Data API using Cloudflare Workers.

## Setup

The usual way: `git clone` then `npm install` and `npm run build`.

To deploy, copy the demo configuration file:

```shell
cp configuration.example.sh configuration.sh
```

Go edit it, using your tokens/etc. instead.

## Secrets

To make this work in Cloudflare, you need to add the MongoDB connection details as [secret variables](https://developers.cloudflare.com/workers/platform/environment-variables) to the Worker.

You'll need to run `wrangler secret put` for each of these. For example:

```shell
wrangler secret put MONGODB_API_URL
wrangler secret put MONGODB_DATABASE_NAME
wrangler secret put MONGODB_COLLECTION_NAME
wrangler secret put MONGODB_API_KEY
wrangler secret put MONGODB_CLUSTER_NAME
```

Or, if you don't have it installed globally, you can use `npm run secret -- NAME`, e.g.:

```shell
npm run secret -- MONGODB_API_URL
npm run secret -- MONGODB_DATABASE_NAME
npm run secret -- MONGODB_COLLECTION_NAME
npm run secret -- MONGODB_API_KEY
npm run secret -- MONGODB_CLUSTER_NAME
```

(Each time you run it, it blocks for user input, so you copy+paste your secret into it.)

## Deploy

Once all that is done, simply run:

```shell
npm run deploy
```

## License

Published and released under the [Very Open License](http://veryopenlicense.com).
