import './Modal.css';

const Modal = ({ handleClose, show, children }) => {
    const showHideClassName = show ? "modal display:block" : "modal display-none";

    return (
        <div className={showHideClassName}>
            <section className="modal-main">

        <div className="ModalCard">
            <div className="ModalUpper">
                {/* <BsPeopleCircle size="8em" /> */}
            </div>
            <div className="ModalLower">
                <ul className="ModalContents">
                    <li className="ModalList">
                        Name:   <input type="text"></input>
                    </li >

                    <li className="ModalList" >
                        Emai:   <input type="email" width="50px"></input>
                    </li>

                    <li className="ModalList">
                        Contact Number:   <input type="text"></input>
                    </li>

                    <li className="ModalList">
                        Bio:   <textarea></textarea>
                    </li>

                    <li className="ModalList">
                        Interests:   <input type="text"></input>
                    </li>
                </ul>
            </div>
            <div className="ModalLowerButtons">
                <button className="Submit">Save</button>
                <button className="Cancel" onClick={() => {
                    ;
                }}>Cancel</button>
            </div>
        </div>
                <button type="button" onClick={handleClose}>
                    Close
                </button>
            </section>
        </div>
    );
};

export default Modal;
