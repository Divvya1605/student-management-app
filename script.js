function addStudent() {

    let name = document.getElementById("studentName").value;

    if(name !== "") {

        let li = document.createElement("li");

        li.innerHTML =
        name + ' <button onclick="this.parentElement.remove(); updateCount()">Delete</button>';

        document.getElementById("studentList").appendChild(li);

        document.getElementById("studentName").value = "";

        updateCount();
    }
}

function searchStudent() {

    let input = document.getElementById("searchBox").value.toLowerCase();
    let students = document.getElementById("studentList").getElementsByTagName("li");

    for (let i = 0; i < students.length; i++) {

        let text = students[i].innerText.toLowerCase();

        if (text.includes(input)) {
            students[i].style.backgroundColor = "yellow";
        } else {
            students[i].style.backgroundColor = "white";
        }
    }
}


function updateCount() {
    document.getElementById("count").innerText =
    document.getElementById("studentList").children.length;
}

