const parser = require('lambda-multipart-parser')
const nodemailer = require('nodemailer')
let {EMAIL_HOST, EMAIL_PORT, EMAIL_USER, EMAIL_PASS, EMAIL_RECIPIENT} = process.env

exports.handler = (event, context, callback) => {
    parser.parse(event).then(data => {
//         sendEmail(data)
        callback(null,  {
            statusCode: 200,
            data: { name: data.name, email: data.email, phone: data.phone, position: data.position },
            body: {
                success: true,
                env: { EMAIL_HOST, EMAIL_PORT, EMAIL_USER, EMAIL_PASS, EMAIL_RECIPIENT }
            },
        });
    }).catch(e => {
        callback(e);
    })
}

async function sendEmail({name, email, phone, position, files} = {}, test = false) {
    if(test) {
        EMAIL_USER = "thanhnv.sed@gmail.com"
        EMAIL_PASS = "ctkvrvrdqidobykk"
        EMAIL_RECIPIENT = "thanhnv.sed@gmail.com"
    }

    const transporter = nodemailer.createTransport({
        host: EMAIL_HOST || 'smtp.gmail.com',
        port: EMAIL_PORT || 587,
        secure: false,
        auth: {
            user: EMAIL_USER,
            pass: EMAIL_PASS,
        },
    })

    const subject = `[${position}] ${name}`
    const text = `
        Name: ${name}\n
        Applying for position: ${position}\n
        Phone: ${phone}\n
        Email: ${email}\n
        CV: find attachment
      `
    let info = await transporter.sendMail({
        from: email,
        to: EMAIL_RECIPIENT,
        subject,
        text,
        attachments: files,
    })

    console.log("send email info: ", info)
    if (info && (!info.rejected || info.rejected.length == 0)) {
        return {
            statusCode: 200,
            body: { success: true, details: info },
        }
    }
}

// sendEmail({
//     name: "Thanh",
//     email: "thanhnv.sed@gmail.com",
//     phone: "2349028394",
//     position: "Dev",
//     files: []
// }, true).catch(e => console.log(e))
