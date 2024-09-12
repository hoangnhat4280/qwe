function changeMoney() {
    let amount = document.getElementById("amount").value;
    let fromC = document.getElementById("from").value;
    let toC = document.getElementById("to").value;
    let Result;


    if (fromC == "USD" && toC == "VND") {
        Result = "Result: " + (Amount * 23000) + " Đ";
    }
    else if (fromC == "VND"&& toC =="USD"){
        Result = "Result: "+ (Amount / 23000) + " $";
    }
    else if (fromC == "VND") {
        Result = "Result: " + Amount + " Đ"
    } else {
        Result = "Result: " + Amount + " $"
    }

    document.getElementById("Result").innerHTML = Result;
}
