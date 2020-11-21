import { Geolocation } from '@ionic-native/geolocation';
import { geocode } from 'opencage-api-client';
import { switchMap, map, tap, filter } from 'rxjs/operators';
import { Observable } from 'rxjs';

class Localization {
  private timestamp = Date.now();

  public getAdress(): Observable<string> {
    if (!process.env.REACT_APP_OCD_API_KEY) {
      throw new Error('missing OCD_API_KEY env variable');
    }
    return Geolocation.watchPosition({}).pipe(
      filter(() => this.timestamp < Date.now() - 60 * 3000),
      tap(() => (this.timestamp = Date.now())),
      switchMap(({ coords }: any) => {
        return geocode({
          q: `${coords.latitude},${coords.longitude}`,
          key: process.env.REACT_APP_OCD_API_KEY,
        });
      }),
      map(({ results }) => {
        return results[0].formatted;
      }),
    );
  }
}

export default Localization;
