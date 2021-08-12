//js for the feedback page


function mySubmit() {
    var userArray = []
    var userName = document.getElementById("userName").value;
    var userEmail = document.getElementById("userEmail").value;
    var userNumber = document.getElementById("userNumber").value;
    var mySelect = document.getElementById("mySelect").value;
    var myRange = document.getElementById("myRange").value;
    var myTextarea = document.getElementById("myTextarea").value;
    var userAlert = ""
    if (mySelect != 'Select Option'){
        userArray.push("Name: " + userName + "\n");
        userArray.push("Email: " + userEmail + "\n");
        userArray.push("Number: " + userNumber + "\n");
        userArray.push("Favourite: " + mySelect + "\n");
        userArray.push("Range: " + myRange + "\n");
        userArray.push('Additional Feedback: ' + myTextarea + "\n");
        for (var i = 0; i<userArray.length; i++){
            userAlert += userArray[i] + "\n"
        }
        window.alert(userAlert);
    }
    else if (mySelect == 'Select Option'){
        alert("Please input valid values!")
    }
}