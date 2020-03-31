/*const ProfileService = (http => {

    fetchProfile = () => {
        return http.get('https://jsonplaceholder.typicode.com/users/1').then(profile => {
            return _createProfileFromResponse(profile);
        });
    }

    _createProfileFromResponse = response => {
        return {
            id,
            name,
            email
        } = response;
    }

    return {
        fetchProfile
    };

})(http);*/




class ProfileServiceClass {
    constructor(http) {
        this.http = http;
    }

    _createProfileFromResponse = response => {
        //log--------------
        console.log(response);

        const {
            id,
            name,
            email
        } = response;

        //log--------------
        console.log('id', id, 'name', name, 'email', email);
        return {
            id,
            name,
            email
        };
    }

   /* fetchProfile() {
        return this.http.get('https://jsonplaceholder.typicode.com/users/1').then(profile => {
            return this._createProfileFromResponse(profile);
        });
    }*/

    async fetchProfile() { 
        const profile = await this.http.get('https://jsonplaceholder.typicode.com/users/1');
        //log--------------
        console.log(profile);

        return this._createProfileFromResponse(profile);
    }
}

const ProfileService = new ProfileServiceClass(http);





