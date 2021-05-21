import * as axios from 'axios'

let baseURL = "http://localhost:5000/api/"

const initinal = axios.create({
    baseURL: baseURL
})

export const init = {
    getTags: () => {
        return initinal.get("tag").then((res) => {
            return res.data;
        })
    },
    updateLikeTag: (id) => {
        return initinal.post("liketag", {id}).then((res) => {
            return res.data;
        })
    },
    updateUnLikeTag: (id) => {
        return initinal.post("unliketag", {id}).then((res) => {
            return res.data;
        })
    },
    getAboutUs: () => {
        return initinal.get("about").then((res) => {
            res.data.map((item) => item.image = baseURL + item.image);
            return res.data;
        })
    }
}

export const user = {
    check: (reducer) => {
        return initinal.post("user", reducer)
    }
}

export const message = {
    addMessage: (obj) => {
        return initinal.post("message", obj)
    },
    initRequest: () => {
        return initinal.get("request").then((res) => {
            return res.data;
        })
    },
    updateStatusRequest: (id) => {
        return initinal.post("updatestatusrequest", {id}).then((res) => {
            return res.data
        })
    },
    deleteRequest: (id) => {
        console.log(id)
        return initinal.post("deleterequest", {id}).then((res) => {
            return res.data
        });
    }
}