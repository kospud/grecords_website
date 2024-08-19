import React from "react";
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
        component: React.lazy(()=>import("../Components/MainPage/MainPage")),
        path: NN_ROUTE
    },
    {
        component: React.lazy(()=>import("../Components/Manifesto/Manifesto")),
        path: MANIFESTO_ROUTE
    },
    {
        component: React.lazy(()=>import("../Components/Team/Team")),
        path: TEAM_ROUTE
    },
    {
        component: React.lazy(()=>import("../Components/PrivacyPolicy/PrivacyPolicy")),
        path: PRIVACY_POLICY_ROUTE
    },
    {
        component: React.lazy(()=>import("../Components/Contacts/Contacts")),
        path: CONTACTS_ROUTE
    },
    {
        component: React.lazy(()=>import("../Components/Contacts/ContactsCity")),
        path: CITY_CONTACTS_ROUTE
    }
]