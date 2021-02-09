import axios from "axios";

const KEY = "AIzaSyCSp-jY0YiJ4TmSxwCjwqTYGUuFzc8CkNo";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY,
  },
});
