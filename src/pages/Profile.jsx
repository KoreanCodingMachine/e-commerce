import React, {useState, useEffect, useRef} from 'react';
import axios from "axios";
import {Button} from "react-bootstrap";
import {useNavigate} from "react-router-dom";
import Indigator from "../components/Indigator";
import {useCookies} from "react-cookie";
import Alerts from "../components/Alerts";



const Profile = () => {

    const navigate = useNavigate()

    const [dataLoading, setDataLoading] = useState(false)

    const [logoutLoading, setLogoutLoading] = useState(false)

    const [profileData, setProfileData] = useState({})

    const [cookie, setCookie, removeCookie] = useCookies(['token'])

    const [showAlert, setShowAlert] = useState(false)

    const movePage = useRef('login')

    const logout = useRef('logout')

    const getProfileData = async () => {

        const {token} = cookie

        const config = {
            headers : {
                authorization : 'bearer ' + token
            }
        }

        setDataLoading(true)

        try {
            const {data, status} = await axios.get('http://localhost:8080/auth', config)

            if (status === 200) {
                setDataLoading(false)
                setProfileData({...data})
            }

        } catch (err) {
            console.log(err.message)
        }
    }

    useEffect(()=>{
        getProfileData()
    },[])

    const logoutHandler = async () => {

        const {token} = cookie

        const config = {
            headers: {
                authorization: 'bearer ' + token
            }
        }

        setLogoutLoading(true)

        try {
            const {data, status} = await axios.get('http://localhost:8080/auth/logout', config)

            if (status === 200) {
                setLogoutLoading(false)
                setShowAlert(true)
            }

        } catch (err) {
            console.log(err.message)
        }

    }



    return (
        <div>
            {
                showAlert
                    ? <Alerts
                        title={'로그아웃 할거임?'}
                        content={'로그아웃하면 로그인창 간다.'}
                        show={showAlert}
                        setShow={setShowAlert}
                        movePage={movePage.current}
                        remove={removeCookie}
                        name={logout.current}
                      />
                    :  null
            }
            {
                dataLoading
                    ? <div className={'d-flex justify-content-center align-items-center min-vh-100'}>
                        <Indigator />
                      </div>
                    :   <>
                            <h1>Profile 페이지</h1>
                            <h2>{profileData.createdAt}</h2>
                            <h2>{profileData.email}</h2>
                            <h2>{profileData.gender ? 'female' : 'male'}</h2>
                            <h2>{profileData.id}</h2>
                            <h2>{profileData.roles}</h2>
                            <h2>{`${profileData.selfCheck}`}</h2>
                            <h2>{profileData.source}</h2>
                            <h2>{profileData.updatedAt}</h2>
                            <h2>{profileData.username}</h2>
                        </>
            }
            {
                logoutLoading
                    ? <div className={'d-flex justify-content-center align-items-center min-vh-100'}>
                        <Indigator/>
                      </div>
                    : <Button onClick={logoutHandler}>로그아웃</Button>
            }
        </div>
    );
};

export default Profile;