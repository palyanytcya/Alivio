const mobileNavBtn = document.querySelector('.mobile_nav_btn');
const mobileNavIcon = document.querySelector('.mobile_nav_btn_icon');
const mobileNavWrapper = document.querySelector('.mobile_nav_wrapper');

mobileNavBtn.addEventListener('click', function () {
    mobileNavIcon.classList.toggle('active');
    mobileNavWrapper.classList.toggle('active');
    document.body.classList.toggle('no_scroll')
})



const videoBtn = document.querySelector('#story_video_btn');
const videoBtnIcon = document.querySelector('#video_story_btn_icon');
const videoOverlay = document.querySelector('#story_video_overlay');
const videoFile = document.querySelector('#video_story');

videoBtn.addEventListener('click', function (){

    function toggleOverlay(event){
        if (event.type === 'mouseleave') {
            videoOverlay.classList.add('hidden');
        } else {
            videoOverlay.classList.remove('hidden');
        }
    }


    if (videoFile.paused) {
        videoFile.play();
        videoBtnIcon.src = './video/pause-white.svg';

        videoOverlay.onmouseleave = toggleOverlay;
        videoOverlay.onmouseenter = toggleOverlay;


    } else {
        videoFile.pause();
        videoBtnIcon.src = './video/play-white.svg';

        videoOverlay.onmouseleave = null;
    }
})