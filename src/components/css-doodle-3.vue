<template>
  <css-doodle use="var(--rule)" click-to-update> </css-doodle>
</template>

<style lang="scss" scoped>
css-doodle {
  --rule: (
    @grid: 50x1 / 100%; @place: center; @size: calc(75% / @I * @i) ; transform: rotate(calc(@i * 5deg)) ; border-radius:
      30%; border: 1px solid hsla(calc(10 + 4 * @i), 70%, 68%, @r.8) ;
  );
}
</style>
