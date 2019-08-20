import produce from 'immer';

const INITIAL_STATE = {
  data: [],
  loading: true,
  btnLoading: false,
};

export default function meetups(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@meetups/LOAD_MEETUPS_SUCCESS': {
        draft.data = action.payload.meetups;
        draft.loading = false;
        break;
      }
      case '@meetups/CREATE_MEETUP_REQUEST' || '@meetups/EDIT_MEETUP_REQUEST': {
        draft.btnLoading = true;
        break;
      }
      case '@meetups/MEETUPS_FAILURE': {
        draft.loading = false;
        break;
      }
      default:
    }
  });
}
