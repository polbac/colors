import React, { useReducer, useEffect, useLayoutEffect } from 'react'

const ColorsContext = React.createContext();

const initialState = {
    theme: 'light',
    editing: {
        text: '',
        color: null,
    },
    colors: []
}

const reducer = (state, action) => {
    switch (action.type) {
        case 'setTheme': {
            return {
                ...state,
                theme: action.theme
            }
        }
        case 'setForm': {
            return {
                ...state,
                editing: {
                    text: action.text,
                    color: action.color,
                }
            };
        }
        case 'add' :
            return {
                ...state,
                colors: [
                    ...state.colors,
                    action.color
                ]
            };
    }
    return state;
}

const withSettingLocalStorage = red = (state, action) => {
    const s = red(state, action);
    localStorage.setItem('colors', JSON.stringify(s));
    return s;
}

const ColorsContextProvider = (props) => {
    const [ state, dispatch ] = useReducer(withSettingLocalStorage(reducer), initialState);

    const setLightTheme = () => dispatch({ type: 'setTheme', theme: 'light' });
    const setDarkTheme = () => dispatch({ type: 'setTheme', theme: 'dark' });

    const value = { state, dispatch, setLightTheme, setDarkTheme };

    return (
        <ColorsContext.Provider value={value}>{props.children}</ColorsContext.Provider>
      );
}

const ColorsContextConsumer = ColorsContext.Consumer;

export { ColorsContext, ColorsContextProvider, ColorsContextConsumer };
