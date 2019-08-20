export function loadMeetupsRequest() {
  return {
    type: '@meetups/LOAD_MEETUPS_REQUEST',
  };
}

export function loadMeetupsSuccess(meetups) {
  return {
    type: '@meetups/LOAD_MEETUPS_SUCCESS',
    payload: { meetups },
  };
}

export function loadMeetupsFailure() {
  return {
    type: '@meetups/LOAD_MEETUPS_FAILURE',
  };
}
