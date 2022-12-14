// ==UserScript==
// @name        VedaZilla
// @namespace   https://github.com/d-faure/VedaZilla/
// @version     0.21.6
// @description Veda guild's quick'n'dirty (Violent|Tamper)Monkey userscript for MountyHall
// @author      disciple
// @copyright   2019+
// @match       http://games.mountyhall.com/*
// @match       https://games.mountyhall.com/*
// @icon        data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAMAAABg3Am1AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAMAUExURQAAAAUDBQwKBxQKBBwKEBkTBBwaJCQUBCQcCS4cBzASBDwWBDIeGCQGJDweLCwjETQkDjQqFDw0HDQqNDw2NEAeFEAlCkIsCkElF0EsFkwpEUwuHEQzFkw0ElwtH1w6BFQ1EVM8FVw5F14+GEEqLEwiNEE1J0wzLE88LFgsNFQzKV40Jl88KWw+HGQzN2E7N2w2NEQ+THA+QFRDIFZELFxCIFxKJFxNMl9VP2dEGmRLGXRLF2dEKWhMJ2ZENGdNOmJSLmxUK2xXP3RKLHdMP3BeKHdaL3pUInRfOnhVMWRaRGheSH9FR3dVQ3ZaQHReRnRmTHxhRn9pV39xZ4A8RIRMOIRXKYxWJIxfJ4xaPIBgKYFgNoNnNY9oMY1pPoRwNJBhNpFvPZxvPpxwMpx3P6RsOKRyPKR4O4RNSIxGVJBSRJZYT4NnRo9gRIRiVIxiXIRwR45wToRwVIR2WJBnTpxnRJR4QJx+RJJ4U5R+VJxwVpx9UIxqYIxyZI94YZJ+YJx+YpR+cKluSad6T6d+T6l+Qax6QLRuTLR+QLR6XKR4YKR+bJ+FObCEO52DXYyCZJCEbJyKfKOESqGNX6yFWK+MXbKER7GMSbyDRryNR7SFXLyLWbyTT7SUXbyaVKGDcayUYK6QbqSRda+YeLSaZLyWYbyZb7efd7ySfLqgZrymcMSRQcSRT8SXTcyXTMufU8maXMeVY9ShW9imX8agbcugYMyqbMSmfsimccqsf9ambNSrZdytZtSseNyybNyweOC3dey+f4yOnJSGiKyKhKyYiLSSlLCgiLSmjLylibSqlLasnryskLyyqLy2xMSihMWskc+0gceyl8i2mNS4k9S+mNy5ksi5psq+ptS8qNy+tOS+gOC+lNzClMzCrNTEp9TKrN/Eo9jFt9rMtuTEjOzDi/DLlPzKnPTVmuDLqO7NqOTOtuzSoePTuvDVsPvdtPzevPzisOTaw+zUwe/cwu3dzeTa1Pbjw/TmzPzmzvzuxPvr1Pzy2fz35/z+9AAAAEG26sQAAAEAdFJOU////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////wBT9wclAAAACXBIWXMAAA7CAAAOwgEVKEqAAAAAGHRFWHRTb2Z0d2FyZQBwYWludC5uZXQgNC4wLjOM5pdQAAAGpElEQVRIS3WVD1wT5xnHwdUVWjacW9XQ4Ay6mipqV4MYyRlgeJBVtGrrXBKoiXRxBWxo1WXEqRXoulbSDUkiGqZAhVlJAiFX/oSYuI6mTLryJzUytTQ5SE0woHAsSd9j7EISTJT9Pnef5O6e7+d9nz/v80TMzKcJ4vZ6/f8f0byA2+QBAJsMPIVrPgC4unFsEP0POgoCb+YEwHyAt6fO9hWGT0+jk48QwNUzD4D3J4lu251O5323wxN45xcY+jP2OIBbSBKjpvl8/Q3tLac1ZAkAHNwB/DEAR2lS7YEDfHaaBBbobwQIL/EzeYNXiz/qNHCPMivfTaGvjIshQXACz9DqIqJLhMxhba/IvEDsMAwAU66b74jY8fE02s6XxLxqmCI3mKe9k6OD7cPVXHqWi1gnDJhAMeeO5zZGXXca9H36yuqa+N9ViD4UVUjlytPbIFENRtiEAhiKtZftQKVv3Ws8myNuq79YKTpDid4k5qZx2XDq7z/q9cUsFEBd7Tnxe77LO26WSYUFJ0XaUvFRFpmzS1TfWl8i7euz+QIQCngGoGcXbn5Qmd4ugeITV1MvZm08mgtxahrqilrtw87BKZ9RuA806o+//3bq5peTf/LzPSTG0qjVUAJLUl0vhaX3xlB0NsJhgGtVDHUXPTryiU//9feXYkm7agqfYRZIeq3adgxDv/HbhAL48Zi64Za9UYvWrGEyIRhyOHjiHSdQYL73wG2Z8GcwFAA26pC9hU1axjiULhR1s3giWFtd5PgcM1swy1zhhgKmz+82yzctJtcWFTR0pwspDL09Ncssue29iWFB+1AAN7VpK7kbY6Ph9LdS02tEsUkNPTRR20AtioGHp+8hgHc9ly7kMVY9sWzFy5bS/SIJZ8ni2B9JHA6LryLmNAeAgRN1EmHiD3+wujY5Op7COipnc5PJ5LQTJhBqPwcAy8d3jTr51lXH+h4c/+lpYZ4MptRB2hK4ogEPO0UBALi67C1NVQJ+cycy3MC+XCfN48HiZO5eurTPn7CggoBpuFOlbGxENE2I/njMSs4+saQoOyq1Gkq73D7PCvjN1hG1SqVSNjUXM0kLnqSXCugwi0rKkm6BOdqw5uEHQJdV5wNapBsWREZGbuTw8pI4/ByYDlfwc5tNjwHeyW57CwF0Nq+JjFwYtZDGgOvTuI1yAb/k/JH89485QohZAPx70K5TqzsNGd9bsGjRCgqtIO6AXNGmVZz9Y/5vX3yzuAaftZ1VALDZr3Yavn1/2ZMMiJ7CyTpDl6k62trUZ0/lv5KRnlHY+7DR+oH+HvzuvfG/rSdlCtj7c3icPq5cqdFfrpadyj+YuPPF7X/qm8u2H3Blf2azntwaBwnKeILSbtbFitN/RZDLFysOH8zftfXgkcYRR7D8ZoEZ0Lth/dq1MYvS+GV5PGl3Lixmy5s6Pvm44kj+YeHWQuSWEwumzw98d/PCH06KukzUndvgJEkuFyqAfoMYblsr39jOpK4vREbGgCuQPj/g6f3HByezPzicben5cHMydSmZxeLpjE5n9ivPpzNfKOkYGQdfYziOE67PAtO2C8UU8tIV8UuSsk7Umfp3xybmZiLG+wOJr65//mcZMt3I2HQtaefuWsIRHzBt2XMoDuKWyWT8fSkUyqYzPe8sZaXIDO6eTH7hwe2vNiFGO/72U8uXr81GfQMFdJGfSYK1ROY0KqWy/LUt8TuOQfp1ZYZxS+6l+uJzJUqdcWScxsjPf2P5bgIAJg68hDncqfQVn1KtuVKembghtyRFph9zceq1JeebEN1Ve83KPNmpvUUOEOEZ7dX/KmHgLqJUNaqUGm0rckWw8hfbEnhKg9OTxZFfamrp0F2tZu2vUr7OHyJ88Ixixl8Lh+7riNNwRYm0tSLKqn3wFnY5MuL97y9JcJ5coZALeLz3zr5e4psuEa5Dfbc4wtfM9mvGlsYqRUcH0qQSHJCX6+xW9PpiMo2Tk1dWXi57793SL2eTHdHPWsfJTYQozALxJY1GTVxqZXl5y1V9EZVMToI4ZQo1olYotOZAbUTMuBrERQlLoqOfejqOUXyuqpHYgEDxyY3eAfQbq9V6x2y+fcfhwnxDLgAAAMa+6v4L81wZn7WOkcFicY5+dAfz4tM4Tnxye9xTYX1mNtNegIOucWOnRrY/Ey6oG5xwT019gdps6KjLHdYBCPlricjeP4fG7deuIdKGUa9vcExd//QLFO1/2FODCgJet8VC7Hhg0BM0mQDA65uCjygIENuasKFE2w08/h/NzPwPOHaIyvrbq40AAAAASUVORK5CYII=
// @run-at      document-end
// @grant       GM.info
// @grant       GM_info
// @grant       GM.getValue
// @grant       GM_getValue
// @grant       GM.setValue
// @grant       GM_setValue
// @grant       GM.xmlHttpRequest
// @require     https://greasemonkey.github.io/gm4-polyfill/gm4-polyfill.js
// @downloadURL https://github.com/d-faure/VedaZilla/raw/master/VedaZilla.user.js
// @updateURL   https://github.com/d-faure/VedaZilla/raw/master/VedaZilla.meta.js
// ==/UserScript==

// vérif UTF-8 ş

// ## Scripts utiles ##
//
// Ordre | Script                    | Url
// ------+---------------------------+--------------------------------
//   1   | Tout_MZ                   | https://greasyfork.org/scripts/23602-tout-mz/code/Tout_MZ.user.js
//   2   | VedaZilla                 | ...
//   3   | Trajet des gowap MkII     | https://greasyfork.org/scripts/23887-trajet-des-gowap-mkii/code/Trajet%20des%20gowap%20MkII.user.js
//   4   | Capitan                   | https://greasyfork.org/scripts/23991-capitan/code/Capitan.user.js
//   5   | Le Baroufleur             | https://greasyfork.org/scripts/38749-mountyhall-le-baroufleur/code/%5BMountyhall%5D%20Le%20Baroufleur.user.js
//   6   | Assistant Mélange Magique | https://greasyfork.org/scripts/38746-mountyhall-assistant-m%C3%A9lange-magique/code/%5BMountyhall%5D%20Assistant%20M%C3%A9lange%20Magique.user.js
//   7   | grattageComplet           | https://github.com/Dragt/listerGrattages/raw/master/grattageComplet.user.js
//

/*eslint curly: ["warn", "multi-or-nest"], no-multi-spaces: "off", require-await: "error" */

(function($) {
  'use strict';

  const MH_JQUERY_SRC = '/mountyhall/JavaScripts/jquery/js/jquery-3.1.1.min.js',
        MH_URL_RE = /\/mountyhall\/(.*?)\.php/,
        MH_FOLLOWERS_RE = /(Apprivoisé|Golem de (cuir|métal|papier|mithril))/i,
        VZ_LIGHT_GREEN = "#AEFFAE",
        VZ_PINK = "#FFB7B7",
        VZ_BLUE = "#99CCFF",
        VZ_PURPLE = "#900090",
        VZ_GOLD = "#FF8000",
        VZ_GREEN = "#058405",
        VZ_RED = "#FF0000",
        VZ_BLACK = "#000000",
        VZ_GREY = "#808080",
        VZ_LIGHT_GREY = "#CCCCCC",
        TIMEOUT_HANDLER = 250 /*ms*/,
        VZV_PFX = "VZ_",
        VZV_LAST_QUOTE = 'LAST_QUOTE',
        VZV_LAST_RESULT = 'LAST_RESULT',
        VZV_SAVED_TITLE = 'SAVED_TITLE',
        VZV_SAVED_MSG = 'SAVED_MSG',
        VZV_HOME_BUTTON = 'HOME_BUTTON',
        VZV_REPLY_TO_SELF = 'REPLY_TO_SELF',
        VZV_SIGNATURE = 'SIGNATURE',
        VZV_NO_EXTERNAL_VIEW = 'NO_EXTERNAL_VIEW',
        VZV_HIGHLIGHT_ANY_TD = 'HIGHLIGHT_ANY_TD',
        VZ_COMP = {
          CAMO: "4",
          IDC: "5",
          DE: "12",
          PIEGE: "15",
          CDM: "16",
          INSULTE: "18",
          PISTAGE: "21",
          LDP: "23",
          BIDOUILLE: "24",
          GRATTAGE: "26",
          DRESSAGE: "27",
          BAROUFLE: "43",
          COURSE: "44",
          MINAGE: "48"
        },
        VZV_LAST_COMP = 'LAST_COMP',
        VZ_SORT = {
          PROJO: "1",
          HYPNO: "2",
          VL: "9",
          IDT: "10",
          VT: "11",
          FP: "12",
          TP: "13",
          AE: "16",
          SACRO: "17",
          GLUE: "18",
          FA: "19",
          AA: "20",
          PROJ: "21",
          VA: "22",
          VLC: "23",
          TELEK: "24",
          BAM: "27",
          GDS: "28"
        },
        VZV_LAST_SORT = 'LAST_SORT';

  let MH_PAGE_HANDLER = {},
      MH_COMP_HANDLER = {}, MH_COMP_RESULT_HANDLER = {},
      MH_SORT_HANDLER = {}, MH_SORT_RESULT_HANDLER = {};

  //-- Configuration Page ----
  MH_PAGE_HANDLER["MH_Play/Options/Play_o_Interface"] = function(p, l) {
    let options =
        (function (title) {
          let options = $('<table>').addClass("mh_tdborder").attr({
            width: "98%",
            cellspacing: 1,
            cellpadding: 2,
            align: "center" }),
              footer = $('#footer1');
          footer.before(
            $('<div>').addClass("titre2").text(title),
            options);
          return options;
        })('VedaZilla : Options'),
        addSection = function (options, txt) {
          let td = $('<td>');
          options.append(
            $('<tr>').addClass("mh_tdtitre").append(
              td.attr({style: "font-weight: bold;"}).text(txt + " :")));
          return td;
        },
        addOption = function (options, txt, content) {
          let td = $('<td>');
          options.append(
            $('<tr>').addClass("mh_tdpage").append(
              td.text(txt ? (txt + " : ") : "").append(content)));
          return td;
        },
        addCheckOpt = function (options, vzVal, txt) {
          let opt = $("<input>").attr({
            type: "checkbox"
          }).prop("checked", VZ.GetIntValue(vzVal, 0) !== 0)
          .on('change', function () { VZ.SetValue(vzVal, 0 + $(this).prop("checked")); }),
              td = addOption(options, false, opt).append(" " + txt);
          return td;
        };

    addSection(options, "Boutons de connexion");
    let cnxButtonLabel = function () { return (VZ.GetIntValue(VZV_HOME_BUTTON, 0) === 0) ? 'Original MH' : 'Special Klak'; };
    addOption(options, "Ordre",  MH.Button(cnxButtonLabel(), function () {
      VZ.SetValue(VZV_HOME_BUTTON, 1 - VZ.GetIntValue(VZV_HOME_BUTTON, 0));
      $(this).text(cnxButtonLabel());
    }));

    addSection(options, "Messagerie");
    addCheckOpt(options, VZV_REPLY_TO_SELF, "S'ajouter en destinataire");
    addOption(options, "Signature", $("<input>")
              .addClass("TextboxV2")
              .on('change', function () {
      VZ.SetValue(VZV_SIGNATURE, $(this).val());
    }).val(VZ.GetValue(VZV_SIGNATURE, '')));

    addSection(options, "Vue");
    addCheckOpt(options, VZV_NO_EXTERNAL_VIEW, "Pas de vue externe");
    addCheckOpt(options, VZV_HIGHLIGHT_ANY_TD, "Réhausse des lignes par n'inporte quelle colonne (defaut: coordonnées uniquement)");

    /* ... */
    addOption(options, false, $('<div>')
              .css({"text-align": "right"})
              .append("(", $("<a>")
                      .attr("href", "#")
                      .text("effacer le localStorage")
                      .on('click', function () {
      VZ.ClearValues();
      return false;
    }), ")"));
  };

  //-- Login ----
  MH_PAGE_HANDLER["MH_Play/PlayStart2"] = function(p, l) {
    // Boutons login
    let btView = $("#viewbutton").css({color: VZ_LIGHT_GREEN, "margin-right": "0.5em"}),
        btLogin = $("#loginbutton").css({color: VZ_PINK, "margin-right": "0.5em"});

    if (VZ.GetIntValue(VZV_HOME_BUTTON, 0))
      btView.after(btLogin.detach());
  };

  //-- Left menu ----
  MH_PAGE_HANDLER["MH_Play/Play_menu"] = function(p, l) {
    // DLA Timer
    let inf = $("div.infoMenu"),
        dla = DMYHMSToDate(/DLA:\s+([^<]+)</.exec(inf.html())[1]),
        cnt = $("<div/>").addClass("countdown");

    inf.find("br").replaceWith(cnt);

    /* Shouldn't be using promise here?
     * cf. https://dzone.com/articles/promises-and-deferred-objects
     */
    let timer = setInterval(function() {
      let diff = DateDiff(new Date(), dla);
      if(diff.length <= 0) {
        diff = "<a href='/mountyhall/MH_Play/Activate_DLA.php' target='_top' style='color:{0}'>Vous pouvez réactiver!</a>".format(VZ_LIGHT_GREEN);
        clearInterval(timer);
      }
      cnt.html(diff);
    }, 1000);

    // Liens Titre
    let linkcss = {"color": inf.css("color"), "text-decoration": "underline"},
        scInfo = GetScriptInfo();
    $("div.titreMenu")
      .parent().after(
      $("<div>")
      .css({
        position: "absolute",
        top: "35px",
        left: inf.css("left"),
        width: inf.css("width"),
        "font-size": inf.css("font-size"),
        "font-weight": inf.css("font-weight"),
        "text-align": "center",
        "padding-top": "4px",
        "border-top": "1px solid " + inf.css("color")
      })
      .css({"color": inf.css("color")})
//      .append($("<a href='//pharoz.net/MH/forum/' target='KM_forum'>Forum</a>")
//              .css(linkcss))
//      .append(" &middot; ")
//      .append($("<a href='//www.sciz.fr/event' target='SCIZ'>SCIZ</a>")
//              .css(linkcss))
//      .append(" &middot; ")
      .append($("<a href='{0}' title='{1} v{2}' target='_top'>MAJ</a>".format(scInfo.downloadURL, scInfo.name, scInfo.version))
              .css(linkcss))
    );
  };

  MH_PAGE_HANDLER["MH_Play/Play_profil"] =
    MH_PAGE_HANDLER["MH_Play/Play_profil2"] = function(p, l) {
    // Get rid of Bricol stuff and use Troogle
    let lieux = $('a:contains("Lieux à proximité")'),
        pos = MH.ExtractPos(lieux.parent().text().replace(/\n/gm, ""));

    lieux.attr("href", [
      "http://troogle.iktomi.eu/entities/?utf8=%E2%9C%93",
      "entity_search[search]=@lieu",
      "entity_search[position_x]={x}", "entity_search[position_y]={y}", "entity_search[position_z]={n}"
    ].join('&').format(pos));
  };

  MH_PAGE_HANDLER["MH_Play/Play_vue"] = function(p, l) {
    let monsterTableSpec = "table#VueMONSTRE",
        trollTableSpec = "table#VueTROLL",
        treasureTableSpec = "table#VueTRESOR",
        champiTableSpec = "table#VueCHAMPIGNON",
        lieuxTableSpec = "table#VueLIEU",
        cadavresTableSpec = "table#VueCADAVRE",

        getCellsForCol = function (tableSpec, colTitle) {
          let nthChild = $("{0} tr.mh_tdtitre  th:contains('{1}')".format(tableSpec, colTitle)).index() + 1;
          return $("{0} tr.mh_tdpage td:nth-child({1})".format(tableSpec, nthChild));
        },

        highlightItems = function (tableSpec, colTitle, itemSpecs) {
           getCellsForCol(tableSpec, colTitle).each(function () {
            $(this).html((function(txt) {
              $.each(itemSpecs, function(i, r) {
                txt = txt.replace(r[0], r[1]);
              });
              return txt;
            })($(this).html()));
          });
        },

        addSameXYN = function(tableSpecs) {
          $("<style type='text/css'>tr.xyn td, tr.xyn-sel td { background-color: beige; }</style>").appendTo("head");

          let tdSel = "td:nth-child({0})",
              toggleFn = function (e) {
                let tr = $(this).parent("tr");
                $("tr[data-xyn='{0}']".format(tr.attr("data-xyn"))).toggleClass(e.data.class);
              };

          $.each(tableSpecs, function (i, tableSpec) {
            let nthChild = $('{0} tr.mh_tdtitre  th:contains("X")'.format(tableSpec)).index(),
                xId = nthChild + 1,
                yId = nthChild + 2,
                nId = nthChild + 3;
            $(tableSpec + " tr.mh_tdpage").each(function(i, e) {
              let tr =  $(e),
                  tdX = tr.find(tdSel.format(xId)),
                  tdY = tr.find(tdSel.format(yId)),
                  tdN = tr.find(tdSel.format(nId));

              tr.attr("data-xyn", [tdX.text(), tdY.text(), tdN.text()].join(";"));

              $.each(
                VZ.GetIntValue(VZV_HIGHLIGHT_ANY_TD, 0) !== 0 ? tr.find("td") : [tdX, tdY, tdN],
                function(i, e) {
                  let td = $(e);
                  td.on("mouseenter mouseleave", {class:"xyn"}, toggleFn);
                  td.on("click", {class:"xyn-sel"}, toggleFn);
                });
            });
          });
        };

    if (VZ.GetIntValue(VZV_NO_EXTERNAL_VIEW, 0) !== 0)
      $("#selectVue2D").closest("div").remove();

    //VZdebug($("#MZ_TITRE_NIVEAU_MONSTRE"));
    let monsters = getCellsForCol(monsterTableSpec, "Nom");
    monsters.find("a").match(MH_FOLLOWERS_RE).css({ 'color': VZ_BLACK });
    monsters.find("a:contains('Sauvage')").css({ 'color': VZ_GREEN });

    highlightItems(treasureTableSpec, "Type", [
      [/(Gigots de Gob)'?/, "<b style='color:{0}' title='Piecettes à Miltown'>$1</b>".format(VZ_GOLD)],
      [/(Composant)/, "<b style='color:{0}'>$1</b>".format(VZ_GREEN)],
      [/(Carte|Coquillage|Conteneur|Minerai|Parchemin|Tête Réduite|Spécial)/, "<b style='color:{0}'>$1</b>".format(VZ_PURPLE)]
    ]);
    highlightItems(lieuxTableSpec, "Nom", [
      [/(Portail de Téléportation)/, "<b style='color:{0}'>$1</b>".format(VZ_GREEN)],
      [/(Sortie de Portail)/, "<b style='color:{0}'>$1</b>".format(VZ_RED)],
    ]);
    addSameXYN([monsterTableSpec, trollTableSpec, treasureTableSpec, champiTableSpec, lieuxTableSpec, cadavresTableSpec]);
  };

  MH_PAGE_HANDLER["MH_Play/Play_action"] = function(p, l) {
    // Actions spéciales
    let s = $('select'),
        b = s.css("background-color"),
        bg = {"background-color": VZ_BLUE};
    s.find('optgroup').each(function() {
      if ($(this).prop('label') == "** Actions Spéciales **") {
        s.find('optgroup').children().css({"background-color": b});
        $(this).children().css(bg);
        s.css(bg);
      }
    });
    // RAZ suivi action/comp/sort
    VZ.SetValue(VZV_LAST_COMP, null);
    VZ.SetValue(VZV_LAST_SORT, null);
  };

  MH_PAGE_HANDLER["MH_Play/Play_e_follo"] = function(p, l) {
    // Actions des suivants
    $('td.mh_tdtitre_fo').each(function(i, e) {
      let td = $(e),
          fullname = td.find("a:first").text().trim(),
          tmp = /^(.*) \((\d+)\)$/.exec(fullname),
          name = tmp[1], id = tmp[2],
          url = "<a href='/mountyhall/MH_Follower/FO_{0}.php?ai_IdFollower={id}'>{0}</a>".format({id: id});
      VZ.log({fullname: fullname, name: name, id: id, url: url});
      $("<tr/>")
        .append($("<td/>")
                .addClass("mh_tdpage")
                .append(["Profil", "Ordres", "Equipement", "Description"].map(function (v) { return url.format(v); }).join(" - ")))
        .insertAfter(td.parents("tr:first"));
    });
  };

   MH_PAGE_HANDLER["MH_Follower/FO_NewOrderOK"] =
     MH_PAGE_HANDLER["MH_Follower/FO_DeleteOrder"] = function(p, l) {
     $('form').submit();
   };

  MH_PAGE_HANDLER["Messagerie/ViewMessage"] =
    MH_PAGE_HANDLER["Messagerie/ViewMessageBot"] = function(p, l) {
    $("<span>")
    .append(MH.Button("Mémo Citation", function () { VZ.SetValue(VZV_LAST_QUOTE, $('#messageContent').html()); }))
    .append(' &middot; ')
    .prependTo($("input[name='bAnswer']").parent());
  };

  MH_PAGE_HANDLER["Messagerie/MH_Messagerie"] = function(p, l) {
    // Rédaction messages
    let notARegularMessage = l.search.match(/^\?cat=3/) === null,
        notAGuildMessage = l.search.match(/^\?cat=7&section=2/) === null;
    if (notARegularMessage && notAGuildMessage)
      return;

    let ti = $("input[name=Titre]"),
        ta = $("textarea[name='Message']"),
        bt = $("input[name='bsSend']"),
        pr = (function(bt) {
          bt.closest( "tr" )
            .after($("<tr>")
                   .addClass("mh_tdpage")
                   .append($("<td>")
                           .attr("colspan", 4)
                           .append($("<div>")
                                   .attr("id", "preview")
                                  )
                          )
                  );
          return $('#preview');
        })(bt),
        wordwrap = function (str, width, brk, cut) {
          brk = brk || '\n';
          width = width || 75;
          cut = cut || false;
          if(!str)  return str;
          let regex = '.{0,' + width + '}(\\s|$)' + (cut ? '|.{' + width + '}|.+$' : '|\\S+?(\\s|$)');
          return str.match(RegExp(regex, 'g')).join(brk);
        },
        render = function (from, to) { to.html(wordwrap (from.val(), 75, '<br/>')); },
        insert = function (ta, txt) {
          let beg = ta[0].selectionStart,
              end = ta[0].selectionEnd;
          ta.val(ta.val().substring(0, beg) + txt + ta.val().substring(end, ta.val().length));
          ta.trigger("change");
        },
        enclose = function (ta, ts, te, ph) {
          let beg = ta[0].selectionStart,
              end = ta[0].selectionEnd,
              txt = ph || "copier le texte ici",
              sel = ta.val().substring(beg, end) || txt;
          ta.val(ta.val().substring(0, beg) + ts + sel + te + ta.val().substring(end, ta.val().length));
          ta.trigger("change");
        };

    // preview
    ta.on('keyup change', function(e) { render($(this), pr); });

    // actions
    bt.parent().append("&nbsp;&nbsp;&nbsp;");
    $.each([
      ["Citer", function () {
        let q = VZ.GetValue(VZV_LAST_QUOTE);
        if(q) {
          q = "> " + q.replace(/<br\/?>/gm, "\n> ");
          enclose(ta, "\n" + q + "\n", "", "> ");
        }
      }],
      ["Résultat", function () {
        let r = VZ.GetValue(VZV_LAST_RESULT);
        if(r) {
          r = r.replace(/<br\/?>/gm, "\n");
          insert(ta, "\n" + r + "\n");
        }
      }],
      ["Mémo.", function() { VZ.SetValue(VZV_SAVED_MSG, ta.val()); VZ.SetValue(VZV_SAVED_TITLE, ti.val()); }],
      ["Rappel", function() { ta.val(VZ.GetValue(VZV_SAVED_MSG)); ti.val(VZ.GetValue(VZV_SAVED_TITLE)); }],
      ["<b>G</b>", function() { enclose(ta, "<b>", "</b>"); }],
      ["<i>I</i>", function() { enclose(ta, "<i>", "</i>"); }],
      ["<u>S</u>", function() { enclose(ta, "<u>", "</u>"); }],
      ["<tt>pre</tt>", function() { enclose(ta, "\n<pre>\n", "\n</pre>\n"); }],
      ["Quote", function() { enclose(ta, "<fieldset><legend></legend>", "</fieldset>"); }],
      ["Trõlldûctéûr", function() {
        ta.val(
          ta.val()
          .replace(/°*y°*/g, '°y°')
          .replace(/a/g, 'à').replace(/e/g, 'é').replace(/i/g, 'ï').replace(/o/g, 'õ').replace(/u/g, 'û')
          .replace(/A/g, 'À').replace(/E/g, 'É').replace(/I/g, 'Ï').replace(/O/g, 'Õ').replace(/U/g, 'Û')
        );
        ta.trigger("change");
      }],
      ["😃", function () { insert(ta, "😃");}], // http://www.mountyhall.com/Forum/forum_images/emoticons/joyeux.gif
      ["😉", function () { insert(ta, "😉");}], // http://www.mountyhall.com/Forum/forum_images/emoticons/wink.gif
      ["😎", function () { insert(ta, "😎");}], // http://www.mountyhall.com/Forum/forum_images/emoticons/cool.gif
      ["🤑", function () { insert(ta, "🤑");}], // http://www.mountyhall.com/Forum/forum_images/emoticons/cheesy.gif
      ["😐", function () { insert(ta, "😐");}], // http://www.mountyhall.com/Forum/forum_images/emoticons/lipsrsealed.gif
      ["😕", function () { insert(ta, "😕");}], // http://www.mountyhall.com/Forum/forum_images/emoticons/embarrassed.gif
      ["😠", function () { insert(ta, "😠");}], // http://www.mountyhall.com/Forum/forum_images/emoticons/angry.gif
      ["😭", function () { insert(ta, "😭");}], // http://www.mountyhall.com/Forum/forum_images/emoticons/cry.gif
      ["😫", function () { insert(ta, "😫");}], // http://www.mountyhall.com/Forum/forum_images/emoticons/fatigue.gif
      ["👿", function () { insert(ta, "👿");}], // *http://www.mountyhall.com/Forum/forum_images/emoticons/evil.gif
/*
      ["🤑", function () { insert(ta, "🤑");}], // *http://www.mountyhall.com/Forum/forum_images/emoticons/gueulard.gif
      ["🤑", function () { insert(ta, "🤑");}], // *http://www.mountyhall.com/Forum/forum_images/emoticons/huh.gif
      ["🤑", function () { insert(ta, "🤑");}], // *http://www.mountyhall.com/Forum/forum_images/emoticons/rolleyes.gif
      ["🤑", function () { insert(ta, "🤑");}], // *http://www.mountyhall.com/Forum/forum_images/emoticons/sournois.gif

      ["🤑", function () { insert(ta, "🤑");}], //
/**/
      ["Signature", function () { ta.val(ta.val() + "\n\n" + VZ.GetValue(VZV_SIGNATURE));}]
    ], function(i, e) {
      bt.parent().append(MH.Button(e[0], e[1])).append(" ");
    });

    // reply
    if (notAGuildMessage && VZ.GetIntValue(VZV_REPLY_TO_SELF, 0) !== 0) {
      //(function ($){
        let n = $("a[href*='javascript:EnterPJView(']")[0].href.split("(")[1].split(',')[0],
            dt = $('#dest_tags');
        if (! dt.tagExist(n))
          dt.addTag(n, n);
      //})(unsafeWindow.jQuery);
    }

    // gestion Re(...)
    ti.val((function(v) {
      if (v) {
        VZ.log({v: v});
        v = v.replace(/Re\s*:\s*/ig, 'Re(1):');
        let re = /Re\s*\(\d+\)\s*:\s*/ig,
            n = 1 + (function() {
              let p = 0,
                  a = (v.match(re) || []).join().match(/\d+/g) || [];
              for (let i = 0; i < a.length; ++i) p += 1 * a[i];
              VZ.log({a: a, p: p});
              return p; })();
        VZ.log({v: v, n: n});
        v = v.replace(re, '').replace(/^\s+/g,'');
        let t = v.match(/^\[.*\]\s?/);
        v = ((n > 1) ? ("Re(" + n + ") : ") : "Re : ") + v;
        if (t) v = t + v.replace(t, '');
      }
      return v;
    })(ti.val()));
  };

  MH_PAGE_HANDLER["MH_Play/Actions/Play_a_Attack"] =
    MH_PAGE_HANDLER["MH_Play/Actions/Play_a_ActionYY"] = function(p, l) {
    // Selection de cible pour Attaque, CdB... ou Utiliser une potion, un parchemin...
    MH.FilterMonsterTarget();
  };

  MH_PAGE_HANDLER["MH_Play/Actions/Play_a_Combat"] = function(p, l) {
    VZ.info("Résultat de combat");
    MH.MsgEffet();
  };

  //-- Compétences ----
  MH_PAGE_HANDLER["MH_Play/Actions/Competences/Play_a_CompetenceYY"] = function(p, l) {
    MH.FilterMonsterTarget();
    let c = (new URLSearchParams(l.search)).get("ai_IdComp");
    doHandleLocation(l, VZ.SetValue(VZV_LAST_COMP, c), MH_COMP_HANDLER, 'MH_COMP_HANDLER[{0}]'.format(VZ.GetCompSpec(c)));
  };

//  MH_COMP_HANDLER[VZ_COMP.BAROUFLE] = function(p, l) {
//    VZlog("Selection de Longueur Baroufle");
//    SetVZValue(VZV_LAST_COMP, p);
//  };
//  MH_PAGE_HANDLER["MH_Play/Actions/Competences/Play_a_Competence43b"] = function(p, l) { VZlog("Page Composition Baroufle"); };
//  MH_PAGE_HANDLER["MH_Play/Actions/Competences/Play_a_Competence43c"] = function(p, l) { VZlog("Page Résultat Baroufle"); };

  MH_PAGE_HANDLER["MH_Play/Actions/Competences/Play_a_CompetenceResult"] = function(p, l) {
    let c = VZ.GetValue(VZV_LAST_COMP);
    doHandleLocation(l, c, MH_COMP_RESULT_HANDLER, 'MH_COMP_RESULT_HANDLER[{0}]'.format(VZ.GetCompSpec(c)));
    MH.MsgEffet();
  };

  MH_COMP_RESULT_HANDLER[VZ_COMP.PISTAGE] =
     MH_COMP_RESULT_HANDLER[VZ_COMP.MINAGE] = function(p, l) {
    let ctn = $('#msgDiv');
    ctn.html(ctn.html()
             .replace(/(Oxhykan)/, "$1 (X-)").replace(/(Orhykan)/,   "$1 (X+)")
             .replace(/(Mydikan)/, "$1 (Y-)").replace(/(Nohrdikan)/, "$1 (Y+)")
             .replace(/(Bas)/,     "$1 (N-)").replace(/(Haut)/,      "$1 (N+)"));
    VZ.log({ctn: ctn, html: ctn.html()});
  };

  //-- Sorts ----
  MH_PAGE_HANDLER["MH_Play/Actions/Sorts/Play_a_SortXX"] =
    MH_PAGE_HANDLER["MH_Play/Actions/Sorts/Play_a_SortYY"] = function(p, l) {
    MH.FilterMonsterTarget();
    let s = (new URLSearchParams(l.search)).get("ai_IdSort");
    doHandleLocation(l, VZ.SetValue(VZV_LAST_SORT, s), MH_SORT_HANDLER, 'MH_SORT_HANDLER[{0}]'.format(VZ.GetSortSpec(s)));
  };

  MH_PAGE_HANDLER["MH_Play/Actions/Sorts/Play_a_Sort24"] = function(p, l) { VZ.SetValue(VZV_LAST_SORT, VZ_SORT.TELEK); };

  MH_PAGE_HANDLER["MH_Play/Actions/Sorts/Play_a_Sort28"] = function(p, l) {
    MH.FilterMonsterTarget();
    VZ.SetValue(VZV_LAST_SORT, VZ_SORT.GDS);
  };

  MH_PAGE_HANDLER["MH_Play/Actions/Play_a_SortResult"] = function(p, l) {
    let s = VZ.GetValue(VZV_LAST_SORT);
    doHandleLocation(l, s, MH_SORT_RESULT_HANDLER, 'MH_SORT_RESULT_HANDLER[{0}]'.format(VZ.GetSortSpec(s)));
    MH.MsgEffet();
  };

  //-- MH dedicated tools ----
  let MH = (function () {
    return {
      MsgEffet: function() {
        $('<div>')
          .css({ "text-align": "right" })
          .append(MH.Button("Mémo Résultat", function () {
          VZ.SetValue(VZV_LAST_RESULT, $('#msgEffet').html());
          VZ.log($('#msgEffet').html());
        })).appendTo($('#msgEffet').parent());
      },

      FilterMonsterTarget: function () {
        $('select').match(/(ai_IdTarget|ai_IdCible)/i, 'name')
          .find('option').match(MH_FOLLOWERS_RE)
          .css({"color": VZ_LIGHT_GREY});
      },

      ExtractPos: function (t) {
        let tmp = /X\s*=\s*(-?\d+)\s*\|\s*Y\s*=\s*(-?\d+)\s*\|\s*N\s*=\s*(-?\d+)/.exec(t);
        return tmp ? {
          x: parseInt(tmp[1]),
          y: parseInt(tmp[2]),
          n: parseInt(tmp[3])
        } : null;
      },

      Button: function (label, callback, scope) {
        return $("<button/>")
          .addClass("mh_form_submit")
          .css({"margin": "auto 0px"})
          .on('click', function() { $.proxy(callback, scope || this)(); return false; })
          .html(label);
      },

      Input: function (label, callback, scope) {
        return $("<input/>")
          .addClass("mh_form_submit")
          .css("margin", "auto 0px")
          .attr({type: "button", value: label})
          .on('click', $.proxy(callback, scope || this));
      }
    };
  })();

  //-- VedaZilla dedicated tools ----
  let VZ = (function () {
    let _log =
        function (fn, style, args) {
          if (!args.length) return;
          let pfx = "%c[VZ]"
          if (typeof(args[0]) == 'string') {
            pfx = [pfx, args[0]].join(" ");
            args.shift();
          }
          console[fn].apply(console, [pfx, style].concat(args));
        },
        _flip = function (o) {
          let r = {};
          for(let k in o) {
            if (!o.hasOwnProperty(k)) continue;
            r[o[k]] = k;
          }
          return r;
        },
        _getSpec = function (o, fmt, k) {
          let r = _flip(o);
          return r.hasOwnProperty(k) ? fmt.format(r[k]) : '"{0}"'.format(k);
        };

    return {
      log: function () { _log("log", "", Array.prototype.slice.call(arguments)); },
      info: function () { _log("info", "color:gray;", Array.prototype.slice.call(arguments)); },
      warn: function () { _log("warn", "color:#715100;", Array.prototype.slice.call(arguments)); },
      error: function () { _log("error", "color:red;", Array.prototype.slice.call(arguments)); },
      debug: function () { _log("debug", "", Array.prototype.slice.call(arguments)); },

      GetValue: function (k, def) { return localStorage[VZV_PFX + k] || def; },
      GetIntValue: function (k, def) { return +VZ.GetValue(k, def); },
      GetData: function (k) { return JSON.parse(VZ.GetValue(k, "{}")); },

      SetValue: function (k, v) { localStorage[VZV_PFX + k] = v; return v; },
      SetData: function (k, o) { return VZ.SetValue(k, JSON.stringify(o)); },

      ClearValues: function (pfx) {
        let re = new RegExp("^" + (pfx || VZV_PFX));
        for (let i = 0; i < localStorage.length; i++) {
          let k = localStorage.key(i);
          if (k.match(re)) localStorage.removeItem(k);
        }
      },

      GetCompSpec: function (c) { return _getSpec(VZ_COMP, "VZ_COMP.{0}", c); },
      GetSortSpec: function (c) { return _getSpec(VZ_SORT, "VZ_SORT.{0}", c); },
      "":""
    }
  })();

  //-- Misc Tools (general use) ----
  function RegisterJSandJQueryExtensions() {
    // mostly https://stackoverflow.com/a/18234317/4153864
    String.prototype.format = String.prototype.format || function () {
      let s = this.toString();
      if (arguments.length) {
        let t = typeof arguments[0],
            args = ("string" === t || "number" === t) ? Array.prototype.slice.call(arguments) : arguments[0];
        for (let k in args)
          s = s.replace(new RegExp("\\{" + k + "\\}", "gi"), args[k]);
      }
      return s;
    };

    // https://stackoverflow.com/q/5574165/4153864
    $.fn.match = function (regex, attr) { // optional attr
      return this.filter(function () {
        let subject = attr ? $(this).attr(attr) : $(this).text();
        return subject && subject.match(regex) ? 1 : 0;
      });
    };
  }

  function DMYHMSToDate(t) { return new Date(t.replace(/(\d+)\/(\d+)\/(\d+) (\d+):(\d+):(\d+)/, "$2/$1/$3 $4:$5:$6")); }
  function DateToDMYHMS(d) {
    let p2 = function (n) { return (n < 10 ? "0" : "") + n; };
    return [ p2(d.getDate()), p2(d.getMonth() + 1), p2(d.getFullYear()) ].join('/')
      + ' ' + [ p2(d.getHours()), p2(d.getMinutes()), p2(d.getSeconds()) ].join(':');
  }

  function DateDiff(d1, d2) {
    let diff = {},
        tmp = Math.floor((d2 - d1) / 1000); // on s'affranchit des 1000e de s

    diff.sec  = tmp % 60; tmp = Math.floor((tmp - diff.sec) / 60);
    diff.min  = tmp % 60; tmp = Math.floor((tmp - diff.min) / 60);
    diff.hour = tmp % 24; tmp = Math.floor((tmp - diff.hour) / 24);
    diff.day  = tmp;

    return (diff.day > 5) ? "> 5j" : $.grep([
      diff.day  > 0 ? diff.day  + "j" : null,
      diff.hour > 0 ? diff.hour + "h" : null,
      diff.min  > 0 ? diff.min  + "m" : null,
      diff.sec  > 0 ? diff.sec  + "s" : null ], function(o){ return o; }).join(" ");
  }

  function GetScriptInfo() {
    return {
      name: GM.info.script.name,
      version: GM.info.script.version,
      downloadURL: GM.info.scriptMetaStr.match(/@downloadURL\s+(.*)\s*/i)[1]
    };
  }

  // [https://gist.github.com/monperrus/999065 + patches according to comments]
  // allows using all Jquery AJAX methods in Greasemonkey
  // inspired from http://ryangreenberg.com/archives/2010/03/greasemonkey_jquery.php
  // works with JQuery 1.5
  // (c) 2011 Martin Monperrus
  // (c) 2010 Ryan Greenberg
  //
  // Usage:
  //   $.ajax({
  //     url: '/p/',
  //     xhr: function(){return new GM_XHR();},
  //     type: 'POST',
  //     success: function(val){
  //        ....
  //     }
  //   });
  function GM_XHR() {
    this.type = null;
    this.url = null;
    this.async = null;
    this.username = null;
    this.password = null;
    this.status = null;
    this.headers = {};
    this.readyState = null;

    this.abort = function() { this.readyState = 0; };

    this.getAllResponseHeaders = function(name) { return (this.readyState!=4) ? "" : this.responseHeaders; };

    this.getResponseHeader = function(name) {
      let match = (new RegExp('^'+name+': (.*)$','im')).exec(this.responseHeaders);
      return match ? match[1] : '';
    };

    this.open = function(type, url, async, username, password) {
      this.type = type ? type : null;
      this.url = url ? url : null;
      this.async = async ? async : null;
      this.username = username ? username : null;
      this.password = password ? password : null;
      this.readyState = 1;
    };

    this.setRequestHeader = function(name, value) { this.headers[name] = value; };

    this.send = function(data) {
      this.data = data;
      let that = this;
      // http://wiki.greasespot.net/GM_xmlhttpRequest
      GM_xmlhttpRequest({
        method: this.type,
        url: this.url,
        headers: this.headers,
        data: this.data,
        responseType: this.responseType,
        onload: function(rsp) {
          // Populate wrapper object with returned data
          // including the Greasemonkey specific "responseHeaders"
          for (var k in Object.getOwnPropertyNames(rsp))
            that[Object.getOwnPropertyNames(rsp)[k]] = rsp[Object.getOwnPropertyNames(rsp)[k]];
          // now we call onreadystatechange
          if (that.onload) that.onload(); else that.onreadystatechange();
        },
        onerror: function(rsp) {
          for (var k in Object.getOwnPropertyNames(rsp))
            that[Object.getOwnPropertyNames(rsp)[k]] = rsp[Object.getOwnPropertyNames(rsp)[k]];
          // now we call onreadystatechange
          if (that.onerror) that.onerror(); else that.onreadystatechange();
        }
      });
    };
  };

  function TimeoutPromise(milliseconds, context) {
    let deferred = $.Deferred();
    setTimeout(function () {
      deferred.resolve(context);
    }, milliseconds);
    return deferred.promise();
  }

  //-- Handler management ----
  function doHandleLocation(location, parsedLocation, hFuncs, hSpec) {
    if (typeof(hFuncs[parsedLocation]) !== typeof(Function))
      VZ.log('%c//  %s = function(p, l) { VZ.log("[VZ] unhandled"); };', "color:green;", hSpec);
    else {
      VZ.info('Handling %s', hSpec);
      hFuncs[parsedLocation](parsedLocation, location);
      VZ.info('Handled %s', hSpec);
    }
  }

  function HandleLocation(location, parsedLocation) {
    //VZ.log('HandleLocation MH_PAGE_HANDLER["%s"] => $.fn.jquery=%s', parsedLocation, $.fn.jquery);
    RegisterJSandJQueryExtensions();

    ///*----
    // cf. https://stackoverflow.com/a/47406751/4153864
    let timer,
        handler = function (o) {
          o.disconnect();
          // trigger the handler itself
          doHandleLocation(location, parsedLocation, MH_PAGE_HANDLER, 'MH_PAGE_HANDLER["{0}"]'.format(parsedLocation));
        },
        observer = new unsafeWindow.MutationObserver(function (changes, o) {
            clearTimeout(timer);
            timer = setTimeout(handler, TIMEOUT_HANDLER, o);
        });
    timer = setTimeout(handler, TIMEOUT_HANDLER, observer); // wait for the page to stay still
    observer.observe(document, {childList: true, attributes: true, characterData: true, subtree: true});
    //----*/

    /*----
    // (using promise + delayed call to let the page being built before tweaking it)
    TimeoutPromise(TIMEOUT_HANDLER, l).then(function () {
      doHandleLocation(location, parsedLocation, MH_PAGE_HANDLER, 'MH_PAGE_HANDLER["{0}"]'.format(parsedLocation));
    });
    //----*/
  }

  unsafeWindow.addEventListener("load", function () {
    //-- Script bootstrappîng ----
    let l = window.location,
        p = l.pathname.replace(MH_URL_RE, "$1");

    VZ.info('bootstrapping on %s', l);

    if (typeof(unsafeWindow.jQuery) == 'undefined') {
      VZ.warn("insert missing jQuery on %s ...", p);

		  let head = document.getElementsByTagName('head')[0] || document.documentElement,
          script = document.createElement('script');
      script.src = MH_JQUERY_SRC;
      script.type = 'text/javascript';
      script.async = true;
      head.insertBefore(script, head.firstChild);

      (new unsafeWindow.MutationObserver(function (changes, o) {
        VZ.warn('...and wait for it to be available...');
        if (typeof(unsafeWindow.jQuery) != 'undefined') {
          o.disconnect();
          $ = unsafeWindow.jQuery;

          VZ.warn("...ok, now let's handle this (%s)", p);
          HandleLocation(l, p);
        }
      })).observe(document, {childList: true, subtree: true});
    } else
      HandleLocation(l, p);
  });

})(unsafeWindow.jQuery);
