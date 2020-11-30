# serverless-lambda-typescript

serverless-lambda-typescript is a NodeJS AWS Lambda TypeScript starter pack inspired by this [documentation](https://dev.to/michael_timbs/get-started-with-aws-serverless-and-typescript-5hgf). All thanks to  [Michael Timbs](https://dev.to/michael_timbs)!

## Installation

First off, you should know how to use [Serverless Framework](https://www.serverless.com/) and AWS credentials. And obviously, clone this repo 😒

## Usage
Update the `serverless.ts` file from the root folder with the following:

```
service: 'your service name'
```

AND under `provider` section with your own AWS credentials:

```
profile: '',
region: '',
```

Run locally
```
sls offline 
```

Deploy
```
sls deploy
```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](https://choosealicense.com/licenses/mit/)
