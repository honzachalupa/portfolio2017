'use strict';

window.onload = function () {
    resized();

    if (document.querySelector('.twitter-timeline .placeholder')) getTwitterTimeline();
};

window.onresize = function () {
    resized();
};

window.onscroll = function () {
    scrolled();
};

function resized() {
    if (isMobile()) {
        document.querySelectorAll('.preserve-ratio').forEach(function (element) {
            var ratio = element.dataset.ratiom;

            if (!ratio) ratio = element.dataset.ratio;

            if (!ratio) throw new Error('Undefined image ratio value.');

            element.style.height = element.offsetWidth * ratio + 'px';
        });

        var menu = document.querySelector('.menu');
        if (menu) menu.classList.remove('sticky');
    } else {
        document.querySelectorAll('.preserve-ratio').forEach(function (element) {
            var ratio = element.dataset.ratio;

            if (!ratio) ratio = element.dataset.ratiom;

            if (!ratio) throw new Error('Undefined image ratio value.');

            element.style.height = element.offsetWidth * ratio + 'px';
        });

        var menu = document.querySelector('.menu');
        if (menu) menu.classList.remove('opened');

        var menuToggle = document.querySelector('.menu');
        if (menuToggle) menuToggle.classList.remove('opened');
    }
}

function scrolled() {
    var header = document.querySelector('.header'),
        menu = document.querySelector('.menu');

    if (header && menu && !isMobile()) {
        if (window.pageYOffset > header.style.height.replace('px', '')) menu.classList.add('sticky');else menu.classList.remove('sticky');
    }
}

function toggleMenu(task) {
    var menu = document.querySelector('.menu'),
        button = document.querySelector('.menu-toggle'),
        mask = document.querySelector('.menu-mask');

    if (!task) {
        task = menu.classList.contains('opened') ? 'close' : 'open';
    }

    if (task === 'open') {
        menu.classList.add('opened');
        button.classList.add('opened');
        mask.style.display = 'inline';
    } else {
        menu.classList.remove('opened');
        button.classList.remove('opened');
        mask.style.display = 'none';
    }
}

function isMobile() {
    return window.innerWidth <= 768 ? true : false;
}

function getTwitterTimeline() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var data = JSON.parse(this.responseText),
                tweets = [];

            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
                for (var _iterator = data[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                    var item = _step.value;

                    if (item.Type === 'tweet') {
                        tweets.push({
                            timestamp: item.DatePublished,
                            content: item.Text,
                            url: item.Url
                        });
                    }
                }
            } catch (err) {
                _didIteratorError = true;
                _iteratorError = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion && _iterator['return']) {
                        _iterator['return']();
                    }
                } finally {
                    if (_didIteratorError) {
                        throw _iteratorError;
                    }
                }
            }

            var html = "";
            var _iteratorNormalCompletion2 = true;
            var _didIteratorError2 = false;
            var _iteratorError2 = undefined;

            try {
                for (var _iterator2 = tweets[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                    var tweet = _step2.value;

                    html += '<a class="tweet" href="' + tweet.url + '">\n                        <time>' + tweet.timestamp + '</time>\n                        <p>' + tweet.content + '</p>\n                    </a>';
                }
            } catch (err) {
                _didIteratorError2 = true;
                _iteratorError2 = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion2 && _iterator2['return']) {
                        _iterator2['return']();
                    }
                } finally {
                    if (_didIteratorError2) {
                        throw _iteratorError2;
                    }
                }
            }

            if (html.length === 0) {
                console.log("Only sample Twitter data!");

                html = '<a class="tweet" href="http://www.twitter.com/janchalupa/status/810950344738041856&#10;">\n                        <time>2016-12-19</time>\n                        <p>Nemá někdo na půjčení vodotěsnou kameru, se kterou by se dalo natáčet v aquaparku? Prosím do zpráv. Děkuju!</p>\n                    </a><a class="tweet" href="http://www.twitter.com/janchalupa/status/810620861543813122&#10;">\n                        <time>2016-12-19</time>\n                        <p>Nechal si ukrást mobil, aby pak o zloději natočil celý dokument. Jaký člověk ukradne telefon a kde tvé zařízení sko… </p>\n                    </a><a class="tweet" href="http://www.twitter.com/janchalupa/status/787304879098359813&#10;">\n                        <time>2016-10-15</time>\n                        <p>Prodávám. Na ultrabook je to fakt dělo, ale já to nevyužiju (na hry mám Xbox). </p>\n                    </a><a class="tweet" href="http://www.twitter.com/janchalupa/status/782119609084313600&#10;">\n                        <time>2016-10-01</time>\n                        <p>Možná jsem blbej a nedošel mi smysl tohoto promyšleného konceptu, ale jak připojim nový iPhone sluchátka k Macbooku (nebo jinýmu noťasu)? </p>\n                    </a><a class="tweet" href="http://www.twitter.com/janchalupa/status/781904295436353537&#10;">\n                        <time>2016-09-30</time>\n                        <p>Nadílka je konečně kompletní. </p>\n                    </a><a class="tweet" href="http://www.twitter.com/janchalupa/status/778864831248101376&#10;">\n                        <time>2016-09-22</time>\n                        <p>Nechcete někdo nerozbalenou Fifu 17 pro Xbox One? Vychází až 29.9. - takhle jí můžete mít už na tento víkend. ;)</p>\n                    </a><a class="tweet" href="http://www.twitter.com/janchalupa/status/777227921358458880&#10;">\n                        <time>2016-09-17</time>\n                        <p>Taky jsem si sáhnul. :D</p>\n                    </a><a class="tweet" href="http://www.twitter.com/janchalupa/status/776030738206625792&#10;">\n                        <time>2016-09-14</time>\n                        <p>Novej Xbox i iPhone v jeden den - mé srdce materialisty plesá radostí. </p>\n                    </a><a class="tweet" href="http://www.twitter.com/janchalupa/status/775959042736828416&#10;">\n                        <time>2016-09-14</time>\n                        <p>Stejně se na něj těším. </p>\n                    </a><a class="tweet" href="http://www.twitter.com/janchalupa/status/775668475146727425&#10;">\n                        <time>2016-09-13</time>\n                        <p>Radost pracovat... :)</p>\n                    </a><a class="tweet" href="http://www.twitter.com/janchalupa/status/772044485555589120&#10;">\n                        <time>2016-09-03</time>\n                        <p>Už jen pět dní s 50% slevou!</p>\n                    </a><a class="tweet" href="http://www.twitter.com/janchalupa/status/771998623840268288&#10;">\n                        <time>2016-09-03</time>\n                        <p>Už jen pět dní se slevou 50%!</p>\n                    </a>';
            }

            document.querySelector('.twitter-timeline .placeholder').innerHTML = html;
        }
    };
    xhttp.open('GET', 'http://www.honzachalupa.cz/dev/data/data.json', true);
    xhttp.send();
}

