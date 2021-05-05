import React, { useState } from 'react'
import { withRouter } from 'react-router-dom' // YaziFormu App.js de olmadığı için history'e ulaşmak için import ediyoruz
import { api } from '../api';


const YaziFormu = (props) => {
    const [yazi, setYazi] = useState({ title: "", content: "" }); //title ve content zorunludur.Çünkü veri girişi yapacaz.
    const [hata, setHata] = useState("");

    const onInputChange = event => setYazi({ ...yazi, [event.target.name]: event.target.value })

    const onFormSubmit = (event) => {
        event.preventDefault();
        setHata("");
        api().post('/posts', yazi) //ikinci parametre olarak yazi objesini giriyoruz
            .then(response => {
                props.history.push('/'); //yazımız başarılı bir şekilde yüklendiğinde anasayfaya yönlendiriyoruz.
            })
            .catch(error => {
                console.log(error);
                setHata("Başlık ve yazı içeriği alanları zorunludur.")
            })
    }

    return (

        <React.Fragment>
            {hata &&  //eğer bir hata olursa çalışacak
            <div class="ui error message">
                <div class="header">Hata</div>
                <p>{hata}</p>
            </div>
            }

            <div className="ui form">
                <div className="field">
                    <label>Yazı Başlığı</label>

                    <input value={YaziFormu.title} type="text" name="title" onChange={onInputChange} /> {/* name olarak title vermeliyim */}
                </div>
                <div className="field">
                    <label>Yazı İçeriği</label>
                    <textarea value={YaziFormu.content} rows="2" name="content" onChange={onInputChange}></textarea>{/* name olarak content vermeliyim */}
                </div>
                <button className="ui primary button" onClick={onFormSubmit}>
                    Gönder
            </button>
                <button className="ui button">
                    İptal
            </button>
            </div>
        </React.Fragment>
    )
}
export default withRouter(YaziFormu);