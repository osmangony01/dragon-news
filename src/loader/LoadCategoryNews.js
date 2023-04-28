
const categoryDataLoader = async ({params})=>{
    const id = params.id;
    const loadCategoryNews = await fetch(`http://localhost:5000/category/${id}`);
    const categoryNews = await loadCategoryNews.json();
    return categoryNews;
}

export default categoryDataLoader;