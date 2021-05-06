import React, { useState } from 'react';
import {Button, Modal} from 'semantic-ui-react';
import { api } from '../api';

const SilModal = ({ yazi, push }) => {

    const [open, setOpen] = useState(false);
    const [hata, setHata] = useState("");
    const show = () => setOpen(true) //modalı açıcak olan fonksiyon
    const close = () =>setOpen(false);// modal'ı kapatacak olan fonksiyon

    const handleDelete = (id) => {
        api().delete(`/posts/${id}`)
        .then(() => {
            setHata("");
            //modal'ı kapatma işlemi yapacaz ve anasayfaya push işlemi yapacaz.(modal close and push to home)
            close();
            push('/');
        })
        .catch(() => {
            setHata("Yazıyı silerken hata oluştu")
        })
    }

    console.log(yazi)
    
    return (
        <React.Fragment>
        <Button color="red" onClick={show}>Sil</Button>
        <Modal sizi="mini" open={open} onClose={close}>
            <Modal.Header>Yazıyı Sil</Modal.Header>
            <Modal.Content>
                <p><b>{yazi.title}</b>Bu yazıyı silmek istediğinizden emin misiniz?</p>
                {hata && <p>{hata}</p>}
            </Modal.Content>
            <Modal.Actions>
                <Button negative onClick={close}>İptal Et</Button>
                <Button positive icon="delete" labelPosition="right" content="Evet,sil" onClick={() => handleDelete(yazi.id)} ></Button> {/* Yazıyı silebilmek için yazının id sini bilmeliyiz. */}
            </Modal.Actions>
        </Modal>
    </React.Fragment>
    )
}
export default SilModal;