const getWithOutToken = async (endpoint) => {
    return axios.post(`${config.base}/${endpoint}`);
};
