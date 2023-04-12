import React, {useRef, useState} from 'react';
import {Row,Col,Container,Form,Button} from 'react-bootstrap'
import {useNavigate} from "react-router-dom";
import axios from "axios";
import Indigator from "../components/Indigator";
import Alerts from '../components/Alerts'

const Signup = () => {

    const [loading, setLoading] = useState(false)

    const [showAlert, setShowAlert] = useState(false)

    const [inputs, setInputs] = useState({
       username:'',
       email:'',
       password:''
    })

    const onChange = (event) => {
        const {name , value} = event.target

        const newInput = {
            ...inputs,
            [name] : value
        }

        setInputs(newInput)
    }


    const onSignupHandler = async (event) => {

        event.preventDefault()

        const {username, email, password} = inputs

        const userInput = {
            username,
            email,
            password
        }

        setLoading(true)

        try {
            const {data, status} = await axios.post('http://localhost:8080/auth/signup', userInput)
            
            if (status === 201) {
                setLoading(false)
                setShowAlert(true)
            }


        } catch (err) {
            console.log(err.message)
        }
    }


    const resendEmail = async () => {

        const {email} = inputs

        const userInput = {
            email
        }

        setLoading(true)

        try {
            const {data, status} = await axios.post('http://localhost:8080/auth/resend/confirm', userInput)
            
            if (status === 201) {
                setLoading(false)
                setShowAlert(true)
            }
            
        } catch (err) {
            console.log(err.message)
        }
    }


    return (
        <Container>
            {
                showAlert
                    ? <Alerts
                        title={'이메일을 확인해라'}
                        content={'이메일 안오면 밑에 다시보내기 버튼을 클릭해라'}
                        show={showAlert}
                        setShow={setShowAlert}
                    />
                    : null
            }
            {
                loading
                    ? <div className={'d-flex justify-content-center min-vh-100 align-items-center'}>
                        <Indigator/>
                      </div>
                    : <Row className={'mt-5'}>
                    <Col lg={'8'} xs={'12'} md={'10'} className={'offset-lg-2 offset-md-1'}>
                        <Form onSubmit={onSignupHandler}>
                            <Form.Group className="mb-3">
                                <Form.Label>username</Form.Label>
                                <Form.Control name='username' type="text" placeholder="Enter username" onChange={onChange} />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control name='email' type="email" placeholder="Enter email" onChange={onChange} />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control name='password' type="password" placeholder="Password" onChange={onChange} />
                            </Form.Group>
                            <div className='d-flex flex-column justify-content-between'>
                                <Button variant="primary" type="submit">
                                    Submit
                                </Button>
                                <Button variant="primary" type="submit"  className={'mt-3'} onClick={resendEmail}>
                                    resend Email
                                </Button>
                            </div>
                        </Form>
                    </Col>
                </Row>
            }
        </Container>
    );
};

export default Signup;