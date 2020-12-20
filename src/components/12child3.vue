<template>
  <div>{{ val }}</div>
  <div>
    <input
      type="text"
      :value="firstName"
      @input="$emit('update:firstName', $event.target.value)"
    />
  </div>
  <div>
    <input
      type="text"
      :value="lastName"
      @input="$emit('update:lastName', $event.target.value)"
    />
  </div>
</template>
<script>
export default {
  data() {
    return {
      val: "child3",
    };
  },
  props: ["firstName", "lastName"],
};
</script>

<style lang="scss" scoped></style>
