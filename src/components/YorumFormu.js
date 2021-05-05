import React, {useState} from 'react'


const YORUM_BASLANGIC = {
    display_name: "",
    body: "",
};


const YorumFormu = (props) => {
    const [yorum, setYorum] = useState(YORUM_BASLANGIC);
    //setYorum(YORUM_BASLANGIC); //Yorum gönderildikten sonra başlangıç sıfırlanacak.

    const handleOnChange = event => { //handleOnChange her zaman paramete olarak event alacak daha sonra setCommentBody'i çağırarak içerisine bir obje gönderecek bu objenin içinde comment body'nin değerlerini orada alacak arkasından eventten gelen targetın namesi ile eventten gelen değeri kaydedecek
        setYorum({ ...yorum, [event.target.name]: event.target.value })
    }

    return (
        <React.Fragment>
            <h3>Yorum Yaz</h3>
            <form className="ui form" onSubmit={(event) => {props.handleSubmit(event, yorum)
            setYorum(YORUM_BASLANGIC)
            }}>
                <div className="ui mini icon input">
                    <input name="display_name" type="text" placeholder="Adınız" onChange={handleOnChange} value={yorum.display_name} />
                </div>
                <textarea name="body" placeholder="Yorumunuz" rows="3" onChange={handleOnChange} value={yorum.body}></textarea>
                <button className="ui blue button" type="submit">Yorum Gönder</button>
            </form>
        </React.Fragment>
    )
}

export default YorumFormu;