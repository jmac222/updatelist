class Passenger {
    constructor(firstName, lastName, birthday, departureCity, arrivalCity, dateLeaving, dateReturning, numberOfBags, id, search) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.id = id;
        this.birthday = birthday;
        this.departureCity = departureCity;
        this.arrivalCity = arrivalCity;
        this.dateLeaving = dateLeaving;
        this.dateReturning = dateReturning;
        this.numberOfBags = numberOfBags;
        this.search = search;
        // this.duration = duration;
    }
}

let passengerList = [];
let idCount = 1;

function addToList() {
    let firstName = document.getElementById("firstName").value;
    let lastName = document.getElementById("lastName").value;
    let birthday = document.getElementById("birthday").value;
    let departureCity = document.getElementById("departureCity").value;
    let arrivalCity = document.getElementById("arrivalCity").value;
    let dateLeaving = document.getElementById("dateLeaving").value;
    let dateReturning = document.getElementById("dateReturning").value;
    let numberOfBags = document.getElementById("numberOfBags").value;

    let birthdayNumbers = new Date(birthday);
    console.log(birthdayNumbers[2]);
    let canDrink = false;
    let age = birthday - birthdayNumbers[0];
    

    let extraCost = 0;
    extraCost += numberOfBags * 20;


    let leavingNumbers = new Date(dateLeaving);
    let returningNumbers = new Date(dateReturning);
    console.log(leavingNumbers)
    let dayGone = leavingNumbers.getTime() - returningNumbers.getTime();
    dayGone = Math.abs(dayGone / 1000 / 60 / 60 / 24)
    console.log(dayGone)

    

    age = Date.now;

    if (firstName != "" && lastName != "" && birthday != "" && departureCity != "" && arrivalCity != "" && dateLeaving != "" && dateReturning != "" && search != "") {
        let passenger = new Passenger(firstName, lastName, birthday, departureCity, arrivalCity, dateLeaving, dateReturning, numberOfBags, search, idCount);
        idCount++;

        console.log(birthday + " ~~~ "+ dateLeaving)
        passengerList.push(passenger);
        document.getElementById("firstName").value = "";
        document.getElementById("lastName").value = "";
        document.getElementById("birthday").value = "";
        document.getElementById("departureCity").value = "";
        document.getElementById("arrivalCity").value = "";
        document.getElementById("dateLeaving").value = "";
        document.getElementById("dateReturning").value = "";
        document.getElementById("numberOfBags").value = "";
        document.getElementById("search").value = "";
    }
}

let radioButtons = document.getElementsByName("meal")

function print() {
    let space = document.getElementById("names");
    space.innerHTML = "";
    for (let i = 0; i < passengerList.length; i++) {
        space.innerHTML += `${passengerList[i].firstName} ${passengerList[i].lastName} <br>` 

    }
}

function search() {
    let searchID = document.getElementById("search").value
    for (i = 0; i < passengerList.length; i++) {
        if (passengerList[i].firstName == searchID) {
            document.getElementById("outfirstName").value = passengerList[i].firstName;
            document.getElementById("outlastName").value = passengerList[i].lastName;
            console.log(passengerList[i].birthday)
            console.log(passengerList[i].dateLeaving)
            document.getElementById("outDoB").value = passengerList[i].birthday;
            document.getElementById("outdeparting").value = passengerList[i].departureCity;
            document.getElementById("outarriving").value = passengerList[i].arrivalCity;
            document.getElementById("outleaveDate").value = passengerList[i].dateLeaving;
            document.getElementById("outreturnDate").value = passengerList[i].dateReturning;
            document.getElementById("outbags").value = passengerList[i].numberOfBags;
            
        }
    }
    // document.getElementById("updateList()")
}