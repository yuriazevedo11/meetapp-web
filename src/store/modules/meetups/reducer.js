import produce from 'immer';

const INITIAL_STATE = {
  data: [],
  loading: true,
};

export default function meetups(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@meetups/LOAD_MEETUPS_SUCCESS': {
        draft.data = action.payload.meetups;
        draft.loading = false;
        break;
      }
      case '@meetups/LOAD_MEETUPS_FAILURE': {
        draft.loading = false;
        break;
      }
      default:
    }
  });
}
