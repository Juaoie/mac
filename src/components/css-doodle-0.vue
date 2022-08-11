<template>
  <css-doodle use="var(--rule)" grid="20x20" click-to-update> </css-doodle>
</template>

<style lang="scss" scoped>
css-doodle {
  --rule: (
    :doodle {
        @size: 100vw 100vmin;
        perspective: 10px;
    }
    :container {
        perspective: 50px;
        transform-style: preserve-3d;
    }
    position: absolute;
    top: 0;
    left: 0;
    width: 2px;
    height: 2px;
    border-radius: 50%;
    left: 50%;
    top: 50%;
    background: hsl(@rn(1, 255, 3), @rn(50%, 90%), @rn(50%, 90%));
    transform: scale(@rn(1, 10, 3)) translate3d(@rn(-50, 50, 3)vw, @rn(-50, 50, 3)vh, @rn(-100, 20)px);
    animation: move @rn(5, 15, 3)s infinite @rn(-20, -10, 3)s linear alternate;
    box-shadow: 0 0 1px #fff, 0 0 5px #fff;
    @keyframes move {
        100% {
            margin-top: 500px;
        }
    }
  );
}
</style>
