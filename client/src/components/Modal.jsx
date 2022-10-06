import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function ModalDialog(props) {
  return (
    <Modal
      {...props}
      size="lg"
      style={{opacity:1}}
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          English Proficiency Test
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Instruction for Test Takers</h4>
        <p>
        Thank you for taking the English Language Level test. 
                    There are 10 reading comprehension questions, which you have to answer in 40 minutes.
                    Please answer every question so that you can go on to the next section.
                    After completing the reading section, you will be given a question, which you have to write an 
                    essay with no more than 200 words. You will have 60 minutes to complete this task.
                    Good Luck!
                    
                    Technical tips:
                    You will be able to go between the questions and the answers using your tab key.
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}
export default ModalDialog