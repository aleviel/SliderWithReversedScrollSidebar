document.addEventListener('DOMContentLoaded', () => {
    const controls = document.querySelector('.controls'),
        sidebar = document.querySelector('.sidebar'),
        slidesBlock = document.querySelector('.main-slide')

    function SliderWithReversedSidebar(controlButtons, sidebar, slidesBlock) {
        this.controlButtons = controlButtons;
        this.sidebar = sidebar;
        this.slidesBlock = slidesBlock;
        this.currentSlide = 0;
        this.slidesCount = this.slidesBlock.querySelectorAll('div').length;
        this.sidebar.style.top = `-${(this.slidesCount - 1) * 100}vh`
        this.controlButtons.addEventListener('click', (event) => {
            if (event.target.closest('.down-button')) {
                this.mover(-1)
            }
            if (event.target.closest('.up-button')) {
                this.mover(1)
            }
        })
        this.mover = (direction) => {
            this.currentSlide += direction
            if (this.currentSlide > this.slidesCount - 1) {
                this.currentSlide = 0;
            }
            if (this.currentSlide < 0) {
                this.currentSlide = this.slidesCount - 1;
            }
            slidesBlock.style.transform = `translateY(-${this.currentSlide * 100}%)`
            sidebar.style.transform = `translateY(${this.currentSlide * 100}%)`
        }
    }

    new SliderWithReversedSidebar(controls, sidebar, slidesBlock)
})
