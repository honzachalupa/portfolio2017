const aspectRatioPreserver = (container) => {
    const aspectRatio = container.dataset.aspectRatio;
    const aspectRatioMobile = container.dataset.aspectRatioMobile;
    const ratiosObj = {
        x: aspectRatio.split(':')[0],
        y: aspectRatio.split(':')[1]
    };

    let ratiosMobileObj;

    if (aspectRatioMobile) {
        ratiosMobileObj = {
            x: aspectRatioMobile.split(':')[0],
            y: aspectRatioMobile.split(':')[1]
        };
    }

    setAspectRatio();

    window.addEventListener('resize', () => {
        setAspectRatio();
    });

    function setAspectRatio() {
        const width = container.offsetWidth;
        const height = container.offsetHeight;

        if (window.innerWidth < 680 && aspectRatioMobile) {
            container.style.height = `${Math.round((width / ratiosMobileObj.x) * ratiosMobileObj.y)}px`;
        } else if (aspectRatio) {
            container.style.height = `${Math.round((width / ratiosObj.x) * ratiosObj.y)}px`;
        }
    }
};

export default aspectRatioPreserver;
