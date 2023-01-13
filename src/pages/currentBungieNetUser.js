import React, { useState, useEffect, useRef } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';
import BungieUserComponent from '../components/bungieUser';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/esm/ButtonGroup';

import axios from "axios"

const CurrentBungieNetUser = (props) => {


    const [auth, setAuth] = useLocalStorage('authorization', '')
    const [userData, setUserData] = useLocalStorage('userData', '')


    document.title = ""


    useEffect(() => {


        asyncFetchData()
        console.log("Render")

        userData && console.log(userData)




    }, [])



    const deleteData = () => {

        setAuth("")
        setUserData("")

    }

    const updateData = (msg) => {


        setUserData(current => {

            return {
                ...current,
                Response: {
                    ...current.Response,


                    bungieNetUser: {

                        ...current.Response.bungieNetUser,

                        about: msg,
                        uniqueName: "uniqueName#1234"
                    }
                }
            };

        })
    }





    async function asyncFetchData() {


        const url = `https://www.bungie.net/platform/User/GetBungieAccount/${auth.membership_id}/254/`


        if (auth) {
            try {
                const request = await axios.get(url, {
                    headers: {
                        'x-api-key': process.env.REACT_APP_BUNGIE_API_KEY,
                        'Authorization': 'Bearer ' + auth.access_token
                    }
                },
                ).then((res) => {

                    setUserData(res.data)
                })
                console.log(request)

                return request

            }
            catch (err) {
                console.log("F in the chat")
            }
        }




    }



    return (

        <div>

            {userData ?



                <BungieUserComponent
                    uniqueName={userData.Response ? userData.Response.bungieNetUser.uniqueName : "no data"}
                    about={userData.Response ? userData.Response.bungieNetUser.about : "no data"}
                    profilePicturePath={userData.Response ? userData.Response.bungieNetUser.profilePicturePath : "no data"}>

                </BungieUserComponent>


                :

                <BungieUserComponent
                    uniqueName={"No data"}
                >

                </BungieUserComponent>
            }


            <ButtonGroup>
                <Button variant="secondary" size="sm" onClick={() => deleteData()}>
                    Delete data
                </Button>
                <Button variant="secondary" size="sm" onClick={() => updateData("updated Data")}>
                    Update data
                </Button>
            </ButtonGroup>







        </div>
    );
};

export default CurrentBungieNetUser;