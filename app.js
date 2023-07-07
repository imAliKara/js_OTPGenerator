function generateOTP() {
    var digid = "0123456789";
    let otp = "";
    for(let i = 0; i < 6; i++) {
        otp += digid[Math.floor(Math.random() * 10)];
    }
    var output = document.getElementById("otp").innerHTML = otp;
}