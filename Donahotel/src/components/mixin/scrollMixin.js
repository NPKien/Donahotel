// src/mixins/scrollMixin.js
export const scrollMixin = {
    methods: {
      scrollToTop() {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      },
      checkScroll() {
        this.isVisible = window.scrollY > 300;
      },
      scrollToSection(section) {
        const url = `http://localhost:5173/?scroll=${section}`;
        window.location.href = url;
      },
      scrollPage() {
        const cmToPixels = 37.79527559;
        let targetOffsetCm;
  
        const params = new URLSearchParams(window.location.search);
        switch (params.get('scroll')) {
          case 'section1':
            targetOffsetCm = 14.5;
            break;
          case 'section2':
            targetOffsetCm = 55;
            break;
          case 'section3':
            targetOffsetCm = 14.5;
            break;
          case 'section4':
            targetOffsetCm = 41;
            break;
          case 'section5':
            targetOffsetCm = 77;
            break;
          default:
            targetOffsetCm = 0;
        }
  
        const targetOffsetPx = targetOffsetCm * cmToPixels;
  
        setTimeout(() => {
          window.scrollBy({
            top: targetOffsetPx,
            behavior: 'smooth'
          });
        }, 1000);
      }
    },
    mounted() {
      window.addEventListener('scroll', this.checkScroll);
  
      const params = new URLSearchParams(window.location.search);
      if (params.get('scroll')) {
        this.scrollPage();
      }
    },
    beforeDestroy() {
      window.removeEventListener('scroll', this.checkScroll);
    }
  };
  