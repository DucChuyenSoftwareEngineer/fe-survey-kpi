import { create } from "axios";
import queryString from "querystring";
import * as storeService from "./StoreService";
import { LOGIN_USER_TOKEN } from "../Constant";

class AxiosService {
    constructor() {


        const handleRequestSuccess = async (config) => {
            // const { url } = config;
            //
            // if (url !== "/login") {
            //     const token = await this.getLoginToken();
            //
            //     if (token) {
            //         config.headers.Authorization = `Bearer ${token}`;
            //     }
            // }
            //
            debugger
             return config;
        };
        const handleRequestFail = error => Promise.reject(error);
        const handleResponseSuccess = response => {

            const { data } = response;

            return data.data !== undefined ? data.data : data;
        };
        const handleResponseFail = async (error) => {
            debugger
            // const { config, status } = error.response;
            //
            // if (status === 401) {
            //     const response = await this.refreshToken();
            //     if (response) {
            //         return this.instance(config);
            //     }
            //
            //     return null;
            // }

            // return Promise.reject(error);
        };

        this.tokenPromise = null;
        this.refreshTokenPromise = null;
        this.instance = create({
            paramsSerializer: params => queryString.stringify(params)
        });
        this.instance.interceptors.request.use(handleRequestSuccess, handleRequestFail);
        this.instance.interceptors.response.use(handleResponseSuccess, handleResponseFail);
    }

    get = (url, params) => this.instance.get(url, { params });

    post = (url, data) => this.instance.post(url, data);

    postFormData = (url, data) => this.instance.post(url, data, {
        headers: {
            "content-type": "multipart/form-data"
        }
    });

    put = (url, data) => this.instance.put(url, data);

    putFormData = (url, data) => this.instance.put(url, data, {
        headers: {
            "content-type": "multipart/form-data"
        }
    });

    patch = (url, data) => this.instance.patch(url, data);

    delete = url => this.instance.delete(url);

    getLoginToken = async () => {
        let token;

        token = storeService.getLoginToken();

        if (!token) {
            if (!this.tokenPromise) {
                this.tokenPromise = new Promise((resolve, reject) => {
                    const keycloakToken = storeService.getKeycloakToken();
                    const postData = { keycloakToken };

                    this.post("/login", postData)
                        .then(res => {
                            resolve(res);
                        })
                        .catch(err => {
                            this.tokenPromise = null;

                            reject(err);
                        });
                });
            }

            token = await this.tokenPromise;

            if (token) {
                storeService.save(LOGIN_USER_TOKEN, token);
            }
        }

        return token;
    };

    refreshToken = async () => {
        if (!this.refreshTokenPromise) {
            this.refreshTokenPromise = new Promise((resolve, reject) => {
                return this.get("/refreshtoken")
                    .then(res => {
                        resolve(res);
                    })
                    .catch(err => {
                        this.refreshTokenPromise = null;

                        reject(err);
                    });
            });
        }

        const token = await this.refreshTokenPromise;

        if (token) {
            storeService.save(LOGIN_USER_TOKEN, token);
        }

        return token;
    };
}

export default new AxiosService();
