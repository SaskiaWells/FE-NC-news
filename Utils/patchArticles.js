import axios from 'axios'

const NCnewsAPI = axios.create({
  baseURL: "https://nc-news-tm65.onrender.com",
});

export const patchArticle = (id) => {
return NCnewsAPI.patch(`/api/articles/${id}`)
      .then((res) => {
      return res.data;
    })
    .catch((err) => {
      console.log(err);
    });

}