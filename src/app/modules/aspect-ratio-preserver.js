const aspectRatioPreserver = (container) => {
    let aspectRatio = container.dataset.aspectRatio;
    let aspectRatioMobile = container.dataset.aspectRatioMobile;

    const ratios = {
        x: aspectRatio.split(':')[0],
        y: aspectRatio.split(':')[1]
    };

    let ratiosMobile;

    if (aspectRatioMobile) {
        ratiosMobile = {
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

        if (window.innerWidth < 680 && aspectRatioMobile)
            container.style.height = `${Math.round(width / ratiosMobile.x * ratiosMobile.y)}px`;
        else if (aspectRatio)
            container.style.height = `${Math.round(width / ratios.x * ratios.y)}px`;
    }
};

export default aspectRatioPreserver;
