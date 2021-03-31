<template>
  <q-layout>
    <q-header>
      <q-toolbar class="bg-dark">
        <q-toolbar-title>
          <q-btn  push label="gamer" icon="games">  </q-btn>
          <q-btn push label="news" icon="timeline">  </q-btn>
          <q-btn push label="community" icon="add">  </q-btn>
        </q-toolbar-title>
         <div class="col-lg-4 col-sm-10">
    <q-btn
      icon= "map"
      color= "grey"
      @click= "connection"
    >
      se connecter
    </q-btn>
    <q-btn
      flat
      icon= "person"
      color= "grey"
      @click= "createAccount"
    >
      Créer un compte
    </q-btn>
  </div>
      </q-toolbar>
      <img width="150" src="statics/gg.png"/>
    </q-header>
    <carousel></carousel>
      <div class="justify-content-center text-center">
       <h1 class="" style="font-size: 40px; margin-top: 20px; color: black; margin-top: 20px;"> NOS SERVICES </h1>
        </div>
    <div class="container-fluid " style="padding-left: 100px; padding-right: 100px; margin-bottom: 100px; margin-top: 75px">
        <div class="row block-center">
            <div class="col text-center separator-ho-black1">
                <img src="statics/fb8.jpg" alt="" style="width: 130px; height: 130px; margin-bottom: 10px; border-radius: 50%; ">
                <h5 class="titre1">ARMES</h5>
                <div class="col-lg-3" style="padding: 10px;">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta ex libero molestias quaerat quibusdam recusandae repudiandae voluptate! Aliquam architecto assumenda doloribus dolorum, facilis incidunt ipsam, laudantium molestias, mollitia quidem totam!
          </div>
            </div>
            <div class="col text-center separator-ho-black2">
                <img src="statics/fb2.jpg" alt="" style="width: 130px; height: 130px; margin-bottom: 10px; border-radius: 50%;">
                <h5 class="titre1">LOGO</h5>
                <div class="col-lg-3" style="padding: 10px;">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta ex libero molestias quaerat quibusdam recusandae repudiandae voluptate! Aliquam architecto assumenda doloribus dolorum, facilis incidunt ipsam, laudantium molestias, mollitia quidem totam!
          </div>
            </div>
            <div class="col text-center separator-ho-black4">
                <img src="statics/images1.jpg" alt="" style="width: 130px; height: 130px; margin-bottom: 10px; border-radius: 50%;">
                <h5 class="titre1">HÉRO</h5>
                <div class="col-lg-3" style="padding: 10px;">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta ex libero molestias quaerat quibusdam recusandae repudiandae voluptate! Aliquam architecto assumenda doloribus dolorum, facilis incidunt ipsam, laudantium molestias, mollitia quidem totam!
          </div>
            </div>
            <div class="col text-center separator-ho-black5">
                <img src="statics/fb1.jpg" alt="" style="width: 130px; height: 130px; margin-bottom: 10px; border-radius: 50%;">
                <h5 class="titre1">MISSIONS</h5>
                <div class="col-lg-3" style="padding: 10px;">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta ex libero molestias quaerat quibusdam recusandae repudiandae voluptate! Aliquam architecto assumenda doloribus dolorum, facilis incidunt ipsam, laudantium molestias, mollitia quidem totam!
          </div>
            </div>
        </div>
    </div>
    <div class="row separator" style="padding: 50px 25px 50px 25px; background: linear-gradient(to right, #56ccf2, #2f80ed); margin-top: 100px">
        <div class="sm-hide md-hide col-lg-6">
          <img src="~assets/carte.svg" alt="">
        </div>
        <div class="col-lg-6 col-sm- 12 col-md-12">
          <div class="cloudOne">
              <div class="cloud"></div>
          </div>
          <div class="cloudTwo">
              <div class="cloud"></div>
          </div>
          <div class="cloudThree">
              <div class="cloud"></div>
          </div>
          <div class="text-white" style="margin-top: 100px;font-size: 40px;font-family: 'Lato',sans-serif;width: 460px;line-height: 40px;">
            La plateforme Call Of Duty
          </div><br>
          <p class="text-white" style="font-family: 'Lato',sans-serif;line-height: 35px;padding-right: 50px">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta ex libero molestias quaerat quibusdam recusandae repudiandae</p>
          <q-btn
            rounded
            icon="map"
            size= "lg"
            color= "amber"
          >
            Commencer
          </q-btn>
        </div>
      </div>
  </q-layout>
</template>
<script>
import Carousel from 'src/components/Carousel.vue'
export default {
  name: 'Home',
  components: {
    Carousel
  }
}
</script>
<style lang="stylus" scoped>
  @keyframes animateCloud
      0%
        margin-left: -1000px
        opacity: 0
      50%
        margin-left: 70%
        opacity: 1
      100%
        margin-left: 10%
        opacity: 0

  .docs-home
    header
      position fixed
      z-index 2
      width 100%
      height 54px
      background rgba(0,0,0,0.5)
  ._gallery
    div
      div
        width 100%
        overflow hidden
        border 5px solid white
        background blue
        img
          transition all 0.5s ease
        img:hover
          -webkit-transform: scale(1.5)
          -moz-transform: scale(1.5)
          -ms-transform: scale(1.5)
          -o-transform: scale(1.5)
          transform: scale(1.5)
  .cloudTwo
    -webkit-animation animateCloud 60s linear infinite
    -moz-animation animateCloud 60s linear infinite
    animation animateCloud 60s linear infinite
    -webkit-transform: scale(0.55)
    -moz-transform: scale(0.55)
    transform: scale(0.55)
  .cloudThree
    -webkit-animation animateCloud 40s linear infinite
    -moz-animation animateCloud 40s linear infinite
    animation animateCloud 40s linear infinite
    -webkit-transform: scale(0.4)
    -moz-transform: scale(0.4)
    transform: scale(0.4)
  .cloudOne
    -webkit-animation animateCloud 50s linear infinite
    -moz-animation animateCloud 50s linear infinite
    animation animateCloud 50s linear infinite
    -webkit-transform scale(0.3)
    -moz-transform scale(0.3)
    transform scale(0.3)
  .cloud
    background #fff;
    -webkit-border-radius 100px
    -moz-border-radius 100px
    border-radius 100px
    box-shadow 0 8px 5px rgba(0, 0, 0, 0.1)
    height 120px
    position absolute
    width: 350px
    top 100px
    z-index -1
  .cloud:after, .cloud:before
    background #fff;
    content '';
    position absolute;
    z-indeX -1;
  .cloud:after
    -webkit-border-radius 100px;
    -moz-border-radius 100px;
    border-radius 100px;
    height 100px;
    left 50px;
    top -50px;
    width 100px;
  .cloud:before
    background #fff
    content ''
    position absolute
    z-indeX -1
    -webkit-border-radius 200px
    -moz-border-radius 200px
    border-radius 200px
    width 180px
    height 180px
    right 50px
    top -90px
</style>
