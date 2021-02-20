const parser = require('lambda-multipart-parser')
const nodemailer = require('nodemailer')
const {EMAIL_HOST, EMAIL_PORT, EMAIL_USER, EMAIL_PASS, EMAIL_RECIPIENT} = process.env

exports.handler = async (event, context) => {
    const transporter = nodemailer.createTransport({
        host: EMAIL_HOST || 'smtp.gmail.com',
        port: EMAIL_PORT || 587,
        secure: true,
        auth: {
            user: EMAIL_USER,
            pass: EMAIL_PASS,
        },
    })

    const result = await parser.parse(event)
    const {name, email, phone, position, files} = result

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

    console.log("")

    if (info) {
        return {
            statusCode: 200,
            body: 'Ok',
        }
    }
}