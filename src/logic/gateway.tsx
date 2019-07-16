import fetch from 'isomorphic-fetch';

class Gateway {
  static brukernavn = 'svv_oppgaveutvikler';

  static params: RequestInit = {
    headers: {
      'Authorization': `Bearer ${Gateway.brukernavn}`,
      'Content-Type': 'application/json'
    }, credentials: 'include'
  }

  klasseUri() {
    return 'http://localhost:1337/backend/api/klasse';
  }

  async loadKlasser() {

    let response = await fetch(this.klasseUri(), Gateway.params);

    let data = await response.json();

    return data;
  }
}

export default Gateway;