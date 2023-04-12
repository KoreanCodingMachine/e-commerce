import React, {useRef, useState} from 'react';
import {useLocation, useNavigate} from "react-router-dom";
import axios from "axios";
import {Container} from "react-bootstrap";
import Indigator from "../components/Indigator";
import Alerts from "../components/Alerts";

const ConfirmEmail = () => {

    const [loading, setLoading] = useState(false)

    const [showAlerts, setShowAlerts] = useState(false)

    const location = useLocation()

    const token = location.search.slice(7)

    const movePage = useRef('login')


    const emailConfrimHandler = async () => {

        const userInput = {
            token
        }

        setLoading(true)

        try {
            const {data, status} = await axios.post('http://localhost:8080/auth/confirm', userInput)

            console.log(status)

            if (status === 201) {
                setShowAlerts(true)
                setLoading(false)
            }

        } catch (err) {
            console.log(err.message)
        }
    }

    return (
        <>
          <Container>
              {
                  showAlerts
                        ? <Alerts 
                            title={'이메일 확인'}
                            content={'이메일 확인 되었어'}
                            show={showAlerts}
                            setShow={setShowAlerts}
                            movePage={movePage.current}
                            name={movePage.current}
                            />
                        : null
              }
              <h2 className={'text-center mt-5'}>이메일 인증하기</h2>
              <div className={'d-flex justify-content-center align-items-center min-vh-100'}>
                  {
                      loading
                            ? <Indigator/>
                            :  <button onClick={emailConfrimHandler} className={'mb-5'}>이메일 인증확인</button>
                  }
              </div>
          </Container>
        </>
    );
};

export default ConfirmEmail;