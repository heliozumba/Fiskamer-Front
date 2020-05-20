<template>
  <b-modal
    :title="action+' '+kind"
    size="md"
    buttonSize="sm"
    okVariant="danger"
    :okTitle="action"
    cancelTitle="Cancelar"
    footerClass="p-2"
    hideHeaderClose="false"
    centered="true"
    id="confirm"
  ></b-modal>
</template>

<script>
export default {
  props: {
    action: String,
    kind: String
  }
};
</script>

<style>
</style>