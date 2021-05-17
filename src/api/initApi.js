import * as axios from 'axios'

const initinal = axios.create({
    baseURL: "http://localhost:5000/api/"
})

export const init = {
    getTags: () => {
        return initinal.get("tag").then((res) => {
            return res.data.tag;
        })
    }
}

export const user = {
    check: (reducer) => {
        return initinal.post("user", reducer)
    }
}