# Creating RESTFul APIs

## Instration

```sh
git clone https://github.com/sideroad/express-restful-api-sample.git hogehoge-api
cd hogehoge-api

npm install .
```

## Configuration

### Config variables

express-heroku-restful-api-sample using Mongo.
Please set mongo connection URL variables such as below.

|Key      |Value                                                 |
|:--------|:-----------------------------------------------------|
|MONGO_URL|mongodb://id:password@xxxxxx.mongolab.com:xxxxx/xxxxxx|

### router.json
[Sample JSON file](router.json)


## Start Express

```sh
DEBUG=express:* node ./bin/www
```

## API Doc
API document will be generated automatically

http://express-restful-api-sample.herokuapp.com/doc/
