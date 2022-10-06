import { useState } from "react"
import { useEffect } from "react"
import { Card, CardBody, Form, Input, Label, Button, Container } from "reactstrap"
import JoditEditor from "jodit-react"
import { useRef } from "react"
import { Link } from 'react-router-dom'
import axios from "axios"

const AddEssay = () => {

    const editor = useRef(null)

    const [essay, setEssay] = useState({
        question: '',
        content: '',
    })

    useEffect(() => {
      axios.get(`http://localhost:9000/test/${localStorage.getItem('testId')}`).then(res => setEssay({question: res.data.essayQuestion, context: ''}))
    }, [])

    const Onsubmit = () => {
        try{
          let content = document.getElementById("content").value
          console.log(content)
          const resp = axios.post(`http://localhost:9000/user/updateEssay/${localStorage.getItem("user")}`, {essay: content})
        } catch(err){
          console.log(err.message)
        }
      }

    if(essay.question != ''){
      return (
        <div class="wrapper">
            <Card className="shadow-sm  border-0 mt-2">
                <CardBody>
                    <Form onSubmit={Onsubmit}>
                        <div className="my-3">
                            <Label for="content" >
                            <h3 class="font-bold radio text-dark text-xl sm:text-2xl pb-2">
                              Essay Section
                            </h3>
                            <span
                              class="inline-block bg-primary h-1 w-[90px] mx-auto rounded mb-6"
                            ></span>
                            </Label>
                            <p class="text-base text-center text-body-color leading-relaxed sm:text-xl">
                              {essay.question}
                          </p><br/><br/>
                            <JoditEditor
                                id="content"
                                ref={editor}
                                value={essay.content}
                            />
                        </div>

                        <Container className="text-center">
                        <div class="flex flex-wrap -mx-3">
                          <div class="w-1/2 px-3">
                            <button type="submit" onclick={Onsubmit} class="block normal text-center w-full p-3 text-base font-medium rounded-lg text-dark border border-[#E9EDF9] hover:bg-sky-500 transition">
                            <Link to='../submit'>Submit</Link>
                            </button>
                          </div>
                          <div class="w-1/2 px-3">
                            <button class="block text-center w-full p-3 text-base font-medium rounded-lg text-dark border border-[#E9EDF9] hover:bg-sky-500 transition">
                                Reset
                            </button>
                          </div>
                        </div>
                        </Container>
                    </Form>
                </CardBody>
            </Card>
        </div>
    )
    }
}

export default AddEssay