import toast from "../mixins/toasts";
export const confirm = {
  methods: {
    confirmAction(action, kind, name, entity, actionFunction) {
      var finalValue = null;
      this.$bvModal
        .msgBoxConfirm(
          "Tem a certeza que deseja " + action + "  " + name + " ?",
          {
            title: action + " " + kind,
            size: "md",
            buttonSize: "sm",
            okVariant: "danger",
            okTitle: action,
            cancelTitle: "Cancelar",
            footerClass: "p-2",
            hideHeaderClose: false,
            centered: true
          }
        )
        .then(value => {
          actionFunction(value, entity, name);
        });
    }
  }
};
