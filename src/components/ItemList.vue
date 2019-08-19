<template>
  <div>
    <h1>Items</h1>
    <input type="text" value="" />
    <button class="button" disabled>Add</button>
  </div>
</template>
<script>
export default {
  name: 'ItemList',
  data() {
    return {
      item: "",
      items: [],
    }
  }
}
</script>