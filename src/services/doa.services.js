import axios from "axios";


export const getDoa =  (callback) => {
    axios.get('https://islamic-api-zhirrr.vercel.app/api/doaharian')
    .then(res => {
        callback(res.data)
    })
};


// export const getSingleQuran = (id,callback) => {
//     axios.get(`https://quran-api-id.vercel.app/surahs/${id}`)
//     .then(res => {
//         callback(res.data)
//     })
// }