import React from 'react';
import {methods} from "../../api/methods";

const Registration = () => {

    const registerHandler = () => {
        methods.registration()
    }

    return (
        <div>
            <button onClick={registerHandler}>
                click
            </button>
        </div>
    );
};

export default Registration;