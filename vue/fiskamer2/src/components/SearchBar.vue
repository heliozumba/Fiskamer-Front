<template>
  <div class="search-bar-container">
    <div class="search-bar">
      <form class="form-inline" action>
        <input type="text" class="form-control form-control-lg" placeholder="O que está a procura?" />
        <select class="form-control form-control-lg" id="selectLocation">
          <option>Onde?</option>
        </select>

        <button class="btn btn-raised search-button btn-outline-dark btn-lg">Pesquisar</button>
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
  border-radius: 20px;
  margin-top: 5%;
  background-color: #ffffffde;
  box-shadow: 2px 2px 2px #00000040;
}

.search-bar form {
  padding: 1%;
  /*  margin-left: 8%; */
}

.search-bar form {
  input,
  select {
    border: 1px solid #2c3e5050;
    width: 44%;
    background-color: transparent;

    &::placeholder {
    }
  }
}


</style>