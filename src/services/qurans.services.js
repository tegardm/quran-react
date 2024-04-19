import axios from "axios"


export const getQurans = (callback) => {
    axios.get('https://quran-api-id.vercel.app/surahs')
    .then(res => {
        callback(res.data)
    })
}

export const getSingleQuran = (id,callback) => {
    axios.get(`https://quran-api-id.vercel.app/surahs/${id}`)
    .then(res => {
        callback(res.data)
    })
}