const fullname = document.getElementById("fullname")
const male = document.getElementById("male")
const female = document.getElementById("female")
const group = document.getElementById("group")
const mail = document.getElementById("mail")
const telnumber = document.getElementById("telnumber")
const japanlevel = document.getElementById("japanlevel")
const marks = document.getElementById("marks")

const persons = JSON.parse(localStorage.getItem("persons")) || [];

document.querySelector(".btn").addEventListener("click", () => {

    let genderValue;
    
    if (male.checked) {
        genderValue = 1
    }
    if (female.checked) {
        genderValue = 2
    }

    const person = {
        fullname: fullname.value,
        gender: genderValue,
        group: group.value,
        mail: mail.value,
        telnumber: telnumber.value,
        japanlevel: japanlevel.value,
        marks: marks.value,
    }

    persons.push(person);

    localStorage.setItem("persons", JSON.stringify(persons))
    renderTable()

})

function renderTable() {

    const tbody = document.getElementById("tbody")
    tbody.innerHTML = ""

    persons.forEach((person, index) => {
        let tr = document.createElement("tr")
        
        let idTd = document.createElement("td")
        idTd.innerText = (++index)

        let fullnameTd = document.createElement("td")
        fullnameTd.innerText = person.fullname

        let genderTd = document.createElement("td")
        genderTd.innerText = person.gender == 1 ? "男性" : "女性"

        let groupTd = document.createElement("td")
        groupTd.innerText = person.group

        let mailTd = document.createElement("td")
        mailTd.innerText = person.mail

        let telnumberTd = document.createElement("td")
        telnumberTd.innerText = person.telnumber

        let japanlevelTd = document.createElement("td")
        japanlevelTd.innerText = person.japanlevel

        let marksTd = document.createElement("td")
        marksTd.innerText = person.marks

        tr.appendChild(idTd)
        tr.appendChild(fullnameTd)
        tr.appendChild(genderTd)
        tr.appendChild(groupTd)
        tr.appendChild(mailTd)
        tr.appendChild(telnumberTd)
        tr.appendChild(japanlevelTd)
        tr.appendChild(marksTd)

        tbody.appendChild(tr)
    });
}


window.onload = () => {
    renderTable();
}