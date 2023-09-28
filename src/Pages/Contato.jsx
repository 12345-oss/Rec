
function Contato(){
    return(
        <>
            <form action=""  className="form-container">
                <input type="text" name="Nome" id="Nome" placeholder="Nome" className="text-input"/>
                <input type="email" name="Email" id="Email" placeholder="Email" className="text-input"/>
                <button className="submit-button">Enviar</button>
            </form>
        </>
    )
}

export default Contato