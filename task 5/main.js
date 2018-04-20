var promise = new Promise((resolve, reject) => {

    fetch('https://randomuser.me/api')
        .then(function (response) {
            return response.json()})
        .then(function (data) {
            resolve(data);
        })


});

promise.then(console.log)