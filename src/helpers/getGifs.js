export  const getGifs = async (category) =>{
    const url =`http://api.giphy.com/v1/gifs/search?api_key=rmX5Jq2Apgz7PxDP1Bl9b9GckWzlzyMa&q=${category}&limit=10`;

    const resp=await fetch(url);
    const {data} = await resp.json();
    const gifs = data.map(item=>{
        return {
            id:item.id,
            title:item.title,
            url:item.images.downsized_large.url
        }

 
    })

       return gifs;



}