<template>
  <div class="wrap">
    <div class="icons" v-for="type in iconType">
      <div class="icon-wrap">
        <div :class="[`icon icon-${type}`]"></div>
        <p class="name" v-on:click="clip(type)">{{type}}</p>
      </div>
      <p class="entity">{{icons[type]}}</p>
    </div>
  </div>
</template>

<script>
    import {icons} from "./fonts/icons";
    import Clipboard from "clipboard";

    export default {
        data() {
            return {
                icons: icons,
                iconType: Object.keys(icons)
            }
        },
        methods: {
            clip(icon) {
                const clipboard = new Clipboard('.wrap', {
                    text: function () {
                        return icon;
                    }
                });
                clipboard.on('success', (e) => {
                    e.clearSelection();
                    clipboard.destroy();
                });
            }
        }
    }
</script>

<style scoped>
  @import url(./style.css);

  * {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
    -webkit-font-smoothing: antialiased;
  }

  .wrap {
    display: flex;
    flex-wrap: wrap;
    margin-top: 20px;
  }

  .icon-wrap {
    border-radius: 5px;
    position: relative;
  }

  .icon-wrap:hover {
    cursor: pointer;
    box-shadow: 0px 0px 10px #DCDCDC;
  }

  .icon-wrap:hover .name {
    display: flex;
  }

  .icon-wrap:hover .icon {
    color: #DCDCDC;
  }

  .icon {
    width: 90px;
    height: 90px;
    line-height: 90px;
    flex: 1;
    font-size: 50px;
    text-align: center;
  }

  .name {
    position: absolute;
    top: 0;
    left: 0;
    width: 80px;
    height: 80px;
    line-height: 1;
    background: rgba(255, 255, 255, 0.5);
    display: none;
    text-align: center;
    z-index: 99;
    margin: 0;
    font-size: 12px;
    padding: 5px;
    align-items: center;
    justify-content: center;
    font-weight: bold;
  }

  .entity {
    display: flex;
    padding: 0;
    margin: 0;
    justify-content: center;
    align-items: center;
  }
</style>
