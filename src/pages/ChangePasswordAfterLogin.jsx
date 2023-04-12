import React, {useState} from 'react';
import {Button, Col, Container, Form, Row} from "react-bootstrap";
import {useLocation, useNavigate} from "react-router-dom";
import axios from "axios";

const ChangePasswordAfterLogin = () => {

    const navigate = useNavigate()
    const [currentPassword, setCurrentPassword] = useState('')
    const [newPassword, setNewPassword] = useState('')

    const onChangePasswordHandler = async () => {

        const userInput = {
            currentPassword,
            newPassword
        }

        try {

            const config = {
                headers : {
                    authorization: 'bearer ' + localStorage.getItem('token')
                }
            }

            const {data, status} = await axios.put('http://localhost:8080/user/update/password', userInput, config)
            
            if(status === 200) {
                alert('비밀번호 변경 성공')
                navigate('/login')
            }
            
        } catch (err) {
            console.log(err.message)
        }
    }

    return (
        <div>
            <div className='d-flex justify-content-center'>
                <h1>ChangePasswordAfterLogin</h1>
            </div>
            <Container>
                <Row>
                    <Col>
                        <div className='d-flex justify-content-center mt-5'>
                            <h1>Find Password</h1>
                        </div>
                        <Form>
                            <Form.Group className="mb-3">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control name='currentPassword' type="password" placeholder="Enter Current password" onChange={(e) => {
                                    setCurrentPassword(e.target.value)
                                }} />
                                <Form.Text className="text-muted">
                                    Enter your current password
                                </Form.Text>
                            </Form.Group>

                            <Form.Group className="mb-3">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control name='newPassword' type="password" placeholder="Enter new password" onChange={(e) => {
                                    setNewPassword(e.target.value)
                                }} />
                                <Form.Text className="text-muted">
                                    Enter your new password
                                </Form.Text>
                            </Form.Group>

                            <Button variant="primary" type="submit" onClick={onChangePasswordHandler} >
                                Submit
                            </Button>
                        </Form>
                    </Col>
                </Row>
            </Container>

        </div>
    );
};

export default ChangePasswordAfterLogin;