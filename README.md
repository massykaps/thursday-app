GET /secret
Hitting this endpoint should return your team’s secret key. 


You can use Postman to collect other team’s keys using their API /secret endpoints
POST /success
This is the endpoint that Judge API will call with the secret, if you manage to unlock the safe. 
console.log() the request body and send a 200 status code back to the judge.
