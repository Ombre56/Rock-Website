import React from 'react'
import './Contact.css'

function Contact() {
    return (
        <>
            <div class="start">
                <h3 className="header_kontakt">KONTAKT</h3>
                <div className="test">
                    <div id="send_form_status"></div>
                    <form method="post" action="/send_form.php" id="contact_form">
                        <div><label for="name" className="formFieldText">JAK SIĘ NAZYWASZ?</label>
                            <input type="text" name="name" id="name" class="formField2" />
                            <label for="email" className="formFieldText">PODAJ SWÓJ E-MAIL</label>
                            <input type="text" name="email" id="email" class="formField2" /></div>
                        <div><label for="desc" className="formFieldText">OPIS</label></div>
                        <div><textarea name="desc" id="desc" className="formField"></textarea></div><br></br>
                        <div><button id="sendBtn">Wyślij</button></div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Contact
