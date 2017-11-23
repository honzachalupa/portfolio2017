import log from './logger';

const addExperimentalCss = () => {
    try {
        if (CSS.supports('backdrop-filter', 'blur()') || CSS.supports('-webkit-backdrop-filter', 'blur()')) {
            const css =
                `.navigation-overlay {
                    background-color: rgba(255, 255, 255, 0.2);
                    -webkit-backdrop-filter: blur(3px);
                    backdrop-filter: blur(3px);
                }

                [data-component="Page_Header"] .content .headline,
                [data-component="Page_Header"] .content .tags {
                    background-color: rgba(255, 255, 255, 0.2);
                    color: white;
                    text-shadow: 0 0 10px black;
                    -webkit-backdrop-filter: blur(3px);
                    backdrop-filter: blur(3px);
                }

                [data-component="ContentBlock_Grid"] .company .logo {
                    border-radius: 0 !important;
                    -webkit-backdrop-filter: blur(3px);
                    backdrop-filter: blur(3px);
                }

                @media (max-width: 679px) {
                    [data-component="Page_Navigation"].opened {
                        opacity: 0.9;
                    }
                }
                @media (min-width: 680px) {
                    [data-component="Page_Navigation"] {
                        background-color: rgba(255, 255, 255, 0.2);
                        color: white;
                        text-shadow: 0 0 10px black;
                        -webkit-backdrop-filter: blur(3px);
                        backdrop-filter: blur(3px);
                    }

                    [data-component="Page_Navigation"].pinned {
                        background-color: rgba(0, 0, 0, 0.1);
                        color: black;
                        box-shadow: none;
                    }
                }`;

            document.querySelector('head').innerHTML += `<style>${css}</style>`;
        }
    } catch (e) {
        log(new Error('The CSS.supports feature not supported.'));
    }
};

export default addExperimentalCss;
