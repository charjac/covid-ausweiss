import { Geolocation } from '@ionic-native/geolocation';
import { geocode } from 'opencage-api-client';
import { switchMap, map } from 'rxjs/operators';
import { Observable } from 'rxjs';

interface LocalizationResponse {
  city: string;
  address: string;
}

class Localization {
  // private timestamp = Date.now();

  public getAdress(): Observable<LocalizationResponse> {
    if (!process.env.REACT_APP_OCD_API_KEY) {
      throw new Error('missing OCD_API_KEY env variable');
    }
    return Geolocation.watchPosition({}).pipe(
      // filter(() => this.timestamp < Date.now() - 60 * 3000),
      // tap(() => (this.timestamp = Date.now())),
      switchMap(({ coords }: any) => {
        return geocode({
          q: `${coords.latitude},${coords.longitude}`,
          key: process.env.REACT_APP_OCD_API_KEY,
        });
      }),
      map(({ results }) => {
        const { city, house_number, road, postcode } = results[0].components;

        return {
          city,
          address: `${house_number} ${road} ${postcode} ${city}`,
        };
      }),
    );
  }
}

export default Localization;
