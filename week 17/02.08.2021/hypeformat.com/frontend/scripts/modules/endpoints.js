const endpoints = (whichToShow) => {
  switch (whichToShow) {
    case `all`:
      return `http://localhost:5000/api`;
      break;
    case `canvases`:
      return `http://localhost:5000/api/canvases`;
      break;
    case `posters`:
      return `http://localhost:5000/api/posters`;
      break;
    case `posters_per4mmedia`:
      return `http://localhost:5000/api/posters/per4mmedia`;
      break;
    case `posters_hypeformat`:
      return `http://localhost:5000/api/posters/hypeformat`;
      break;
    case `stickers`:
      return `http://localhost:5000/api/stickers`;
      break;
    case `stickers_per4mmedia`:
      return `http://localhost:5000/api/stickers/per4mmedia`;
      break;
    case `stickers_hypeformat`:
      return `http://localhost:5000/api/stickers/hypeformat`;
      break;
    case `apparels`:
      return `http://localhost:5000/api/apparels`;
      break;
    case `cups`:
      return `http://localhost:5000/api/cups`;
      break;
    case `calendars`:
      return `http://localhost:5000/api/calendars`;
      break;
  }
};

export default endpoints;
