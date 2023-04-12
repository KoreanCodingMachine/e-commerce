import React, {useState} from 'react';
import {Button, Col, Container, Form, Row} from "react-bootstrap";
import axios from "axios";
import Indigator from "../components/Indigator";
import Alerts from "../components/Alerts";


// findPassword에서 현재 이메일 입력하면 -> 이메일 전송 -> 링크 클릭시에 changepassword before login
const FindPassword = () => {

    const [loading, setLoading] = useState(false)

    const [email, setEmail] = useState('')

    const [showAlerts, setShowAlerts] = useState(false)

    const onSubmitEmail = async () => {

        const userInput = {
            email
        }

        setLoading(true)

        try {
            const {data, status} = await axios.post('http://localhost:8080/user/find/password', userInput)

            if (status === 201) {
                setLoading(false)
                setShowAlerts(true)
            }

        } catch (err) {
            console.log(err.message)
        }
    }



    return (
       <Container>
           {
               showAlerts
                    ? <Alerts
                        show={showAlerts}
                        setShow={setShowAlerts}
                        title={'비밀번호 확인'}
                        content={'이메일 확인해서 인증해줘'}
                        />
                    : null
           }
           {
               loading
                   ? <div className={'d-flex justify-content-center align-items-center min-vh-100'}>
                       <Indigator />
                     </div>
                    :  <Row>
                       <Col>
                           <div className='d-flex justify-content-center mt-5'>
                               <h1>Find Password</h1>
                           </div>
                           <Form>
                               <Form.Group className="mb-3" controlId="formBasicEmail">
                                   <Form.Label>Email address</Form.Label>
                                   <Form.Control name='email' type="email" placeholder="Enter email" onChange={(e) => {
                                       setEmail(e.target.value)
                                   }} />
                                   <Form.Text className="text-muted">
                                       Enter your email
                                   </Form.Text>
                               </Form.Group>

                               <Button variant="primary" type="submit" onClick={onSubmitEmail}>
                                   Submit
                               </Button>
                           </Form>
                       </Col>
                   </Row>
           }
       </Container>
    );
};

export default FindPassword;