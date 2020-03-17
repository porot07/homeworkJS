import React from 'react';
import { useSelector } from 'react-redux';
import {
  List,
  ListItem,
  ListItemText,
} from '@material-ui/core';
import moment from 'moment';

// const convertTimeStamp = (timestamp) => {
//   const date = new Date(timestamp);
//   return `${date.getDate()}-${date.getMonth()}-${date.getFullYear()}`;
// };

const Weather = () => {
  const weatherList = useSelector((state) => state.weatherData.list);
  const cityName = useSelector((state) => state.weatherData.city.name);

  return (
    <div className="margin-top">
        <List component="ul">
          <h1 style={{ textAlign: 'center' }}>{cityName}</h1>
          {weatherList.map((item) => (
              <ListItem key={item.dt}>
                <ListItemText primary={`${Math.round(item.main.temp)}°C`} />
                <ListItemText>
                  <img
                    src={`http://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`}
                  />
                </ListItemText>
                <ListItemText>
                  {moment.unix(item.dt).format('LLL')}
                </ListItemText>
              </ListItem>
            // <Card className="margin-top" key={item.dt}>
            //   <CardMedia>
            //     <img src={`http://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`} />
            //   </CardMedia>
            //   <CardContent>
            //     <Typography gutterBottom variant="h5" component="h2">
            //       {`${Math.round(item.main.temp)}°C`}
            //     </Typography>
            //     <Typography variant="body2" color="textSecondary" component="p">
            //       {console.log(item.dt)}
            //       {moment.unix(item.dt).format('LLL')}
            //     </Typography>
            //   </CardContent>
            // </Card>
          ))}
        </List>
    </div>
  );
};

export default Weather;
