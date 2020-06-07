<template>
  <div class="search-bar-container">
    <div class="search-bar p-2">
      <form class="form-inline col-md-12" action>
        <input
          type="text"
          class="form-control form-control-lg col-md-5 ml-4"
          placeholder="O que está a procura?"
        />
        <select class="form-control form-control-lg col-md-4" id="selectLocation">
          <option>Onde?</option>
        </select>

        <button class="btn warning-color col-md-2">Pesquisar</button>
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

@supports (-webkit-backdrop-filter: none) or (backdrop-filter: none) {
  .search-bar {
    -webkit-backdrop-filter: blur(10px);
    backdrop-filter: blur(10px);
    background-color: #00000077;
  }
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