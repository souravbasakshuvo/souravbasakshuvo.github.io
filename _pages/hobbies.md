---
layout: page
title: Hobbies
permalink: /hobbies/
nav: false
---

<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 20px; margin-top: 16px;">

  <div style="border: 1px solid rgba(128,128,128,0.2); border-radius: 10px; padding: 20px 24px;">
    <h4 style="margin-top: 0;">🐠 Fishkeeping &amp; Aquascaping</h4>
    <p style="margin: 0;">I maintain freshwater aquariums and enjoy the art of aquascaping — arranging aquatic plants, rocks, and driftwood to create miniature underwater landscapes. It is a relaxing and creative pursuit.</p>
  </div>

  <div style="border: 1px solid rgba(128,128,128,0.2); border-radius: 10px; padding: 20px 24px;">
    <h4 style="margin-top: 0;">🐦 Bird Keeping</h4>
    <p style="margin: 0;">I enjoy keeping and raising birds, observing their behaviours and personalities. It is a rewarding hobby that brings life and energy to my living space.</p>
  </div>

  <div style="border: 1px solid rgba(128,128,128,0.2); border-radius: 10px; padding: 20px 24px;">
    <h4 style="margin-top: 0;">✈️ Travelling</h4>
    <p style="margin: 0;">Exploring new places, cultures, and cuisines energizes me. Travelling broadens perspective and inspires fresh ideas both in life and research.</p>
  </div>

  <div style="border: 1px solid rgba(128,128,128,0.2); border-radius: 10px; padding: 20px 24px;">
    <h4 style="margin-top: 0;">♟️ Chess</h4>
    <p style="margin: 0;">Chess sharpens strategic thinking and patience. I have competed in university-level chess competitions, winning the BME Indoor Chess Championship in 2022.</p>
  </div>

  <div style="border: 1px solid rgba(128,128,128,0.2); border-radius: 10px; padding: 20px 24px;">
    <h4 style="margin-top: 0;">🏸 Badminton</h4>
    <p style="margin: 0;">Badminton is my go-to sport for staying active and refreshed.</p>
  </div>

</div>

<div id="travels-section" style="margin-top: 40px;">

<h2>Travels</h2>

<div id="travel-tabs" style="display:flex;gap:0;margin-bottom:16px;border-bottom:2px solid var(--global-divider-color);">
  <button onclick="switchTab('bangladesh')" id="tab-bangladesh" style="padding:8px 20px;border:none;background:none;cursor:pointer;font-size:1.05em;font-weight:bold;border-bottom:3px solid #2a9d8f;margin-bottom:-2px;color:#2a9d8f;">Bangladesh</button>
  <button onclick="switchTab('india')" id="tab-india" style="padding:8px 20px;border:none;background:none;cursor:pointer;font-size:1.05em;color:var(--global-text-color);border-bottom:3px solid transparent;margin-bottom:-2px;">India</button>
  <button onclick="switchTab('world')" id="tab-world" style="padding:8px 20px;border:none;background:none;cursor:pointer;font-size:1.05em;color:var(--global-text-color);border-bottom:3px solid transparent;margin-bottom:-2px;">World</button>
</div>

<!-- ── Bangladesh panel ────────────────────────────────────────────────────── -->
<div id="panel-bangladesh">

<div style="margin-bottom: 10px;">
  <span style="display:inline-block;background:var(--global-card-bg-color);border:1px solid var(--global-divider-color);border-radius:8px;padding:5px 14px;font-size:0.95em;margin-right:8px;margin-bottom:8px;">26 / 64 districts visited</span>
  <span style="display:inline-block;background:var(--global-card-bg-color);border:1px solid var(--global-divider-color);border-radius:8px;padding:5px 14px;font-size:0.95em;margin-right:8px;margin-bottom:8px;">7 / 8 divisions covered</span>
</div>

<div style="position:relative;margin-bottom:10px;">
  <div id="bd-map" style="background:#cde8e5;border-radius:10px;border:1px solid var(--global-divider-color);width:100%;overflow:hidden;"></div>
  <div style="position:absolute;top:10px;right:10px;background:var(--global-card-bg-color);border:1px solid var(--global-divider-color);border-radius:8px;padding:6px 10px;font-size:0.88em;line-height:1.8;z-index:10;color:var(--global-text-color);">
    <span style="display:inline-block;width:12px;height:12px;border-radius:3px;background:#2a9d8f;margin-right:5px;vertical-align:middle;"></span>Visited<br>
    <span style="display:inline-block;width:12px;height:12px;border-radius:3px;background:#e9f0e6;border:1px solid #ccc;margin-right:5px;vertical-align:middle;"></span>Not yet visited
  </div>
</div>

<div id="district-panel" style="display:none;border:1px solid var(--global-divider-color);background:var(--global-card-bg-color);border-radius:10px;padding:14px 16px;margin-top:10px;">
  <div id="dp-name" style="font-size:1.2em;font-weight:bold;"></div>
  <div id="dp-div" style="font-size:0.95em;font-style:italic;margin-bottom:8px;"></div>
  <div id="dp-spots"></div>
</div>

</div>

<!-- ── India panel ─────────────────────────────────────────────────────────── -->
<div id="panel-india" style="display:none;">

<div style="margin-bottom:10px;">
  <span style="display:inline-block;background:var(--global-card-bg-color);border:1px solid var(--global-divider-color);border-radius:8px;padding:5px 14px;font-size:0.95em;margin-right:8px;margin-bottom:8px;">4 / 28 states visited</span>
  <span style="display:inline-block;background:var(--global-card-bg-color);border:1px solid var(--global-divider-color);border-radius:8px;padding:5px 14px;font-size:0.95em;margin-right:8px;margin-bottom:8px;">4 cities visited</span>
  <span style="display:inline-block;background:var(--global-card-bg-color);border:1px solid var(--global-divider-color);border-radius:8px;padding:5px 14px;font-size:0.95em;margin-right:8px;margin-bottom:8px;">3 trips</span>
</div>

<div style="position:relative;margin-bottom:10px;">
  <div id="india-map" style="background:#cde8e5;border-radius:10px;border:1px solid var(--global-divider-color);width:100%;overflow:hidden;height:600px;"></div>
  <div style="position:absolute;top:10px;right:10px;background:var(--global-card-bg-color);border:1px solid var(--global-divider-color);border-radius:8px;padding:6px 10px;font-size:0.88em;line-height:1.8;z-index:10;color:var(--global-text-color);">
    <span style="display:inline-block;width:12px;height:12px;border-radius:3px;background:#2a9d8f;margin-right:5px;vertical-align:middle;"></span>Visited<br>
    <span style="display:inline-block;width:12px;height:12px;border-radius:3px;background:#e9f0e6;border:1px solid #ccc;margin-right:5px;vertical-align:middle;"></span>Not yet visited
  </div>
</div>

<div id="india-panel" style="display:none;border:1px solid var(--global-divider-color);background:var(--global-card-bg-color);border-radius:10px;padding:14px 16px;margin-top:10px;">
  <div id="ip-name" style="font-size:1.2em;font-weight:bold;margin-bottom:8px;"></div>
  <div id="ip-spots"></div>
</div>

</div>

<!-- ── World panel ─────────────────────────────────────────────────────────── -->
<div id="panel-world" style="display:none;">

<div style="margin-bottom:10px;">
  <span style="display:inline-block;background:var(--global-card-bg-color);border:1px solid var(--global-divider-color);border-radius:8px;padding:5px 14px;font-size:0.95em;margin-right:8px;margin-bottom:8px;">2 / 195 countries visited</span>
  <span style="display:inline-block;background:var(--global-card-bg-color);border:1px solid var(--global-divider-color);border-radius:8px;padding:5px 14px;font-size:0.95em;margin-right:8px;margin-bottom:8px;">1 / 6 continents visited</span>
  <span style="display:inline-block;background:var(--global-card-bg-color);border:1px solid var(--global-divider-color);border-radius:8px;padding:5px 14px;font-size:0.95em;margin-right:8px;margin-bottom:8px;">2 trips abroad</span>
</div>

<div style="position:relative;margin-bottom:10px;">
  <div id="world-map" style="background:#cde8e5;border-radius:10px;border:1px solid var(--global-divider-color);width:100%;overflow:hidden;height:460px;"></div>
  <div style="position:absolute;top:10px;right:10px;background:var(--global-card-bg-color);border:1px solid var(--global-divider-color);border-radius:8px;padding:6px 10px;font-size:0.88em;line-height:1.8;z-index:10;color:var(--global-text-color);">
    <span style="display:inline-block;width:12px;height:12px;border-radius:3px;background:#2a9d8f;margin-right:5px;vertical-align:middle;"></span>Visited<br>
    <span style="display:inline-block;width:12px;height:12px;border-radius:3px;background:#e9f0e6;border:1px solid #ccc;margin-right:5px;vertical-align:middle;"></span>Not yet visited
  </div>
</div>

<div id="world-panel" style="display:none;border:1px solid var(--global-divider-color);background:var(--global-card-bg-color);border-radius:10px;padding:14px 16px;margin-top:10px;">
  <div id="wp-name" style="font-size:1.2em;font-weight:bold;"></div>
  <div id="wp-label" style="font-size:0.95em;font-style:italic;margin-bottom:8px;"></div>
  <div id="wp-spots"></div>
</div>

</div>

</div>

<script src="https://cdnjs.cloudflare.com/ajax/libs/d3/7.8.5/d3.min.js"></script>
<script>
(function () {

  // ── Bangladesh ─────────────────────────────────────────────────────────────

  var bdAliases = {
    "Jashore":    "Jessore",
    "Chattogram": "Chittagong",
    "Coxsbazar":  "Cox's Bazar",
    "Cumilla":    "Comilla",
    "Bogura":     "Bogra"
  };

  var bdSpots = {
    "Bandarban":   ["Nilgiri Hill","Boga Lake","Chimbuk Hill","Golden Temple (Swarna Muri)","Nafakhum Waterfall","Shoilo Propat","Sangu River"],
    "Chittagong":  ["Patenga Beach","Foy's Lake","Chandranath Hill","Sitakunda Eco Park","Ethnological Museum","Bangabandhu Safari Park","War Cemetery"],
    "Cox's Bazar": ["Cox's Bazar Beach (World's Longest)","Inani Beach","Himchari National Park","Maheshkhali Island","Saint Martin's Island","Laboni Beach"],
    "Khagrachari": ["Alutila Cave","Richhang Waterfall","Marishya River Valley","Tribal Culture Museum","Parjatan Hill Resort"],
    "Rangamati":   ["Kaptai Lake","Shuvolong Waterfall","Rajban Vihara","Hanging Bridge","Tribal Cultural Institute Museum","Kaptai Dam"],
    "Dhaka":       ["Lalbagh Fort","Ahsan Manzil (Pink Palace)","Star Mosque","National Museum","Liberation War Museum","Sonargaon (Panam City)","Dhakeshwari Temple"],
    "Kishoreganj": ["Sholakia Eidgah (Largest in Bangladesh)","Egaro Sindhu","Ashtagram Haor","Nikli Haor","Jangalbari Fort"],
    "Tangail":     ["Atia Mosque (Mughal)","Mahera Zamindarbari","Dhanbari Nawab Palace","Butterfly Park","Nuhash Palli"],
    "Jamalpur":    ["Yamuna River Bank","Melandaha Zamindarbari","Garibpur Ruins","Dhal Char Area"],
    "Mymensingh":  ["Shashi Lodge (Alexander Castle)","Bangladesh Agricultural University","Botanical Garden","Muktagacha Zamindarbari","Brahmaputra River"],
    "Sherpur":     ["Garo Hills Border Area","Gazni Mosque (Mughal)","Nalitabari Natural Park","Mrittika Eco Park"],
    "Bagerhat":    ["Sixty Dome Mosque (UNESCO)","Khan Jahan Ali Shrine","Nine Dome Mosque","Shat Gombuj Complex","Khan Jahan Ali Pond"],
    "Jessore":     ["Michael Madhusudan Dutta Birthplace (Sagardari)","Chhaygazi Mosque","Tulsi Chura Flower Fields"],
    "Khulna":      ["Sundarbans (Royal Bengal Tiger)","Rupsa River","Khan Jahan Ali Bridge","Khulna Museum","Mongla Port"],
    "Kushtia":     ["Lalon Shah Mazar","Rabindranath's Kuthibari (Shilaidaha)","Hardinge Bridge","Lalon Academy","Padma River Bank"],
    "Pabna":       ["Hardinge Bridge (Historic Rail Bridge)","Lalon Shah's Birthplace Area","Pabna Mental Hospital (Historic)","Chalan Beel","Padma River Ghats"],
    "Rajshahi":    ["Varendra Research Museum","Bagha Mosque (Mughal)","Puthia Temple Complex","Rajshahi University Campus","Padma River Promenade"],
    "Sirajganj":   ["Bangabandhu Bridge (Jamuna Bridge)","Enayetpur Mosque","Chalan Beel","Jamuna River Bank"],
    "Dinajpur":    ["Kantajew Temple (Terra Cotta)","Ramsagar (Largest Man-made Lake)","Dinajpur Rajbari","Nayabad Mosque"],
    "Gaibandha":   ["Balashi Ghat","Brahmaputra & Jamuna Confluence","Char Areas (River Islands)"],
    "Kurigram":    ["Teesta River","Char Rajibpur","Chilon Beel","Bengai River"],
    "Nilphamari":  ["Nilsagar Lake (2nd Largest Natural Lake)","Uttara Gono Bhaban","Saidpur Airport & Town","Teesta Rail Bridge"],
    "Panchagarh":  ["Tetulia (Northernmost Upazila)","Bangladesh-India Zero Point","Tea Gardens of Tetulia","Bhitargarh Ruins (Ancient Fort)"],
    "Rangpur":     ["Tajhat Palace (Rangpur Rajbari)","Rangpur Zoo","Carmichael College (Historic)","Rangpur Museum","Ghaghat River"],
    "Thakurgaon":  ["Thakurgaon Sugar Mill","Haripur (Bordering India)","Salgram Rajbari Ruins","Jamalganj Mosque"],
    "Sylhet":      ["Hazrat Shah Jalal (R) Mazar","Hazrat Shah Paran (R) Mazar","Jaflong","Ratargul Swamp Forest","Lalakhal","Bichanakandi","Tea Garden Tour","Madhabpur Lake","Ali Amjad's Clock"]
  };

  var divisionMap = {
    "Bandarban":"Chittagong Division","Chittagong":"Chittagong Division","Cox's Bazar":"Chittagong Division","Khagrachari":"Chittagong Division","Rangamati":"Chittagong Division","Feni":"Chittagong Division","Lakshmipur":"Chittagong Division","Noakhali":"Chittagong Division","Comilla":"Chittagong Division","Chandpur":"Chittagong Division","Brahmanbaria":"Chittagong Division",
    "Dhaka":"Dhaka Division","Kishoreganj":"Dhaka Division","Tangail":"Dhaka Division","Gazipur":"Dhaka Division","Manikganj":"Dhaka Division","Munshiganj":"Dhaka Division","Narayanganj":"Dhaka Division","Narsingdi":"Dhaka Division","Faridpur":"Dhaka Division","Gopalganj":"Dhaka Division","Madaripur":"Dhaka Division","Rajbari":"Dhaka Division","Shariatpur":"Dhaka Division",
    "Jamalpur":"Mymensingh Division","Mymensingh":"Mymensingh Division","Sherpur":"Mymensingh Division","Netrokona":"Mymensingh Division",
    "Bagerhat":"Khulna Division","Jessore":"Khulna Division","Khulna":"Khulna Division","Kushtia":"Khulna Division","Magura":"Khulna Division","Meherpur":"Khulna Division","Narail":"Khulna Division","Satkhira":"Khulna Division","Jhenaidah":"Khulna Division","Chuadanga":"Khulna Division",
    "Pabna":"Rajshahi Division","Rajshahi":"Rajshahi Division","Sirajganj":"Rajshahi Division","Bogra":"Rajshahi Division","Joypurhat":"Rajshahi Division","Naogaon":"Rajshahi Division","Natore":"Rajshahi Division","Chapainawabganj":"Rajshahi Division",
    "Dinajpur":"Rangpur Division","Gaibandha":"Rangpur Division","Kurigram":"Rangpur Division","Nilphamari":"Rangpur Division","Panchagarh":"Rangpur Division","Rangpur":"Rangpur Division","Thakurgaon":"Rangpur Division","Lalmonirhat":"Rangpur Division",
    "Sylhet":"Sylhet Division","Habiganj":"Sylhet Division","Moulvibazar":"Sylhet Division","Sunamganj":"Sylhet Division",
    "Barguna":"Barisal Division","Barisal":"Barisal Division","Bhola":"Barisal Division","Jhalokati":"Barisal Division","Patuakhali":"Barisal Division","Pirojpur":"Barisal Division"
  };

  function getBdName(props) {
    var raw = props.ADM2_EN || props.NAME_2 || props.name || props.DISTRICT || '';
    return bdAliases[raw] || raw;
  }

  function showDistrictPanel(name) {
    document.getElementById('dp-name').textContent = name;
    document.getElementById('dp-div').textContent = divisionMap[name] || '';
    document.getElementById('dp-spots').innerHTML = bdSpots[name]
      ? bdSpots[name].map(function (s) {
          return '<span style="background:var(--global-card-bg-color);border:1px solid var(--global-divider-color);border-radius:20px;padding:3px 10px;font-size:0.88em;margin:3px;display:inline-block;">' + s + '</span>';
        }).join('')
      : '<span style="font-size:0.92em;font-style:italic;color:var(--global-text-color);">Not yet visited — no places logged.</span>';
    document.getElementById('district-panel').style.display = 'block';
  }

  var bdContainer = document.getElementById('bd-map');
  var bdW = bdContainer.clientWidth || 620;
  var bdH = Math.round(bdW * 1.1);
  var bdSvg = d3.select('#bd-map').append('svg')
    .attr('width', '100%')
    .attr('viewBox', '0 0 ' + bdW + ' ' + bdH);
  var bdSelected = null;

  d3.json('/assets/geojson/bd-districts.json')
    .then(function (geojson) {
      var proj = d3.geoMercator().fitSize([bdW, bdH], geojson);
      var path = d3.geoPath().projection(proj);
      var paths = bdSvg.selectAll('path')
        .data(geojson.features).enter().append('path')
        .attr('d', path)
        .attr('fill', function (d) { return bdSpots[getBdName(d.properties)] ? '#2a9d8f' : '#e9f0e6'; })
        .attr('stroke', '#ffffff').attr('stroke-width', 0.8)
        .style('cursor', 'pointer')
        .on('mouseover', function () { d3.select(this).style('opacity', 0.8); })
        .on('mouseout',  function () { d3.select(this).style('opacity', 1); })
        .on('click', function (event, d) {
          var name = getBdName(d.properties);
          if (bdSelected) d3.select(bdSelected).attr('stroke', '#ffffff').attr('stroke-width', 0.8);
          bdSelected = this;
          d3.select(this).attr('stroke', '#1a6b62').attr('stroke-width', 2);
          showDistrictPanel(name);
        });
      paths.append('title').text(function (d) { return getBdName(d.properties); });
    })
    .catch(function () {
      bdSvg.append('text').attr('x', bdW / 2).attr('y', bdH / 2)
        .attr('text-anchor', 'middle').attr('dominant-baseline', 'middle')
        .attr('fill', '#666').text('Map unavailable');
    });

  // ── India ──────────────────────────────────────────────────────────────────

  var indiaSpots = {
    "Delhi":         {spots:["Red Fort (Lal Qila)","India Gate","Qutub Minar","Humayun's Tomb","Lotus Temple","Jama Masjid","Chandni Chowk","Akshardham"]},
    "Rajasthan":     {spots:["Amber Fort (Jaipur)","Hawa Mahal","City Palace","Jantar Mantar","Nahargarh Fort","Jaigarh Fort","Albert Hall Museum","Jal Mahal"]},
    "Uttar Pradesh": {spots:["Taj Mahal — Agra (UNESCO)","Agra Fort (UNESCO)","Fatehpur Sikri (UNESCO)","Itmad-ud-Daulah (Baby Taj)","Mehtab Bagh"]},
    "West Bengal":   {spots:["Victoria Memorial","Howrah Bridge","Dakshineswar Temple","Kalighat Temple","Park Street","Indian Museum","Marble Palace","Princep Ghat","Belur Math"]}
  };

  var indiaMapInited = false;

  function showIndiaPanel(name) {
    document.getElementById('ip-name').textContent = name;
    document.getElementById('ip-spots').innerHTML = indiaSpots[name]
      ? indiaSpots[name].spots.map(function (s) {
          return '<span style="background:var(--global-card-bg-color);border:1px solid var(--global-divider-color);border-radius:20px;padding:3px 10px;font-size:0.88em;margin:3px;display:inline-block;">' + s + '</span>';
        }).join('')
      : '<span style="font-size:0.92em;font-style:italic;color:var(--global-text-color);">Not yet visited — no places logged.</span>';
    document.getElementById('india-panel').style.display = 'block';
  }

  function initIndiaMap() {
    indiaMapInited = true;
    var container = document.getElementById('india-map');
    var W = container.clientWidth || 620;
    var H = container.clientHeight || Math.round(W * 1.4);
    var svg = d3.select('#india-map').append('svg')
      .attr('width', '100%').attr('height', H)
      .attr('viewBox', '0 0 ' + W + ' ' + H).style('display', 'block');
    var proj = d3.geoMercator();
    var pathGen = d3.geoPath().projection(proj);
    var sel = null;
    d3.json('/assets/geojson/india-states.json').then(function (geojson) {
      proj.fitExtent([[10, 10], [W - 10, H - 10]], geojson);
      var paths = svg.selectAll('path')
        .data(geojson.features).enter().append('path')
        .attr('d', pathGen)
        .attr('fill', function (d) { return indiaSpots[d.properties.NAME_1] ? '#2a9d8f' : '#e9f0e6'; })
        .attr('stroke', '#ffffff').attr('stroke-width', 0.8)
        .style('cursor', 'pointer')
        .on('mouseover', function () { d3.select(this).style('opacity', 0.8); })
        .on('mouseout',  function () { d3.select(this).style('opacity', 1); })
        .on('click', function (event, d) {
          var name = d.properties.NAME_1;
          if (sel) d3.select(sel).attr('stroke', '#ffffff').attr('stroke-width', 0.8);
          sel = this;
          d3.select(this).attr('stroke', '#1a6b62').attr('stroke-width', 2);
          showIndiaPanel(name);
        });
      paths.append('title').text(function (d) { return d.properties.NAME_1; });
    }).catch(function () {
      svg.append('text').attr('x', W / 2).attr('y', H / 2)
        .attr('text-anchor', 'middle').attr('dominant-baseline', 'middle')
        .attr('fill', '#888').attr('font-size', 13).text('Map unavailable');
    });
  }

  // ── World ──────────────────────────────────────────────────────────────────

  var worldVisited = {"Bangladesh":true,"India":true};

  var worldSpots = {
    "Bangladesh": {note:"Home country — see Bangladesh tab", spots:[]},
    "India":      {note:"Golden Triangle + Kolkata", spots:["Red Fort","Taj Mahal","Amber Fort (Jaipur)","Victoria Memorial (Kolkata)","India Gate","Qutub Minar","Agra Fort","Howrah Bridge"]}
  };

  var worldMapInited = false;

  function showWorldPanel(name) {
    document.getElementById('wp-name').textContent = name;
    var label = '', html = '';
    if (worldVisited[name]) {
      var d = worldSpots[name];
      label = d.note;
      html = d.spots.map(function (s) {
        return '<span style="background:var(--global-card-bg-color);border:1px solid var(--global-divider-color);border-radius:20px;padding:3px 10px;font-size:0.88em;margin:3px;display:inline-block;">' + s + '</span>';
      }).join('');
    } else {
      label = '';
      html = '<span style="font-size:0.92em;font-style:italic;color:var(--global-text-color);">Not yet visited.</span>';
    }
    document.getElementById('wp-label').textContent = label;
    document.getElementById('wp-spots').innerHTML = html;
    document.getElementById('world-panel').style.display = 'block';
  }

  function initWorldMap() {
    worldMapInited = true;
    var container = document.getElementById('world-map');
    var W = container.clientWidth || 700;
    var H = container.clientHeight || 460;
    var svg = d3.select('#world-map').append('svg')
      .attr('width', '100%').attr('height', H)
      .attr('viewBox', '0 0 ' + W + ' ' + H).style('display', 'block');
    var proj = d3.geoNaturalEarth1();
    var pathGen = d3.geoPath().projection(proj);
    var sel = null;
    d3.json('/assets/geojson/world-countries.json').then(function (geojson) {
      proj.fitExtent([[10, 10], [W - 10, H - 10]], geojson);
      var paths = svg.selectAll('path')
        .data(geojson.features).enter().append('path')
        .attr('d', pathGen)
        .attr('fill', function (d) {
          var n = d.properties.name;
          if (worldVisited[n]) return '#2a9d8f';
          return '#e9f0e6';
        })
        .attr('stroke', '#ffffff').attr('stroke-width', 0.3)
        .style('cursor', 'pointer')
        .on('mouseover', function () { d3.select(this).style('opacity', 0.8); })
        .on('mouseout',  function () { d3.select(this).style('opacity', 1); })
        .on('click', function (event, d) {
          var name = d.properties.name;
          if (sel) d3.select(sel).attr('stroke', '#ffffff').attr('stroke-width', 0.3);
          sel = this;
          d3.select(this).attr('stroke', '#1a6b62').attr('stroke-width', 1.5);
          showWorldPanel(name);
        });
      paths.append('title').text(function (d) { return d.properties.name; });
    }).catch(function () {
      svg.append('text').attr('x', W / 2).attr('y', H / 2)
        .attr('text-anchor', 'middle').attr('dominant-baseline', 'middle')
        .attr('fill', '#888').attr('font-size', 13).text('Map unavailable');
    });
  }

  // ── Tab switcher ───────────────────────────────────────────────────────────

  window.switchTab = function (name) {
    ['bangladesh', 'india', 'world'].forEach(function (t) {
      document.getElementById('panel-' + t).style.display = t === name ? 'block' : 'none';
      var btn = document.getElementById('tab-' + t);
      btn.style.borderBottomColor = t === name ? '#2a9d8f' : 'transparent';
      btn.style.color = t === name ? '#2a9d8f' : 'var(--global-text-color)';
      btn.style.fontWeight = t === name ? 'bold' : 'normal';
    });
    if (name === 'india' && !indiaMapInited) setTimeout(initIndiaMap, 0);
    if (name === 'world' && !worldMapInited) setTimeout(initWorldMap, 0);
  };

}());
</script>
