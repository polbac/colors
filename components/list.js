import React, { useContext, useEffect, useLayoutEffect } from "react";
import { ColorsContext } from '../context/colors'
import ColorItem from './color'

export default () => {
    const { state: { colors } } = useContext(ColorsContext)

    return (
        <React.Fragment>
            <div className='container'>
                {colors.map(color => <ColorItem { ...color } />)}
            </div>
            <style jsx>{`
                .container{
                    margin-top: 20px;
                }
            `}</style>
        </React.Fragment>
    );
}