// ==UserScript==
// @name        VedaZilla
// @namespace   https://github.com/d-faure/VedaZilla/
// @version     0.8
// @description Veda guild's quick'n'dirty (Violent|Tamper)Monkey userscript for MountyHall
// @author      disciple
// @copyright   2019+
// @match       http://games.mountyhall.com/*
// @match       https://games.mountyhall.com/*
// @icon        data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAMAAABg3Am1AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAMAUExURQAAAAUDBQwKBxQKBBwKEBkTBBwaJCQUBCQcCS4cBzASBDwWBDIeGCQGJDweLCwjETQkDjQqFDw0HDQqNDw2NEAeFEAlCkIsCkElF0EsFkwpEUwuHEQzFkw0ElwtH1w6BFQ1EVM8FVw5F14+GEEqLEwiNEE1J0wzLE88LFgsNFQzKV40Jl88KWw+HGQzN2E7N2w2NEQ+THA+QFRDIFZELFxCIFxKJFxNMl9VP2dEGmRLGXRLF2dEKWhMJ2ZENGdNOmJSLmxUK2xXP3RKLHdMP3BeKHdaL3pUInRfOnhVMWRaRGheSH9FR3dVQ3ZaQHReRnRmTHxhRn9pV39xZ4A8RIRMOIRXKYxWJIxfJ4xaPIBgKYFgNoNnNY9oMY1pPoRwNJBhNpFvPZxvPpxwMpx3P6RsOKRyPKR4O4RNSIxGVJBSRJZYT4NnRo9gRIRiVIxiXIRwR45wToRwVIR2WJBnTpxnRJR4QJx+RJJ4U5R+VJxwVpx9UIxqYIxyZI94YZJ+YJx+YpR+cKluSad6T6d+T6l+Qax6QLRuTLR+QLR6XKR4YKR+bJ+FObCEO52DXYyCZJCEbJyKfKOESqGNX6yFWK+MXbKER7GMSbyDRryNR7SFXLyLWbyTT7SUXbyaVKGDcayUYK6QbqSRda+YeLSaZLyWYbyZb7efd7ySfLqgZrymcMSRQcSRT8SXTcyXTMufU8maXMeVY9ShW9imX8agbcugYMyqbMSmfsimccqsf9ambNSrZdytZtSseNyybNyweOC3dey+f4yOnJSGiKyKhKyYiLSSlLCgiLSmjLylibSqlLasnryskLyyqLy2xMSihMWskc+0gceyl8i2mNS4k9S+mNy5ksi5psq+ptS8qNy+tOS+gOC+lNzClMzCrNTEp9TKrN/Eo9jFt9rMtuTEjOzDi/DLlPzKnPTVmuDLqO7NqOTOtuzSoePTuvDVsPvdtPzevPzisOTaw+zUwe/cwu3dzeTa1Pbjw/TmzPzmzvzuxPvr1Pzy2fz35/z+9AAAAEG26sQAAAEAdFJOU////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////wBT9wclAAAACXBIWXMAAA7CAAAOwgEVKEqAAAAAGHRFWHRTb2Z0d2FyZQBwYWludC5uZXQgNC4wLjOM5pdQAAAGpElEQVRIS3WVD1wT5xnHwdUVWjacW9XQ4Ay6mipqV4MYyRlgeJBVtGrrXBKoiXRxBWxo1WXEqRXoulbSDUkiGqZAhVlJAiFX/oSYuI6mTLryJzUytTQ5SE0woHAsSd9j7EISTJT9Pnef5O6e7+d9nz/v80TMzKcJ4vZ6/f8f0byA2+QBAJsMPIVrPgC4unFsEP0POgoCb+YEwHyAt6fO9hWGT0+jk48QwNUzD4D3J4lu251O5323wxN45xcY+jP2OIBbSBKjpvl8/Q3tLac1ZAkAHNwB/DEAR2lS7YEDfHaaBBbobwQIL/EzeYNXiz/qNHCPMivfTaGvjIshQXACz9DqIqJLhMxhba/IvEDsMAwAU66b74jY8fE02s6XxLxqmCI3mKe9k6OD7cPVXHqWi1gnDJhAMeeO5zZGXXca9H36yuqa+N9ViD4UVUjlytPbIFENRtiEAhiKtZftQKVv3Ws8myNuq79YKTpDid4k5qZx2XDq7z/q9cUsFEBd7Tnxe77LO26WSYUFJ0XaUvFRFpmzS1TfWl8i7euz+QIQCngGoGcXbn5Qmd4ugeITV1MvZm08mgtxahrqilrtw87BKZ9RuA806o+//3bq5peTf/LzPSTG0qjVUAJLUl0vhaX3xlB0NsJhgGtVDHUXPTryiU//9feXYkm7agqfYRZIeq3adgxDv/HbhAL48Zi64Za9UYvWrGEyIRhyOHjiHSdQYL73wG2Z8GcwFAA26pC9hU1axjiULhR1s3giWFtd5PgcM1swy1zhhgKmz+82yzctJtcWFTR0pwspDL09Ncssue29iWFB+1AAN7VpK7kbY6Ph9LdS02tEsUkNPTRR20AtioGHp+8hgHc9ly7kMVY9sWzFy5bS/SIJZ8ni2B9JHA6LryLmNAeAgRN1EmHiD3+wujY5Op7COipnc5PJ5LQTJhBqPwcAy8d3jTr51lXH+h4c/+lpYZ4MptRB2hK4ogEPO0UBALi67C1NVQJ+cycy3MC+XCfN48HiZO5eurTPn7CggoBpuFOlbGxENE2I/njMSs4+saQoOyq1Gkq73D7PCvjN1hG1SqVSNjUXM0kLnqSXCugwi0rKkm6BOdqw5uEHQJdV5wNapBsWREZGbuTw8pI4/ByYDlfwc5tNjwHeyW57CwF0Nq+JjFwYtZDGgOvTuI1yAb/k/JH89485QohZAPx70K5TqzsNGd9bsGjRCgqtIO6AXNGmVZz9Y/5vX3yzuAaftZ1VALDZr3Yavn1/2ZMMiJ7CyTpDl6k62trUZ0/lv5KRnlHY+7DR+oH+HvzuvfG/rSdlCtj7c3icPq5cqdFfrpadyj+YuPPF7X/qm8u2H3Blf2azntwaBwnKeILSbtbFitN/RZDLFysOH8zftfXgkcYRR7D8ZoEZ0Lth/dq1MYvS+GV5PGl3Lixmy5s6Pvm44kj+YeHWQuSWEwumzw98d/PCH06KukzUndvgJEkuFyqAfoMYblsr39jOpK4vREbGgCuQPj/g6f3HByezPzicben5cHMydSmZxeLpjE5n9ivPpzNfKOkYGQdfYziOE67PAtO2C8UU8tIV8UuSsk7Umfp3xybmZiLG+wOJr65//mcZMt3I2HQtaefuWsIRHzBt2XMoDuKWyWT8fSkUyqYzPe8sZaXIDO6eTH7hwe2vNiFGO/72U8uXr81GfQMFdJGfSYK1ROY0KqWy/LUt8TuOQfp1ZYZxS+6l+uJzJUqdcWScxsjPf2P5bgIAJg68hDncqfQVn1KtuVKembghtyRFph9zceq1JeebEN1Ve83KPNmpvUUOEOEZ7dX/KmHgLqJUNaqUGm0rckWw8hfbEnhKg9OTxZFfamrp0F2tZu2vUr7OHyJ88Ixixl8Lh+7riNNwRYm0tSLKqn3wFnY5MuL97y9JcJ5coZALeLz3zr5e4psuEa5Dfbc4wtfM9mvGlsYqRUcH0qQSHJCX6+xW9PpiMo2Tk1dWXi57793SL2eTHdHPWsfJTYQozALxJY1GTVxqZXl5y1V9EZVMToI4ZQo1olYotOZAbUTMuBrERQlLoqOfejqOUXyuqpHYgEDxyY3eAfQbq9V6x2y+fcfhwnxDLgAAAMa+6v4L81wZn7WOkcFicY5+dAfz4tM4Tnxye9xTYX1mNtNegIOucWOnRrY/Ey6oG5xwT019gdps6KjLHdYBCPlricjeP4fG7deuIdKGUa9vcExd//QLFO1/2FODCgJet8VC7Hhg0BM0mQDA65uCjygIENuasKFE2w08/h/NzPwPOHaIyvrbq40AAAAASUVORK5CYII=
// @run-at      document-idle
// @grant       GM.info
// @grant       GM_info
// @grant       GM.getValue
// @grant       GM_getValue
// @grant       GM.setValue
// @grant       GM_setValue
// @grant       GM.xmlHttpRequest
// @grant       GM_xmlHttpRequest
// @require     https://greasemonkey.github.io/gm4-polyfill/gm4-polyfill.js
// @require     https://games.mountyhall.com/mountyhall/JavaScripts/jquery/js/jquery-1.11.3.min.js
// @downloadURL https://github.com/d-faure/VedaZilla/raw/master/VedaZilla.user.js
// @updateURL   https://github.com/d-faure/VedaZilla/raw/master/VedaZilla.meta.js
// ==/UserScript==

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

/*eslint curly: ["warn", "multi-or-nest"], no-multi-spaces: "off" */
/*global GM, jQuery */

(function($) {
  'use strict';
  //GM.log("$.fn.jquery = " + $.fn.jquery);
  //GM.log("typeof $ = " + typeof $);
  //GM.log("typeof unsafeWindow.jQuery = " + typeof unsafeWindow.jQuery);

  let MH_URL_RE = /\/mountyhall\/(.*?)\.php/,
      MH_PAGE_HANDLER = {},
      MH_COMP_HANDLER = {},
      MH_SORT_HANDLER = {},
      VZ_PFX = "VZ_",
      VZ_LIGHT_GREEN = "#AEFFAE",
      VZ_PINK = "#FFB7B7",
      VZ_BLUE = "#99CCFF",
      VZ_PURPLE = "#900090",
      VZ_GOLD = "#FF8000",
      VZ_GREEN = "#058405",
      VZ_RED = "#FF0000",
      VZ_BLACK = "#000000",
      TIMEOUT_HANDLER = 250 /*ms*/;

  MH_PAGE_HANDLER["MH_Play/PlayStart2"] = function(p, l) {
    // Boutons login
    $("#viewbutton")
      .css({
        "margin-right": "0.5em",
        "color": VZ_LIGHT_GREEN
      })
      .after(
        $("#loginbutton")
          .detach()
          .css({"color": VZ_PINK})
      );
    // Cosmetic charset fix
    $("form#loginform").attr("accept-charset", "UTF-8");
  };

  MH_PAGE_HANDLER["MH_Play/NewTurn/ReportOrActive"] = function(p, l) {
    // Cosmetic charset fix
    $("form[name='ActionForm']").attr("accept-charset", "UTF-8");
  };

  MH_PAGE_HANDLER["MH_Play/TurnStart"] = function(p, l) {
    // Cosmetic charset fix
    $("form[name='Fm_EntreeForm']").attr("accept-charset", "UTF-8");
  }

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
        diff = "<a href='/mountyhall/MH_Play/Activate_DLA.php' target='_top' style='color:" + VZ_LIGHT_GREEN + "'>Vous pouvez réactiver!</a>";
        clearInterval(timer);
      }
      cnt.html(diff);
    }, 1000);

    // Liens Titre
    let linkcss = {"color": inf.css("color"), "text-decoration": "underline"},
        scInfo = GetScriptInfo();
    $("div.titreMenu")
      .parent().after(
        $("<div/>")
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
          .append($("<a href='//pharoz.net/MH/forum/' target='KM_forum'>Forum</a>")
            .css(linkcss))
          .append(" &middot; ")
          .append($("<a href='//www.sciz.fr/event' target='SCIZ'>SCIZ</a>")
            .css(linkcss))
          .append(" &middot; ")
          .append($("<a href='" + scInfo.downloadURL + "' title='" + scInfo.name + " v" + scInfo.version + "' target='_top'>MAJ</a>")
              .css(linkcss))
      );
  };

  MH_PAGE_HANDLER["MH_Play/Play_profil2"] = function(p, l) {
    // Get rid of Bricol stuff and use Troogle
    let lieux = $('a:contains("Lieux à proximité")'),
        pos = ExtractPos(lieux.parent().text().replace(/\n/gm, ""));

    lieux.attr("href", [
      "http://troogle.iktomi.eu/entities/?utf8=%E2%9C%93",
      "entity_search[search]=@lieu",
      "entity_search[position_x]=" + pos.x, "entity_search[position_y]=" + pos.y, "entity_search[position_z]=" + pos.n
      ].join('&'));
  };

  MH_PAGE_HANDLER["MH_Play/Play_vue"] = function(p, l) {
    let monsterTableSpec = "table#VueMONSTRE",
        trollTableSpec = "table#VueTROLL",
        treasureTableSpec = "table#VueTRESOR",
        champiTableSpec = "table#VueCHAMPIGNON",
        lieuxTableSpec = "table#VueLIEU",
        cadavresTableSpec = "table#VueCADAVRE",

        styleItems = function (tableSpec, colTitle, itemSelector, style) {
          let nthChild = $(tableSpec + ' tr.mh_tdtitre  th:contains("' + colTitle + '")').index() + 1;
          $(tableSpec + " tr.mh_tdpage td:nth-child(" + nthChild + ") " + itemSelector).css(style);
        },

        highlightItems = function (tableSpec, colTitle, itemSpecs) {
          let nthChild = $(tableSpec + ' tr.mh_tdtitre  th:contains("' + colTitle + '")').index() + 1;
          $(tableSpec + " tr.mh_tdpage td:nth-child(" + nthChild + ")").each(function () {
            $(this).html((function(txt) {
              $.each(itemSpecs, function(i, r) {
                txt = txt.replace(r[0], r[1]);
              });
              return txt;
            })($(this).html()));
          });
        },

        addSameXYN = function(tableSpecs) {
          $("<style type='text/css'> tr.xyn td { background-color: beige; }</style>").appendTo("head");

          let toggleFn = function () {
            let tr = $(this).parent("tr");
            $('tr[data-xyn="' + tr.attr("data-xyn") + '"]').toggleClass("xyn");
          };

          $.each(tableSpecs, function (i, tableSpec) {
            let nthChild = $(tableSpec + ' tr.mh_tdtitre  th:contains("X")').index(),
                xId = nthChild + 1,
                yId = nthChild + 2,
                nId = nthChild + 3;
            $(tableSpec + " tr.mh_tdpage").each(function(i, e) {
              let tr =  $(e),
                  tdX = tr.find("td:nth-child(" + xId + ")"),
                  tdY = tr.find("td:nth-child(" + yId + ")"),
                  tdN = tr.find("td:nth-child(" + nId + ")");

              tr.attr("data-xyn", [tdX.text(), tdY.text(), tdN.text()].join(";"));

              $.each(tr.find("td"), function(i, e) {
                let td = $(e);
                td.on("click mouseenter mouseleave", toggleFn);
              });
            });
          });
        };

    //GM.log($("#MZ_TITRE_NIVEAU_MONSTRE"));
    styleItems(monsterTableSpec, "Nom",
               "a:contains('Gowap Apprivoisé'),a:contains('Golem de cuir'),a:contains('Golem de métal'),a:contains('Golem de papier'),a:contains('Golem de mithril')",
               { 'color': VZ_BLACK });

    highlightItems(treasureTableSpec, "Type", [
      [/(Gigots de Gob)/, "<b style='color:" + VZ_GOLD + "'>$1</b>"],
      [/(Composant)/, "<b style='color:" + VZ_GREEN + "'>$1</b>"],
      [/(Carte|Coquillage|Conteneur|Minerai|Parchemin|Tête Réduite|Spécial)/, "<b style='color:" + VZ_PURPLE + "'>$1</b>"]
    ]);
    highlightItems(lieuxTableSpec, "Nom", [
      [/(Portail de Téléportation)/, "<b style='color:" + VZ_GREEN + "'>$1</b>"],
      [/(Sortie de Portail)/, "<b style='color:" + VZ_RED + "'>$1</b>"],
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
  };

  MH_PAGE_HANDLER["MH_Play/Play_e_follo"] = function(p, l) {
    // Actions des suivants
    $('form td.mh_titre3').each(function(i, e){
      let td = $(e),
          fullname = td.find("a:first").text().trim(),
          tmp = /^(\d+)\.(.*)$/.exec(fullname),
          id = tmp[1],
          name = tmp[2];
      $("<tr/>")
        .append(
          $("<td/>")
            .append([
              "<a href='/mountyhall/MH_Follower/FO_Profil.php?ai_IdFollower=" + id + "'>Profil</a>",
              "<a href='/mountyhall/MH_Follower/FO_Ordres.php?ai_IdFollower=" + id + "'>Ordres</a>",
              "<a href='/mountyhall/MH_Follower/FO_Equipement.php?ai_IdFollower=" + id + "'>Equipement</a>",
              "<a href='/mountyhall/MH_Follower/FO_Description.php?ai_IdFollower=" + id + "'>Description</a>"].join(" - "))
        )
        .insertAfter(td.parents("tr:first"));
    });
  };

  MH_PAGE_HANDLER["Messagerie/ViewMessage"] = function(p, l) {
    $("input[name='bAnswer']").parent().prepend(
      MHButton("Mémo Citation", function () {
        SetVZValue('LAST_QUOTE', $('#messageContent').html());
      })
    );
  };

  MH_PAGE_HANDLER["Messagerie/MH_Messagerie"] = function(p, l) {
    // Rédaction messages
    if (l.search.match(/^\?cat=3/)) {
      let ti = $("input[name=Titre]"),
          ta = $("textarea[name='Message']"),
          bt = $("input[name='bsSend']"),
          pr = (function(bt) {
            bt.closest( "tr" )
              .after(
                $("<tr>")
                  .addClass("mh_tdpage")
                  .append(
                    $("<td>")
                      .attr("colspan", 4)
                      .append(
                        $("<div>")
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
          render = function(from, to) { to.html(wordwrap (from.val(), 75, '<br/>')); },
          enclose = function(ta, ts, te, ph) {
            let beg = ta[0].selectionStart,
                end = ta[0].selectionEnd,
                txt = ph || "copier le texte ici",
                sel = ta.val().substring(beg, end) || txt;
            ta.val(ta.val().substring(0, beg) + ts + sel + te + ta.val().substring(end, ta.val().length));
            ta.trigger("change");
          };

      ta.on('keyup change', function(e) { render($(this), pr); });

      bt.parent().append("&nbsp;&nbsp;&nbsp;");
      $.each([
        ["Citer", function () {
          let q = GetVZValue('LAST_QUOTE');
          if(q) {
            q = "> " + q.replace(/<br\/?>/gm, "\n> ");
            enclose(ta, "\n" + q + "\n", "", "> ");
          }
        }],
        ["Mémo.", function() { SetVZValue('SAVED_MSG', ta.val()); SetVZValue('SAVED_TITLE', ti.val()); }],
        ["Rappel", function() { ta.val(GetVZValue('SAVED_MSG')); ti.val(GetVZValue('SAVED_TITLE')); }],
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
        }]
      ], function(i, e) {
        bt.parent().append(MHButton(e[0], e[1])).append(" ");
      });

      // gestion Re(...)
//      ti.val(function(i, v) {
//        if (v) {
//          let re1 = /Re\s*:\s*/ig,
//              n = (v.match(re1) || []).length,
//              re2 = /Re\s*\(\d+\)\s*:\s*/ig;
//          n += (function() {
//            let p = 0,
//                a = (v.match(re2) || []).join().match(/\d+/g);
//            for (let i = 0; i < a.length; ++i) p += 1 * a[i];
//            return p; })();
//          v = v.replace(re1, '').replace(re2, '').replace(/^\s+/g,'');
//          let t = v.match(/^\[.*\]\s?/);
//          v = ((n > 1) ? ("Re(" + n + ") : ") : "Re : ") + v;
//          if (t) v = t + v.replace(t, '');
//        }
//        return v;
//      });
    }
  };

  MH_PAGE_HANDLER["MH_Play/Actions/Competences/Play_a_CompetenceYY"] = function(p, l) {
    HandleLocation(l, (new URLSearchParams(l.search)).get("ai_IdComp"), MH_COMP_HANDLER, "MH_COMP_HANDLER");
  };

  MH_PAGE_HANDLER["MH_Play/Actions/Sorts/Play_a_SortXX"] = function(p, l) {
    HandleLocation(l, (new URLSearchParams(l.search)).get("ai_IdSort"), MH_SORT_HANDLER, "MH_SORT_HANDLER");
  };

  //-- Misc tools ----
  function GetScriptInfo() {
    return {
      name: GM.info.script.name,
      version: GM.info.script.version,
      downloadURL: GM.info.scriptMetaStr.match(/@downloadURL\s+(.*)\s*/i)[1]
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

    return (diff.day > 5) ? "> 5j" : $.grep(
      [ diff.day > 0 ? diff.day +"j" : null,
        diff.hour > 0 ? diff.hour +"h" : null,
        diff.min > 0 ? diff.min +"m" : null,
        diff.sec > 0 ? diff.sec +"s" : null ], function(o){ return o; }).join(" ");
  }

  function ExtractPos(t) {
    let tmp = /X\s*=\s*(-?\d+)\s*\|\s*Y\s*=\s*(-?\d+)\s*\|\s*N\s*=\s*(-?\d+)/.exec(t);
    return tmp ? {
      x: parseInt(tmp[1]),
      y: parseInt(tmp[2]),
      n: parseInt(tmp[3]) } : null;
  }

  function MHButton(label, callback, scope) {
    return $("<button/>")
      .addClass("mh_form_submit")
      .css({"margin": "auto 0px"})
      .on('click', function() { callback.apply(scope); return false; })
      .html(label);
  }

  function MHInput(label, callback, scope) {
    return $("<input/>")
      .addClass("mh_form_submit")
      .css("margin", "auto 0px")
      .attr("type", "button")
      .attr("value", label)
      .on('click', $.proxy(callback, scope));
  }

  function GetVZValue(k) { return localStorage[VZ_PFX + k]; }
  function SetVZValue(k, v) { localStorage[VZ_PFX + k] = v; }

  // from https://gist.github.com/tegomass/a07e622853ec788c98cb59f28df38fda
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
  //
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

    this.getAllResponseHeaders = function(name) { return (this.readyState != 4) ? "" : this.responseHeaders; };

    this.getResponseHeader = function(name) {
      let tmp = (new RegExp('^'+name+': (.*)$','im')).exec(this.responseHeaders);
      return tmp ? tmp[1] : '';
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
      GM.xmlHttpRequest({
        method: this.type,
        url: this.url,
        headers: this.headers,
        data: this.data,
        onload: function(rsp) {
          // Populate wrapper object with returned data
          // including the Greasemonkey specific "responseHeaders"
          for (var k in rsp)
            that[k] = rsp[k];
          // now we call onreadystatechange
          that.onreadystatechange();
        },
        onerror: function(rsp) {
          for (var k in rsp)
            that[k] = rsp[k];
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

  function HandleLocation(location, parsedLocation, hFuncs, hName) {
    if (typeof hFuncs[parsedLocation] !== "function")
      GM.log('[VZ] //  ' + hName + '["' + parsedLocation + '"] = function(p, l) { GM.log("[VZ] unhandled"); };');
    else {
      GM.log('[VZ] Handling ' + hName + '["' + parsedLocation + '"]');
      hFuncs[parsedLocation](parsedLocation, location);
      GM.log('[VZ] Handled ' + hName + '["' + parsedLocation + '"]');
    }
  }

  //-- Entry point dispatcher ----
  // (trying to use promise + delayed call to let the page being built before tweaking it)
  TimeoutPromise(TIMEOUT_HANDLER, window.location).then(function (l) {
    HandleLocation(l, l.pathname.replace(MH_URL_RE, "$1"), MH_PAGE_HANDLER, "MH_PAGE_HANDLER");
  });

})(jQuery.noConflict());
