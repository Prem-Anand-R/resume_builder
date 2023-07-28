
let button = document.getElementById("addButton")
let inputArray1 = ["inputfname", "inputlname", "inputPhone", "inputEmail", "inputAddress", "inputSummery"]
let inputArrayOptions = ["skill1", "skill2", "skill3", "skill4", "inputProgram1", "inputProgram2", "inputProgram3", "inputProgram4", "inputlang1", "inputlang2", "inputlang3", "inputcertificate1", "inputcertificate2", "inputcertificate3", "inputcertificate4"]
let inputArray2 = ["inputyear1", "inputinstitute1", "inputyear2", "inputinstitute2", "inputproject1No", "inputproject1time", "inputproject1title", "inputproject1discription", "inputproject2No", "inputproject2time", "inputproject2title", "inputproject2discription", "inputdeclaration"]
let outputArray1 = ["name1", "name2", "Phone-num", "email", "address", "summery"];
let outputArray2 = ["education1Year", "education1Institute", "education2Year", "education2Institute", "project-1", "project1-date", "project-title", "project1-discription", "project-2", "project2-date", "project2-title", "project2-discription", "declaration"]
let outputArrayOptions = ["skill-option", "program", "language", "certificate"]


button.addEventListener('click', () => {
    inputs1(inputArray1, outputArray1);
    inputs2(inputArray2, outputArray2);
    childOption1(inputArrayOptions, outputArrayOptions);

})
button1.addEventListener('click', () => {
    inputs1(inputArray1, outputArray1);
    inputs2(inputArray2, outputArray2);
    childOption1(inputArrayOptions, outputArrayOptions);

})

function childOption1(inputOptions, outputOptions) {
    for (let i = 0; i < outputOptions.length; i++) {
        if (i == 0) {
            for (let j = 0; j < 4; j++) {
                document.getElementById(`${outputOptions[i]}`).appendChild(creatingSkillOption(document.getElementById(`${inputOptions[j]}`).value))
            }

        } else if (i == 1) {
            for (let j = 0; j < 1; j++) {
                for (let x = 4; x < 8; x++) {
                    document.getElementById(`${outputOptions[i]}`).appendChild(creatingSkillOption(document.getElementById(`${inputOptions[x]}`).value))
                }
            }
        } else if (i == 2) {
            for (let j = 0; j < 1; j++) {
                for (let x = 8; x < 11; x++) {
                    document.getElementById(`${outputOptions[i]}`).appendChild(creatingSkillOption(document.getElementById(`${inputOptions[x]}`).value))
                }
            }
        } else if (i == 3) {
            for (let j = 0; j < 1; j++) {
                for (let x = 11; x < 15; x++) {
                    document.getElementById(`${outputOptions[i]}`).appendChild(creatingSkillOption(document.getElementById(`${inputOptions[x]}`).value))
                }
            }
        }
    }
}

function inputs1(inputArray1, outputArray1) {
    for (let i = 0; i < outputArray1.length; i++) {
        document.getElementById(`${outputArray1[i]}`).innerHTML = document.getElementById(`${inputArray1[i]}`).value;
    }
}

function inputs2(inputArray2, outputArray2) {
    for (let i = 0; i < outputArray2.length; i++) {
        document.getElementById(`${outputArray2[i]}`).innerHTML = document.getElementById(`${inputArray2[i]}`).value;
    }
}


const creatingSkillOption = (name) => {
    let liElement = document.createElement("li");
    liElement.textContent = name;
    return liElement;
};


function printpart1() {
    var printwin = window.open("");
    printwin.document.write(document.getElementById("output").innerHTML);
    printwin.stop();
    printwin.print();
    printwin.close();
}



