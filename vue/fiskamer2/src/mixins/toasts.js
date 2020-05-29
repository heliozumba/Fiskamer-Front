export const toast = {
  methods: {
    notify(variant, message, kind) {
      this.$bvToast.toast(message, {
        title: kind,
        variant: variant,
        toaster: "b-toaster-top-left",
        solid: true
      });
    }
  }
};
