
function createCard(imageURL, nameLastname, ages, locationAdress, emails) {
    let img = document.createElement('img');
    img.className = 'img';
    img.src = imageURL;

    let nameSurname = document.createElement('p');
    nameSurname.textContent = nameLastname;

    let year = document.createElement('p');
    year.textContent = ages;

    let adress = document.createElement('p');
    adress.textContent = locationAdress;

    let email = document.createElement('p');
    email.textContent = emails;

    let newCard = document.createElement('div');
    newCard.className = 'card col-4';

    newCard.append(img, nameSurname, year, adress, email);
    return newCard;

}


function appendCard(card) {
    // let img = 'https://nuotraukos.mediakatalogas.lt/rsynced_images/photo-model-2091993_1280.jpg';
    // let nameS = "Radvile Lile";
    // let age = '17'
    // let locations = 'Radvilenu pl 15'
    // let email = 'radvile@mail.com';

    let parent = document.querySelector('main');
    parent.append(card);

}
async function getData() {
    const requestURL = 'https://randomuser.me/api/';
    const request = new Request(requestURL, { mode: 'cors' });
    const response = await fetch(request);
    const data = await response.json();
    console.log(data);

    return data;
    // console.log(data.info.page);
    // console.log(data.results[0].email);
    // console.log(data.results[0].location.city);
    // console.log(data.results[0].name.first + ' ' + data.results[0].name.last);
    // console.log(data.results[0].picture.large);
}
let btn = document.querySelector('button');
btn.addEventListener('click', function () {
    getData().then(data => {

        let { name, location, email, picture, dob } = data.results[0];
        name = `${name.title} ${name.first} ${name.last}`;
        location = `${location.city} ${location.street.number} ${location.street.name}`;
        email = email;
        picture = picture.large;
        dob = dob.age;

        let card = createCard(picture, name, dob, location, email);
        appendCard(card);



    }).catch(error => {
        console.log(error);
    });
})











