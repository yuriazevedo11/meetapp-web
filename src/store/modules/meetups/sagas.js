import { takeLatest, call, put, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import { format, parseISO } from 'date-fns';
import pt_BR from 'date-fns/locale/pt-BR';

import api from '~/services/api';
import history from '~/routes/history';

import {
  loadMeetupsSuccess,
  createMeetupSuccess,
  meetupsFailure,
} from './actions';

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

    yield put(meetupsFailure());
  }
}

export function* createMeetup({ payload }) {
  try {
    const response = yield call(api.post, 'meetups', { ...payload.meetup });

    yield put(createMeetupSuccess(response.data));

    toast.success('Meetup criado com sucesso!');

    history.push('dashboard');
  } catch (err) {
    toast.error('Erro ao criar meetup');

    yield put(meetupsFailure());
  }
}

export function* editMeetup({ payload }) {
  try {
    const { id } = payload.meetup;

    const response = yield call(api.put, `meetups/${id}`, {
      ...payload.meetup,
      id,
    });

    yield put(createMeetupSuccess(response.data));

    toast.success('Meetup alterado com sucesso!');

    history.push('/dashboard');
  } catch (err) {
    toast.error('Erro ao alterado meetup');

    yield put(meetupsFailure());
  }
}

export default all([
  takeLatest('@meetups/LOAD_MEETUPS_REQUEST', loadMeetups),
  takeLatest('@meetups/CREATE_MEETUP_REQUEST', createMeetup),
  takeLatest('@meetups/EDIT_MEETUP_REQUEST', editMeetup),
]);
