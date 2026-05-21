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

<div style="margin-bottom: 10px;">
  <span style="display:inline-block;background:var(--global-card-bg-color);border:1px solid var(--global-divider-color);border-radius:8px;padding:5px 14px;font-size:0.85em;margin-right:8px;margin-bottom:8px;">26 / 64 districts visited</span>
  <span style="display:inline-block;background:var(--global-card-bg-color);border:1px solid var(--global-divider-color);border-radius:8px;padding:5px 14px;font-size:0.85em;margin-right:8px;margin-bottom:8px;">7 / 8 divisions covered</span>
</div>

<div style="display:flex;align-items:center;gap:14px;margin-bottom:10px;font-size:0.85em;">
  <span><span style="display:inline-block;width:13px;height:13px;border-radius:3px;background:#3a7bd5;margin-right:5px;vertical-align:middle;"></span>Visited</span>
  <span><span style="display:inline-block;width:13px;height:13px;border-radius:3px;background:#c8d6e0;margin-right:5px;vertical-align:middle;"></span>Not yet visited</span>
</div>

<div id="bd-map" style="background:#dce9f5;border-radius:10px;border:1px solid var(--global-divider-color);width:100%;overflow:hidden;"></div>

<div id="district-panel" style="display:none;border:1px solid var(--global-divider-color);background:var(--global-card-bg-color);border-radius:10px;padding:14px 16px;margin-top:10px;">
  <div id="dp-name" style="font-size:1.1em;font-weight:bold;"></div>
  <div id="dp-div" style="font-size:0.85em;font-style:italic;margin-bottom:8px;"></div>
  <div id="dp-spots"></div>
</div>

</div>

<script src="https://cdnjs.cloudflare.com/ajax/libs/d3/7.8.5/d3.min.js"></script>
<script>
(function () {
  var aliases = {
    "Jashore":    "Jessore",
    "Chattogram": "Chittagong",
    "Coxsbazar":  "Cox's Bazar",
    "Cumilla":    "Comilla",
    "Bogura":     "Bogra"
  };

  var spots = {
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

  function getName(props) {
    var raw = props.ADM2_EN || props.NAME_2 || props.name || props.DISTRICT || '';
    return aliases[raw] || raw;
  }

  function showPanel(name) {
    document.getElementById('dp-name').textContent = name;
    document.getElementById('dp-div').textContent = divisionMap[name] || '';
    document.getElementById('dp-spots').innerHTML = spots[name].map(function (s) {
      return '<span style="background:var(--global-card-bg-color);border:1px solid var(--global-divider-color);border-radius:20px;padding:3px 10px;font-size:0.82em;margin:3px;display:inline-block;">' + s + '</span>';
    }).join('');
    document.getElementById('district-panel').style.display = 'block';
  }

  var container = document.getElementById('bd-map');
  var W = container.clientWidth || 620;
  var H = Math.round(W * 1.1);

  var svg = d3.select('#bd-map')
    .append('svg')
    .attr('width', '100%')
    .attr('viewBox', '0 0 ' + W + ' ' + H);

  var selectedPath = null;

  d3.json('/assets/geojson/bd-districts.json')
    .then(function (geojson) {
      var projection = d3.geoMercator().fitSize([W, H], geojson);
      var pathGen = d3.geoPath().projection(projection);

      var paths = svg.selectAll('path')
        .data(geojson.features)
        .enter()
        .append('path')
        .attr('d', pathGen)
        .attr('fill', function (d) {
          return spots[getName(d.properties)] ? '#3a7bd5' : '#c8d6e0';
        })
        .attr('stroke', '#ffffff')
        .attr('stroke-width', 0.8)
        .style('cursor', function (d) {
          return spots[getName(d.properties)] ? 'pointer' : 'default';
        })
        .on('click', function (event, d) {
          var name = getName(d.properties);
          if (!spots[name]) return;
          if (selectedPath) {
            d3.select(selectedPath).attr('stroke', '#ffffff').attr('stroke-width', 0.8);
          }
          selectedPath = this;
          d3.select(this).attr('stroke', '#1a1a1a').attr('stroke-width', 1.8);
          showPanel(name);
        });

      paths.append('title').text(function (d) { return getName(d.properties); });
    })
    .catch(function () {
      svg.append('text')
        .attr('x', W / 2)
        .attr('y', H / 2)
        .attr('text-anchor', 'middle')
        .attr('dominant-baseline', 'middle')
        .attr('fill', '#666')
        .text('Map unavailable');
    });
}());
</script>
