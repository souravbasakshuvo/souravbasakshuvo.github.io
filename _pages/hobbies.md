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

<style>#travels-section .leaflet-container{background:#dce9f5!important}</style>

<div id="travels-section" style="margin-top: 40px;">

<h2>Travels</h2>

<div style="margin-bottom: 10px;">
  <span style="display:inline-block;background:var(--global-card-bg-color);border:1px solid var(--global-divider-color);border-radius:8px;padding:5px 14px;font-size:0.85em;margin-right:8px;margin-bottom:8px;">26 / 64 districts visited</span>
  <span style="display:inline-block;background:var(--global-card-bg-color);border:1px solid var(--global-divider-color);border-radius:8px;padding:5px 14px;font-size:0.85em;margin-right:8px;margin-bottom:8px;">7 / 8 divisions covered</span>
</div>

<div style="display:flex;align-items:center;gap:14px;margin-bottom:10px;font-size:0.85em;color:var(--global-text-color);">
  <span><span style="display:inline-block;width:13px;height:13px;border-radius:3px;background:#3a7bd5;margin-right:5px;vertical-align:middle;"></span>Visited</span>
  <span><span style="display:inline-block;width:13px;height:13px;border-radius:3px;background:#c8d6e0;margin-right:5px;vertical-align:middle;"></span>Not yet visited</span>
</div>

<div id="bd-map" style="height:560px;background:#dce9f5;border:1px solid var(--global-divider-color);border-radius:10px;"></div>

<div id="district-panel" style="display:none;border:1px solid var(--global-divider-color);background:var(--global-card-bg-color);border-radius:10px;padding:14px 16px;margin-top:10px;">
  <div id="dp-name" style="font-size:1.1em;font-weight:bold;"></div>
  <div id="dp-div" style="font-size:0.85em;color:var(--global-text-color);margin-bottom:8px;"></div>
  <div id="dp-spots" style="display:flex;flex-wrap:wrap;gap:6px;"></div>
</div>

</div>

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/leaflet.min.css" />
<script src="https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/leaflet.min.js"></script>
<script>
(function () {
  var districtData = {
    "Bandarban":   {div:"Chittagong Division",spots:["Nilgiri Hill","Boga Lake","Chimbuk Hill","Golden Temple (Swarna Muri)","Nafakhum Waterfall","Shoilo Propat","Meghla Parjatan","Sangu River"]},
    "Chittagong":  {div:"Chittagong Division",spots:["Patenga Beach","Foy's Lake","Chandranath Hill","Sitakunda Eco Park","Ethnological Museum","Bangabandhu Safari Park","War Cemetery","Karnaphuli River"]},
    "Cox's Bazar": {div:"Chittagong Division",spots:["Cox's Bazar Beach (World's Longest)","Inani Beach","Himchari National Park","Maheshkhali Island","Teknaf Wildlife Sanctuary","Saint Martin's Island","Laboni Beach"]},
    "Khagrachari": {div:"Chittagong Division",spots:["Alutila Cave","Richhang Waterfall","Marishya River Valley","Dighinala","Tribal Culture Museum","Parjatan Hill Resort"]},
    "Rangamati":   {div:"Chittagong Division",spots:["Kaptai Lake","Shuvolong Waterfall","Rajban Vihara","Hanging Bridge","Tribal Cultural Institute Museum","DC Bungalow Hilltop","Kaptai Dam"]},
    "Dhaka":       {div:"Dhaka Division",spots:["Lalbagh Fort","Ahsan Manzil (Pink Palace)","Star Mosque","National Museum","Liberation War Museum","Baldha Garden","Sonargaon (Panam City)","Dhakeshwari Temple"]},
    "Kishoreganj": {div:"Dhaka Division",spots:["Sholakia Eidgah (Largest in Bangladesh)","Egaro Sindhu","Ashtagram Haor","Nikli Haor","Jangalbari Fort","Shaheb Bari"]},
    "Tangail":     {div:"Dhaka Division",spots:["Atia Mosque (Mughal)","Mahera Zamindarbari","Dhanbari Nawab Palace","Butterfly Park","Jamuna Bondhu Park","Nuhash Palli"]},
    "Jamalpur":    {div:"Mymensingh Division",spots:["Yamuna River Bank","Melandaha Zamindarbari","Garibpur Ruins","Dhal Char Area","Moinuddin Ahmed Park"]},
    "Mymensingh":  {div:"Mymensingh Division",spots:["Shashi Lodge (Alexander Castle)","Bangladesh Agricultural University Campus","Botanical Garden","Muktagacha Zamindarbari","Muktagacha Monda","Brahmaputra River"]},
    "Sherpur":     {div:"Mymensingh Division",spots:["Garo Hills Border Area","Gazni Mosque (Mughal)","Nalitabari Natural Park","Madhupur Forest Edge","Mrittika Eco Park"]},
    "Bagerhat":    {div:"Khulna Division",spots:["Sixty Dome Mosque (UNESCO)","Khan Jahan Ali Shrine","Nine Dome Mosque","Shat Gombuj Mosque Complex","Reza Khoda Mosque","Khan Jahan Ali Pond"]},
    "Jessore":     {div:"Khulna Division",spots:["Michael Madhusudan Dutta Birthplace (Sagardari)","Chhaygazi Mosque","Tulsi Chura Flower Fields (seasonal)","Jessore Cantonment Area"]},
    "Khulna":      {div:"Khulna Division",spots:["Sundarbans Mangrove Forest (Royal Bengal Tiger)","Rupsa River","Khan Jahan Ali Bridge","Khulna Museum","Mongla Port","Shyamnagar"]},
    "Kushtia":     {div:"Khulna Division",spots:["Lalon Shah Mazar (Chheuria)","Rabindranath's Kuthibari (Shilaidaha)","Hardinge Bridge","Lalon Academy","Sadhughat","Padma River Bank"]},
    "Pabna":       {div:"Rajshahi Division",spots:["Hardinge Bridge (Historic Rail Bridge)","Lalon Shah's Birthplace Area","Pabna Mental Hospital (Historic)","Chalan Beel","Padma River Ghats"]},
    "Rajshahi":    {div:"Rajshahi Division",spots:["Varendra Research Museum","Bagha Mosque (Mughal)","Puthia Temple Complex","Rajshahi University Campus","Padma River Promenade","Shah Makhdum Mosque"]},
    "Sirajganj":   {div:"Rajshahi Division",spots:["Bangabandhu Bridge (Jamuna Bridge)","Enayetpur Mosque","Chalan Beel","Jamuna River Bank","Kazipur Erosion Area"]},
    "Dinajpur":    {div:"Rangpur Division",spots:["Kantajew Temple (18th Century Terra Cotta)","Ramsagar (Largest Man-made Lake)","Dinajpur Rajbari (Palace)","Sita Kunda","Nayabad Mosque","Punarbhaba River"]},
    "Gaibandha":   {div:"Rangpur Division",spots:["Balashi Ghat","Brahmaputra & Jamuna Confluence","Char Areas (River Islands)","Sagarpara Zamindar Bari"]},
    "Kurigram":    {div:"Rangpur Division",spots:["Teesta River","Char Rajibpur","Chilon Beel","Bengai River","Northern Char Areas","Ulipur"]},
    "Nilphamari":  {div:"Rangpur Division",spots:["Nilsagar Lake (2nd Largest Natural Lake)","Uttara Gono Bhaban (State Guest House)","Saidpur Airport & Town","Teesta Rail Bridge","Domar Area"]},
    "Panchagarh":  {div:"Rangpur Division",spots:["Tetulia (Northernmost Upazila)","Bangladesh-India Zero Point","Tea Gardens of Tetulia","Bhitargarh Ruins (Ancient Fort)","Atharokhami Mosque","Mahali River Bank"]},
    "Rangpur":     {div:"Rangpur Division",spots:["Tajhat Palace (Rangpur Rajbari)","Rangpur Zoo","Carmichael College (Historic)","Rangpur Museum","Ghaghat River","Kautuk Eco Park"]},
    "Thakurgaon":  {div:"Rangpur Division",spots:["Thakurgaon Sugar Mill","Haripur (Bordering India)","Salgram Rajbari Ruins","Jamalganj Mosque","Sthal Padma River"]},
    "Sylhet":      {div:"Sylhet Division",spots:["Hazrat Shah Jalal (R) Mazar","Hazrat Shah Paran (R) Mazar","Jaflong (Crystal-clear River & Stones)","Ratargul Swamp Forest","Lalakhal (Green River)","Bichanakandi","Tea Garden Tour","Madhabpur Lake","Ali Amjad's Clock"]}
  };

  var aliases = {
    "Jashore":     "Jessore",
    "Jessore":     "Jessore",
    "Chattogram":  "Chittagong",
    "Chittagong":  "Chittagong",
    "Coxsbazar":   "Cox's Bazar",
    "Cox's Bazar": "Cox's Bazar"
  };

  function normalize(n) { return aliases[n] || n; }
  function getName(props) { return normalize(props.NAME_2 || props.name || props.DISTRICT || ''); }

  function getStyle(name) {
    return {
      color: '#ffffff',
      weight: 1.2,
      fillColor: districtData[name] ? '#3a7bd5' : '#c8d6e0',
      fillOpacity: districtData[name] ? 0.82 : 0.55
    };
  }

  function showPanel(name) {
    var data = districtData[name];
    document.getElementById('dp-name').textContent = name;
    document.getElementById('dp-div').textContent = data.div;
    document.getElementById('dp-spots').innerHTML = data.spots.map(function (s) {
      return '<span style="background:var(--global-card-bg-color);border:1px solid var(--global-divider-color);border-radius:20px;padding:3px 10px;font-size:0.82em;">' + s + '</span>';
    }).join('');
    document.getElementById('district-panel').style.display = 'block';
  }

  var map = L.map('bd-map', {scrollWheelZoom: false, attributionControl: false}).setView([23.7, 90.35], 7);

  var selectedLayer = null;

  fetch('https://raw.githubusercontent.com/fahimreza-dev/bangladesh-geojson/master/bd-districts.json')
    .then(function (r) { return r.json(); })
    .then(function (data) {
      L.geoJSON(data, {
        style: function (f) { return getStyle(getName(f.properties)); },
        onEachFeature: function (f, layer) {
          var name = getName(f.properties);
          layer.on({
            mouseover: function () {
              if (layer === selectedLayer) return;
              layer.setStyle({fillOpacity: 1, weight: 2});
            },
            mouseout: function () {
              if (layer === selectedLayer) return;
              layer.setStyle(getStyle(name));
            },
            click: function () {
              if (selectedLayer && selectedLayer !== layer) {
                selectedLayer.setStyle(getStyle(getName(selectedLayer.feature.properties)));
              }
              if (districtData[name]) {
                selectedLayer = layer;
                layer.setStyle({fillOpacity: 1, weight: 2.5});
                showPanel(name);
              }
            }
          });
        }
      }).addTo(map);
    });
}());
</script>
