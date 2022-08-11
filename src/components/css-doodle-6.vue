<template>
  <css-doodle use="var(--rule)" click-to-update> </css-doodle>
</template>

<style lang="scss" scoped>
css-doodle {
  --rule: (
@grid: 44 / 100%;

@random {
  border-left: 1px solid #5d81bc;
}
@random {
  border-top: 1px solid #5d81bc;
}
@random(.25) {
  background: linear-gradient(
    @p(#fff, tan, #5d81bc), @lp
  )
  50% / @r(60%) @lr
  no-repeat;
}
@random {
  filter: drop-shadow(0 0 10px #fff);
}
  );
}
</style>
