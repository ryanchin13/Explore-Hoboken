const axios = require("axios");
const validate = require("../validation.js");

async function getActivitiesByName(name) {
  // name = await validate.checkString(name, "Name Parameter");
  // let url = "https://api.yelp.com/v3/businesses/search?term=" + name.toString +
  //   "parks&latitude=40.745255&longitude=-74.034775";
  //   const {data} = await axios.get(url);
  //   slicedArray = data;
  //   if(Object.keys(data).length > 5){
  //     slicedArray = data.slice(0, 5);
  //   }
  //   slicedArray = Object.assign({}, slicedArray);
  //   if(Object.keys(data).length < 1)
  //     throw "There are no shows with that ID";
  //   return slicedArray;
  var data = "";

  var config = {
    method: "get",
    url:
      "https://api.yelp.com/v3/businesses/search?term=" +
      name.toString() +
      "&latitude=40.745255&longitude=-74.034775",
    headers: {
      Authorization:
        "Bearer rKIPRvkdBZMpPrV0HaZwJUD_4bCgykUYaArNXTZw313YUTn3xWUR4Vccl9XYHW5kI4ww6mPkcenLuFSEwS4OHRuIjvardJxfFLtsYPlaPQX5OiXLWhrJVADMFhJOYnYx",
    },
    data: data,
  };

  // axios(config)
  //   .then(function (response) {
  //     //console.log(JSON.stringify(response.data.businesses));

  //     return (JSON.stringify(response.data.businesses));
  //   })
  //   .catch(function (error) {
  //     console.log(error);
  //   });
  let events = await axios(config);
  //console.log(JSON.stringify(events.data.businesses));
  return events.data.businesses;
}

async function getShowById(showId) {
  showId = await validate.checkString(showId, "showID");
  let url = "http://api.tvmaze.com/shows/" + showId.toString();
  const { data } = await axios.get(url);
  if (Object.keys(data).length < 1) throw "There are no shows with that ID";
  return data;
}

async function getShowByName(showName) {
  showName = await validate.checkString(showName, "Show Name");
  let url = "http://api.tvmaze.com/search/shows?q=" + showName.toString();
  const { data } = await axios.get(url);
  slicedArray = data;
  if (Object.keys(data).length > 5) {
    slicedArray = data.slice(0, 5);
  }
  slicedArray = Object.assign({}, slicedArray);
  return slicedArray;
}

module.exports = {
  getActivitiesByName,
  getShowById,
  getShowByName,
};
