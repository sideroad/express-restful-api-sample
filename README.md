# Creating RESTFul APIs

## Instration

```sh
git clone https://github.com/sideroad/express-restful-api-sample.git hogehoge-api
cd hogehoge-api

npm install .
```

## Configuration

### Config variables

express-heroku-restful-api-sample using Redis.
Please set variables such as below.

|Key      |Value                                                                                      |
|:--------|:------------------------------------------------------------------------------------------|
|REDIS_URL|redis://rediscloud:xxxxxxxxxxxxxx@pub-redis-xxxxxx.us-east-1-x.x.ec2.redislabs.com:xxxxxxxx|

### router.json

```json
{
  "group": {
    "name": {
      "required": true,
      "uniq": true,
      "regexp": "^[a-zA-Z\\s_-\\d]+$"
    },
    "members": {
      "children": "member"
    },
    "owner": {
      "instance": "member"
    }
  },
  "member": {
    "name": {
      "required": true,
      "uniq": true,
      "regexp": "^[a-zA-Z\\s_-\\d]+$"
    },
    "group": {
      "parent": "group"
    },
    "attends": {
      "children": "attend"
    }
  },
  "attend": {
    "date": {
      "required": true,
      "uniq": true,
      "regexp": "^\\d\\d\\d\\d-\\d\\d-\\d\\dT\\d\\d:\\d\\d:\\d\\d\\.\\d+Z$"
    },
    "member": {
      "uniq": true,
      "parent": "member"
    },
    "reason": {
      "regexp": "^[a-zA-Z\\s_-\\d\\.\\,\\'\\\"\\[\\]\\/]*$"
    }
  }
}
```

## Start Express

```sh
DEBUG=express:* node ./bin/www
```

https://www.getpostman.com/collections/b5dc739e617c1c3e50a4
