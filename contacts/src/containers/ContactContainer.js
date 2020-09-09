import React from 'react';
import Modal from './Modal';
import { CardButton, StyledContact } from './../styles/styled';
import LoadingCircle from '../containers/LoadingCircle';

const ContactContainer = ({ loadingData, statesFailure, stateComponent, onSubmit, title, firstName, onChange, lastName, phoneNumber, email, state, states, submitting, onCancel }) => {
    return (
        <>
            {submitting && <Modal title={"Submitting"}></Modal>}
            <StyledContact>
                {statesFailure && <h3>Internal error, try again later</h3>}
                {(stateComponent && !statesFailure) && (
                    <form onSubmit={onSubmit}>
                        <h2>{title}</h2>
                        <div>
                            <label>First Name</label>
                            <input type="text" name="firstName" value={firstName} required onChange={onChange} />
                        </div>
                        <div>
                            <label>Last Name</label>
                            <input type="text" name="lastName" value={lastName} required onChange={onChange} />
                        </div>
                        <div>
                            <label>Phone</label>
                            <input type="text" name="phoneNumber" value={phoneNumber} required onChange={onChange} />
                        </div>
                        <div>
                            <label>Email</label>
                            <input type="email" name="email" value={email} required onChange={onChange} />
                        </div>
                        <div>
                            <label>State</label>
                            <select name="state" value={state} onChange={onChange}>
                                {states.length > 0 &&
                                    states.map(contactstate => (
                                        <option value={contactstate.key} key={contactstate.key}>{contactstate.value}</option>))
                                }
                            </select>
                        </div>
                        <div>
                            <CardButton disabled={submitting} type="onSubmit">Submit</CardButton>
                            <CardButton disabled={submitting} onClick={onCancel}>Cancel</CardButton>
                        </div>
                    </form>)
                }
                {loadingData &&
                    <LoadingCircle
                        title={"Loading Data..."}
                        border={"15px"}
                        size={"40px"}
                    />}

            </StyledContact>
        </>
    );
};

export default ContactContainer;