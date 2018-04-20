var button = document.querySelector('button')
button.addEventListener("click", function () {



var dataPromise = fatchData()
dataPromise
    .then(function (data) {
        showName(data.results[0])
        console.log(data.results[0])
    }).catch(function () {
    alert("WRONG LINK!!!")

})
})

function fatchData() {
    var promise = fetch('https://randomuser.me/api/')
        .then(function (responce) {
            return responce.json()
        })

    return promise
}


function showName(user) {
    var div = document.querySelector("div")
    var userUpper = user.name.first.charAt(0).toUpperCase() + user.name.first.slice(1);
    var userUpper2 = user.name.last.charAt(0).toUpperCase() + user.name.last.slice(1);
    div.innerText = userUpper + ' ' + userUpper2
}


