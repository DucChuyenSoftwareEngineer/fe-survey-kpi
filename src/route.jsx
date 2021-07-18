import React, { lazy } from "react";
import * as pageTitle from "./Constant/PageTitle";
import * as svgIcon from "./Component/Common/SvgIcon";

const HomePage = lazy(() => import("./Page/HomePage"));
const HandleRateListPage = lazy(() => import("./Page/HandleRate/HandleRateListPage"));
const HandleRate = lazy(() => import("./Page/HandleRate/HandleRate"));
const CreateRate = lazy(() => import("./Page/CreateRate/CreateRate"));
const TotalRate = lazy(() => import("./Page/TotalRate/TotalRate"));
const FormRateListPage = lazy(() => import("./Page/FormRate/FormRateListPage"));
const FormRateSavePage = lazy(() => import("./Page/FormRate/FormRateSavePage"));
const FormMailListPage = lazy(() => import("./Page/FormMail/FormMailListPage"));
const FormMailSavePage = lazy(() => import("./Page/FormMail/FormMailSavePage"));
const Category = lazy(() => import("./Page/Category/Category"));

export const route = [
    {
        name: pageTitle.HOME,
        path: "/",
        svg : svgIcon.IconHome,
        pageTitle: pageTitle.HOME,
        main: props => <HomePage {...props} />
    },
    {
        name: pageTitle.TOTAL_RATE,
        path: "/report",
        svg : svgIcon.IconReport,
        pageTitle: pageTitle.TOTAL_RATE,
        main: props => <TotalRate {...props} />
    }
]

export const routeRate = [
    {
        name: pageTitle.RATE,
        path: "/rate",
        svg : svgIcon.IconListRate,
        pageTitle: pageTitle.RATE,
        main: props => <HandleRateListPage {...props} />
    },
    {
        name: pageTitle.CREATE_RATE,
        path: "/rate/new",
        svg : svgIcon.IconRate,
        pageTitle: pageTitle.CREATE_RATE,
        main: props => <CreateRate {...props} />
    },
    {
        path: "/rate/:id",
        pageTitle: pageTitle.UPDATE_RATE,
        main: props => <HandleRate {...props} />
    }   
]

export const routeAdmin = [
    {
        name: pageTitle.FORM_RATE_MANAGEMENT,
        path: "/form_rate",
        svg : svgIcon.IconForm,
        pageTitle: pageTitle.FORM_RATE_MANAGEMENT,
        main: props => <FormRateListPage {...props} />
    },
    {
        path: "/form_rate/new",
        pageTitle: pageTitle.FORM_RATE_CREATE,
        main: props => <FormRateSavePage {...props} />
    },
    {
        path: "/form_rate/:id",
        pageTitle: pageTitle.FORM_RATE_UPDATE,
        main: props => <FormRateSavePage {...props} />
    },
    {
        name: pageTitle.FORM_MAIL_MANAGEMENT,
        path: "/surveyMail",
        svg : svgIcon.IconMail,
        pageTitle: pageTitle.FORM_MAIL_MANAGEMENT,
        main: props => <FormMailListPage {...props} />
    },
    {
        path: "/mail/new",
        pageTitle: pageTitle.FORM_MAIL_CREATE,
        main: props => <FormMailSavePage {...props} />
    },
    {
        path: "/surveyMail/:id",
        pageTitle: pageTitle.FORM_MAIL_UPDATE,
        main: props => <FormMailSavePage {...props} />
    },
    {
        name: pageTitle.CATEGORY_MANAGEMENT,
        path: "/setting",
        svg : svgIcon.IconSetting,
        pageTitle: pageTitle.CATEGORY_MANAGEMENT,
        main: props => <Category {...props} />
    }
]