// https://www.tvmaze.com/api#show-episode-list

const axios = require('axios');

// find show by name
const findShow = (showName) => {
  axios.get(`http://api.tvmaze.com/search/shows?q=${encodeURIComponent(showName)}`)
    .then(res => res.data[0])
    .then(data => {
      console.log('show id: ', data.show.id);
      return data.show.id;
    })
    .catch(err => console.error(err));
}

findShow('wednesday');

// find seasons by show id
const showId = 53647 // wednesday id = 53647, bachelor id = 914

const findSeasons = (id) => {
  axios.get(`http://api.tvmaze.com/shows/${id}/seasons`)
    .then(res => console.log('season id: ',res.data[0].id))
    .catch(err => console.error(err));
}

findSeasons(showId);

// find episodes by season id
const seasonId = 120562 // bachelor season 1 id: 3961, wednesday season 1 id: 120562

const findEpisodes = (id) => {
  axios.get(`http://api.tvmaze.com/seasons/${id}/episodes`)
    .then(res => console.log('episode name: ',res.data[0].name))
    .catch(err => console.error(err));
}

findEpisodes(seasonId);


// example console log output for wednesday:
// show id:  53647
// season id:  120562
// episode name:  Chapter I: Wednesday's Child Is Full of Woe