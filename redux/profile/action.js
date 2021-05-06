const action = {

    IMAGE_GALLERY_ADD_IMAGES : 'IMAGE_GALLERY_ADD_IMAGES',
  
    setUserConnection: images => ({
      type    : action.IMAGE_GALLERY_ADD_IMAGES,
      payload : images
    })
  
  };
  
  export default action;
  