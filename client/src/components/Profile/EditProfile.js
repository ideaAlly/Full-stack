import React from 'react';
import { useHistory } from 'react-router-dom';
import { BsPeopleCircle } from 'react-icons/bs';
const EditProfile = () => {
    let history = useHistory();
    return (
        <>
            <div className="ModalCard">
                                <div className="ModalUpper">
                                   <BsPeopleCircle size="8em"/>
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
                    <button className="Cancel" onClick={() => { history.push("/Profile") }}>Cancel</button>
                                </div>
                            </div>
            </>
    )
    
}

export default EditProfile;