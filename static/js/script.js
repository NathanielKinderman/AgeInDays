function ageInDays(){
    var birthYear = prompt("What year were you born?")
    var totalDaysAlive = (2020 - birthYear) *365;
    var h1 = document.createElement("h1");
    var textAnswer = document.createTextNode('You are ' + totalDaysAlive + ' days old!')
    h1.setAttribute('id', 'ageInDays');
    h1.appendChild(textAnswer);
    document.getElementById('flex-box-results').appendChild(h1);

}

