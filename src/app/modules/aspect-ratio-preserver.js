const aspectRatioPreserver = (container) => {
    const { aspectRatio: desktop, aspectRatioMobile: mobile } = container.dataset;
    const dekstopSet = splitAspectSet(desktop);
    const mobileSet = (mobile) ? splitAspectSet(mobile) : dekstopSet;

    setAspectRatio();

    window.addEventListener('resize', () => {
        setAspectRatio();
    });

    function setAspectRatio() {
        const width = container.offsetWidth;

        const currentSet = (window.innerWidth < 680) ? mobileSet : dekstopSet;

        container.style.height = `${Math.round((width / currentSet.x) * currentSet.y)}px`;
    }

    function splitAspectSet(set) {
        return {
            x: set.split(':')[0],
            y: set.split(':')[1]
        };
    }
};

export default aspectRatioPreserver;
