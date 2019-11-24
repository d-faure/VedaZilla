// ==UserScript==
// @name        VedaZilla
// @namespace   https://github.com/d-faure/VedaZilla/
// @version     0.3
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

/*eslint curly: ["warn", "multi-or-nest"], no-multi-spaces: "off" */
/*global GM, jQuery */

(function($) {
  'use strict';
  //GM.log("$.fn.jquery = " + $.fn.jquery);
  //GM.log("typeof $ = " + typeof $);
  //GM.log("typeof unsafeWindow.jQuery = " + typeof unsafeWindow.jQuery);

  let MH_URL_RE = /\/mountyhall\/(.*?)\.php/,
      MH_HANDLER = {},
      VZ_GREEN = "#AEFFAE",
      VZ_RED = "#FFB7B7",
      VZ_BLUE = "#99CCFF";

  MH_HANDLER["MH_Play/PlayStart2"] = function(p, url) {
    $("#viewbutton")
      .css("margin-right", "0.5em")
      .css("color", VZ_GREEN)
      .after(
      $("#loginbutton")
      .detach()
      .css("color", VZ_RED)
    );
  };

  MH_HANDLER["MH_Play/TurnStart"] = "test authentification";

  MH_HANDLER["MH_Play/Play_menu"] = function(p, url) {
    // DLA Timer
    let inf = $("div.infoMenu"),
        dla = DateDMYHMS(/DLA:\s+([^<]+)</.exec(inf.html())[1]),
        cnt = $("<div/>").addClass("countdown");

    inf.find("br").replaceWith(cnt);

    let timer = setInterval(function() {
      let diff = DateDiff(new Date(), dla);
      if(diff.length <= 0) {
        diff = "<a href='/mountyhall/MH_Play/Activate_DLA.php' target='_top' style='color:" + VZ_GREEN + "'>Vous pouvez réactiver!</a>";
        clearInterval(timer);
      }
      cnt.html(diff);
    }, 1000);

    // Title
    let scInfo = GetScriptInfo();
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
          .append($("<a href='https://pharoz.net/MH/forum/' target='KM_forum'>Forum</a>")
            .css("color", inf.css("color")))
          .append(" - ")
          .append($("<a href='" + scInfo.downloadURL + "' title='" + scInfo.name + " v" + scInfo.version + "' target='_top'>MAJ</a>")
              .css("color", inf.css("color")))
      );
  };

  MH_HANDLER["MH_Play/Play_profil2"] = function(p, url) { GM.log("unhandled"); };

  MH_HANDLER["MH_Play/Play_action"] = function(p, url) {
    let s = $('select'),
        b = s.css("background-color");
    s.find('optgroup').each(function() {
      if ($(this).prop('label') == "** Actions Spéciales **") {
        s.find('optgroup').children().css("background-color", b);
        $(this).children().css("background-color", VZ_BLUE);
        s.css("background-color", VZ_BLUE);
      }
    });
  };

  MH_HANDLER["MH_Play/Play_e_follo"] = function(p, url) {

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

  //-- Misc tools ----
  function GetScriptInfo() {
    return {
      name: GM.info.script.name,
      version: GM.info.script.version,
      downloadURL: GM.info.scriptMetaStr.match(/@downloadURL\s+(.*)\s*/i)[1]
    };
  }

  function DateDMYHMS(t) {
    return new Date(t.replace(/(\d+)\/(\d+)\/(\d+) (\d+):(\d+):(\d+)/, "$2/$1/$3 $4:$5:$6"));
  }

  function DateDiff(d1, d2) {
    let diff = {},
        tmp = Math.floor((d2 - d1) / 1000); // on s'affranchit des 1000e de s

    diff.sec  = tmp % 60; tmp = Math.floor((tmp - diff.sec) / 60);
    diff.min  = tmp % 60; tmp = Math.floor((tmp - diff.min) / 60);
    diff.hour = tmp % 24; tmp = Math.floor((tmp - diff.hour) / 24);
    diff.day  = tmp;

    return (diff.day > 5) ? "> 5j"
    : $.grep([diff.day > 0 ? diff.day +"j" : null,
              diff.hour > 0 ? diff.hour +"h" : null,
              diff.min > 0 ? diff.min +"m" : null,
              diff.sec > 0 ? diff.sec +"s" : null],
             function(o){ return o; }).join(" ");
  }

  function ExtractPos(t) {
    let tmp = /X\s*=\s*(-?\d+)\s*\|\s*Y\s*=\s*(-?\d+)\s*\|\s*N\s*=\s*(-?\d+)/.exec(t);
    return tmp ? {
      x: parseInt(tmp[1]),
      y: parseInt(tmp[2]),
      n: parseInt(tmp[3]) } : null;
  }

  function MHButton(label, callback, scope) {
    return $("<input/>")
      .addClass("mh_form_submit")
      .css("margin", "auto 0px")
      .attr("type", "button")
      .attr("value", label)
      .on('click', $.proxy(callback, scope));
  }

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

  //-- Entry point dispatcher ----
  (function(url) {
    let p = url.replace(MH_URL_RE, "$1");
    if (typeof MH_HANDLER[p] !== "function")
      GM.log('// MH_HANDLER["' + p + '"] = function(p, url) { GM.log("unhandled"); };');
    else {
      GM.log(p);
      MH_HANDLER[p](p, url);
    }
  })(window.location.pathname);

})(jQuery.noConflict());
