const mainNavigation = (container) => {
    const trigger_Button = document.querySelector('.main-navigation-trigger');
    const overlay = document.querySelector('.main-navigation-overlay');

    highlightSelected();

    trigger_Button.addEventListener('click', () => {
        toggle();
    });

    overlay.addEventListener('click', () => {
        close();
    });

    window.addEventListener('resize', () => {
        if (window.innerWidth >= 680) {
            close();
        }
    });

    window.addEventListener('scroll', () => {
        const scrolledDistance = document.querySelector('body').scrollTop;
        const headerHeight = document.querySelector('.main-header').offsetHeight;

        if (window.innerWidth >= 680 && scrolledDistance > headerHeight) {
            container.classList.add('pinned');
        }
        else if (container.classList.contains('pinned')) {
            container.classList.remove('pinned');
        }
    });

    function toggle() {
        if (isOpened()) close(); else open();
    }

    function open() {
        document.querySelector('html, body').style.overflow = 'hidden';
        trigger_Button.style.backgroundImage = 'url("../Images/svg/hamburger-icon-white.svg")';

        overlay.classList.add('visible');
        container.classList.add('opened');
    }

    function close() {
        document.querySelector('html, body').style.overflow = '';
        trigger_Button.style.backgroundImage = '';

        overlay.classList.remove('visible');
        container.classList.remove('opened');
    }

    function isOpened() {
        return container.classList.contains('opened');
    }

    function highlightSelected() {
        const id = document.querySelector('.page-content').id;

        try {
            container.querySelector(`[data-page-id="${id}"]`).classList.add('active');
        }
        catch (e) { }
    }
};

export default mainNavigation;
