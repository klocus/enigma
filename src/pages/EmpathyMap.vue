<template>
  <div class="container">
    <page-title/>

    <div class="page-content flex-center-vh">
      <div class="map">
        <div class="top">
          <div class="lines">
            <svg>
              <line x1="0" y1="100%" x2="100%" y2="0"/>
            </svg>
            <svg>
              <line x1="100%" y1="100%" x2="0" y2="0"/>
            </svg>
          </div>

          <div class="triangle-down">
            <div class="content">
              <a href="#" @click.prevent="showModal('top-down')">
                <span class="entypo-quote"></span>
                <div>Co student<br><strong>myśli i czuje?</strong></div>
              </a>
            </div>
          </div><!-- /.triangle-down -->

          <div class="triangle-up">
            <div class="content">
              <a href="#" @click.prevent="showModal('top-up')">
                <div>Co student<br><strong>mówi i robi?</strong></div>
                <span class="entypo-comment"></span>
              </a>
            </div>
          </div><!-- /.triangle-up -->

          <div class="triangle-right">
            <div class="content">
              <a href="#" @click.prevent="showModal('top-right')">
                <span class="entypo-note"></span>
                <div>Co student<br><strong>słyszy?</strong></div>
              </a>
            </div>
          </div><!-- /.triangle-left -->

          <div class="triangle-left">
            <div class="content">
              <a href="#" @click.prevent="showModal('top-left')">
                <div>Co student<br><strong>widzi?</strong></div>
                <span class="entypo-eye"></span>
              </a>
            </div>
          </div> <!-- /.triangle-right -->

        </div> <!-- /.top -->

        <div class="bottom">
          <div class="left">
            <a href="#" @click.prevent="showModal('bottom-left')">
              <strong>Bolączki</strong><br>obawy, bariery<br>
              <span class="entypo-thumbs-down"></span>
            </a>
          </div> <!-- /.left -->

          <div class="right">
            <a href="#" @click.prevent="showModal('bottom-right')">
              <strong>Korzyści</strong><br>potrzeby, cele<br>
              <span class="entypo-thumbs-up"></span>
            </a>
          </div> <!-- /.right -->
        </div> <!-- /.bottom -->
      </div> <!-- /.map -->

      <modal ref="top-down">
        <h3 slot="header">
          <span class="entypo-quote"></span> Co student myśli i czuje?
        </h3>

        <ul slot="body">
          <li>ekscytację</li>
          <li>refleksje</li>
          <li>spokój</li>
          <li>powagę</li>
          <li>przeszłość</li>
          <li>zadumę</li>
          <li>podziw</li>
          <li>klimat</li>
          <li>do pewnych rzeczy trzeba dojrzeć</li>
          <li>nudę</li>
          <li>brak zainteresowania</li>
          <li>brak koncentracji</li>
          <li>skupienie</li>
          <li>zmęczenie</li>
        </ul>
      </modal>

      <modal ref="top-up">
        <h3 slot="header">
          <span class="entypo-comment"></span> Co student mówi i robi?
        </h3>

        <ul slot="body">
          <li>planuje</li>
          <li>patrzy</li>
          <li>czeka</li>
          <li>szuka</li>
          <li>fotografuje</li>
          <li>dyskutuje</li>
          <li>chwali się</li>
          <li>zwraca uwagę</li>
          <li>zastanawia się</li>
          <li>kupuje bilet</li>
          <li>szuka informacji</li>
          <li>stara się być cicho</li>
          <li>dotyka</li>
        </ul>
      </modal>

      <modal ref="top-right">
        <h3 slot="header">
          <span class="entypo-note"></span> Co student słyszy?
        </h3>

        <ul slot="body">
          <li>szepty</li>
          <li>hałas wycieczek szkolnych</li>
          <li>opinie innych</li>
          <li>dźwięki wystawy</li>
          <li>uciszanie</li>
          <li>kroki</li>
          <li>zbyt dużo informacji</li>
        </ul>
      </modal>

      <modal ref="top-left">
        <h3 slot="header">
          <span class="entypo-eye"></span> Co student widzi?
        </h3>

        <ul slot="body">
          <li>wycieczki szkolne</li>
          <li>coś oryginalnego</li>
          <li>coś starego</li>
          <li>rzeczy niedostępne</li>
          <li>innych ludzi</li>
          <li>opisy</li>
          <li>wnętrze</li>
          <li>natłok informacji</li>
          <li>natłok barw</li>
          <li>dezorganizację</li>
          <li>niedziałające multimedia</li>
        </ul>
      </modal>

      <modal ref="bottom-left">
        <h3 slot="header">
          <span class="entypo-thumbs-down"></span> Bolączki - obawy i bariery
        </h3>

        <ul slot="body">
          <li>zbyt mała wiedza</li>
          <li>przymus</li>
          <li>koszty</li>
          <li>nuda</li>
          <li>ocenianie przez innych</li>
          <li>długość wystawy</li>
          <li>kolejki</li>
          <li>zakaz dotykania eksponatów</li>
        </ul>
      </modal>

      <modal ref="bottom-right">
        <h3 slot="header">
          <span class="entypo-thumbs-up"></span> Korzyści - potrzeby i cele
        </h3>

        <ul slot="body">
          <li>interakcja</li>
          <li>rozwój osobisty</li>
          <li>pamiątki</li>
          <li>zwiększenie swojej wiedzy</li>
          <li>poruszenie bodźców</li>
          <li>doświadczenie czegoś nowego</li>
          <li>pokazanie innym</li>
        </ul>
      </modal>
    </div> <!-- /.page-content -->
  </div> <!-- /.container -->
</template>

<script>
import Modal from '@/components/Modal'

export default {
  name: 'EmpathyMap',
  components: { Modal },
  methods: {
    showModal (name) {
      this.$refs[name].show = true
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/scss/empathy-map.scss';
</style>
