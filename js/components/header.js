/*const header = (profileService => {

    const template = `<header>
        <h1 class="title">Example</h1>
        <div id="user" class="user"></div>
    </header>`;

    const init = () => {
        const user = document.getElementById('user');
        return _fetchProfile(user);   
    }

    const _fetchProfile = user => {
        return profileService.fetchProfile().then(profile => {
            user.innerHTML = `
                <div class="data">
                    <div class="name">${profile.name}</div>
                    <div class="email">${profile.email}</div>
                </div>
                <div class="avatar">${_getAvatar(profile.name)}</div>
            `;
        });
    }

    const _getAvatar = name => {
        return name
            .split(' ')
            .map(x => { return x.substring(0, 1) })
            .join('');
    }

    return {
        init: init,
        template: template
    };

})(ProfileService);
*/

class headerClass {
    constructor(ProfileService) {
        this.ProfileService = ProfileService
    }

    template = `<header>
        <h1 class="title">Example</h1>
        <div id="user" class="user"></div>
    </header>`
    
    init() {
        const user = document.getElementById('user');
        return this._fetchProfile(user);   
    }

    _fetchProfile(user) {
        return this.ProfileService.fetchProfile().then(profile => {
            user.innerHTML = `
                <div class="data">
                    <div class="name">${profile.name}</div>
                    <div class="email">${profile.email}</div>
                </div>
                <div class="avatar">${this._getAvatar(profile.name)}</div>
            `;
        });
    }

    _getAvatar(name) {
        console.log('name', name);
        return name
            .split(' ')
            .map(x => { return x.substring(0, 1) })
            .join('');
    }
}

const header = new headerClass(ProfileService);