// ==UserScript==
// @name         Creature Player - Release
// @namespace    http://tampermonkey.net/
// @version      5
// @description  Best way to watch creature kino.
// @author       heytherechat
// @downloadURL  https://update.greasyfork.org/scripts/598228/Creature%20Player%20-%20Release.user.js
// @updateURL    https://github.com/heytherechat/player-release/raw/refs/heads/main/header.user.js
// @match        *://*.twitch.tv/*
// @match        *://*.vaughn.live/*
// @match        *://*.angelthump.com/*
// @match        *://*.ok.ru/*
// @match        *://*.kick.com/*
// @match        *://*.rumble.com/*
// @include      *://creature.*
// @include      *://creature.*/
// @include      *://creature.*/*
// @run-at       document-start
// @grant        GM_addStyle
// @grant        GM_addElement
// @grant        GM_cookie
// @grant        GM_getResourceURL
// @grant        GM_getResourceText
// @grant        GM_xmlhttpRequest
// @grant        GM_getValue
// @grant        GM_setValue
// @grant        unsafeWindow
// @connect      kick.com
// @connect      *.kick.com
// @connect      angelthump.com
// @connect      ok.ru
// @connect      workers.dev
// @connect      twitch.tv
// @connect      vaughn.live
// @connect      live-video.net
// @connect      vaughnsoft.net
// @connect      onrender.com
// @connect      localhost
// @connect      rumble.com
// @connect      rumble.cloud
// @connect      *
// @resource     MATERIAL_SYMBOLS_CSS https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=block&icon_names=chat_bubble,chat_bubble_off,check,fast_forward,fullscreen,fullscreen_exit,info,live_tv,pause,person,play_arrow,settings,sync,tv_gen,user_attributes,volume_down,volume_mute,volume_off,volume_up
// @resource     KICK_LOGO https://segs.lol/w0l0GO
// @resource     ANGELTHUMP_LOGO https://segs.lol/Ri4EKq
// @resource     TWITCH_LOGO https://segs.lol/uPuW8r
// @resource     OKRU_LOGO https://segs.lol/yph9gH
// @resource     RUMBLE_LOGO https://segs.lol/AwTh5y
// @resource     VAUGHN_LOGO https://segs.lol/RKtwWs
// ==/UserScript==
