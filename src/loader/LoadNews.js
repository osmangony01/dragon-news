
const loadNews = async ({params}) => {
    const id = params.id;
    const newsData = await fetch(`http://localhost:5000/news/${id}`);
    const news = await newsData.json();
    return news;
}

export default loadNews;