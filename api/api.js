import * as axios from "axios";

const instance = axios.create({
    baseURL: "http://localhost:3001/",
    headers: { "Content-Type": "application/json" },
});

export const API = {
    getContent() {
        return instance.get(`/admin/content`)
            .then(response => {
                return response.data[0];
            })
    },
    updateContent(formState) {
        return instance.put(`/admin`, formState)
            .then(response => {
                return response.data;
            })
    }
}