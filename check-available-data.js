// Hint (variable1?.variable2?.data)
// Array : variabel?.[index]
// similar with variabel1 && variabel1.variabel2 && variabel1.variabel2.data

class Person{
    constructor(nama, alamat, hobby){
        this.nama = nama
        this.alamat = alamat
        this.hobby = hobby
    }
    print(){
        console.log(this)
    }
}

function printAlamat(person){
    console.log(person?.alamat?.jalan)
}
function printHobby(person){
    console.log(person?.hobby?.[0]) // if null doesn't cause error
}

const andy = new Person(
    "Andy",
    {jalan: "Jl. Melati 1", kota: "Bekasi"},
    ["Sepak bola", "Games"]
)

const anwar = new Person(
    "Andy",
    { kota:"Mataram" }, // it can coused error if we want to access data "jalan"
    null
)

andy.printName?.() // doesn't existed! (not error )
andy.print?.()

printAlamat(andy)
printAlamat(anwar)
printHobby(andy)
printHobby(anwar)