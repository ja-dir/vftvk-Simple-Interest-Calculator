let compute = () => {

    const p = document.getElementById("principal").value;
    const r = document.getElementById("rate").value;
    const y = document.getElementById("years").value;
    
    let interest = p * y * r/100;

    let year = new Date().getFullYear() + parseInt(y);
    let result = document.getElementById("result");

    if(p < 1){
        result.innerHTML = "";
        alert("Enter a positive number");
    }
    else{

        
        result.innerHTML = "If you deposit "+p+",\<br\>at an interest rate of "+r+"%\<br\>You will receive an amount of "+interest+",\<br\>in the year "+year+"\<br\>"

    }
    
}

let updateRate = () => {
    const rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText = rateval + "%";

}
        