

function run() {
    let eng = Number(document.getElementById("eng").value)
    let maths = Number(document.getElementById("maths").value)
    let phy = Number(document.getElementById("phy").value)
    let bio = Number(document.getElementById("bio").value)
    let chem = Number(document.getElementById("chem").value)

    if (eng == "" || maths == "" || phy == "" || bio == "" || chem == ""){
        alert("Enter All Marks")
    }

    else if (eng > 98 || maths > 98 || phy > 98 || bio > 98 || chem =="") {
        alert("Max. Marks 98")
    }
    else {

        let obtValue = eng + maths + phy + bio + chem
        document.getElementById("obt").innerHTML = obtValue
        let totalMarks = 300

        let per = obtValue / totalMarks * 100
        document.getElementById("per").innerHTML = per + "%"

    }


}