import React, { useState } from 'react';

import { BsPeopleCircle } from "react-icons/bs"
import { BsPersonFill } from "react-icons/bs";
import {BsEnvelopeFill } from "react-icons/bs";
import { BsPhone } from "react-icons/bs";
import { BsBuilding} from "react-icons/bs";
import {BsHeartFill } from "react-icons/bs";
import './Profile.css';
import EditProfile from './EditProfile';
import { useHistory } from 'react-router-dom';
const Profile = () => {
    let history = useHistory();
    return(
        <>
            <div className="Card">
                <div className="Upper-Container">
                    <div className="Image-Container">
                        <div className="Image"><BsPeopleCircle size="5em"/></div>
                    </div>
                </div>
                <div className="Lower-Container">
                    <div>
                        <h3 className="Name"><BsPersonFill/>&nbsp;Shamanth A R</h3>
                        <h4 className="Email"><BsEnvelopeFill/>&nbsp;shamanthar2000@gmail.com</h4>
                    </div>
                    <div>
                        <ul>
                            <li className="Phone"><BsPhone/> +91 720 439 1409</li>
                            <li className="Bio"><BsBuilding/> Student at NMAMIT.</li>
                            <li className="Interests"><BsHeartFill/> Web Development, Artificial Intelligence</li>
                        </ul>
                    </div>
                    <div>
                        <button className="Btn" onClick={() => {
                            history.push("/EditProfile")
                        }
                            
                        }>Edit Profile</button>

                        
                        {/* <Modal
                            isOpen={ModalIsOpen}
                            onRequestClose={() => setModalIsOpen(false)}
                            style={{
                                overlay: {
                                    
                                    background:'grey'
                                },
                                content: {
                                    color: 'cadetblue',
                                    background:'black'
                                }
                            }}
                        >

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
                                    <button className="Cancel" onClick={() => {
							setModalIsOpen(false)	;
                        }}>Cancel</button>
                                </div>
                            </div>

                            
                        </Modal> */}
                        
                    </div>
                </div>
            </div>
        </>
    )
}

export default Profile;