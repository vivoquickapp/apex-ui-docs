<template>
    <div class="preview-wrap">
        <iframe class="preview"
            sandbox="allow-scripts allow-forms allow-same-origin"
            :src="`https://editor.quickapp.cn/preview/2009/Yz/2009YzjNs0Tl/build/pages/${page}`"
            frameborder="0"
        ></iframe>
    </div>
</template>

<script>
    export default {
        props: {
            page: {
                type: String,
                default: 'home'
            }
        },
    }
</script>

<style scoped>
  .preview-wrap {
      border-radius: 25px;
      border: 1px solid #DEDEDE;
      padding: 10px 5px;
      width: 375px;
      background: #DEDEDE;
      margin: 10px auto;
  }
  .preview {
      height: 720px;
      width: 375px;
      border-radius: 30px;
  }
</style>
