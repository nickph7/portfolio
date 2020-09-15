<template>
  <div class="about-container flex flex-col md:flex-row-reverse">
    <p-text-box class="about-presentation">
      <template v-slot:header>
        <h1 class="title about-presentation--title text-center md:text-left">
          Nice to meet you
        </h1>
      </template>
      <div>
        <img src="~/assets/img/shot.jpg" alt="portrait" class="portrait sm:float-left">
        <p>
          Currently based in Montreal, I focus on creating sensational and experimental software and artworks. I am a jack-of-all
          trades, and have sharpenened my skills in multiple areas such as audiovisual production, post-production, multimedia and
          web programming. I strive to make projects that redefine the boundaries of how we experience the web and multimedia,
          using cutting edge technologies and innovative practices to create truly unique and memorable experiences. Outside of
          work, I am DJ and musician passionate about acoustic and sound system culture, and have built with my group HiFive our
          own sound system which is quickly gaining visibility. If you are interested in the stuff I do, I would love to have a
          chat.
        </p>
      </div>
      <div class="contact-info-box py-4">
        <i class="icon-download tiny-arrow presentation-icon" />
        <a class="ext-link" href="/CV_2020_NicolasPrudhomme.pdf" download>Download My CV</a>
        <i class="icon-right tiny-arrow presentation-icon" />
        <nuxt-link class="ext-link" to="/about/artist-statement">
          Official Artist Statement
        </nuxt-link>
      </div>
    </p-text-box>
    <p-text-box class="w-full md:w-auto md:flex-initial about-contact">
      <template v-slot:header>
        <h1 class="title about-contact--title">
          Contact
        </h1>
        <div class="contact-info-box">
          <i class="icon-phone contact-icon" />
          <div class="contact-link">
            514.699.4738
          </div>
          <i class="icon-email contact-icon" />
          <div class="contact-link">
            <a class="ext-link" href="mailto:nic.prudhomme3@gmail.com">nic.prudhomme3[at]gmail.com</a>
          </div>
          <i class="icon-instagram contact-icon" />
          <div class="contact-link">
            <a class="ext-link" href="https://www.instagram.com/falaeco/">@falaeco</a>
          </div>
          <i class="icon-vimeo contact-icon" />
          <div class="contact-link">
            <a class="ext-link" href="https://vimeo.com/user30738704">Nicolas Prudhomme</a>
          </div>
        </div>
      </template>
    </p-text-box>
  </div>
</template>

<script>
import PTextBox from '~/components/PTextBox'
export default {
  name: 'Index',
  components: { PTextBox }
}
</script>

<style scoped lang="postcss">
  .about-presentation{
    margin-left: 0;
  }

  .about-contact{
    margin-right: 0;
  }

  .about-presentation--title{
    font-size: 3rem;
    color: var(--mdarktwo);
    -webkit-text-stroke: 1.5px var(--mwhite);
    padding-bottom: 2rem !important;
  }

  .about-contact--title{
    font-size: 2.5rem;
  }

  .contact-info-box{
    display: inline-grid;
    grid-template-columns: 35px auto;
    grid-template-rows: 1fr;
    align-items: center;
    column-gap: 5px;
    row-gap: 5px;
  }

  .contact-icon{
    color: var(--mgreyone);
    justify-self: center;
  }

  .contact-link{
    @apply font-acuminCondensed;
    color: var(--mgreytwo);
  }

  .presentation-icon{
    color: var(--mdarktwo);
    justify-self: end;
  }

  @media screen and (min-width: 767px){
    .about-presentation--title{
      font-size: 4rem;
    }
  }

  .portrait{
    width: 90%;
    margin: 0 auto;
    padding-right: 1rem;
    padding-bottom: 0.5rem;
  }

  @media (min-width: 640px) {
    .portrait{
      width: 50%;
      margin: 0;
      margin-top: 0.4rem;
      padding-right: 1rem;
    }
  }

  @media (min-width: 767px) {
    .portrait{
      width: 35%;
    }
  }

</style>
