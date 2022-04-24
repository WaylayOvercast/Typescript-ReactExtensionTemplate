import React, { FC, useState } from 'react';
import { render } from 'react-dom';
import './popup.css'

interface IProps {

}

export const Popup: FC<IProps> = () => {
    return (
        <div className='App'>
            <div className='header'>
                  
            </div>
        </div>
    );
}

render ( <Popup/>, document.getElementById('popup') );