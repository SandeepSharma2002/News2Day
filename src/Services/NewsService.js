
const BASE_URL = "https://saurav.tech/NewsAPI"
class NewsService {
    async getNewsByCategory(category) {
        const res = await fetch(`${BASE_URL}/top-headlines/category/${category}/in.json`);
        return await res.json();
    }
  
    async getNewsBySource(source) {
      const res = await fetch(`${BASE_URL}/everything/${source}.json`);
        return await res.json();
    }

  }
  
  export default new NewsService();