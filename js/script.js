window.addEventListener('DOMContentLoaded', () => {

    'use strict';

    const btnsModalOpenParent = document.querySelector('.subheader_btns'),
          modal = document.querySelectorAll('.modal'),
          applicationModal= document.querySelector('.modal_application'),
          resumeModal = document.querySelector('.modal_resume'),
          sliderContent = document.querySelectorAll('.slider_content'),
          sliderTogglersParent = document.querySelector('.slider_toggle'),
          sliderTogglers = sliderTogglersParent.querySelectorAll('.slider_toggle_item');

    
    // Modal

    function openModal (btnOpen) {
        if (btnOpen === 'application') {
            applicationModal.classList.toggle('show');
        } else {
            resumeModal.classList.toggle('show');
        }
        document.body.style.overflow = 'hidden';
    }

    function closeModal (modal) {
        modal.classList.toggle('show');
        document.body.style.overflow = '';

    }

    btnsModalOpenParent.addEventListener('click', (event) => {
        if (event.target === event.target && event.target.classList.contains('btn')) {
            openModal(event.target.id);
        }
    });


    modal.forEach(item => {
        item.addEventListener('click', (event) => {
            closeModal(event.target);
        });
    });
    

    document.addEventListener('keydown', (e) => {
        modal.forEach(item => {
            if (e.code === 'Escape' && (item.classList.contains('show') || item.classList.contains('show'))) {
                closeModal(item);
            }
        });
    });

    // end modal

    // slider

    const slider = {
        content: sliderContent,
        togglers: sliderTogglers,
        counter: 0,
        controlСounter: function (counter) {
            if (counter >= this.content.length - 1) {
                this.counter = 0;
                return this.counter;
            }
            
            return this.counter += 1;
        },
        switchingSlides: function () {
            sliderContent.forEach((item) => {
                item.classList.remove('show');
            });

            sliderTogglers.forEach((item) => {
                item.classList.remove('slider_active');
            });

            sliderContent[slider.counter].classList.add('show');
            sliderTogglers[slider.counter].classList.add('slider_active');
            slider.controlСounter(slider.counter);
        }
    };

    let timerID;
    
    function startAutoSwitchingSlides () {
        timerID = setInterval(slider.switchingSlides, 3000);
    }

    function stopAutoSwitchingSlides () {
        clearInterval(timerID);
    }

    startAutoSwitchingSlides();

    sliderTogglersParent.addEventListener('click', (event) => {
        if (event.target && event.target.classList.contains('slider_toggle_item')) {
            slider.counter = +event.target.id;
            slider.switchingSlides();

            stopAutoSwitchingSlides();
            startAutoSwitchingSlides();
        }
    });

    // end slider


});
