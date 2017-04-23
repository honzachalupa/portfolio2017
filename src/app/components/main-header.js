const mainHeader = (container) => {
    loadImage();
    centerHeaderContent();

    window.addEventListener('resize', () => {
        centerHeaderContent();
    });

    function loadImage() {
        container.style.backgroundImage = `url('http://dev.honzachalupa.cz/Images/Header/bg-${getRandomRange(1, 10)}.jpg')`;
    }

    function centerHeaderContent() {
        container.querySelector('.content').style.width = `${document.querySelector('main').offsetWidth}px`;
    }

    function getRandomRange(min, max) {
        return Math.round(Math.random() * (max - min) + min);
    }
};

export default mainHeader;
