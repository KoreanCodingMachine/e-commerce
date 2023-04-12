import React,{useState} from 'react';
import {Button, Alert} from 'react-bootstrap'
import {useNavigate} from "react-router-dom";

const Alerts = ({title,content,show,setShow,movePage,remove,name}) => {

    const navigate = useNavigate()

    const movePagesAndLogout = () => {
        navigate(`/${movePage}`)
        remove('token')
    }

    return (
        <>
            <Alert show={show} variant="success">
                <Alert.Heading>{title}</Alert.Heading>
                <p>
                    {content}
                </p>
                <hr />
                <div className="d-flex justify-content-center">
                    <Button onClick={() => setShow(false)} variant="outline-success">
                       close
                    </Button>
                    {
                        name === 'logout'
                            ? <Button onClick={movePagesAndLogout} variant="outline-success">
                                    logout?
                              </Button>
                            : name === ''
                                ? null
                                : <Button onClick={() => {navigate(`/${movePage}`)}} variant="outline-success">
                                    go to {movePage}
                                  </Button>
                    }
                </div>
            </Alert>
            {/*{!show && <Button onClick={() => setShow(true)}>Show Alert</Button>}*/}
        </>
    );
};

export default Alerts;

Alerts.defaultProps = {
    name:'',
    remove:'',

}