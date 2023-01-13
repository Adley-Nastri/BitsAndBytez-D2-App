import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import useLocalStorage from '../hooks/useLocalStorage';
import { useNavigate } from 'react-router-dom';

import axios from "axios"

const BungieCB = (props) => {

  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [auth, setAuth] = useLocalStorage('authorization', '')

  let bungie_code;
  bungie_code = searchParams.get("code")


  const [results, setResults] = useState('');


  useEffect(() => {

    getAuthTokens();


  }, [auth])

  navigate('/bungie-user')



  const getAuthTokens = async () => {

    const url = "https://api.bitsandbytez.co.uk/bungie/token"

    const params = new URLSearchParams();

    params.append('code', bungie_code)



    try {

      await axios.post(url, params, {


      }).then((res) => {
        console.log(res.data)
        setResults(res.data);
        setAuth(res.data)


      })


    } catch (err) {
      console.log(err.response.data)
    }

  }


}

export default BungieCB 