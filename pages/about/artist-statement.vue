<template>
  <div>
    <p-text-box>
      <template v-slot:header>
        <h1 class="title statement-title">
          Biography
        </h1>
      </template>
      <div>
        <img src="~/assets/img/shot.jpg" alt="portrait" class="portrait md:float-left md:w-1/2">
        <p>
          Montreal multi-disciplinary artist Nick Prud'homme focuses on creating experimental software and artworks
          which strive to create an immersive and engaging experience. With a strong background in audiovisual production, his
          formal education in Computer Science and Computation Art enabled him to elevate his craft to create intriguing
          and memorable art pieces. Frequently working with VR, as in his recent work M-VR, a music visualizer, and
          ORBS, a bookmarking VR experience. These projects articulate interactions of the everyday, transforming them into a
          novel experience. Currently experimenting with generative art and interactivity, his most recent work
          Equilibria, which earned the price of Sustainability at Concordia University's Design and Computation Arts year end show
          of 2020. Often integrating cutting edge technologies and programming practices, Prud'homme strives to make
          projects that redefine the boundaries of how we experience networks, digital media and human/machine interaction.
        </p>
      </div>
    </p-text-box>
    <p-text-box>
      <template v-slot:header>
        <h1 class="title statement-title">
          Statement
        </h1>
      </template>
      <p>
        As a multidisciplinary artist, I strive to disrupt common experiences by harnessing the capabilities of new
        technologies to recontextualize, and change the nature of these experiences. Taking a familiar situation and
        transposing it into an unfamiliar setting is fundamental to my practice, which gives a new appreciation to these
        often overlooked mundane interactions.
      </p>
      <p>
        Through generativity and interaction, I utilize algorithms, randomness, sensors and data feeds to give my pieces
        an attribute of aliveness. This aspect of my work encourages viewers to independently explore and interact with
        the piece, leading them to reflect on the nature of human/machine interaction. In Machine to hang with birds
        (2019), a generative music project, the algorithm producing new iterations of the melodies would surprise the
        viewers as the musical arrangement could either come off as amusing or contemplative. As such, I always try to
        create art pieces that are multifaceted, sparking a wide range of emotional reactions as the viewers interact
        and discover the complex personality of my piece.
      </p>
      <p>
        For building narratives, I prefer my artworks to open a dialogue and pose questions that are open-ended, leaving
        the viewers to make their own conclusions. In Stupéfiant (2020), I address the topic of intoxicating substance
        through multiple lenses, presenting different emotional responses related to different substances and situations
        through non-linear narrative arcs. In this work, I do not position myself on the topic but rather present
        different aesthetic possibilities that I associate with these substances and leave the viewers to reflect on
        this experience. Ultimately, my goal is to create art pieces where the aesthetic experience is the principal
        vehicle of my narrative.
      </p>
    </p-text-box>
    <p-text-box>
      <i class="icon-left tiny-arrow" /><nuxt-link to="/about/" class="ext-link">
        General Info
      </nuxt-link>
    </p-text-box>
  </div>
</template>

<script>
import PTextBox from '~/components/PTextBox'

export default {
  name: 'ArtistStatement',
  components: { PTextBox }
}
</script>

<style scoped>
  .statement-title{
    font-size: 2rem;
  }

  .portrait{
    width: 90%;
    margin: 0 auto;
    padding-bottom: 1rem;
  }

  @media (min-width: 768px) {
    .portrait{
      width: 35%;
      margin: 0;
      padding-right: 1rem;
    }
  }
</style>
