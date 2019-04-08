<template>
  <transition name="slide-fade">
    <div class="c-modal__wrap" v-show="toShow">
      <div class="c-modal__bg" @click="toShow = false"></div>
        <div :class="['c-modal__content', modaltype]">
          <section :class="['c-modal__container']">
            <button class="close" @click="toShow = false">
              X
            </button>
            <slot />
          </section>
        </div>
    </div>
  </transition>
</template>
<script src="./modal.js"></script>
<style lang="scss" src="./modal.scss" scoped></style>
