import axios from "axios";


const NCnewsAPI = axios.create({
  baseURL: "https://nc-news-tm65.onrender.com",
});

export const PostCommentByArticle = (comment, id) => {
  return NCnewsAPI.post(`/api/articles/${id}/comments`, comment)
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      console.log(err);
    });
};