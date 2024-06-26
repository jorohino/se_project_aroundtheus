// The UserInfo class is responsible for rendering information about the user on the page.

export default class UserInfo {
  // Take an object with the selectors of two elements into the constructor: one for the profile’s name
  // element and one for its job element.
  constructor({ profileNameSelector, profileJobSelector, avatarSelector }) {
    this._profileNameEl = document.querySelector(profileNameSelector);
    this._profileDescriptionEl = document.querySelector(profileJobSelector);
    this._avatarEl = document.querySelector(avatarSelector);
  }

  // Have a public method named getUserInfo(), which returns an object containing information about the user.
  // This method will be handy for cases when it's necessary to display the user data in the open form.

  getUserInfo() {
    console.log(
      "Getting user info:",
      this._profileNameEl.textContent,
      this._profileDescriptionEl.textContent,
      this._avatarEl ? this._avatarEl.src : "Avatar element not found."
    );
    return {
      name: this._profileNameEl.textContent,
      description: this._profileDescriptionEl.textContent,
      avatar: this._avatarEl,
    };
  }

  // Have a public method named setUserInfo(), which takes new user data and adds it to the page.
  // This method should be used after successful submission of the profile form.

  setUserInfo({ name, description }) {
    console.log("Setting user info", name, description);
    this._profileNameEl.textContent = name;
    this._profileDescriptionEl.textContent = description;
  }

  setAvatarUrl(avatar) {
    console.log("Setting avatar url", avatar);
    if (avatar) {
      this._avatarEl.src = avatar;
    } else {
      console.error("Avatar element not found.");
    }
  }
  // Create an instance of the UserInfo class in index.js and use its methods as described.
}
