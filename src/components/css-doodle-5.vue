<template>
  <css-doodle use="var(--rule)" click-to-update> </css-doodle>
</template>

<style lang="scss" scoped>
css-doodle {
  --rule: (
    @grid: 16 / 320px; @size: 1px calc(141.4% + 1px) ; transform: rotate(@p (±45deg)) ; background: #AEACFB; margin:
      auto;
  );
}
</style>
