import action from './action';

const initState = {
    imageGallery: [],
};   

export default function profileReducer(state = initState, act) {

  switch (act.type) {
      case action.IMAGE_GALLERY_ADD_IMAGES:
          return {
              ...state,
              imageGallery : act.payload
          }

    default:
      return state
  }
}
