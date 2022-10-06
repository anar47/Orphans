const fs = require('fs')
const pdf = require('pdfkit')
const {Test} = require('../models/Test.model')
const {Question} = require('../models/Question.model')

function generateHeader(doc) {
	doc.image('../logo.png', 50, 45, { width: 50 })
		.fillColor('#444444')
		.fontSize(20)
		.text('SALVA VITA.', 110, 57)
		.fontSize(10)
		.text('123 Main Street', 200, 65, { align: 'right' })
		.text('New York, NY, 10025', 200, 80, { align: 'right' })
		.moveDown();
}

function genererateUserInformation(doc, user) {

	doc.text(`Applicant name: ${user.name}`, 50, 200)
		.text(`Test date: `, 50, 215)
		.text(`Email: ${user.email}`, 50, 130)
        .text(`Phone number: ${user.phoneNumber}`, 50, 130)
        .text(`English test level: ${user.level}`)
        .text(`Reading total score: `, 50, 130)

		.moveDown()
        .stroke()
}

function generateReading(doc){
    wrappedSection.add(
        doc.struct('H1', () => {
          doc
            .text('Reading section', 100, 300)
            .font('Helvetica', 13)
            // move down 1 line
            .moveDown();
        })
      );
      
      var body = reading.body
      doc.text(body, {
        width: 412,
        align: 'justify',
        indent: 30,
        paragraphGap: 5,
        structParent: wrappedSection
    });
}

function generateReadingQs(doc){
  for (let i = 0; i < questions.length; i++) {
    const item = invoice.items[i];
    doc.text(`${i+1}  ${item.question}`)
    doc.text(`Answer: `)
    //doc.text(`${item.correctOption === user.answers[i]}`)
  }
}
/*
function generateEssay(doc) {

}*/

const makePDF = async (user) => {
    const doc = new pdf()
    Test.find({difficulity: user.level})[0].then(resp =>{
      const reading = resp
      const questions = []
      reading.questions.forEach(q => {
        Question.findById(q).then(que => {
          questions.push(que)
        })
      })
      doc.pipe(fs.createWriteStream('output.pdf'))
      generateHeader(doc)
      genererateUserInformation(doc, user)
      generateReading(doc)
      generateReadingQs(doc)
    })
}

module.exports = {makePDF}

