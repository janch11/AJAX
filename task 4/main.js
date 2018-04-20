fetch('https://randomuser.me/api/?results=10')
    .then(function (responce) {
        return responce.json()
    })
    .then(function (data) {
        render(data.results)
        console.log(data.results)
    }).catch(function () {alert("WRONG LINK!!!")

})

function render(users) {

    users.forEach(function (user) {


    var name = user.name.first
    var lastname = user.name.last
    var imgUrl = user.picture.medium
    var tel = user.phone
    var email = user.email


    var div = document.createElement('div')
    var nameP = document.createElement('p')
    var lastnameP = document.createElement('p')
    var img = document.createElement("img")
    var telP = document.createElement("p")
    var mailP = document.createElement("p")

    div.style.border = "1px solid black"
    nameP.innerHTML= name
    lastnameP.innerHTML = lastname
    telP.innerHTML = tel
    img.setAttribute('src', imgUrl)
    mailP.innerHTML = email

    div.appendChild(nameP)
    div.appendChild(lastnameP)
    div.appendChild(img)
    div.appendChild(telP)
    div.addEventListener('click',click)

        function click () {
            div.appendChild(mailP)
        }


    document.body.appendChild(div)


})}