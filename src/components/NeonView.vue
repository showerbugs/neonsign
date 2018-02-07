<template>
  <div class="neon">
    <div @click="openEditModal" class="neon-text animated" :class="option.animation" :style="getTextStyle">{{option.text}}</div>
  </div>
</template>

<script>
  import CreateView from '@/components/CreateView'
  import {color, animation} from '@/option/options'

  export default {
    name: 'neonView',
    data () {
      return {
        option: {
          text: '클릭해주세요',
          color: color[0],
          animation: animation[0],
          fontSize: 10
        }
      }
    },
    computed: {
      getTextStyle() {
        return {
          'text-shadow': `0 0 5px #fff, 0 0 10px #fff, 0 0 15px #fff, 0 0 20px ${this.option.color}, 0 0 35px
        ${this.option.color}, 0 0 40px ${this.option.color}, 0 0 50px ${this.option.color}, 0 0 75px ${this.option.color}`,
          'font-size': `calc(${this.option.fontSize}vw + ${this.option.fontSize}vh)`
        }
      },
    },
    methods: {
      openEditModal() {
        this.$modal.open({
          parent: this,
          component: CreateView,
          width: '80%',
          props	: {
            option: this.option
          }
        })
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  .neon {
    width: 100%;
    height: 100vh;
    background-color: #222222;
    background: repeating-linear-gradient(45deg, #2b2b2b 0%, #2b2b2b 10%, #222222 0%, #222222 50%) 0 / 15px 15px;
    text-align: center;
    overflow: hidden;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .neon-text {
    color: #fff;
    text-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 15px #fff, 0 0 20px #FF1177, 0 0 35px #FF1177, 0 0 40px #FF1177, 0 0 50px #FF1177, 0 0 75px #FF1177;
    /*-webkit-animation: neon1 1.5s ease-in-out infinite alternate;*/
    /*-moz-animation: neon1 1.5s ease-in-out infinite alternate;*/
    /*animation: neon1 1.5s ease-in-out infinite alternate;*/
    display: inline-block;
    font-size: calc(12vw + 12vh);
  }
  .neon-text:hover {
    -webkit-animation: none;
    -moz-animation: none;
    animation: none;
  }
  .neon-text:hover {
    color: #ffffff;
  }

  .neon-text.animated {
    -webkit-animation-iteration-count: infinite;
  }
  @-webkit-keyframes neon1 {
    from {
      text-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 30px #fff, 0 0 40px #FF1177, 0 0 70px #FF1177, 0 0 80px #FF1177, 0 0 100px #FF1177, 0 0 150px #FF1177;
    }
    to {
      text-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 15px #fff, 0 0 20px #FF1177, 0 0 35px #FF1177, 0 0 40px #FF1177, 0 0 50px #FF1177, 0 0 75px #FF1177;
    }
  }
  @-webkit-keyframes neon2 {
    from {
      text-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 30px #fff, 0 0 40px #228DFF, 0 0 70px #228DFF, 0 0 80px #228DFF, 0 0 100px #228DFF, 0 0 150px #228DFF;
    }
    to {
      text-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 15px #fff, 0 0 20px #228DFF, 0 0 35px #228DFF, 0 0 40px #228DFF, 0 0 50px #228DFF, 0 0 75px #228DFF;
    }
  }
</style>
