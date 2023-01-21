import { IRoute } from './app/interfaces'
import { usersRoute, authRoute, rolesRoute } from "./app/route";

export const routes: IRoute[] = [
    {
        url: "/api/v1/users", route: usersRoute
    },
    {
        url: "/api/v1/auth", route: authRoute
    },
    {
        url: "/api/v1/roles", route: rolesRoute
    }
];