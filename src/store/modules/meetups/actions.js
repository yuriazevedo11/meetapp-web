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

export function createMeetupRequest(meetup) {
  return {
    type: '@meetups/CREATE_MEETUP_REQUEST',
    payload: { meetup },
  };
}

export function createMeetupSuccess(meetup) {
  return {
    type: '@meetups/CREATE_MEETUP_SUCCESS',
    payload: { meetup },
  };
}

export function editMeetupRequest(meetup) {
  return {
    type: '@meetups/EDIT_MEETUP_REQUEST',
    payload: { meetup },
  };
}

export function editMeetupSuccess(meetup) {
  return {
    type: '@meetups/EDIT_MEETUP_SUCCESS',
    payload: { meetup },
  };
}

export function meetupsFailure() {
  return {
    type: '@meetups/MEETUPS_FAILURE',
  };
}
