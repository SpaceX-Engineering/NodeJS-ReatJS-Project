const express = require("express")
const sgMail = require("@sendgrid/mail")
sgMail.setApiKey("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")

const app = express()

const msg = {
    to: "m.aqeelijaz@gmail.com",
    from: "m.aqeelijaz1@gmail.com",
    subject: "Sending mail from node",
    text: "test with node",
    html: "<h1>This is a mail from me!</h1>"
}

app.post("/sendMail", (req, res) => {
    sgMail.send(msg)
        .then(() => {
            console.log("Email Sent")
            res.send("Email Sent")
        }
    )
        .catch((err) => {
            console.log("err ", err)
            res.send("cannot Send Email")
    })
})


app.listen(3000, () => {
    console.log("listening on port 3000")
})