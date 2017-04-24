import factory from '../factory';
import getUrlParameterValue from '../modules/get-url-parameter-value';
import aspectRatioPreserver from '../modules/aspect-ratio-preserver';

const projectsFilter = (container) => {
    const filterableGrids = document.querySelectorAll(`.basic-grid.filterable`);
    const filter_Buttons = document.querySelectorAll('.projects-filter .filter');

    Array.from(filter_Buttons).forEach((button) => {
        button.addEventListener('click', (e) => {
            filter(e.target.dataset.type);

            Array.from(filter_Buttons).forEach((button) => {
                if (button.dataset.type === e.target.dataset.type) {
                    button.classList.add('active');
                }
                else if (button.classList.contains('active')) {
                    button.classList.remove('active');
                }
            });
        });
    });

    const urlFilter = getUrlParameterValue('filter');

    if (urlFilter) {
        document.querySelector(`.projects-filter .filter[data-type="${urlFilter}"]`).click();
    }
    else {
        document.querySelector(`.projects-filter .filter[data-type="all"]`).click();
    }

    function filter(type) {
        Array.from(filterableGrids).forEach((grid) => {
            if (type !== 'all') {
                grid.style.display = (grid.dataset.id !== type) ? 'none' : '';
            }
            else {
                grid.style.display = '';
            }
        });

        factory(aspectRatioPreserver, document.querySelectorAll('[data-aspect-ratio]'));
    }
};

export default projectsFilter;
