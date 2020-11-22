import { compose } from 'lodash/fp';
import { subMinutes, format } from 'date-fns/fp';

const DATE_FORMAT = 'dd/MM/yyyy';
const TIME_FORMAT = 'HH:mm';

export const formatDate = format(DATE_FORMAT);

export const get10minAgo = compose(format(TIME_FORMAT), subMinutes(10));
