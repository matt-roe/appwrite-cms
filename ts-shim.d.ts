import { NuxtAxiosInstance } from "@nuxtjs/axios";
import { Models } from "appwrite";

declare module '@nuxt/types' {
    interface Context {
        $axios: NuxtAxiosInstance
    }
}

declare type AppwriteDocument = any & Models.Document;