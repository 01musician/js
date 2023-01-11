var http = require('http');
var url = require('url');

http.createServer(function (req, res) {
      const axios = require('axios');

    // Make a request for a user with a given ID
    axios.get('/user?ID=12345')
        .then(function (response) {
            // handle success
            res.writeHead(200, {'Content-Type': 'text/html'});
            var q = url.parse(req.url, true).query;
            var txt = q.year + " " + q.month;
            res.end(txt);
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
        .then(function () {
            // always executed
        });

    // Optionally the request above could also be done as
    axios.get('/user', {
        params: {
            ID: 12345
        }
    })
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        })
        .then(function () {
            // always executed
        });

    // Want to use async/await? Add the `async` keyword to your outer function/method.
    async function getUser() {
        try {
            const response = await axios.get('/user?ID=12345');
            console.log(response);
        } catch (error) {
            console.error(error);
        }
    }
}).listen(8080);

