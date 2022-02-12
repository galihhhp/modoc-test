import axios from 'axios'

const services = {
  getNews: async (params: number) => {
    const res = await axios.get("https://apis.modoc.co.id/news/release", {
      params: {
        offset: params,
        limit: params
      }
    });
    return res.data;
  },
}

export default services;

