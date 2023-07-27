const RejectedModal = ({handleClose})=>{


    return(
        <>
        <div className="modal-wrapper" onClick={handleClose}>
        </div>

        <div className="modal-message">
            <div className="modal-message-text">
                <h3> Submition Failed</h3>
                <div id={"closer"} onClick={handleClose}>X</div>
                <p>Some error has occurred</p>
                <h5>This is a random mensage, keep sending until succes</h5>
            </div>
        </div>
        </>
    )
}

export default RejectedModal