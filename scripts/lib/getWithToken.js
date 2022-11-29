const getWithToken = async (endPoint) => {
    const token = localStorage.getItem("token");
    const postConfig = {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    };
    return axios.get(`${config.base}/${endPoint}`, postConfig);
};
