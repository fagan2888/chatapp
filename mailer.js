var mailer = require("nodemailer");
var smtpTransport = mailer.createTransport("SMTP",{
    service: "Gmail",
    auth: {
        user: "srijanjucse@gmail.com",
        pass: "srijan96"
    }
});

var mail = {
    from: "Srijan96 <srijanjucse@gmail.com>",
    to: "srijan96.sc@gmail.com",
    subject: "Send Email Using Node.js",
    text: "Node.js New world for me",
    html: "<b>Node.js New world for me</b>"
}

smtpTransport.sendMail(mail, function(error, response){
    if(error){
        alert(error);
    }else{
        alert("Message sent: " + response.message);
    }

    smtpTransport.close();
});
