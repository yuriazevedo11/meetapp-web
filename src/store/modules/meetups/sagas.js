import { takeLatest, call, put, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import { format, parseISO } from 'date-fns';
import pt_BR from 'date-fns/locale/pt-BR';

import api from '~/services/api';

import { loadMeetupsSuccess, loadMeetupsFailure } from './actions';

export function* loadMeetups() {
  try {
    const response = yield call(api.get, 'organizing');

    const formattedResponse = response.data.map(meetup => {
      const { File: banner, ...rest } = meetup;

      rest.date = parseISO(rest.date);

      const formattedDate = format(rest.date, "d 'de' MMMM', às' HH'h'", {
        locale: pt_BR,
      });

      const formattedMeetup = {
        ...rest,
        formattedDate,
        banner,
      };

      return formattedMeetup;
    });

    yield put(loadMeetupsSuccess(formattedResponse));
  } catch (err) {
    toast.error('Erro ao buscar meetups');

    yield put(loadMeetupsFailure());
  }
}

export default all([takeLatest('@meetups/LOAD_MEETUPS_REQUEST', loadMeetups)]);
