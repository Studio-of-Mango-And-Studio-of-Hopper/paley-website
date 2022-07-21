<template>
  <div class="flex-grow p-8 overflow-y-auto">
    <portal to="author-photo">
      <div class="w-12 h-12 rounded-full" :style='{
        backgroundImage: `url("${author.image}")`,
        backgroundSize: "300%",
        backgroundPosition: "70% 10%"
      }' />
    </portal>
    <portal to="author-name">
      {{ author.name }}
    </portal>
    <portal to="author-bio">
      {{ author.bio }}
    </portal>
    <div class="w-full rounded-md h-80" :style='{
      backgroundImage: `url("${cover}")`,
      backgroundPosition: "center"
    }'></div>
    <h1 class="block mt-4 mb-8 text-4xl font-bold text-center text-rose-600 font-display">{{ title }}</h1>
    <p class="max-w-3xl mx-auto prose first-letter:text-5xl" v-html="textHTML"></p>
  </div>
</template> 
<script>
import { marked } from 'marked';
export default {
  layout: "post",
  data: () => ({
    author: {
      image: 'https://i.ytimg.com/vi/U3sqxmQ3jv0/maxresdefault.jpg',
      name: 'Joshua Paley',
      bio: `Tasha Lera is a junior at Gunn High School, located in Palo Alto, California. In her free time, she enjoys art, writing, and math. She has been programming for around 5 or 6 years, and loves web design in particular. Her goal is to bring coding to everyone, to both enrich the coding field, and to show how coding can become a part of everyone's daily life.`
    },
    cover: 'https://media.discordapp.net/attachments/956048944318803978/964044324042072114/unknown.png',
    title: "The 2016 AP Computer Science A Test Reviewed by an Old Curmudgeon",
    text: `
Lorem markdownum suus cruentum sole exhausta profers illis se ignibus, *vulgus*!
Pectore **cur lignoque hebeti**, te cernimus quoque monimenta; omnes tamen
molliri innixus vertitur pars inque. Extenuant patriam. Tibi alimentaque voles
Troiae via nec nido geri forti garrula Egeriae succedit ab! Palmis satis nondum
fatis, faciesque puer tamquam audenti: e.

> Sub mollit valens arte ingenium album formae **duorum**, mihi vixque mihi;
> hostile auras, si. Tecum congestis voluptas illos erubuere. Mox haut, tempora
> prior, tot, tamen Autonoeius pecus, aut movet! In meus multaque, ante suam
> legit de petit patruo et? Felix albi **stabula Stygiis**, latique contigerant
> regis vestigia quasi obortas: sine bis Tanais dignatus vulgus.

Spatio servantes coniuge nostros fulgure cum fuit solis celsa sudore. Nomen ait,
dea cum illa dissimulat manu tertius inpedit scopulum videt. Nece erudit
confudit tamen, Achaemenias arma delphine ullis [aut
alis](http://www.obnoxia-meaque.com/ferunt) lassus praedae summa cum. Genetrix
mea [calido](http://postquamcaper.com/taedia-me), erat vosne potiere, velamina,
Saturno fuit Rhexenore et.

## Lucos est

Totas argolico [luctus post bracchia](http://iris-spreto.com/hippotaden.php)
florebat blandis quae sub: o etsi et tamen. Acta ego tepido *nec* tanti quendam
generis tua tecta vultus parem iubentem At auras lacrimae titulos fata arte.
Ferumque ab puto sibi belli fugam temperat.

1. Lacrimas rapit vacarunt fictos
2. Lolium et lacrimas possum Mulciber ferre parenti
3. Fauces me est et videant Themis concursibus

Anni et, palmis lacrimaeque posce radix undae, [dominos
interserit](http://www.septemait.io/inconsolabile.aspx). Geri praetentaque
munus, animo et mihi cruribus fervet, tumens Thermodonque terram novae: movit.
Et nobilium, tactusque Lucifer, de vota Ino vagantem est, vocisque. Feto quae
heros, en satis spatii culpavi et fecundis fortis semel caput, certe lunae,
medio et ad.

## Illa tot loca multaque turaque suos

Ruit antrum terga aut erat tamen aper nec victus matris lumina frementes. Varias
placet in et pro aliqua sustulit, euhoeque dictas, comes altoque sustollit
latentem iacet, Iuppiter? In videtur ligat, non iam bracchia sanguine *aures*,
ab.

Praesens audaces vos illo pacatum egressus limite astra; tympana ingens sparsus
dominos, tumultus **tanto**. Iterum fonti. Secum Nycteus est *lacus vapore*
emissumque quam ipse prior vivum spernimus iunonis virgo, munus perque.

Vates [pater prima](http://aquis.net/andraemon.html) circumdata iuris vibrata
quae est telo gemmae, suas dixerat. Oscula ait **inmanemque tabe** clausis
[numero](http://curasque.org/et). Latonia micantes celebrare Arachnes, mea
inquit diversa, et et loco spiritus et claro, nil. **Currus animo est**:
tridentigero caput concipe parvae sequente carinis! Quoque *percurrens arbor*;
ratus mihi secabant: abiturus inlaesas parte paciscitur foret fecere modo.

## Candore ferrea

Fulmen vivum in post. Cum finge Pelasgas currus cetera cum simulacraque tunc
lustrat haesissem nec fatum iacet armis leni non! Ipse nec trementem nec
imitetur agam vultu vidit pretioque et se quoque adpropera gementis silva,
infelix. Orbem velocis exiles potitur vellet. Fixa veste erat frondibus
Euphrates bibes, vive in vestem ad vultus corpus, non nimium verterat ieiunia
quaerunt.

Flaventi et gaudet causa vestra digitosque, rigorem abominor foliisque. Amicitur
[unus flectant](http://www.fuit-mihi.net/inputetaera) ille angues caelo, et
moenia [iactatis caelebs](http://haererem-tempore.com/nemus.aspx) omnia! Quam
aut fores manat undis Cereremque avertit ventre
[instructa](http://arcem-inmeritam.io/spoliarepoteratque) senectus. Libera ubi
malorum videri notare sed natura, tabula illi: et quod, cupio ad.

## Ire petiti Limnaee

Triumphos morae. Ast percussit fugit.

    var duplexRealitySip = olap(cookie,
            kernel_manet_adware.barebonesOperatingSpreadsheet.terahertz_snapshot(
            up, hardReimage(workstation_abend), net), fsb - 2 +
            drive_pixel_ddr);
    if (-4) {
        leopard_mips_direct.io = app_expression;
        platform += dsl_mail_ctp * copy(party_rw_quicktime);
    } else {
        localhostMetal(iphone_honeypot);
    }
    if (motherboard_bitrate(heuristic_cycle(5) - 3, facebook, log_icio_system(
            install, iteration))) {
        ssid = recursive_requirements(searchGisManagement);
        drive = sip;
        prom_virtual_pup(searchUrl);
    }

Fremitu arboreae rauca exhalantur peteret rabie *Hector quos* utque, tuam umor
abdita adesto fine ora indulgens. Illa tendentes silvas Tethys, se [aether
parvos](http://www.necaesonius.org/ramis) eris. Parantem Lethaei suspectus turba
solidissima terra Pindumve illa in sua iracunda et Cometen euntem ab iactum,
fodiebant odere ut. E Minyis consuescit miranti ille quae vicit fatorum illas,
lumina ille, est labens filia habebunt. Adnuat relinquere ingeniis, vincula
*faciem*: cum videt **cruor**, erat *ille suis* placido, cognosse tu arbore;
que.

Nomenque [quem](http://poteras-est.io/et-pariterque.html), coniunx ita subiti
capillos motumque columnae, tum recessit? Sumpta ubi sorte medii terram, talis
lina, ad nec veteres! Modo ipso adveniens letalibus se pectora turbant, Nam
arcus aere aperto placuit. Aquis honorem nec sentit est: est, odiumque se
medius, et servire peragit.`
  }),
  computed: {
    textHTML() {
      return marked(this.text)
    }
  }
}
</script> <style>
</style>