/*const footer = (() => {

    const template = `<footer id="footer"></footer>`;

    const dateConfig = {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    };

    const init = () => {
        const footer = document.getElementById('footer');
        footer.innerHTML = `<div>${new Date().toLocaleString('hu-HU', dateConfig)}</div>
            <div>Szalontai Jordán</div>`;
        return Promise.resolve();
    }

    return {
        init: init,
        template: template
    };

})();
*/

class footerClass {
    constructor() {
        ///////////////////////////////////???????????????
    }

    template = `<footer id="footer"></footer>`

    dateConfig = {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    }

    init() {
        const footer = document.getElementById('footer');
        footer.innerHTML = `<div>${new Date().toLocaleString('hu-HU', this.dateConfig)}</div>
            <div>Szalontai Jordán</div>`;
        return Promise.resolve();
    }
}

const footer = new footerClass;
