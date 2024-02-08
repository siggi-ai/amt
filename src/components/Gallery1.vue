<template>
  <Carousel>
    <Slide v-for="human in humans" :key="slide">
      <img class="carousel__item" :src="human.image" />
      <p class="text">{{ human.text }}</p>
    </Slide>
    

    <template #addons>
      <Navigation />
      <Pagination />
    </template>
  </Carousel>
</template>

<script>
import { defineComponent } from "vue";
import { Carousel, Navigation, Pagination, Slide } from "vue3-carousel";

import "vue3-carousel/dist/carousel.css";

export default defineComponent({
  name: "Basic",
  components: {
    Carousel,
    Slide,
    Pagination,
    Navigation,
  },
  data() {
    return {
      humans: [
        {
          image: "/images/p1.jpg",
          text: "Liegst Du mal wieder den ganzen Tag im Bett?",
        },
        {
          image: "/images/p3.jpg",
          text: "Oder hängst nur noch blöd zuhause rum?",
        },
        {
          image: "/images/p6.jpg",
          text: "Deine Freunde werden langsam komisch?",
        },
        {
          image: "/images/p5.jpg",
          text: "Keiner redet mehr mit Dir?",
        },
        {
          image: "/images/p4.jpg",
          text: "Kannst selbst im Sommer nix mehr mit Dir anfangen?",
        },
        {
          image: "/images/p9.jpg",
          text: "Die Welt ist ganz klein und leer geworden?",
        },
        {
          image: "/images/p7.jpg",
          text: "Und Saufen bringt auch keine Spaß mehr?",
        },
        {
          image: "/images/p10.png",
          text: "Gib' Deinem Leben einen Sinn! Komm zum Amt!",
        },
      ],
    };
  },
});
</script>

<style>
.carousel__item {
  min-height: 200px;
  width: 500px;
  background-color: var(--vc-clr-primary);
  color: var(--vc-clr-white);
  font-size: 20px;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.carousel__slide {
  padding: 10px;
  height: 500px;
  background-color: aqua;
}

.carousel__prev,
.carousel__next {
  box-sizing: content-box;
  border: 5px solid white;
}

.text {
  position: fixed;
  margin-bottom: -26em;
  background: rgba(0, 0, 0, 0.5);
  color: #f1f1f1;
  width: 100%;
  height:5em;
  padding: 10px;
}
</style>
