/* Project 9 Overview:

1. Acquire personal token
2. Create new branch
    - "git checkout -b project-9"
3. Pass the token through "Around the US" project server (on project page)
4. Create Api class
    - All requests should be methods in this class
    - User routes:
	GET /users/me (get current user's info)
	PATCH /users/me (update profile info)
	PATCH /users/me/avatar (update avatar)
    - Card routes:
	GET /cards (get all cards)
	POST /cards (create a card)
	DELETE /cards/:cardId (delete a card)
	PUT /cards/:cardId/likes (like a card)
	DELETE /cards/:cardId/likes (dislike a card)
5. See project page for details
*/

export default class Api {
  constructor(options) {
    this.baseUrl = options.baseUrl;
    this.headers = options.headers;
  }

  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Error: ${res.status}`);
  }

  _request(url, options) {
    return fetch(url, options).then(this._checkResponse);
  }

  getInitialCards() {
    return this._request(`${this.baseUrl}/cards`, {
      headers: this.headers,
    });
  }

  getUserInfo() {
    return this._request(`${this.baseUrl}/users/me`, {
      headers: this.headers,
    });
  }

  updateUserInfo(data) {
    return this._request(`${this.baseUrl}/users/me`, {
      method: "PATCH",
      headers: this.headers,
      body: JSON.stringify({
        name: data.name,
        about: data.description,
      }),
    });
  }

  updateUserAvatar(data) {
    return this._request(`${this.baseUrl}/users/me/avatar`, {
      method: "PATCH",
      headers: this.headers,
      body: JSON.stringify({
        avatar: data.avatar,
      }),
    });
  }

  createCard(data) {
    return this._request(`${this.baseUrl}/cards`, {
      method: "POST",
      headers: this.headers,
      body: JSON.stringify({
        name: data.title,
        link: data.url,
      }),
    });
  }

  deleteCard(cardId) {
    return this._request(`${this.baseUrl}/cards/${cardId}`, {
      method: "DELETE",
      headers: this.headers,
    });
  }

  likeCard(cardId) {
    return this._request(`${this.baseUrl}/cards/${cardId}/likes`, {
      method: "PUT",
      headers: this.headers,
    });
  }

  unlikeCard(cardId) {
    return this._request(`${this.baseUrl}/cards/${cardId}/likes`, {
      method: "DELETE",
      headers: this.headers,
    });
  }
}
