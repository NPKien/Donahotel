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
      // Nếu không ở trang chủ, chuyển đến trang chủ trước khi scroll
      if (this.$route.name !== 'Home') {
        this.$router.push({ name: 'Home' }).then(() => {
          // Đợi 500ms trước khi cuộn tới section cụ thể
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
