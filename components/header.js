import { ColorsContext } from '../context/colors'
import { useContext } from 'react'

function useThemeSelected() {
    const { state: { theme } } = useContext(ColorsContext);
    return theme;
}


export default () => {
    const theme = useThemeSelected();
    const { setDarkTheme, setLightTheme } = useContext(ColorsContext);

    return (<React.Fragment>
        <header className='header'>
            Colors of your life
            <div><span className={theme === 'dark' ? 'active': 'set-theme'} onClick={setDarkTheme}>Dark</span> | <span className={theme === 'light' ? 'active': 'set-theme'} onClick={setLightTheme}>Light</span></div>
        </header>
        
        <style jsx>{`
            .header{
                background: gray;
                padding: 20px;
                text-align: center;
                font-size: 2em;
                color: white;
            }
            .active{
                background: black;
                color: white;
            }
            .set-theme{
                cursor: pointer;
            }
        `}
        </style>
        <style jsx global>{`
            html,body{
                background: ${theme==='light' ? 'white' : 'black'};
                color: ${theme==='light' ? 'black' : 'white'};
            }
        `}
        </style>
        </React.Fragment>
    )
}