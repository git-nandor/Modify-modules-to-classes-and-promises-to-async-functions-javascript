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

    _createProfileFromResponse(response) {

        const {
            id,
            name,
            email
        } = response;
    
        return {
            id,
            name,
            email
        };
    }

    async fetchProfile() { 
        const profile = await this.http.get('https://jsonplaceholder.typicode.com/users/1');
        return this._createProfileFromResponse(profile);
    }
}

const ProfileService = new ProfileServiceClass(http);





