const GOOGLE_API_KEY = "AIzaSyBIJ1EOB-T8qQ0SqBnBUeE6jzAHYwfTyw0";

export const YOUTUBE_VIDEOS_API =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet,statistics&chart=mostPopular&maxResults=50&key=" +
  GOOGLE_API_KEY;

export const YOUTUBE_SEARCH_API =
  "https://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";
