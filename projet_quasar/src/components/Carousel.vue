<template>
  <div  class="bg-green">
      <!-- <img width="150" src="statics/gg.png" class="bg-red"/> -->
    <q-carousel
      animated
      v-model="slide"
      arrows
      autoplay="true"
      navigation
      infinite
      height="620px"
    >
      <q-carousel-slide img-src="statics/fb.jpg"></q-carousel-slide>
      <q-carousel-slide img-src="statics/fb5.jpg"></q-carousel-slide>
      <q-carousel-slide img-src="statics/fb1.jpg"></q-carousel-slide>
    </q-carousel>
     <div class="flex flex-center" style="position: relative; top: -60px;">
      <q-card class="flex flex-center" style="transform: rotate(-20deg);width: 150px; height: 150px;background: white;">
        <div  style="width: 130px; height:130px; background: url('statics/back3.jpg');background-size: cover;"></div>
      </q-card>
      <q-card class="flex flex-center" style="transform: rotate(20deg);width: 150px; height: 150px;background: white;">
        <div  style="width: 130px; height:130px; background: url('statics/fb3.png');background-size: cover;"></div>
      </q-card>
      <q-card class="flex flex-center" style="transform: rotate(-10deg);width: 150px; height: 150px;background: white;">
        <div  style="width: 130px; height:130px; background: url('statics/image.png');background-size: cover;"></div>
      </q-card>
    </div>
  </div>
</template>

<script>
import { easing } from 'quasar'
export default {
  name: 'Carousel',
  data () {
    return {
      slide: 0,
      autoplay: true,
      lorem: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus, ratione eum minus fuga, quasi dicta facilis corporis magnam, suscipit at quo nostrum! Repellendus sed totam earum exercitationem, veritatis rerum? Aliquid.',
      overshoot: easing.overshoot,
      colors: [
        'primary',
        'secondary',
        'yellow',
        'red',
        'orange',
        'grey-2'
      ],
      modal: false,
      date1: null
    }
  },
  methods: {
    selected (item) {
      this.$q.notify(`Selected suggestion "${item.label}"`)
    }
  }
}
</script>
<style lang="stylus">
  @import '~variables'
  .banner
    width 100%
    height 600px
    background lightskyblue

  ._carousel
    p.caption:not(:first-of-type)
      margin-top 38px
    .custom-caption
      text-align center
      padding 12px
      color whitesmoke
      background rgba(0, 0, 0, .5)

  .q-if, .q-field, .q-uploader
    margin 16px 0
  .q-field, .q-uploader
    .q-if
      margin 0
  .q-field .q-uploader
    margin 0
  .caption:not(:first-child)
    margin-top 40px
  .example
    padding 5px 0px 0px
    border-radius 2px
    color black
</style>
