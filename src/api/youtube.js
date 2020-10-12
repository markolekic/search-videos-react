import axios from 'axios';

//set API key
const KEY = 'AIzaSyDRhCFRZzXYWSkg61aN-B18-tW-ufAoDgs';

//setup axios
export default axios.create({
    //HTTP request link
    baseURL: `https://www.googleapis.com/youtube/v3/search?maxResults=8&key=${KEY}&type=video&part=snippet&`,
});