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

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/leaflet.min.css" />

<div id="travels-section" style="margin-top: 40px;">

<h2>Travels</h2>

<p style="margin-bottom: 16px;">A snapshot of places I have explored — from Bangladesh's diverse districts to international destinations, with a wishlist of future adventures.</p>

<div style="display: flex; flex-wrap: wrap; gap: 10px; margin-bottom: 24px;">
  <div style="background: var(--global-card-bg-color); border: 1px solid var(--global-divider-color); border-radius: 8px; padding: 5px 14px; font-size: 0.85em;">26 / 64 districts visited</div>
  <div style="background: var(--global-card-bg-color); border: 1px solid var(--global-divider-color); border-radius: 8px; padding: 5px 14px; font-size: 0.85em;">7 / 8 divisions covered</div>
  <div style="background: var(--global-card-bg-color); border: 1px solid var(--global-divider-color); border-radius: 8px; padding: 5px 14px; font-size: 0.85em;">2 countries</div>
</div>

<h3>Bangladesh</h3>

<div style="display: flex; align-items: center; gap: 16px; margin-bottom: 10px; flex-wrap: wrap; font-size: 0.88em;">
  <span style="display: inline-flex; align-items: center; gap: 6px;"><span style="display: inline-block; width: 14px; height: 14px; border-radius: 50%; background: #3a7bd5;"></span>Visited</span>
  <span style="display: inline-flex; align-items: center; gap: 6px;"><span style="display: inline-block; width: 14px; height: 14px; border-radius: 50%; background: #d0d0d0;"></span>Not yet visited</span>
  <span style="opacity: 0.7;">Click a district for details</span>
</div>

<div id="bd-map" style="height: 520px; border: 1px solid var(--global-divider-color); border-radius: 10px;"></div>

<div id="district-panel" style="display: none; border: 1px solid var(--global-divider-color); background: var(--global-card-bg-color); border-radius: 10px; padding: 14px 16px; margin-top: 10px;">
  <strong id="dp-name" style="font-size: 1.05em;"></strong><span id="dp-div" style="font-size: 0.85em; opacity: 0.7; margin-left: 10px;"></span>
  <div id="dp-spots" style="display: flex; flex-wrap: wrap; gap: 6px; margin-top: 10px;"></div>
</div>

<h3>International</h3>

<div id="world-map" style="height: 360px; border: 1px solid var(--global-divider-color); border-radius: 10px; margin-bottom: 12px;"></div>

<div style="display: flex; flex-wrap: wrap; gap: 10px; margin-bottom: 10px;">
  <button onclick="showWorldInfo(0)" style="padding: 6px 16px; border-radius: 8px; border: 1px solid var(--global-divider-color); background: var(--global-card-bg-color); color: var(--global-text-color); cursor: pointer; font-size: 0.88em;">India &#8212; Golden Triangle</button>
  <button onclick="showWorldInfo(1)" style="padding: 6px 16px; border-radius: 8px; border: 1px solid var(--global-divider-color); background: var(--global-card-bg-color); color: var(--global-text-color); cursor: pointer; font-size: 0.88em;">India &#8212; Kolkata</button>
</div>

<div id="world-panel" style="display: none; border: 1px solid var(--global-divider-color); background: var(--global-card-bg-color); border-radius: 10px; padding: 14px 16px; margin-top: 10px;"></div>

<h3>Wishlist</h3>

<div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(160px, 1fr)); gap: 10px;">

  <div style="border: 1px solid var(--global-divider-color); border-radius: 10px; padding: 10px 14px; background: var(--global-card-bg-color);">
    <div style="font-size: 1.6em; line-height: 1;">🇳🇵</div>
    <div style="font-weight: 600; margin-top: 4px; font-size: 0.95em;">Nepal</div>
    <div style="font-size: 0.78em; opacity: 0.7; margin-top: 3px; line-height: 1.4;">Kathmandu, Everest Base Camp, Pokhara</div>
  </div>

  <div style="border: 1px solid var(--global-divider-color); border-radius: 10px; padding: 10px 14px; background: var(--global-card-bg-color);">
    <div style="font-size: 1.6em; line-height: 1;">🇹🇭</div>
    <div style="font-weight: 600; margin-top: 4px; font-size: 0.95em;">Thailand</div>
    <div style="font-size: 0.78em; opacity: 0.7; margin-top: 3px; line-height: 1.4;">Bangkok, Chiang Mai, Phuket</div>
  </div>

  <div style="border: 1px solid var(--global-divider-color); border-radius: 10px; padding: 10px 14px; background: var(--global-card-bg-color);">
    <div style="font-size: 1.6em; line-height: 1;">🇲🇾</div>
    <div style="font-weight: 600; margin-top: 4px; font-size: 0.95em;">Malaysia</div>
    <div style="font-size: 0.78em; opacity: 0.7; margin-top: 3px; line-height: 1.4;">Kuala Lumpur, Langkawi, Penang</div>
  </div>

  <div style="border: 1px solid var(--global-divider-color); border-radius: 10px; padding: 10px 14px; background: var(--global-card-bg-color);">
    <div style="font-size: 1.6em; line-height: 1;">🇹🇷</div>
    <div style="font-weight: 600; margin-top: 4px; font-size: 0.95em;">Turkey</div>
    <div style="font-size: 0.78em; opacity: 0.7; margin-top: 3px; line-height: 1.4;">Istanbul, Cappadocia, Pamukkale</div>
  </div>

  <div style="border: 1px solid var(--global-divider-color); border-radius: 10px; padding: 10px 14px; background: var(--global-card-bg-color);">
    <div style="font-size: 1.6em; line-height: 1;">🇦🇪</div>
    <div style="font-weight: 600; margin-top: 4px; font-size: 0.95em;">UAE</div>
    <div style="font-size: 0.78em; opacity: 0.7; margin-top: 3px; line-height: 1.4;">Dubai, Abu Dhabi</div>
  </div>

  <div style="border: 1px solid var(--global-divider-color); border-radius: 10px; padding: 10px 14px; background: var(--global-card-bg-color);">
    <div style="font-size: 1.6em; line-height: 1;">🇯🇵</div>
    <div style="font-weight: 600; margin-top: 4px; font-size: 0.95em;">Japan</div>
    <div style="font-size: 0.78em; opacity: 0.7; margin-top: 3px; line-height: 1.4;">Tokyo, Kyoto, Osaka, Nara</div>
  </div>

  <div style="border: 1px solid var(--global-divider-color); border-radius: 10px; padding: 10px 14px; background: var(--global-card-bg-color);">
    <div style="font-size: 1.6em; line-height: 1;">🇮🇹</div>
    <div style="font-weight: 600; margin-top: 4px; font-size: 0.95em;">Italy</div>
    <div style="font-size: 0.78em; opacity: 0.7; margin-top: 3px; line-height: 1.4;">Rome, Venice, Florence, Amalfi Coast</div>
  </div>

  <div style="border: 1px solid var(--global-divider-color); border-radius: 10px; padding: 10px 14px; background: var(--global-card-bg-color);">
    <div style="font-size: 1.6em; line-height: 1;">🇫🇷</div>
    <div style="font-weight: 600; margin-top: 4px; font-size: 0.95em;">France</div>
    <div style="font-size: 0.78em; opacity: 0.7; margin-top: 3px; line-height: 1.4;">Paris, Nice, Versailles</div>
  </div>

  <div style="border: 1px solid var(--global-divider-color); border-radius: 10px; padding: 10px 14px; background: var(--global-card-bg-color);">
    <div style="font-size: 1.6em; line-height: 1;">🇮🇩</div>
    <div style="font-weight: 600; margin-top: 4px; font-size: 0.95em;">Indonesia</div>
    <div style="font-size: 0.78em; opacity: 0.7; margin-top: 3px; line-height: 1.4;">Bali, Yogyakarta, Komodo Island</div>
  </div>

  <div style="border: 1px solid var(--global-divider-color); border-radius: 10px; padding: 10px 14px; background: var(--global-card-bg-color);">
    <div style="font-size: 1.6em; line-height: 1;">🇲🇻</div>
    <div style="font-weight: 600; margin-top: 4px; font-size: 0.95em;">Maldives</div>
    <div style="font-size: 0.78em; opacity: 0.7; margin-top: 3px; line-height: 1.4;">Male Atoll, Baa Atoll</div>
  </div>

  <div style="border: 1px solid var(--global-divider-color); border-radius: 10px; padding: 10px 14px; background: var(--global-card-bg-color);">
    <div style="font-size: 1.6em; line-height: 1;">🇱🇰</div>
    <div style="font-weight: 600; margin-top: 4px; font-size: 0.95em;">Sri Lanka</div>
    <div style="font-size: 0.78em; opacity: 0.7; margin-top: 3px; line-height: 1.4;">Colombo, Sigiriya, Kandy, Galle</div>
  </div>

  <div style="border: 1px solid var(--global-divider-color); border-radius: 10px; padding: 10px 14px; background: var(--global-card-bg-color);">
    <div style="font-size: 1.6em; line-height: 1;">🇲🇦</div>
    <div style="font-weight: 600; margin-top: 4px; font-size: 0.95em;">Morocco</div>
    <div style="font-size: 0.78em; opacity: 0.7; margin-top: 3px; line-height: 1.4;">Marrakech, Sahara Desert, Fes</div>
  </div>

  <div style="border: 1px solid var(--global-divider-color); border-radius: 10px; padding: 10px 14px; background: var(--global-card-bg-color);">
    <div style="font-size: 1.6em; line-height: 1;">🇪🇬</div>
    <div style="font-weight: 600; margin-top: 4px; font-size: 0.95em;">Egypt</div>
    <div style="font-size: 0.78em; opacity: 0.7; margin-top: 3px; line-height: 1.4;">Cairo (Pyramids), Luxor, Alexandria</div>
  </div>

  <div style="border: 1px solid var(--global-divider-color); border-radius: 10px; padding: 10px 14px; background: var(--global-card-bg-color);">
    <div style="font-size: 1.6em; line-height: 1;">🇨🇭</div>
    <div style="font-weight: 600; margin-top: 4px; font-size: 0.95em;">Switzerland</div>
    <div style="font-size: 0.78em; opacity: 0.7; margin-top: 3px; line-height: 1.4;">Interlaken, Zurich, Geneva, Zermatt</div>
  </div>

</div>

</div>

<script src="https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/leaflet.min.js"></script>
<script>
(function () {
  var districtData = {
    "Bandarban":    { div: "Chittagong Division", spots: ["Nilgiri Hill", "Boga Lake", "Chimbuk Hill", "Golden Temple (Swarna Muri Pagoda)", "Nafakhum Waterfall", "Shoilo Propat", "Meghla Parjatan", "Sangu River"] },
    "Chittagong":   { div: "Chittagong Division", spots: ["Patenga Beach", "Foy's Lake", "Chandranath Hill", "Sitakunda Eco Park", "Ethnological Museum", "Bangabandhu Safari Park", "War Cemetery", "Karnaphuli River"] },
    "Cox's Bazar":  { div: "Chittagong Division", spots: ["Cox's Bazar Beach (World's Longest)", "Inani Beach", "Himchari National Park", "Maheshkhali Island", "Teknaf Wildlife Sanctuary", "Saint Martin's Island", "Laboni Beach"] },
    "Khagrachari":  { div: "Chittagong Division", spots: ["Alutila Cave", "Richhang Waterfall", "Marishya River Valley", "Dighinala", "Tribal Culture Museum", "Parjatan Hill Resort"] },
    "Rangamati":    { div: "Chittagong Division", spots: ["Kaptai Lake", "Shuvolong Waterfall", "Rajban Vihara", "Hanging Bridge", "Tribal Cultural Institute Museum", "DC Bungalow Hilltop", "Kaptai Dam"] },
    "Dhaka":        { div: "Dhaka Division", spots: ["Lalbagh Fort", "Ahsan Manzil (Pink Palace)", "Star Mosque", "National Museum", "Liberation War Museum", "Baldha Garden", "Sonargaon (Panam City)", "Dhakeshwari Temple", "National Martyr's Memorial"] },
    "Kishoreganj":  { div: "Dhaka Division", spots: ["Sholakia Eidgah (Largest in Bangladesh)", "Egaro Sindhu", "Ashtagram Haor", "Nikli Haor", "Jangalbari Fort", "Shaheb Bari"] },
    "Tangail":      { div: "Dhaka Division", spots: ["Atia Mosque (Mughal)", "Mahera Zamindarbari", "Dhanbari Nawab Palace", "Butterfly Park", "Jamuna Bondhu Park", "Nuhash Palli"] },
    "Jamalpur":     { div: "Mymensingh Division", spots: ["Yamuna River Bank", "Melandaha Zamindarbari", "Garibpur Ruins", "Dhal Char Area", "Moinuddin Ahmed Park"] },
    "Mymensingh":   { div: "Mymensingh Division", spots: ["Shashi Lodge (Alexander Castle)", "Bangladesh Agricultural University Campus", "Botanical Garden", "Muktagacha Zamindarbari", "Muktagacha Monda", "Brahmaputra River"] },
    "Sherpur":      { div: "Mymensingh Division", spots: ["Garo Hills Border Area", "Gazni Mosque (Mughal)", "Nalitabari Natural Park", "Madhupur Forest Edge", "Mrittika Eco Park"] },
    "Bagerhat":     { div: "Khulna Division", spots: ["Sixty Dome Mosque (UNESCO)", "Khan Jahan Ali Shrine", "Nine Dome Mosque", "Shat Gombuj Mosque Complex", "Reza Khoda Mosque", "Khan Jahan Ali Pond (with crocodiles)"] },
    "Jessore":      { div: "Khulna Division", spots: ["Michael Madhusudan Dutta Birthplace (Sagardari)", "Chhaygazi Mosque", "Tulsi Chura Flower Fields (seasonal)", "Jessore Cantonment Area"] },
    "Khulna":       { div: "Khulna Division", spots: ["Sundarbans Mangrove Forest (Royal Bengal Tiger)", "Rupsa River", "Khan Jahan Ali Bridge", "Khulna Museum", "Mongla Port", "Shyamnagar"] },
    "Kushtia":      { div: "Khulna Division", spots: ["Lalon Shah Mazar (Chheuria)", "Rabindranath's Kuthibari (Shilaidaha)", "Hardinge Bridge", "Lalon Academy", "Sadhughat", "Padma River Bank"] },
    "Pabna":        { div: "Rajshahi Division", spots: ["Hardinge Bridge (Historic Rail Bridge)", "Lalon Shah's Birthplace Area", "Pabna Mental Hospital (Historic Colonial)", "Chalan Beel", "Padma River Ghats"] },
    "Rajshahi":     { div: "Rajshahi Division", spots: ["Varendra Research Museum", "Bagha Mosque (Mughal)", "Puthia Temple Complex", "Rajshahi University Campus", "Padma River Promenade", "Shah Makhdum Mosque"] },
    "Sirajganj":    { div: "Rajshahi Division", spots: ["Bangabandhu Bridge (Jamuna Bridge)", "Enayetpur Mosque", "Chalan Beel", "Jamuna River Bank", "Kazipur Erosion Area"] },
    "Dinajpur":     { div: "Rangpur Division", spots: ["Kantajew Temple (18th Century Terra Cotta)", "Ramsagar (Largest Man-made Lake)", "Dinajpur Rajbari (Palace)", "Sita Kunda", "Nayabad Mosque", "Punarbhaba River"] },
    "Gaibandha":    { div: "Rangpur Division", spots: ["Balashi Ghat", "Brahmaputra & Jamuna Confluence", "Char Areas (River Islands)", "Sagarpara Zamindar Bari"] },
    "Kurigram":     { div: "Rangpur Division", spots: ["Teesta River", "Char Rajibpur", "Chilon Beel", "Bengai River", "Northern Char Areas", "Ulipur"] },
    "Nilphamari":   { div: "Rangpur Division", spots: ["Nilsagar Lake (2nd Largest Natural Lake)", "Uttara Gono Bhaban (State Guest House)", "Saidpur Airport & Town", "Teesta Rail Bridge", "Domar Area"] },
    "Panchagarh":   { div: "Rangpur Division", spots: ["Tetulia (Northernmost Upazila)", "Bangladesh-India Zero Point", "Tea Gardens of Tetulia", "Bhitargarh Ruins (Ancient Fort)", "Atharokhami Mosque", "Mahali River Bank"] },
    "Rangpur":      { div: "Rangpur Division", spots: ["Tajhat Palace (Rangpur Rajbari)", "Rangpur Zoo", "Carmichael College (Historic)", "Rangpur Museum", "Ghaghat River", "Kautuk Eco Park"] },
    "Thakurgaon":   { div: "Rangpur Division", spots: ["Thakurgaon Sugar Mill", "Haripur (Bordering India)", "Salgram Rajbari Ruins", "Jamalganj Mosque", "Sthal Padma River"] },
    "Sylhet":       { div: "Sylhet Division", spots: ["Hazrat Shah Jalal (R) Mazar", "Hazrat Shah Paran (R) Mazar", "Jaflong (Crystal-clear River & Stones)", "Ratargul Swamp Forest", "Lalakhal (Green River)", "Bichanakandi", "Tea Garden Tour", "Madhabpur Lake", "Ali Amjad's Clock"] }
  };

  var aliases = {
    "Coxsbazar":    "Cox's Bazar",
    "Cox's Bazar":  "Cox's Bazar",
    "Jashore":      "Jessore",
    "Jessore":      "Jessore",
    "Chattogram":   "Chittagong",
    "Chittagong":   "Chittagong"
  };

  function normalize(n) { return aliases[n] || n; }

  var bdMap = L.map('bd-map', { scrollWheelZoom: false }).setView([23.685, 90.356], 7);
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    opacity: 0.3
  }).addTo(bdMap);

  fetch('https://raw.githubusercontent.com/fahimreza-dev/bangladesh-geojson/master/bd-districts.json')
    .then(function (r) { return r.json(); })
    .then(function (data) {
      L.geoJSON(data, {
        style: function (f) {
          var n = normalize(f.properties.NAME_2 || f.properties.name || f.properties.DISTRICT || '');
          return {
            color: '#ffffff',
            weight: 1,
            fillColor: districtData[n] ? '#3a7bd5' : '#d0d0d0',
            fillOpacity: districtData[n] ? 0.65 : 0.35
          };
        },
        onEachFeature: function (f, layer) {
          var n = normalize(f.properties.NAME_2 || f.properties.name || f.properties.DISTRICT || '');
          layer.on('click', function () {
            var panel = document.getElementById('district-panel');
            document.getElementById('dp-name').textContent = n;
            if (districtData[n]) {
              document.getElementById('dp-div').textContent = districtData[n].div;
              document.getElementById('dp-spots').innerHTML = districtData[n].spots.map(function (s) {
                return '<span style="background:var(--global-card-bg-color);border:1px solid var(--global-divider-color);border-radius:20px;padding:3px 10px;font-size:0.82em;color:var(--global-text-color);">' + s + '</span>';
              }).join('');
            } else {
              document.getElementById('dp-div').textContent = 'Not visited yet';
              document.getElementById('dp-spots').innerHTML = '';
            }
            panel.style.display = 'block';
          });
        }
      }).addTo(bdMap);
    });

  var worldMap = L.map('world-map', { scrollWheelZoom: false }).setView([25.5, 83], 5);
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    opacity: 0.3
  }).addTo(worldMap);

  function addMarker(lat, lng, color, label) {
    L.marker([lat, lng], {
      icon: L.divIcon({
        className: '',
        html: '<div style="width:13px;height:13px;border-radius:50%;background:' + color + ';border:2px solid white;box-shadow:0 1px 4px rgba(0,0,0,0.4);"></div>',
        iconSize: [13, 13],
        iconAnchor: [6, 6]
      })
    }).bindTooltip(label).addTo(worldMap);
  }

  addMarker(23.685, 90.356,  '#3a7bd5', 'Bangladesh');
  addMarker(28.7041, 77.1025, '#e53935', 'Delhi');
  addMarker(27.1767, 78.0081, '#e53935', 'Agra');
  addMarker(26.9124, 75.7873, '#e53935', 'Jaipur');
  addMarker(22.5726, 88.3639, '#e53935', 'Kolkata');

  var worldInfoList = [
    {
      title: "India — Golden Triangle",
      regions: [
        { name: "Delhi", spots: ["Red Fort (Lal Qila)", "India Gate", "Qutub Minar", "Humayun's Tomb", "Lotus Temple", "Jama Masjid", "Chandni Chowk", "Akshardham"] },
        { name: "Agra", spots: ["Taj Mahal (UNESCO)", "Agra Fort (UNESCO)", "Fatehpur Sikri (UNESCO)", "Itmad-ud-Daulah (Baby Taj)", "Mehtab Bagh"] },
        { name: "Jaipur (Rajasthan)", spots: ["Amber Fort", "Hawa Mahal (Palace of Winds)", "City Palace", "Jantar Mantar Observatory", "Nahargarh Fort", "Jaigarh Fort", "Albert Hall Museum", "Jal Mahal"] }
      ]
    },
    {
      title: "India — Kolkata",
      regions: [
        { name: "Kolkata", spots: ["Victoria Memorial", "Howrah Bridge", "Dakshineswar Temple", "Kalighat Temple", "Park Street", "Indian Museum", "Marble Palace", "Princep Ghat", "Belur Math"] }
      ]
    }
  ];

  window.showWorldInfo = function (idx) {
    var info = worldInfoList[idx];
    var html = '<strong style="font-size:1.02em;">' + info.title + '</strong>';
    info.regions.forEach(function (region) {
      html += '<div style="margin-top:10px;"><strong style="font-size:0.92em;">' + region.name + '</strong>';
      html += '<div style="display:flex;flex-wrap:wrap;gap:6px;margin-top:6px;">';
      region.spots.forEach(function (s) {
        html += '<span style="background:var(--global-card-bg-color);border:1px solid var(--global-divider-color);border-radius:20px;padding:3px 10px;font-size:0.82em;color:var(--global-text-color);">' + s + '</span>';
      });
      html += '</div></div>';
    });
    document.getElementById('world-panel').innerHTML = html;
    document.getElementById('world-panel').style.display = 'block';
  };
}());
</script>
