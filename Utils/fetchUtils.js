import axios from 'axios'

const NCnewsAPI = axios.create({
  baseURL: "https://nc-news-tm65.onrender.com",
});

export const fetchArticles = () => {
  return NCnewsAPI.get(`/api/articles`)
      .then((res) => {
      return res.data;
    })
    .catch((err) => {
      console.log(err);
    });
};

export const fetchArticleById = (id) => {
  return NCnewsAPI.get(`/api/articles/${id}`)
      .then((res) => {
      return res.data;
    })
    .catch((err) => {
      console.log(err);
    });
};

export const fetchCommentsById = (id) => {
  return NCnewsAPI.get(`/api/articles/${id}/comments`)
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      console.log(err);
    });
};

