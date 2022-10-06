const jwt = require('jsonwebtoken')
const nodemailer = require('nodemailer')
const { User } = require("../../models/User.model");
const { Test } = require('../../models/Test.model')
const { makePDF } = require('../../controllers/download')

const hasTakenTest = ({ record }) => {
    return record.params.currentStage === "TAKEN"
}

const testScoreViewHandler = (request, response, context) => {
    const user = context.record.params
    makePDF(user)
    return {
        record: user.toJSON(),
    }
};

const messageHandler = (req, res, context) => {
    const user = context.record.params
    const email = user.email
    
    if(!email){
        res.statusCode(403)
        res.send({
            message: "There is no email address that matches this."
        })
    }

    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASSWORD
        },
        secure: true,
        tls: {
            rejectUnauthorized: false
        }
    })

    const emailTemplate = ({ name, link }) => `
        <h2>Greetings, ${name}</h2>
        <p>Here's the login link to your English proficiency test: </p>
        <p>${link}</p>
    `
    const getTestId = async (level) => {
        let test = await (Test.find({difficulity: level}))
        console.log(test[0].id)
        return test[0].id.toString()
    }

    const makeToken = (email, level, stage) => {
        const expirationDate = new Date()
        expirationDate.setHours(new Date().getHours() + 2)
        getTestId(level).then(test => {

            const token = jwt.sign({email, test, stage, expirationDate}, process.env.JWT_SECRET_KEY)

            const mailOptions = {
                from: "eanar999@gmail.com",
                html: emailTemplate({
                    name: user.name,
                    link: `http://localhost:3000/auth?token=${token}`
                }),
                to: user.email,
                subject: "Invitation to English Proficiency Test"
            }

            transporter.sendMail(mailOptions, function(err, success){
                if(err){
                    console.log(err.message)
                }else{
                    console.log("Email sent")
                }
            })
        })
    }

    makeToken(email, user.examLevel, user.currentStage)

    return { record: context.record.toJSON()}
}

const UserResourceOptions = {
    resource: User,
    options: {
        actions: {
            DownloadTestScore: {
                actionType: 'record',
                icon: 'View',
                isVisible: hasTakenTest,
                handler: testScoreViewHandler,
                guard: "Test score was downloaded successfully"
            },
            SendInvitation: {
                actionType: 'record',
                icon: 'View',
                handler: messageHandler,
                component: false,
                guard: "Invitation mail was successfully sent."
            },
        },
        properties: {
            _id: {
                isVisible: false
            },
            name: { isRequired: true, props: { required: true } },
            email: { isRequired: true, props: { required: true, type: "email" } },
            phoneNumber: { isRequired: true, props: { required: true } },
            disabilityType: {
                isRequired: true,
                availableValues: [
                    {value: "MOBILITY", label: "Mobility impairment"},
                    {value: "COGNITIVE", label: "Cognitive disability"},
                    {value: "VISION", label: "Vision impairment"},
                    {value: "SPEECH", label: "Speech impairment"},
                    {value: "AUDITORY", label: "Auditory impairment"},
                    {value: "OTHER", label: "Other"}
                ]
            },
            currentStage: {
                isRequired: true,
                availableValues: [
                    {value: 'NOT_INVITED', label: "Not invited"},
                    {value: "INVITED", label: "Invitation sent"},
                    {value: "TAKEN", label: "Test taken"}
                ]
            },
            examLevel: {
                isRequired: true,
                availableValues: [
                    {value: "Elementary", label: "Elementary"},
                    {value: "Intermediate", label: "Intermediate"},
                    {value: "UpperIntermediate", label: "Upper Intermediate"}
                ]
            },
            registeredDate: {
                isRequired: false
            }
        } 
    }, 
}

module.exports = {
    UserResourceOptions
}