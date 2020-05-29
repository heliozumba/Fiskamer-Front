<template>
  <div class="search-bar-container">
    <div class="search-bar elegant-color">
      <form class="form-inline" action>
        <input type="text" class="form-control form-control-lg" placeholder="O que está a procura?" />
        <select class="form-control form-control-lg" id="selectLocation">
          <option>Onde?</option>
        </select>

        <button class="btn warning-color btn-lg">Pesquisar</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.search-bar-container {
}

.search-bar {
  box-shadow: 3px 3px 2px #00000055;
  margin-top: 2%;
}

.search-bar form {
  padding: 1%;
  /*  margin-left: 8%; */
}

.search-bar form {
  input,
  select {
    border: 1px solid #ffc107;
    width: 40%;
    background-color: transparent;
    color: #ffc107;
    outline: #ffc107;

    &::placeholder {
      color: #ffc107;
    }
  }
}
</style>