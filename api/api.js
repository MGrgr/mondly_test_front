import * as axios from "axios";

const instance = axios.create({
    baseURL: "http://localhost:3001/",
    headers: { "Content-Type": "application/json" },
});

export const API = {
    getContent(lang) {
        return instance.get(`/admin/content?lang=${lang}`)
            .then(response => {
                return response.data[0];
            })
    },
    updateContent(formState, lang) {
        return instance.put(`/admin`, {formState, lang: lang})
            .then(response => {
                return response.data;
            })
    }
}