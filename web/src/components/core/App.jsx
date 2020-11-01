import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const App = () => {
    const { t, i18n } = useTranslation('common');
    useEffect(() => {
        i18n.changeLanguage('en');
    }, [i18n]);
    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };

    return (
        <div className="App">
            <header className="App-header">
                <p>
                    <h1>{t('welcome')}</h1>
                    Edit <p>src/App.js</p> and save to reload.
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer">
                    Learn React
                </a>
            </header>
        </div>
    );
};

export default App;
