export const redirectToPage = {
  methods: {
    redirectToRoomPage(type) {
      this.$router.push(`/type/${type}`);
    },
  },
};
