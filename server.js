var express = require('express')
var app = express()
var port = 3000
var router = express.Router();
var path = require('path')
const axios = require('axios');

// You need to run this cUrl command to get the Bearer token that's good for 24 hours
// curl -d "grant_type=client_credentials&client_id=6lgm3bsUbm0tPGAxqQ6IYARPFlSYO3zYHlvaIEY4RLMir1YoL7&client_secret=CQlaQsiUtIQ1wMfqpHEy0KSiNoDbnVhEeAlwm4LF" https://api.petfinder.com/v2/oauth2/token
axios.get('https://api.petfinder.com/v2/animals?type=dog&page=2', {
  headers: {
    'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6Ijg5NWNkMTM1NzI3MzdlMTZiYzBiOTA0NzIyZjNmZTRhY2MzYjcwMzU1OTNlNTdhM2YzZDQzMWUzNjljY2I3NjMwODVmOTZmMDYwNTQ5MzVmIn0.eyJhdWQiOiI2bGdtM2JzVWJtMHRQR0F4cVE2SVlBUlBGbFNZTzN6WUhsdmFJRVk0UkxNaXIxWW9MNyIsImp0aSI6Ijg5NWNkMTM1NzI3MzdlMTZiYzBiOTA0NzIyZjNmZTRhY2MzYjcwMzU1OTNlNTdhM2YzZDQzMWUzNjljY2I3NjMwODVmOTZmMDYwNTQ5MzVmIiwiaWF0IjoxNTU0MDc2MjQ5LCJuYmYiOjE1NTQwNzYyNDksImV4cCI6MTU1NDA3OTg0OSwic3ViIjoiIiwic2NvcGVzIjpbXX0.Whl8ZFX9WxuGEf_AhaV5YUHH4DVSk_6OygKbLQ1a4ImtWIsa3SYO04r4JKZ30MaEcl7ZyNuMQhVsQy65PhKMXKdGFrUtipGwHlc4epiML3MWLtg7zN3S9GCVxiOBw4qf2_m2mNoYDX6Rzfn4_tJLv990s0Vuz4ghVlI6uQQZrQdaE9OA2K996gMCQdkyN62EXSAM1DaTL6nePfyH1feEkDkqS8QISHnyUQK95W51wPf820uS1W8jxnUpZaWdbZ6RSFL6alLpWMUfSSy1HYUW0q5q4HrpFsYhU3yop785laNEWHAtYCb0XlPw6RRztmyejP36Lvch2-Rs5ulXIL2XgQ'
  }
})
    .then(response => {
      console.log(response.data);
    })
    .catch(error => {
      console.log(error);
    });

// app.use('/public', express.static('public'))

app.get('/', (req,res) => res.sendFile(path.join(__dirname + '/index.html')))


// var headers = {
//   'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjJiNTFlMzEyNmNmYzYwYjg5YzliOGRiNWYzYjhiNTJmNGExYjcxMWY5ZDlkOGUzNWY5YzJkZTE5MDkzZTA3YzVkOTIzYTA0ZmE4OTkyN2NmIn0.eyJhdWQiOiI2bGdtM2JzVWJtMHRQR0F4cVE2SVlBUlBGbFNZTzN6WUhsdmFJRVk0UkxNaXIxWW9MNyIsImp0aSI6IjJiNTFlMzEyNmNmYzYwYjg5YzliOGRiNWYzYjhiNTJmNGExYjcxMWY5ZDlkOGUzNWY5YzJkZTE5MDkzZTA3YzVkOTIzYTA0ZmE4OTkyN2NmIiwiaWF0IjoxNTUzOTEyNTkxLCJuYmYiOjE1NTM5MTI1OTEsImV4cCI6MTU1MzkxNjE5MSwic3ViIjoiIiwic2NvcGVzIjpbXX0.qv3mLF7q896QbgKWV7p6kHHLEAMEpCpO85CMzQYcchdFhScWlCUQjV-WMfmbt3iNAywJO6_OZpn1UQeUCECjAriYoKfDiACMGS3oj-SxPLv8bFDOGfVwN8hcZGNht2Ps8q6Op29aNlrwbBN3g9n7EIz0kz2RbFXGZX1KODOUIIWs5WNyiXvjvslTpp7PQmlSqTY7gQJkdVD4MJLvRHThzbREhGsZ1GpqfkiXa7Y59dEn3xELolWIOLgGUhAckwwDrnmf4R34XuJkVRduwbVKBPuJQw6HSrg1E9bFwfiVYNxUQ2tlDOSwCMhvuTZwNOINIYORA7B9Ym6nTtWf1edeJA'
// };

app.listen(port, () => console.log(`Petfinder app listening on port ${port}`))

// petfinder API Key: 6lgm3bsUbm0tPGAxqQ6IYARPFlSYO3zYHlvaIEY4RLMir1YoL7
// secret: CQlaQsiUtIQ1wMfqpHEy0KSiNoDbnVhEeAlwm4LF