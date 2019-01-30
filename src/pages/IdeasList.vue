<template>
  <div class="container">
    <page-title/>

    <div class="page-content flex-center-vh">
        <ul class="ideas-list">
            <li>Zatrudnienie internetowych influencerów (YouTube, Instagram) do promowania muzeum</li>
            <li>Lampka wina do zwiedzenia ekspozycji</li>
            <li>Kawiarenka z przystawkami</li>
            <li>Jeżdżące stoliki ze zwiedzającymi wzdłuż ekspozycji podczas degustowania jedzenia</li>
            <li class="selected">Przewodnik w młodym wieku, zbliżonym do studenckiego, luźny</li>
            <li>Wykłady, pokazy mody nawiązujące do ekspozycji w muzeum</li>
            <li>Muzeum w ciemno, czyli nie wiesz na jaką ekspozycję kupujesz bilet</li>
            <li>Personel otwarty na rozmowy, bardziej przyjazny</li>
            <li>Ciekawe fakty o ekspozycji, a nie suche informacje</li>
            <li class="selected">Escape Room z zagadkami i szyframi</li>
            <li>Możliwość dotykania eksponatów</li>
            <li>Jeden dzień w tygodniu za darmo dla studentów</li>
            <li class="selected">Prowadzenie konta Instagramowego przez osobę, która wciela się w postać związaną z muzeum. Dodatkowo udziela się w komentarzach</li>
            <li>Kijki do selfie oraz specjalna strefa do robienia zdjęć</li>
            <li>Organizacja konkursów pod hasztagiem na Instagramie</li>
            <li>Stanowiska z dwiema maszynami symulującymi uproszczoną wersję Enigmy, gdzie jedna osoba szyfruje wiadomość, a druga musi ją odszyfrować przy pomocy dostępnych komponentów</li>
            <li>Konsole z grami szpiegowskimi, turnieje gier</li>
            <li>Zmniejszenie liczby informacji na wystawie</li>
        </ul>
    </div> <!-- /.page-content -->
  </div> <!-- /.container -->
</template>

<script>
export default {
  name: 'IdeasList'
}
</script>

<style lang="scss" scoped>
@import '../assets/scss/ideation.scss';
</style>
