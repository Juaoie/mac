<template>
  <css-doodle use="var(--rule)" click-to-update> </css-doodle>
</template>

<style lang="scss" scoped>
css-doodle {
  --rule: (
    : doodle {@grid: 8 / 90%; @shape: circle;} transition: 0.2s @r (0.6s) ; border-radius: @pick (100% 0, 0 100%) ; transform:
      scale(@r (0.25, 1.25)) ; background: hsla(calc(240 - 6 * @x * @y), 70%, 68%, @r.8) ;
  );
}
</style>
