<template>
  <css-doodle use="var(--rule)" click-to-update> </css-doodle>
</template>

<style lang="scss" scoped>
css-doodle {
  --rule: (
    @grid: 1x10 / 85%; @place: center; @size: calc(@i * 10%) ; border-radius: 50%; border-style: dashed; border-width:
      calc(@i * 4px) ; border-color: hsla(calc(20 * @i), 70%, 68%, calc(3 / @i * 0.8)) ; transform: rotate(@r (360deg))
      ;
  );
}
</style>
