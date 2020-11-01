import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import XHR from 'i18next-http-backend';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import commonEn from '../i18n/en/common.json';
import commonFr from '../i18n/fr/common.json';

const resources = {
    fr: {
        common: commonFr
    },
    en: {
        common: commonEn
    }
};

i18n.use(Backend)
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        debug: true,
        fallbackLng: 'en',
        ns: ['common', 'user'],
        react: {
            bindI18n: 'languageChanged',
            bindI18nStore: '',
            transEmptyNodeValue: '',
            transSupportBasicHtmlNodes: true,
            transKeepBasicHtmlNodesFor: ['br', 'strong', 'i'],
            useSuspense: false
        },
        resources
    });

export default i18n;
