# testApp

A demo app to play with clusters and containers. It can use Redis to store user sessions.

## How to run

Clone the repo and install the dependencies

```
git clone https://github.com/natlex/testApp.git
cd testApp/
```

```
npm install
```

Run the app
```
npm start
```

Open http://localhost:3000

## Variables

Set up the following environment variables to connect to Redis:

```
redisHost
redisPort
```

If `redisHost` is not defined Redis won't be used. `redisPort` is set to 6379 by default. 
