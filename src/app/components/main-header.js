const mainHeader = (container) => {
    centerHeaderContent();

    window.addEventListener('resize', () => {
        centerHeaderContent();
    });

    function centerHeaderContent() {
        container.querySelector('.content').style.width = `${document.querySelector('main').offsetWidth}px`;
    }
};

export default mainHeader;
