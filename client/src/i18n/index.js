import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import viCommon from './locales/vi/common.json';
import viAuth from './locales/vi/auth.json';
import viNav from './locales/vi/nav.json';
import viUserMenu from './locales/vi/userMenu.json';
import viCandidateToolbar from './locales/vi/candidateToolbar.json';
import viCandidate from './locales/vi/candidate.json'
import viSourceChannel from './locales/vi/sourceChannel.json';
import viEligibility from './locales/vi/eligibility.json';
import viResult from './locales/vi/result.json';
import viStatus from './locales/vi/status.json';
import viTimeline from './locales/vi/timeline.json';
import viModalEdit from './locales/vi/modalEdit.json';
import viSearch from './locales/vi/search.json';
import viRoutes from './locales/vi/routes.json';
import viUser from './locales/vi/user.json';
import viValidate from './locales/vi/validate.json';
import viSupportScreen from './locales/vi/supportScreen.json';
import viToast from './locales/vi/toast.json';

import enCommon from './locales/en/common.json';
import enAuth from './locales/en/auth.json';
import enNav from './locales/en/nav.json';
import enUserMenu from './locales/en/userMenu.json';
import enCandidateToolbar from './locales/en/candidateToolbar.json';
import enCandidate from './locales/en/candidate.json';
import enSourceChannel from './locales/en/sourceChannel.json';
import enEligibility from './locales/en/eligibility.json';
import enResult from './locales/en/result.json';
import enStatus from './locales/en/status.json';
import enTimeline from './locales/en/timeline.json';
import enModalEdit from './locales/en/modalEdit.json';
import enSearch from './locales/en/search.json';
import enRoutes from './locales/en/routes.json';
import enUser from './locales/en/user.json';
import enValidate from './locales/en/validate.json'
import enSupportScreen from './locales/en/supportScreen.json';
import enToast from './locales/en/toast.json';


i18n
    .use(initReactI18next)
    .init({
        resources: {
            vi: {
                common: viCommon,
                auth: viAuth,
                nav: viNav,
                userMenu: viUserMenu,
                candidateToolbar: viCandidateToolbar,
                candidate: viCandidate,
                sourceChannel: viSourceChannel,
                eligibility: viEligibility,
                result: viResult,
                status: viStatus,
                timeline: viTimeline,
                modalEdit: viModalEdit,
                search: viSearch,
                routes: viRoutes,
                user: viUser,
                validate: viValidate,
                supportScreen: viSupportScreen,
                toast: viToast,
            },
            en: {
                common: enCommon,
                auth: enAuth,
                nav: enNav,
                userMenu: enUserMenu,
                candidateToolbar: enCandidateToolbar,
                candidate: enCandidate,
                sourceChannel: enSourceChannel,
                eligibility: enEligibility,
                result: enResult,
                status: enStatus,
                timeline: enTimeline,
                modalEdit: enModalEdit,
                search: enSearch,
                routes: enRoutes,
                user: enUser,
                validate: enValidate,
                supportScreen: enSupportScreen,
                toast: enToast,
            },
        },
    lng: 'vi',
    fallbackLng: 'en',
    ns: [
        'common',
        'auth',
        'nav',
        'userMenu',
        'candidateToolbar',
        'candidate',
        'sourceChannel',
        'eligibility',
        'result',
        'status',
        'timeline',
        'modalEdit',
        'search',
        'routes',
        'user',
        'validate',
        'supportScreen',
        'toast'
    ],
    defaultNS: 'common',
    interpolation: {
        escapeValue: false,
    },
    });

export default i18n;