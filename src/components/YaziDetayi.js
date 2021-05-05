import React, { useState, useEffect } from "react";
import axios from "axios";
import { api } from "../api";
import YaziYorumlari from "./YaziYorumlari";
import { Link } from "react-router-dom";


const YaziDetayi = (props) => {
    const { id } = props.match.params; //aynı isimle bir objenin değeri varsa onu destructure yapabiliriz.
    const [yaziDetayi, setYaziDetayi] = useState({});
    const [yorumlar, setYorumlar] = useState([]);



    const handleCommentSubmit = (event, yorum) => {
        event.preventDefault();
        api()
            .post(`/posts/${id}/comments`, yorum)
            .then((response) => {
                setYorumlar([...yorumlar, response.data]);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    useEffect(() => {
        axios
            .all([api().get(`/posts/${id}`), api().get(`/posts/${id}/comments`)])
            .then((responses) => {
                setYaziDetayi(responses[0].data);
                setYorumlar(responses[1].data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    return (

        <React.Fragment>
            <h2 className="ui header">{yaziDetayi.title}</h2>
            <p>{yaziDetayi.created_at}</p>
            <div className="ui buttons">
                <Link className="ui blue button" to={`/posts/${yaziDetayi.id}/edit`}>Düzenle</Link>
                <button className="ui red button">Sil</button>
            </div>
            <p>{yaziDetayi.content}</p>
            <YaziYorumlari yorumlar={yorumlar} handleSubmit={handleCommentSubmit} />
        </React.Fragment>
    );
};

export default YaziDetayi;