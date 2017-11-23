const getClassList = (...inputClassList) => {
    const classList = [];

    inputClassList.forEach((className) => {
        if (typeof className === 'string' || typeof className === 'number') {
            classList.push(className);
        } else if (className && typeof className === 'object') {
            const classNameArray = className;

            classNameArray.forEach((className) => {
                classList.push(className);
            });
        }
    });

    return classList.join(' ');
};

export default getClassList;
