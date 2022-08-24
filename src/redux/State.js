
let store = {
  _state: {

    profilePage: {
      posts: [
        { id: 1, message: 'Hi , How Are you?', likes: 19 },
        { id: 2, message: 'Its my first post!', likes: 4 },
        { id: 3, message: 'Im from NNovgorod!', likes: 7 },
      ],
      newPostText: 'IGM'

    },

    dialogsPage: {
      dialogs: [
        { id: 1, name: 'MatveyG' },
        { id: 2, name: 'Vadim' },
        { id: 3, name: 'Artom' },
        { id: 4, name: 'Alyona' },
        { id: 5, name: 'Bro' },
      ],
      messages: [
        { id: 1, message: 'Hi, man!!' },
        { id: 2, message: 'Yo!' },
        { id: 3, message: 'Be, cool!' },
      ],
    }

  },

  getState() {
    return this._state;
  },


  _rerenderEntireTree() {
    console.log('state changed');
  },

  addPost() {
    let newPost = {
      id: 5,
      message: this._state.profilePage.newPostText,
      likes: 0,
    };
    this._state.profilePage.posts.push(newPost);
    this._state.profilePage.newPostText = '';
    this._rerenderEntireTree(this._state);
  },

  updateNewPostText(newText) {

    this._state.profilePage.newPostText = newText;
    this._rerenderEntireTree(this._state);
  },

  subscribe(observer) {
    this._rerenderEntireTree = observer;
  },

}







export default store;
