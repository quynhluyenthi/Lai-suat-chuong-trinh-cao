function cal(){
    let money=+document.getElementById("money").value;
    let time=+document.getElementById("time").value;
    let rate=+document.getElementById("ir").value;
    account=money+money*(rate/12)*time;
    document.getElementById("result").innerHTML="Result:"+account+" trieu VND";
}