import { useLocation, matchPath } from "react-router-dom";
import { ROUTES } from "../routes/routerConfig";
import { useTranslation } from "react-i18next";

export default function useRouteTitle(){
    const {t} = useTranslation();
    const location = useLocation();
    const route = ROUTES.find(route=>
        matchPath(
            {path: route.path},
            location.pathname
        )
    );
    return route ? t(route.titleKey) : '';
}
