// function welComeToGuest(name) {
//     console.log(name);
// }
// const actorName = 'Tom Hanks';
// welComeToGuest(actorName);


function welComeToGuest(name, greetHanlder) {
    greetHanlder(name);
}
const actorName = 'Tom Hanks';

function greetUserMorning(name) {
    console.log('Good Morning', name);
}
welComeToGuest(actorName, greetUserMorning);