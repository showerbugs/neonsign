<template>
  <div class="create-view">
    <b-field>
      <h3 class="subtitle">텍스트</h3>
      <b-input class="neon-text-input" size="is-medium" v-model="option.text" placeholder="표시할 단어를 입력해주세요"></b-input>
    </b-field>
    <b-field>
      <h3 class="subtitle">색깔</h3>
      <b-select
        v-model="option.color"
        placeholder="Default"
        expanded>
        <option
          v-for="color in colorOption"
          :value="color"
          :key="color">
         {{ color }}
        </option>
      </b-select>
    </b-field>

    <b-field>
      <h3 class="subtitle">에니메이션</h3>
      <b-select
        v-model="option.animation"
        placeholder="Default"
        expanded>
        <option
          v-for="animation in animationOption"
          :value="animation"
          :key="animation">
          {{ animation }}
        </option>
      </b-select>
    </b-field>

    <b-field>
      <h3 class="subtitle">글자크기</h3>
      <b-select
        v-model="option.fontSize"
        expanded>
        <option
          v-for="size in sizeOption"
          :value="size"
          :key="size">
          <span>{{ size }}</span>
        </option>
      </b-select>
    </b-field>

    <!--<div class="block">-->
      <!--<button class="button is-medium is-primary"-->
              <!--@click="isDetail = !isDetail">-->
        <!--상세조정-->
      <!--</button>-->
    <!--</div>-->

    <button class="button is-medium is-success" @click="$parent.close()">
      <b-icon icon="check"></b-icon>
      <span>닫기</span>
    </button>

  </div>
</template>

<script>
  import {color, animation} from '@/option/options'
export default {
  name: 'create-view',
  props: ['option'],
  data () {
    console.log(this.option)
    return {
      neonText: '',
      isDetail: false,
      isAllowScroll: false,
      colorOption: color,
      animationOption: animation,
      sizeOption: Array.from(Array(20).keys())
    }
  },
  methods: {
    close() {
      this.$parent.close()
    }
  }
}
</script>

<style>
  .create-view {
    padding: 10px;
  }

  .create-view .subtitle {
    color: #fff;
    font-size: 1.5em;
    margin-right: 1em;
  }

  .control {
    text-align: left;
  }

  .neon-text-input input {
  }

  h1, h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #35495E;
  }
</style>
