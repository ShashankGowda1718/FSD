function submit(){
    debugger
    var fname=document.getElementById('Name')
    console.log(fname.value)

    var phonenumber=document.getElementById('Phno')
    console.log(phone.value)
    var emailaddress=document.getElementById('Email')
    console.log(email.value)

    var selectedFood = "";
    var selectedfoodRadio = document.querySelector('input[name="food"]:checked');
    if (selectedfoodRadio) {
        selectedFood = selectedfoodRadio.value;
    }

    console.log("Selected Food Preference:", selectedFood);
    document.getElementById('selectedValue')?.remove();

    var selectedtshirt = "";
    var selectedtshirtRadio = document.querySelector('input[name="tshirt"]:checked');
    if (selectedtshirtRadio) {
        selectedtshirt = selectedtshirtRadio.value;
    }

    console.log("Selected tshirt :", selectedtshirt);
    document.getElementById('selectedValue')?.remove(); 


    var selectedgender = "";
    var selectedgenderRadio = document.querySelector('input[name="gender"]:checked');
    if (selectedgenderRadio) {
        selectedgender = selectedgenderRadio.value;
    }

    console.log("Selected gender :", selectedgender);
    document.getElementById('selectedValue')?.remove(); 
}