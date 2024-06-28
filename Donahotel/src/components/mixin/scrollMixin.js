// scrollMixin.js
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
    scrollToSection(sectionId) {
      if (this.$route.name !== 'Home') {
        this.$router.push({ name: 'Home' }).then(() => {
          setTimeout(() => {
            this.scrollSection(sectionId);
          }, 500);
        });
      } else {
        this.scrollSection(sectionId);
      }
    },
    scrollSection(sectionId) {
      const targetSection = document.getElementById(sectionId);
      if (targetSection) {
        targetSection.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      } else {
        console.error(`Không tìm thấy phần có ID: ${sectionId}`);
      }
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
