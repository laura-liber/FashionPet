const salon={
    name:'The Fashion Pet',
    address:{
        city:'Tijuana',
        street:'Av. Universidad',
        number:'262-k'
    },
    hours:{
        open:'9:00 am',
        close:'5:00 pm'
    },
    pets:[]
}

//old
//var salonName=salon.name;
//var salonCity=salon.address.city;

//object destructuring
var {name,address:{city,street,number},hours:{open,close}}=salon;

function displayInfo(){
    document.getElementById('footer-info').innerHTML=`
    <p> ${name}</p>
    <p> ${street} ${number}, ${city}</p>
    <p> It opens from ${open} to ${close}</p>
    `;
}

displayInfo();

//for(var i=0;i<salon.pets.length;i++){
//    console.log(salon.pets[i]);
//}

class Pet{
    constructor(name,age,gender,type,breed,service,owner,phone){
        this.name=name;
        this.age=age;
        this.gender=gender;
        this.type=type;
        this.breed=breed;
        this.service=service;
        this.owner=owner;
        this.phone=phone;
    }
}

//create pets
var scooby=new Pet("Scooby",50,"Male","Dog","Dane","Full Service","Shaggy","555-555-5555");
var scrappy=new Pet("Scrappy",40,"Male",,"Dog","Dane","Nails Cut","Shaggy","555-555-5555");
salon.pets.push(scooby);
displayTable(scooby);
salon.pets.push(scrappy);
displayTable(scrappy);
//create register fuction


//get the value from inputs and store them in vars
var txtName=document.getElementById('petName');
var txtAge=document.getElementById('petAge');
var txtGender=document.getElementById('petGender');
var txtType=document.getElementById('petType');
var txtBreed=document.getElementById('petBreed');
var txtService=document.getElementById('petService');
var txtOwner=document.getElementById('ownerName');
var txtPhone=document.getElementById('ownerPhone');

function register(){
    //create a generic thePet
    var thePet=new Pet(txtName.value,txtAge.value,txtGender.value,txtType.value,txtBreed.value,txtService.value,txtOwner.value,txtPhone.value);
    console.log(thePet);
    //push thePet into the array
    salon.pets.push(thePet);
    displayTable(thePet);
    console.log(salon.pets);
    clear();
}


function clear(){
    txtName.value="";
    txtAge.value="";
    txtGender.value="";
    txtType.value="";
    txtBreed.value="";
    txtService.value="";
    txtOwner.value="";
    txtPhone.value="";
}
