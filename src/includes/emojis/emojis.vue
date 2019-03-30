<template>
  <div class="c-emojis" @keyup.esc="toShow = false">
    <span :class="[{'ui-tooltip--top' : !toShow }]" data-tooltip="Emojis" class="trig" @click="toShow = !toShow">🙂</span>
    <i :class="[{'arr-fw': toShow}]" />
    <ul :class="['emojis', {'emojis--show': toShow}]">
      <li v-for="emoji in emojiList" :data-name="emoji.name" :key="emoji.no" @click="emojiSent(emoji)">{{ emoji.char }}</li>
    </ul>
  </div>
</template>
<script src="./emojis.js"></script>
<style lang="scss" src="./emojis.scss" scoped></style>
