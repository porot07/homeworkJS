const host = 'https://api.openweathermap.org';

export default {
  weather: () => [host, 'data/2.5/forecast'].join('/'),
};
