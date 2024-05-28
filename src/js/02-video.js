

import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

import { common } from './common';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);



player.ready().then(() => {
    const onTimeUpdate = throttle(data => {
        const currentTime = data.seconds;
        localStorage.setItem('common.KEY_VIDEO', currentTime)
    }, 1000);

    player.on('timeupdate', onTimeUpdate);

    const saveTime = localStorage.getItem('common.KEY_VIDEO');
    const currentTime = parseFloat(saveTime);
    player.setCurrentTime(currentTime).then(function (seconds) {
    }).catch(function (error) {
        switch (error.name) {
            case 'RangeError':
                break;
            default:
                break;
        }
    });

});


