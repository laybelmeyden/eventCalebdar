import React from "react";
import Event from "../pages/Event";
import Login from "../pages/Login";


export interface IRouter {
    path: string;
    element: React.ComponentType;
}

export enum RouteNames {
    LOGIN = '/login',
    EVENT = '/'
}

export const publicRoutes: IRouter[] = [
    { path: RouteNames.LOGIN, element: Login }
]
export const privateRoutes: IRouter[] = [
    { path: RouteNames.EVENT, element: Event }
]