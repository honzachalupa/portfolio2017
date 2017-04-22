'use strict';

window.onload = function() {
    resized();

    if (document.querySelector('.twitter-timeline .placeholder')) getTwitterTimeline();
};

window.onresize = function() {
    resized();
};

window.onscroll = function() {
    scrolled();
};

function resized() {
    if (isMobile()) {
        document.querySelectorAll('.preserve-ratio').forEach(function(element) {
            let ratio = element.dataset.ratiom;

            if (!ratio)
                ratio = element.dataset.ratio;

            if (!ratio)
                throw new Error('Undefined image ratio value.');

            element.style.height = (element.offsetWidth * ratio) + 'px';
        });

        let menu = document.querySelector('.menu');
        if (menu) menu.classList.remove('sticky');
    }
    else {
        document.querySelectorAll('.preserve-ratio').forEach(function(element) {
            let ratio = element.dataset.ratio;

            if (!ratio)
                ratio = element.dataset.ratiom;

            if (!ratio)
                throw new Error('Undefined image ratio value.');

            element.style.height = (element.offsetWidth * ratio) + 'px';
        });

        let menu = document.querySelector('.menu');
        if (menu) menu.classList.remove('opened');

        let menuToggle = document.querySelector('.menu');
        if (menuToggle) menuToggle.classList.remove('opened');
    }
}

function scrolled() {
    let header = document.querySelector('.header'),
        menu   = document.querySelector('.menu');

    if (header && menu && !isMobile()) {
        if (window.pageYOffset > header.style.height.replace('px', ''))
            menu.classList.add('sticky');
        else
            menu.classList.remove('sticky');
    }
}

function toggleMenu(task) {
    let menu = document.querySelector('.menu'),
        button = document.querySelector('.menu-toggle'),
        mask = document.querySelector('.menu-mask');

    if (!task) {
        task = menu.classList.contains('opened') ? 'close' : 'open';
    }

    if (task === 'open') {
        menu.classList.add('opened');
        button.classList.add('opened');
        mask.style.display = 'inline';
    }
    else {
        menu.classList.remove('opened');
        button.classList.remove('opened');
        mask.style.display = 'none';
    }
}

function isMobile() {
    return (window.innerWidth <= 768) ? true : false;
}

function getTwitterTimeline() {
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            let data = JSON.parse(this.responseText),
                tweets = [];

            for (let item of data) {
                if (item.Type === 'tweet') {
                    tweets.push({
                        timestamp: item.DatePublished,
                        content: item.Text,
                        url: item.Url
                    });
                }
            }

            let html = "";
            for (let tweet of tweets) {
                html +=
                    `<a class="tweet" href="${tweet.url}">
                        <time>${tweet.timestamp}</time>
                        <p>${tweet.content}</p>
                    </a>`;
            }

            if (html.length === 0) {
                console.log("Only sample Twitter data!");

                html =
                    `<a class="tweet" href="http://www.twitter.com/janchalupa/status/810950344738041856&#10;">
                        <time>2016-12-19</time>
                        <p>Nemá někdo na půjčení vodotěsnou kameru, se kterou by se dalo natáčet v aquaparku? Prosím do zpráv. Děkuju!</p>
                    </a><a class="tweet" href="http://www.twitter.com/janchalupa/status/810620861543813122&#10;">
                        <time>2016-12-19</time>
                        <p>Nechal si ukrást mobil, aby pak o zloději natočil celý dokument. Jaký člověk ukradne telefon a kde tvé zařízení sko… </p>
                    </a><a class="tweet" href="http://www.twitter.com/janchalupa/status/787304879098359813&#10;">
                        <time>2016-10-15</time>
                        <p>Prodávám. Na ultrabook je to fakt dělo, ale já to nevyužiju (na hry mám Xbox). </p>
                    </a><a class="tweet" href="http://www.twitter.com/janchalupa/status/782119609084313600&#10;">
                        <time>2016-10-01</time>
                        <p>Možná jsem blbej a nedošel mi smysl tohoto promyšleného konceptu, ale jak připojim nový iPhone sluchátka k Macbooku (nebo jinýmu noťasu)? </p>
                    </a><a class="tweet" href="http://www.twitter.com/janchalupa/status/781904295436353537&#10;">
                        <time>2016-09-30</time>
                        <p>Nadílka je konečně kompletní. </p>
                    </a><a class="tweet" href="http://www.twitter.com/janchalupa/status/778864831248101376&#10;">
                        <time>2016-09-22</time>
                        <p>Nechcete někdo nerozbalenou Fifu 17 pro Xbox One? Vychází až 29.9. - takhle jí můžete mít už na tento víkend. ;)</p>
                    </a><a class="tweet" href="http://www.twitter.com/janchalupa/status/777227921358458880&#10;">
                        <time>2016-09-17</time>
                        <p>Taky jsem si sáhnul. :D</p>
                    </a><a class="tweet" href="http://www.twitter.com/janchalupa/status/776030738206625792&#10;">
                        <time>2016-09-14</time>
                        <p>Novej Xbox i iPhone v jeden den - mé srdce materialisty plesá radostí. </p>
                    </a><a class="tweet" href="http://www.twitter.com/janchalupa/status/775959042736828416&#10;">
                        <time>2016-09-14</time>
                        <p>Stejně se na něj těším. </p>
                    </a><a class="tweet" href="http://www.twitter.com/janchalupa/status/775668475146727425&#10;">
                        <time>2016-09-13</time>
                        <p>Radost pracovat... :)</p>
                    </a><a class="tweet" href="http://www.twitter.com/janchalupa/status/772044485555589120&#10;">
                        <time>2016-09-03</time>
                        <p>Už jen pět dní s 50% slevou!</p>
                    </a><a class="tweet" href="http://www.twitter.com/janchalupa/status/771998623840268288&#10;">
                        <time>2016-09-03</time>
                        <p>Už jen pět dní se slevou 50%!</p>
                    </a>`;
            }

            document.querySelector('.twitter-timeline .placeholder').innerHTML = html;
        }
    };
    xhttp.open('GET', 'http://www.honzachalupa.cz/dev/data/data.json', true);
    xhttp.send();
}
