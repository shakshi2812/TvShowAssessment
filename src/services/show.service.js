import axios from "axios";

function getShowsByName(showName){
    return axios.get(`http://api.tvmaze.com/search/shows?q=${showName}`);
}

function getAllShows () {
    return axios.get("http://api.tvmaze.com/shows");
}

function getShowInfo(showId){
    return axios.get(`http://api.tvmaze.com/shows/${showId}`);
}

export{getAllShows,getShowInfo,getShowsByName}