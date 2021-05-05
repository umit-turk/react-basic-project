import React, { useEffect, useState } from 'react';
import axios from "axios";

const YaziDetayi = (props) => {
   const {id} = props.match.params; //aynı isimle bir objenin değeri varsa onu destructure yapabiliriz.
   const [yaziDetayi, setyaziDetayi] = useState({});

    useEffect(()=> {
        axios.get(`https://react-yazi-yorum.herokuapp.com/posts/${id}`)
        .then(response => {
            setyaziDetayi(response.data)
            console.log(response)
        })
        .catch(error => {
            console.log(error)
        });
    },[])

    return <> 
    <h2 className="ui header">{yaziDetayi.title}</h2>
    <p>{yaziDetayi.created_at}</p>
    <p>{yaziDetayi.content}</p>
     </>
}

export default YaziDetayi;