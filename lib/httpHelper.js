const axios = require('axios')

const callApi = async (url) => {

    try {

        let res = await axios.get(url)

        return (res && res.status === 200) ?
            { err: null, data: res.data.results }
            :
            { err: `API Response Status Code: ${res.status}`, data: null };

    } catch (error) {
        return { err: `${error}`, data: null }
    }
}

module.exports = callApi