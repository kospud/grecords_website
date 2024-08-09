import Contacts from "../Components/Contacts/Contacts";
import ContactsCity from "../Components/Contacts/ContactsCity";
import MainPage from "../Components/MainPage/MainPage";
import Manifesto from "../Components/Manifesto/Manifesto";
import Page404 from "../Components/Page404";
import PrivacyPolicy from "../Components/PrivacyPolicy/PrivacyPolicy";
import Team from "../Components/Team/Team";
import { CITY_CONTACTS_ROUTE, CONTACTS_ROUTE, MANIFESTO_ROUTE,  NN_ROUTE, NULL_ROUTE, PRIVACY_POLICY_ROUTE, TEAM_ROUTE } from "./consts";

export const publicRoutes=[
    {
        component: Page404,
        path: NULL_ROUTE
    },
    {
        component: MainPage,
        path: NN_ROUTE
    },
    {
        component: Manifesto,
        path: MANIFESTO_ROUTE
    },
    {
        component: Team,
        path: TEAM_ROUTE
    },
    {
        component: PrivacyPolicy,
        path: PRIVACY_POLICY_ROUTE
    },
    {
        component: Contacts,
        path: CONTACTS_ROUTE
    },
    {
        component: ContactsCity,
        path: CITY_CONTACTS_ROUTE
    }
]