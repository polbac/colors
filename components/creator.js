import { useContext } from 'react';
import { ColorsContext } from '../context/colors'

export default () => {
    const { 
        dispatch,
        state: { editing: { text, color }} 
    } = useContext(ColorsContext);

    const changeText = (e) => dispatch({
        type: 'setForm',
        text: e.target.value,
        color,
    });

    const changeColor = (e) => dispatch({
        type: 'setForm',
        color: e.target.value,
        text,
    });

    const createColor = () => dispatch({
        type: 'add',
        color: {
            text,
            color,
        }
    });

    return (
        <React.Fragment>
            <div className="creator">
                <input onChange={changeText} className="inputField" type="text" value={text}/>
                <input onChange={changeColor} className="inputField" type="color" value={color}/>
                <button onClick={createColor} className="inputField">Create</button>
            </div>
        <style jsx>{`
            .creator{
                margin: auto;
                margin-top: 30px;
                padding: 10px;
                text-align: center;
                border: 2px solid gray;
                width: 300px;
            }
            .inputField{
                width: 200px;
                height: 50px;
                display: block;
                margin: auto;
                margin-bottom: 10px;
            }
            
        `}</style>
        </React.Fragment>
    );
}