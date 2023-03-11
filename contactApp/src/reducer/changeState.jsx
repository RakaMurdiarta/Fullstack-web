import React from "react";


export const changeState = (state, action) => {
    const { type, payload } = action
    // console.log({ payload });
    if (type === 'SUBMIT') {
        const {fname,number,email}=payload
        return { ...state, user: [...state.user,{fname,email,number}] }
    }
}