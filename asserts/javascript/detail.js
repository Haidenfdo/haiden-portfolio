let Totaluserlist = [];


function submitHandler(event) {
    event.preventDefault();

    let fname = document.getElementById("fname").value
    let gmail = document.getElementById("email").value
    let message = document.getElementById("msg").value

    const customer_details = {
        "Name": fname,
        "Gmail": gmail,
        "Msg": message
    }

    if (customer_details) {
        Totaluserlist.push(customer_details);
        localStorage.setItem("userList", JSON.stringify(Totaluserlist))
        alert("Your msg has successfully sent to haiden")
    }
    else {

        alert("something went wrong")
    }
}