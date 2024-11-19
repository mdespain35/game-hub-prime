import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '2ff4061d59874081acab6560533504a6',
    }
})