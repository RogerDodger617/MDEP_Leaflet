$(document).ready(function () {
  const formTest2 =
    `<div class="form">
   <div class="featureSelection">
      <select id="featureType">
         <option value="test">Select Featurer Type...</option>
         <option value="point">Point</option>
         <option value="line">Line</option>
         <option value="poly">Polygon</option>
      </select>
      <br>
      <select id="featureStyle">
         <option value="test">Select Feature Style...</option>
         <option value="barrier">Barrier</option>
         <option value="resto">Restoration</option>
         <option value="disturb">Disturbance</option>
      </select>
      <br><br>
   </div>
   <div class="collectionForm">
      <form id="restoPointForm" method="POST" style="display: none;">
         <label for="restoPointForm">Restoration Point Collection</label>
         <br>
         <label for="gid">gid: <br>
            <input type="text" name="gid">
            <br>
         </label>
         <label for="agency">
            agency: <br>
            <select id="agency" name="agency">
               <option value="0">BLM</option>
               <option value="1">NPS</option>
               <option value="2">FS</option>
               <option value="3">FWS</option>
               <option selected="selected" value="select"></option>
            </select>
            <br>
         </label>
         <label for="region">
            region: <br>
            <select id="region" name="region">
               <option value="select"></option>
               <option value="Amargosa Desert E">Amargosa Desert E</option>
               <option value="Amargosa Desert W">Amargosa Desert W</option>
               <option value="Black Mt Area">Black Mt Area</option>
               <option value="California Wash">California Wash</option>
               <option value="Colorado Valley">Colorado Valley</option>
               <option value="Coyote Springs Valley">Coyote Springs Valley</option>
               <option value="Crater Flat">Crater Flat</option>
               <option value="Eldorado Valley">Eldorado Valley</option>
               <option value="Forty-mile Canyon">Forty-mile Canyon</option>
               <option value="Frenchman Flat">Frenchman Flat</option>
               <option value="Garnet Valley">Garnet Valley</option>
               <option value="Gold Butte Area">Gold Butte Area</option>
               <option value="Greasewood Basin">Greasewood Basin</option>
               <option value="Hidden Valley N">Hidden Valley N</option>
               <option value="Hidden Valley S">Hidden Valley S</option>
               <option value="Indian Springs Valley N">Indian Springs Valley N</option>
               <option value="Indian Springs Valley S">Indian Springs Valley S</option>
               <option value="Ivanpah N">Ivanpah N</option>
               <option value="Ivanpah S">Ivanpah S</option>
               <option value="Jean Lake Valley">Jean Lake Valley</option>
               <option value="Las Vegas Valley">Las Vegas Valley</option>
               <option value="Meadow Valley Wash Upper">Meadow Valley Wash Upper</option>
               <option value="Meadow Valley Wash Lower">Meadow Valley Wash Lower</option>
               <option value="Mercury Valley">Mercury Valley</option>
               <option value="Mesquite Valley">Mesquite Valley</option>
               <option value="Moapa Valley">Moapa Valley</option>
               <option value="Muddy River Springs Area">Muddy River Springs Area</option>
               <option value="Pahrump Valley">Pahrump Valley</option>
               <option value="Piute Valley">Piute Valley</option>
               <option value="Rock Valley">Rock Valley</option>
               <option value="Three Lakes Valley N">Three Lakes Valley N</option>
               <option value="Three Lakes Valley S">Three Lakes Valley S</option>
               <option value="Tikapoo Valley">Tikapoo Valley</option>
               <option value="Virgin River Valley">Virgin River Valley</option>
            </select>
            <br>
         </label>
         <label for="ecosystem">
            ecosystem: <br>
            <select id="ecosystem" name="ecosystem">
               <option value="select"></option>
               <option value="Alpine">Alpine</option>
               <option value="Bristlecone/ Limber Pine">Bristlecone/ Limber Pine</option>
               <option value="Mixed Conifer">Mixed Conifer</option>
               <option value="Pinon-Juniper">Pinon-Juniper</option>
               <option value="Blackbrush/ Shadscale">Blackbrush/ Shadscale</option>
               <option value="Riparian">Riparian</option>
               <option value="Wetland">Wetland</option>
               <option value="Open Water">Open Water</option>
               <option value="Spring">Spring</option>
               <option value="Spring Channel">Spring Channel</option>
               <option value="Mojave Desert Scrub">Mojave Desert Scrub*</option>
            </select>
            <br>
         </label>
         <label for="gps_date">gps_date: <br>
            <input type="date" name="gps_date"><br>
         </label>
         <label for="resto_code">resto_code: <br>
            <input type="text" name="resto_code"><br>
         </label>
         <label for="resto_acti">
            resto_acti: <br>
            <select id="resto_acti" name="resto_acti">
               <option value="select"></option>
               <option value="Fire Ring Removal">Fire Ring Removal</option>
               <option value="Graffiti Removal">Graffiti Removal</option>
               <option value="Garbage Removal">Garbage Removal</option>
               <option value="Outplanting">Outplanting</option>
               <option value="Transplanting">Transplanting</option>
               <option value="*Other - See Comments">*Other - See Comments</option>
            </select>
            <br>
         </label>
         <label for="comments">comments: <br>
            <input type="text" name="comments"><br>
         </label>
         <label for="primary_ob">primary_ob: <br>
            <input type="text" name="primary_ob"><br>
         </label>
         <label for="secondary_">secondary_: <br>
            <input type="text" name="secondary_"><br>
         </label>
         <label for="project_na">project_na: <br>
            <input type="text" name="project_na"><br>
         </label>
         <label for="sqft_resto">sqft_resto: <br>
            <input type="text" name="sqft_resto"><br>
         </label>
         <label for="gps_photo">
            gps_photo: <br>
            <select id="gps_photo" name="gps_photo">
               <option value="select"></option>
               <option value="Yes">Yes</option>
               <option value="No">No</option>
            </select>
            <br>
         </label>
         <label for="photo_azim">photo_azim: <br>
            <input type="text" name="photo_azim"><br>
         </label>
         <label for="previously">
            previously: <br>
            <select id="previously" name="previously">
               <option value="select"></option>
               <option value="Yes">Yes</option>
               <option value="No">No</option>
               <option value="Unknown">Unknown</option>
            </select>
            <br>
         </label>
         <label for="qa_qc">qa_qc: <br>
            <input type="text" name="qa_qc"><br>
         </label>
         <label for="geom">geom: <br>
            <input type="text" name="geom">
         </label>
         <br><br>
         <input type="submit" value="Submit">
      </form>
      <form id="restoPolyForm" action="/restoPolyFormSubmit" method="POST" style="display: none;">
         <label for="restoPolyForm">Restoration Polygon Collection</label><br>
         <label for="gid">gid: <br>
            <input type="text" name="gid"><br>
         </label>
         <label for="agency">
            agency: <br>
            <select id="agency" name="agency">
               <option value="0">BLM</option>
               <option value="1">NPS</option>
               <option value="2">FS</option>
               <option value="3">FWS</option>
               <option selected="selected" value="select"></option>
            </select>
            <br>
         </label>
         <label for="region">
            region: <br>
            <select id="region" name="region">
               <option value="select"></option>
               <option value="Amargosa Desert E">Amargosa Desert E</option>
               <option value="Amargosa Desert W">Amargosa Desert W</option>
               <option value="Black Mt Area">Black Mt Area</option>
               <option value="California Wash">California Wash</option>
               <option value="Colorado Valley">Colorado Valley</option>
               <option value="Coyote Springs Valley">Coyote Springs Valley</option>
               <option value="Crater Flat">Crater Flat</option>
               <option value="Eldorado Valley">Eldorado Valley</option>
               <option value="Forty-mile Canyon">Forty-mile Canyon</option>
               <option value="Frenchman Flat">Frenchman Flat</option>
               <option value="Garnet Valley">Garnet Valley</option>
               <option value="Gold Butte Area">Gold Butte Area</option>
               <option value="Greasewood Basin">Greasewood Basin</option>
               <option value="Hidden Valley N">Hidden Valley N</option>
               <option value="Hidden Valley S">Hidden Valley S</option>
               <option value="Indian Springs Valley N">Indian Springs Valley N</option>
               <option value="Indian Springs Valley S">Indian Springs Valley S</option>
               <option value="Ivanpah N">Ivanpah N</option>
               <option value="Ivanpah S">Ivanpah S</option>
               <option value="Jean Lake Valley">Jean Lake Valley</option>
               <option value="Las Vegas Valley">Las Vegas Valley</option>
               <option value="Meadow Valley Wash Upper">Meadow Valley Wash Upper</option>
               <option value="Meadow Valley Wash Lower">Meadow Valley Wash Lower</option>
               <option value="Mercury Valley">Mercury Valley</option>
               <option value="Mesquite Valley">Mesquite Valley</option>
               <option value="Moapa Valley">Moapa Valley</option>
               <option value="Muddy River Springs Area">Muddy River Springs Area</option>
               <option value="Pahrump Valley">Pahrump Valley</option>
               <option value="Piute Valley">Piute Valley</option>
               <option value="Rock Valley">Rock Valley</option>
               <option value="Three Lakes Valley N">Three Lakes Valley N</option>
               <option value="Three Lakes Valley S">Three Lakes Valley S</option>
               <option value="Tikapoo Valley">Tikapoo Valley</option>
               <option value="Virgin River Valley">Virgin River Valley</option>
            </select>
            <br>
         </label>
         <label for="ecosystem">
            ecosystem: <br>
            <select id="ecosystem" name="ecosystem">
               <option value="select"></option>
               <option value="Alpine">Alpine</option>
               <option value="Bristlecone/ Limber Pine">Bristlecone/ Limber Pine</option>
               <option value="Mixed Conifer">Mixed Conifer</option>
               <option value="Pinon-Juniper">Pinon-Juniper</option>
               <option value="Blackbrush/ Shadscale">Blackbrush/ Shadscale</option>
               <option value="Riparian">Riparian</option>
               <option value="Wetland">Wetland</option>
               <option value="Open Water">Open Water</option>
               <option value="Spring">Spring</option>
               <option value="Spring Channel">Spring Channel</option>
               <option value="Mojave Desert Scrub">Mojave Desert Scrub*</option>
            </select>
            <br>
         </label>
         <label for="resto_code">resto_code: <br>
            <input type="text" name="resto_code"><br>
         </label>
         <label for="resto_acti">
            resto_acti: <br>
            <select id="resto_acti" name="resto_acti">
               <option value="select"></option>
               <option value="Garbage Removal">Garbage Removal</option>
               <option value="Habitat Enhancement">Habitat Enhancement</option>
               <option value="Outplanting">Outplanting</option>
               <option value="Transplanting">Transplanting</option>
               <option value="Seeding">Seeding</option>
               <option value="Wiillow Pole Planting">Wiillow Pole Planting</option>
               <option value="Herbicide">Herbicide</option>
               <option value="Raking">Raking</option>
               <option value="Surface Roughening">Surface Roughening</option>
               <option value="Invasive Removal">Invasive Removal</option>
               <option value="*Other - See Comments">*Other - See Comments</option>
            </select>
            <br>
         </label>
         <label for="te_action">
            te_action: <br>
            <select id="te_action" name="te_action">
               <option value="select"></option>
               <option value="Yes">Yes</option>
               <option value="No">No</option>
            </select>
            <br>
         </label>
         <label for="non_list_a">
            non_list_a: <br>
            <select id="non_list_a" name="non_list_a">
               <option value="select"></option>
               <option value="Yes">Yes</option>
               <option value="No">No</option>
            </select>
            <br>
         </label>
         <label for="comments">comments: <br>
            <input type="text" name="comments"><br>
         </label>
         <label for="primary_ob">primary_ob: <br>
            <input type="text" name="primary_ob"><br>
         </label>
         <label for="secondary_">secondary_: <br>
            <input type="text" name="secondary_"><br>
         </label>
         <label for="project_na">project_na: <br>
            <input type="text" name="project_na"><br>
         </label>
         <label for="treatment_">
            treatment_: <br>
            <select id="treatment_" name="treatment_">
               <option value="select"></option>
               <option value="Active">Active</option>
               <option value="Passive">Passive</option>
            </select>
            <br>
         </label>
         <label for="acres_rest">acres_rest: <br>
            <input type="text" name="acres_rest"><br>
         </label>
         <label for="kmsq_resto">kmsq_resto: <br>
            <input type="text" name="kmsq_resto"><br>
         </label>
         <label for="gps_date">gps_date: <br>
            <input type="date" name="gps_date"><br>
         </label>
         <label for="gps_photo">
            gps_photo: <br>
            <select id="gps_photo" name="gps_photo">
               <option value="select"></option>
               <option value="Yes">Yes</option>
               <option value="No">No</option>
            </select>
            <br>
         </label>
         <label for="photo_azim">photo_azim: <br>
            <input type="text" name="photo_azim"><br>
         </label>
         <label for="signed">
            signed: <br>
            <select id="signed" name="signed">
               <option value="select"></option>
               <option value="Yes">Yes</option>
               <option value="No">No</option>
               <option value="N/A">N/A</option>
            </select>
            <br>
         </label>
         <label for="deep_till">
            deep_till: <br>
            <select id="deep_till" name="deep_till">
               <option value="select"></option>
               <option value="Yes">Yes</option>
               <option value="No">No</option>
               <option value="N/A">N/A</option>
            </select>
            <br>
         </label>
         <label for="barrier_in">
            barrier_in: <br>
            <select id="barrier_in" name="barrier_in">
               <option value="select"></option>
               <option value="Yes">Yes</option>
               <option value="No">No</option>
               <option value="N/A">N/A</option>
            </select>
            <br>
         </label>
         <label for="mulch">
            mulch: <br>
            <select id="mulch" name="mulch">
               <option value="select"></option>
               <option value="None">None</option>
               <option value="Verticle">Verticle</option>
               <option value="Horizontal">Horizontal</option>
               <option value="N/A">N/A</option>
               <option value="Both">Both</option>
            </select>
            <br>
         </label>
         <label for="monitoring">
            monitoring: <br>
            <select id="monitoring" name="monitoring">
               <option value="select"></option>
               <option value="Yes">Yes</option>
               <option value="No">No</option>
            </select>
            <br>
         </label>
         <label for="previously">
            previously: <br>
            <select id="previously" name="previously">
               <option value="select"></option>
               <option value="Yes">Yes</option>
               <option value="No">No</option>
               <option value="Unknown">Unknown</option>
            </select>
            <br>
         </label>
         <label for="shape_star">shape_star: <br>
            <input type="text" name="shape_star"><br>
         </label>
         <label for="shape_stle">shape_stle: <br>
            <input type="text" name="shape_stle"><br>
         </label>
         <label for="shape_leng">shape_leng: <br>
            <input type="text" name="shape_leng"><br>
         </label>
         <label for="shape_area">shape_area: <br>
            <input type="text" name="shape_area"><br>
         </label>
         <label for="geom">geom: <br>
            <input type="text" name="geom">
         </label>
         <br><br><input type="submit" value="Submit">
      </form>
      <form id="restoLineForm" method="POST" style="display: none;">
         <label for="restoLineForm">Restoration Line Collection</label><br>
         <label for="gid">gid: <br>
            <input type="text" name="gid"><br>
         </label>
         <label for="agency">
            agency: <br>
            <select id="agency" name="agency">
               <option value="0">BLM</option>
               <option value="1">NPS</option>
               <option value="2">FS</option>
               <option value="3">FWS</option>
               <option selected="selected" value="select"></option>
            </select>
            <br>
         </label>
         <label for="region">
            region: <br>
            <select id="region" name="region">
               <option value="select"></option>
               <option value="Amargosa Desert E">Amargosa Desert E</option>
               <option value="Amargosa Desert W">Amargosa Desert W</option>
               <option value="Black Mt Area">Black Mt Area</option>
               <option value="California Wash">California Wash</option>
               <option value="Colorado Valley">Colorado Valley</option>
               <option value="Coyote Springs Valley">Coyote Springs Valley</option>
               <option value="Crater Flat">Crater Flat</option>
               <option value="Eldorado Valley">Eldorado Valley</option>
               <option value="Forty-mile Canyon">Forty-mile Canyon</option>
               <option value="Frenchman Flat">Frenchman Flat</option>
               <option value="Garnet Valley">Garnet Valley</option>
               <option value="Gold Butte Area">Gold Butte Area</option>
               <option value="Greasewood Basin">Greasewood Basin</option>
               <option value="Hidden Valley N">Hidden Valley N</option>
               <option value="Hidden Valley S">Hidden Valley S</option>
               <option value="Indian Springs Valley N">Indian Springs Valley N</option>
               <option value="Indian Springs Valley S">Indian Springs Valley S</option>
               <option value="Ivanpah N">Ivanpah N</option>
               <option value="Ivanpah S">Ivanpah S</option>
               <option value="Jean Lake Valley">Jean Lake Valley</option>
               <option value="Las Vegas Valley">Las Vegas Valley</option>
               <option value="Meadow Valley Wash Upper">Meadow Valley Wash Upper</option>
               <option value="Meadow Valley Wash Lower">Meadow Valley Wash Lower</option>
               <option value="Mercury Valley">Mercury Valley</option>
               <option value="Mesquite Valley">Mesquite Valley</option>
               <option value="Moapa Valley">Moapa Valley</option>
               <option value="Muddy River Springs Area">Muddy River Springs Area</option>
               <option value="Pahrump Valley">Pahrump Valley</option>
               <option value="Piute Valley">Piute Valley</option>
               <option value="Rock Valley">Rock Valley</option>
               <option value="Three Lakes Valley N">Three Lakes Valley N</option>
               <option value="Three Lakes Valley S">Three Lakes Valley S</option>
               <option value="Tikapoo Valley">Tikapoo Valley</option>
               <option value="Virgin River Valley">Virgin River Valley</option>
            </select>
            <br>
         </label>
         <label for="ecosystem">
            ecosystem: <br>
            <select id="ecosystem" name="ecosystem">
               <option value="select"></option>
               <option value="Alpine">Alpine</option>
               <option value="Bristlecone/ Limber Pine">Bristlecone/ Limber Pine</option>
               <option value="Mixed Conifer">Mixed Conifer</option>
               <option value="Pinon-Juniper">Pinon-Juniper</option>
               <option value="Blackbrush/ Shadscale">Blackbrush/ Shadscale</option>
               <option value="Riparian">Riparian</option>
               <option value="Wetland">Wetland</option>
               <option value="Open Water">Open Water</option>
               <option value="Spring">Spring</option>
               <option value="Spring Channel">Spring Channel</option>
               <option value="Mojave Desert Scrub">Mojave Desert Scrub*</option>
            </select>
            <br>
         </label>
         <label for="gps_date">gps_date: <br>
            <input type="date" name="gps_date"><br>
         </label>
         <label for="resto_code">resto_code: <br>
            <input type="text" name="resto_code"><br>
         </label>
         <label for="resto_act">
            resto_act: <br>
            <select id="resto_act" name="resto_act">
               <option value="select"></option>
               <option value="Road Decommissioning">Road Decommissioning*</option>
               <option value="Trail Decommissioning">Trail Decommissioning</option>
               <option value="Habitat Enhancement">Habitat Enhancement</option>
               <option value="Stream/Spring Bed Restoration">Stream/Spring Bed Restoration</option>
               <option value="Spring/Stream Channel Restoration">Spring/Stream Channel Restoration</option>
               <option value="*Other - See Comments">*Other - See Comments</option>
            </select>
            <br>
         </label>
         <label for="te_act">
            te_act: <br>
            <select id="te_act" name="te_act">
               <option value="select"></option>
               <option value="Yes">Yes</option>
               <option value="No">No</option>
               <option value="N/A">N/A*</option>
            </select>
            <br>
         </label>
         <label for="nonlists_a">
            nonlists_a: <br>
            <select id="nonlists_a" name="nonlists_a">
               <option value="select"></option>
               <option value="Yes">Yes</option>
               <option value="No">No</option>
               <option value="N/A">N/A*</option>
            </select>
            <br>
         </label>
         <label for="comments">comments: <br>
            <input type="text" name="comments"><br>
         </label>
         <label for="primary_ob">primary_ob: <br>
            <input type="text" name="primary_ob"><br>
         </label>
         <label for="secondary_">secondary_: <br>
            <input type="text" name="secondary_"><br>
         </label>
         <label for="project_na">project_na: <br>
            <input type="text" name="project_na"><br>
         </label>
         <label for="treatment_">
            treatment_: <br>
            <select id="treatment_" name="treatment_">
               <option value="select"></option>
               <option value="Active">Active</option>
               <option value="Passive">Passive</option>
            </select>
            <br>
         </label>
         <label for="signed">
            signed: <br>
            <select id="signed" name="signed">
               <option value="select"></option>
               <option value="Yes">Yes</option>
               <option value="No">No</option>
               <option value="N/A">N/A*</option>
            </select>
            <br>
         </label>
         <label for="mulch">
            mulch: <br>
            <select id="mulch" name="mulch">
               <option value="select"></option>
               <option value="None">None</option>
               <option value="Verticle">Verticle</option>
               <option value="Horizontal">Horizontal</option>
               <option value="N/A">N/A*</option>
               <option value="Both">Both</option>
            </select>
            <br>
         </label>
         <label for="deep_till">
            deep_till: <br>
            <select id="deep_till" name="deep_till">
               <option value="select"></option>
               <option value="Yes">Yes</option>
               <option value="No">No</option>
               <option value="N/A">N/A*</option>
            </select>
            <br>
         </label>
         <label for="barrier_in">
            barrier_in: <br>
            <select id="barrier_in" name="barrier_in">
               <option value="select"></option>
               <option value="Yes">Yes</option>
               <option value="No">No</option>
               <option value="N/A">N/A*</option>
            </select>
            <br>
         </label>
         <label for="miles_rest">miles_rest: <br>
            <input type="text" name="miles_rest"><br>
         </label>
         <label for="km_resto">km_resto: <br>
            <input type="text" name="km_resto"><br>
         </label>
         <label for="gps_photo">
            gps_photo: <br>
            <select id="gps_photo" name="gps_photo">
               <option value="select"></option>
               <option value="Yes">Yes</option>
               <option value="No">No</option>
            </select>
            <br>
         </label>
         <label for="photo_azim">photo_azim: <br>
            <input type="text" name="photo_azim"><br>
         </label>
         <label for="monitoring">
            monitoring: <br>
            <select id="monitoring" name="monitoring">
               <option value="select"></option>
               <option value="Yes">Yes</option>
               <option value="No">No</option>
            </select>
            <br>
         </label>
         <label for="previously">
            previously: <br>
            <select id="previously" name="previously">
               <option value="select"></option>
               <option value="Yes">Yes</option>
               <option value="No">No</option>
               <option value="Unknown">Unknown</option>
            </select>
            <br>
         </label>
         <label for="qa_qc">qa_qc: <br>
            <input type="text" name="qa_qc"><br>
         </label>
         <label for="shape_stle">shape_stle: <br>
            <input type="text" name="shape_stle"><br>
         </label>
         <label for="shape_leng">shape_leng: <br>
            <input type="text" name="shape_leng"><br>
         </label>
         <label for="geom">geom: <br>
            <input type="text" name="geom">
         </label>
         <br><br><input type="submit" value="Submit">
      </form>
      <form id="barrierForm" method="POST" style="display: none;">
         <label for="barrierForm">Barrier Collection</label><br>
         <label for="gid">gid: <br>
            <input type="text" name="gid"><br>
         </label>
         <label for="agency">
            agency: <br>
            <select id="agencyBarr" name="agency">
               <option value="0">BLM</option>
               <option value="1">NPS</option>
               <option value="2">FS</option>
               <option value="3">FWS</option>
               <option selected="selected" value="select"></option>
            </select>
            <br>
         </label>
         <label for="regions">
            regions: <br>
            <select id="regionsBarr" name="regions">
               <option value="select"></option>
               <option value="Amargosa Desert E">Amargosa Desert E</option>
               <option value="Amargosa Desert W">Amargosa Desert W</option>
               <option value="Black Mt Area">Black Mt Area</option>
               <option value="California Wash">California Wash</option>
               <option value="Colorado Valley">Colorado Valley</option>
               <option value="Coyote Springs Valley">Coyote Springs Valley</option>
               <option value="Crater Flat">Crater Flat</option>
               <option value="Eldorado Valley">Eldorado Valley</option>
               <option value="Forty-mile Canyon">Forty-mile Canyon</option>
               <option value="Frenchman Flat">Frenchman Flat</option>
               <option value="Garnet Valley">Garnet Valley</option>
               <option value="Gold Butte Area">Gold Butte Area</option>
               <option value="Greasewood Basin">Greasewood Basin</option>
               <option value="Hidden Valley N">Hidden Valley N</option>
               <option value="Hidden Valley S">Hidden Valley S</option>
               <option value="Indian Springs Valley N">Indian Springs Valley N</option>
               <option value="Indian Springs Valley S">Indian Springs Valley S</option>
               <option value="Ivanpah N">Ivanpah N</option>
               <option value="Ivanpah S">Ivanpah S</option>
               <option value="Jean Lake Valley">Jean Lake Valley</option>
               <option value="Las Vegas Valley">Las Vegas Valley</option>
               <option value="Meadow Valley Wash Upper">Meadow Valley Wash Upper</option>
               <option value="Meadow Valley Wash Lower">Meadow Valley Wash Lower</option>
               <option value="Mercury Valley">Mercury Valley</option>
               <option value="Mesquite Valley">Mesquite Valley</option>
               <option value="Moapa Valley">Moapa Valley</option>
               <option value="Muddy River Springs Area">Muddy River Springs Area</option>
               <option value="Pahrump Valley">Pahrump Valley</option>
               <option value="Piute Valley">Piute Valley</option>
               <option value="Rock Valley">Rock Valley</option>
               <option value="Three Lakes Valley N">Three Lakes Valley N</option>
               <option value="Three Lakes Valley S">Three Lakes Valley S</option>
               <option value="Tikapoo Valley">Tikapoo Valley</option>
               <option value="Virgin River Valley">Virgin River Valley</option>
            </select>
            <br>
         </label>
         <label for="ecosystem">
            ecosystem: <br>
            <select id="ecosystemBarr" name="ecosystem">
               <option value="select"></option>
               <option value="Alpine">Alpine</option>
               <option value="Bristlecone/ Limber Pine">Bristlecone/ Limber Pine</option>
               <option value="Mixed Conifer">Mixed Conifer</option>
               <option value="Pinon-Juniper">Pinon-Juniper</option>
               <option value="Blackbrush/ Shadscale">Blackbrush/ Shadscale</option>
               <option value="Riparian">Riparian</option>
               <option value="Wetland">Wetland</option>
               <option value="Open Water">Open Water</option>
               <option value="Spring">Spring</option>
               <option value="Spring Channel">Spring Channel</option>
               <option value="Mojave Desert Scrub">Mojave Desert Scrub*</option>
            </select>
            <br>
         </label>
         <label for="gps_date">gps_date: <br>
            <input type="date" name="gps_date"><br>
         </label>
         <label for="barr_code">barr_code: <br>
            <input type="text" name="barr_code"><br>
         </label>
         <label for="barr_actio">
            barr_actio: <br>
            <select id="barr_actioBarr" name="barr_actio">
               <option value="select"></option>
               <option value="Repaired">Repaired</option>
               <option value="Removed">Removed</option>
               <option value="Existing">Existing</option>
               <option value="Proposed">Proposed</option>
               <option value="Installed">Installed</option>
            </select>
            <br>
         </label>
         <label for="barr_type">
            barr_type: <br>
            <select id="barr_typeBarr" name="barr_type">
               <option value="select"></option>
               <option value="Boulders">Boulders</option>
               <option value="Gate">Gate</option>
               <option value="Metal Post">Metal Post</option>
               <option value="Metal Post &amp; Cable">Metal Post &amp; Cable</option>
               <option value="Tank Traps">Tank Traps</option>
               <option value="Telephone Posts">Telephone Posts</option>
               <option value="Telephone Posts &amp; Cable">Telephone Posts &amp; Cable</option>
               <option value="T-Post">T-Post</option>
               <option value="T-Post Fence">T-Post Fence</option>
               <option value="*Other - See Notes*">*Other - See Notes*</option>
            </select>
            <br>
         </label>
         <label for="comments">comments: <br>
            <input type="text" name="comments"><br>
         </label>
         <label for="primary_ob">primary_ob: <br>
            <input type="text" name="primary_ob"><br>
         </label>
         <label for="secondary_">secondary_: <br>
            <input type="text" name="secondary_"><br>
         </label>
         <label for="project_na">project_na: <br>
            <input type="text" name="project_na"><br>
         </label>
         <label for="barr_miles">barr_miles: <br>
            <input type="text" name="barr_miles"><br>
         </label>
         <label for="barr_km">barr_km: <br>
            <input type="text" name="barr_km"><br>
         </label>
         <label for="previously">
            previously: <br>
            <select id="previouslyBarr" name="previously">
               <option value="select"></option>
               <option value="Yes">Yes</option>
               <option value="No">No</option>
               <option value="Unknown">Unknown</option>
            </select>
            <br>
         </label>
         <label for="gps_photo">
            gps_photo: <br>
            <select id="gps_photoBarr" name="gps_photo">
               <option value="select"></option>
               <option value="Yes">Yes</option>
               <option value="No">No</option>
            </select>
            <br>
         </label>
         <label for="photo_azim">photo_azim: <br>
            <input type="text" name="photo_azim"><br>
         </label>
         <label for="qa_qc">qa_qc: <br>
            <input type="text" name="qa_qc"><br>
         </label>
         <label for="shape_stle">shape_stle: <br>
            <input type="text" name="shape_stle"><br>
         </label>
         <label for="shape_leng">shape_leng: <br>
            <input type="text" name="shape_leng"><br>
         </label>
         <label for="geom">geom: <br><input type="text" name="geom"></label>
         <br><br>
         <input type="submit" value="Submit">
      </form>
      <form id="distPointForm" method="POST" style="display: none;">
         <label for="distPointForm">Disturbance Point Collection</label><br>
         <label for="gid">gid: <br>
            <input type="text" name="gid"><br>
         </label>
         <label for="agency">
            agency: <br>
            <select id="agency" name="agency">
               <option value="0">BLM</option>
               <option value="1">NPS</option>
               <option value="2">FS</option>
               <option value="3">FWS</option>
               <option selected="selected" value="select"></option>
            </select>
            <br>
         </label>
         <label for="region">
            region: <br>
            <select id="region" name="region">
               <option selected="selected" value="select"></option>
               <option value="Amargosa Desert E">Amargosa Desert E</option>
               <option value="Amargosa Desert W">Amargosa Desert W</option>
               <option value="Black Mt Area">Black Mt Area</option>
               <option value="California Wash">California Wash</option>
               <option value="Colorado Valley">Colorado Valley</option>
               <option value="Coyote Springs Valley">Coyote Springs Valley</option>
               <option value="Crater Flat">Crater Flat</option>
               <option value="Eldorado Valley">Eldorado Valley</option>
               <option value="Forty-mile Canyon">Forty-mile Canyon</option>
               <option value="Frenchman Flat">Frenchman Flat</option>
               <option value="Garnet Valley">Garnet Valley</option>
               <option value="Gold Butte Area">Gold Butte Area</option>
               <option value="Greasewood Basin">Greasewood Basin</option>
               <option value="Hidden Valley N">Hidden Valley N</option>
               <option value="Hidden Valley S">Hidden Valley S</option>
               <option value="Indian Springs Valley N">Indian Springs Valley N</option>
               <option value="Indian Springs Valley S">Indian Springs Valley S</option>
               <option value="Ivanpah N">Ivanpah N</option>
               <option value="Ivanpah S">Ivanpah S</option>
               <option value="Jean Lake Valley">Jean Lake Valley</option>
               <option value="Las Vegas Valley">Las Vegas Valley</option>
               <option value="Meadow Valley Wash Upper">Meadow Valley Wash Upper</option>
               <option value="Meadow Valley Wash Lower">Meadow Valley Wash Lower</option>
               <option value="Mercury Valley">Mercury Valley</option>
               <option value="Mesquite Valley">Mesquite Valley</option>
               <option value="Moapa Valley">Moapa Valley</option>
               <option value="Muddy River Springs Area">Muddy River Springs Area</option>
               <option value="Pahrump Valley">Pahrump Valley</option>
               <option value="Piute Valley">Piute Valley</option>
               <option value="Rock Valley">Rock Valley</option>
               <option value="Three Lakes Valley N">Three Lakes Valley N</option>
               <option value="Three Lakes Valley S">Three Lakes Valley S</option>
               <option value="Tikapoo Valley">Tikapoo Valley</option>
               <option value="Virgin River Valley">Virgin River Valley</option>
            </select>
            <br>
         </label>
         <label for="ecosystem">
            ecosystem: <br>
            <select id="ecosystem" name="ecosystem">
               <option selected="selected" value="select"></option>
               <option value="Alpine">Alpine</option>
               <option value="Bristlecone/ Limber Pine">Bristlecone/ Limber Pine</option>
               <option value="Mixed Conifer">Mixed Conifer</option>
               <option value="Pinon-Juniper">Pinon-Juniper</option>
               <option value="Blackbrush/ Shadscale">Blackbrush/ Shadscale</option>
               <option value="Riparian">Riparian</option>
               <option value="Wetland">Wetland</option>
               <option value="Open Water">Open Water</option>
               <option value="Spring">Spring</option>
               <option value="Spring Channel">Spring Channel</option>
               <option value="Mojave Desert Scrub">Mojave Desert Scrub*</option>
            </select>
            <br>
         </label>
         <label for="gps_date">gps_date: <br>
            <input type="date" name="gps_date"><br>
         </label>
         <label for="dist_code">dist_code: <br>
            <input type="text" name="dist_code"><br></label>
         <label for="use_freq">
            use_freq: <br>
            <select id="use_freq" name="use_freq">
               <option selected="selected" value="select"></option>
               <option value="Yes">Yes</option>
               <option value="No">No</option>
            </select>
            <br>
         </label>
         <label for="use_recent">
            use_recent: <br>
            <select id="use_recent" name="use_recent">
               <option selected="selected" value="select"></option>
               <option value="Yes">Yes</option>
               <option value="No">No</option>
            </select>
            <br>
         </label>
         <label for="dist_pt_ty">
            dist_pt_ty: <br>
            <select id="dist_pt_ty" name="dist_pt_ty">
               <option selected="selected" value="select"></option>
               <option value="Dumpsite">Dumpsite</option>
               <option value="Fire Ring">Fire Ring</option>
               <option value="Graffiti">Graffiti</option>
               <option value="Plant Collection">Plant Collection</option>
               <option value="Mine Shaft">Mine Shaft</option>
               <option value="Shooting Range">Shooting Range</option>
               <option value="Bike Trail">Location along Bike Trail</option>
               <option value="Campsite">Campsite</option>
               <option value="Incursion">Incursion</option>
               <option value="Hillclimb">Hillclimb</option>
               <option value="*Other - See Notes*">*Other - See Notes*</option>
            </select>
            <br>
         </label>
         <label for="accessibil">
            accessibil: <br>
            <select id="accessibil" name="accessibil">
               <option selected="selected" value="select"></option>
               <option value="High">High</option>
               <option value="Medium">Medium</option>
               <option value="Low">Low</option>
            </select>
            <br>
         </label>
         <label for="visibility">
            visibility: <br>
            <select id="visibility" name="visibility">
               <option selected="selected" value="select"></option>
               <option value="High">High</option>
               <option value="Medium">Medium</option>
               <option value="Low">Low</option>
            </select>
            <br>
         </label>
         <label for="comments">comments: <br>
            <input type="text" name="comments"><br>
         </label>
         <label for="primary_ob">primary_ob: <br>
            <input type="text" name="primary_ob"><br>
         </label>
         <label for="secondary_">secondary_: <br>
            <input type="text" name="secondary_"><br>
         </label>
         <label for="previously">
            previously: <br>
            <select id="previously" name="previously">
               <option selected="selected" value="select"></option>
               <option value="Yes">Yes</option>
               <option value="No">No</option>
            </select>
            <br>
         </label>
         <label for="project_na">project_na: <br>
            <input type="text" name="project_na"><br>
         </label>
         <label for="estimate_s">estimate_s: <br>
            <input type="text" name="estimate_s"><br>
         </label>
         <label for="treated">
            treated: <br>
            <select id="treated" name="treated">
               <option selected="selected" value="select"></option>
               <option value="Yes">Yes</option>
               <option value="No">No*</option>
            </select>
            <br>
         </label>
         <label for="cultural">
            cultural: <br>
            <select id="cultural" name="cultural">
              <option selected="selected" value="select"></option>
               <option value="Yes">Yes</option>
               <option value="No">No</option>
            </select>
            <br>
         </label>
         <label for="t_e_specie">
            t_e_specie: <br>
            <select id="t_e_specie" name="t_e_specie">
               <option selected="selected" value="select"></option>
               <option value="Yes">Yes</option>
               <option value="No">No</option>
            </select>
            <br>
         </label>
         <label for="gps_photo">
            gps_photo: <br>
            <select id="gps_photo" name="gps_photo">
               <option selected="selected" value="select"></option>
               <option value="Yes">Yes</option>
               <option value="No">No</option>
            </select>
            <br>
         </label>
         <label for="soil_vulne">
            soil_vulne: <br>
            <select id="soil_vulne" name="soil_vulne">
              <option selected="selected" value="select"></option>
               <option value="Low">Low</option>
               <option value="Low/ Medium">Low/ Medium</option>
               <option value="Medium">Medium</option>
               <option value="Medium/ High">Medium/ High</option>
               <option value="High">High</option>
               <option value="Not Characterized">Not Characterized</option>
            </select>
            <br>
         </label>
         <label for="dist_use">
            dist_use: <br>
            <select id="dist_use" name="dist_use">
               <option selected="selected" value="select"></option>
               <option value="Social">Social</option>
               <option value="Mine">Mine</option>
               <option value="Old utility">Old utility</option>
               <option value="Random / Blazed">Random / Blazed</option>
               <option value="Gov_Operation">Gov_Operation</option>
               <option value="*Other - See Commnets">*Other - See Commnets</option>
            </select>
            <br>
         </label>
         <label for="photo_azim">photo_azim: <br>
            <input type="text" name="photo_azim"><br>
         </label>
         <label for="qa_qc">qa_qc: <br>
            <input type="text" name="qa_qc"><br>
         </label>
         <label for="old_distco">old_distco: <br>
            <input type="text" name="old_distco"><br>
         </label>
         <label for="geom">geom: <br>
            <input type="text" name="geom">
         </label>
         <br><br><input type="submit" value="Submit">
      </form>
      <form id="distPolyForm" method="POST" style="display: none;">
         <label for="distPolyForm">Disturbance Polygon Collection</label><br>
         <label for="gid">gid: <br>
            <input type="text" name="gid"><br>
         </label>
         <label for="agencey">
            agencey: <br>
            <select id="agencey" name="agencey">
               <option value="0">BLM</option>
               <option value="1">NPS</option>
               <option value="2">FS</option>
               <option value="3">FWS</option>
               <option selected="selected" value="select"></option>
            </select>
            <br>
         </label>
         <label for="regions">
            regions: <br>
            <select id="regions" name="regions">
               <option value="select"></option>
               <option value="Amargosa Desert E">Amargosa Desert E</option>
               <option value="Amargosa Desert W">Amargosa Desert W</option>
               <option value="Black Mt Area">Black Mt Area</option>
               <option value="California Wash">California Wash</option>
               <option value="Colorado Valley">Colorado Valley</option>
               <option value="Coyote Springs Valley">Coyote Springs Valley</option>
               <option value="Crater Flat">Crater Flat</option>
               <option value="Eldorado Valley">Eldorado Valley</option>
               <option value="Forty-mile Canyon">Forty-mile Canyon</option>
               <option value="Frenchman Flat">Frenchman Flat</option>
               <option value="Garnet Valley">Garnet Valley</option>
               <option value="Gold Butte Area">Gold Butte Area</option>
               <option value="Greasewood Basin">Greasewood Basin</option>
               <option value="Hidden Valley N">Hidden Valley N</option>
               <option value="Hidden Valley S">Hidden Valley S</option>
               <option value="Indian Springs Valley N">Indian Springs Valley N</option>
               <option value="Indian Springs Valley S">Indian Springs Valley S</option>
               <option value="Ivanpah N">Ivanpah N</option>
               <option value="Ivanpah S">Ivanpah S</option>
               <option value="Jean Lake Valley">Jean Lake Valley</option>
               <option value="Las Vegas Valley">Las Vegas Valley</option>
               <option value="Meadow Valley Wash Upper">Meadow Valley Wash Upper</option>
               <option value="Meadow Valley Wash Lower">Meadow Valley Wash Lower</option>
               <option value="Mercury Valley">Mercury Valley</option>
               <option value="Mesquite Valley">Mesquite Valley</option>
               <option value="Moapa Valley">Moapa Valley</option>
               <option value="Muddy River Springs Area">Muddy River Springs Area</option>
               <option value="Pahrump Valley">Pahrump Valley</option>
               <option value="Piute Valley">Piute Valley</option>
               <option value="Rock Valley">Rock Valley</option>
               <option value="Three Lakes Valley N">Three Lakes Valley N</option>
               <option value="Three Lakes Valley S">Three Lakes Valley S</option>
               <option value="Tikapoo Valley">Tikapoo Valley</option>
               <option value="Virgin River Valley">Virgin River Valley</option>
            </select>
            <br>
         </label>
         <label for="ecosystem">
            ecosystem: <br>
            <select id="ecosystem" name="ecosystem">
               <option value="select"></option>
               <option value="Alpine">Alpine</option>
               <option value="Bristlecone/ Limber Pine">Bristlecone/ Limber Pine</option>
               <option value="Mixed Conifer">Mixed Conifer</option>
               <option value="Pinon-Juniper">Pinon-Juniper</option>
               <option value="Blackbrush/ Shadscale">Blackbrush/ Shadscale</option>
               <option value="Riparian">Riparian</option>
               <option value="Wetland">Wetland</option>
               <option value="Open Water">Open Water</option>
               <option value="Spring">Spring</option>
               <option value="Spring Channel">Spring Channel</option>
               <option value="Mojave Desert Scrub">Mojave Desert Scrub*</option>
            </select>
            <br>
         </label>
         <label for="gps_date">gps_date: <br>
            <input type="date" name="gps_date"><br>
         </label>
         <label for="dist_code">dist_code: <br>
            <input type="text" name="dist_code"><br>
         </label>
         <label for="dist_use">
            dist_use: <br>
            <select id="dist_use" name="dist_use">
               <option value="select"></option>
               <option value="Social">Social</option>
               <option value="Mine">Mine</option>
               <option value="Old utility">Old utility</option>
               <option value="Random / Blazed">Random / Blazed</option>
               <option value="Gov_Operation">Gov_Operation</option>
               <option value="*Other - See Commnets">*Other - See Commnets</option>
            </select>
            <br>
         </label>
         <label for="use_freq">
            use_freq: <br>
            <select id="use_freq" name="use_freq">
               <option value="select"></option>
               <option value="Yes">Yes</option>
               <option value="No">No</option>
            </select>
            <br>
         </label>
         <label for="use_recent">
            use_recent: <br>
            <select id="use_recent" name="use_recent">
               <option value="select"></option>
               <option value="Yes">Yes</option>
               <option value="No">No</option>
            </select>
            <br>
         </label>
         <label for="site_stabi">
            site_stabi: <br>
            <select id="site_stabi" name="site_stabi">
               <option value="select"></option>
               <option value="Unstable">Unstable</option>
               <option value="Poor">Poor</option>
               <option value="Moderate">Moderate</option>
               <option value="Good">Good</option>
               <option value="Stable">Stable</option>
            </select>
            <br>
         </label>
         <label for="dist_crust">
            dist_crust: <br>
            <select id="dist_crust" name="dist_crust">
               <option value="select"></option>
               <option value="0 - No Crust">0 - No Crust</option>
               <option value="1 - Alkali">1 - Alkali</option>
               <option value="2 - Cyano-patchy">2 - Cyano-patchy</option>
               <option value="3 - Cyano-continuous">3 - Cyano-continuous</option>
               <option value="4 - Lichen-patchy">4 - Lichen-patchy</option>
               <option value="5 - Lichen-continuous">5 - Lichen-continuous</option>
            </select>
            <br>
         </label>
         <label for="undist_cru">
            undist_cru: <br>
            <select id="undist_cru" name="undist_cru">
               <option value="select"></option>
               <option value="0 - No Crust">0 - No Crust</option>
               <option value="1 - Alkali">1 - Alkali</option>
               <option value="2 - Cyano-patchy">2 - Cyano-patchy</option>
               <option value="3 - Cyano-continuous">3 - Cyano-continuous</option>
               <option value="4 - Lichen-patchy">4 - Lichen-patchy</option>
               <option value="5 - Lichen-continuous">5 - Lichen-continuous</option>
            </select>
            <br>
         </label>
         <label for="depth">
            depth: <br>
            <select id="depth" name="depth">
               <option value="select"></option>
               <option value="1 - Broken < 2" ''="">1 - Broken &lt; 2''</option>
               <option value="2 - Rut 2" '="" -="" 4'''="">2 - Rut 2'' - 4''</option><option value="3 - Rut 4" '="" -="" 8'''="">3 - Rut 4'' - 8''</option>
               <option value="4 - Rut > 8" ''="">4 - Rut &gt; 8''</option>
            </select>
            <br>
         </label>
         <label for="dist_poly_">
            dist_poly_: <br>
            <select id="dist_poly_" name="dist_poly_">
               <option value="select"></option>
               <option value="Donuts/ Random Tracks">Donuts/ Random Tracks</option>
               <option value="Pullouts">Pullouts</option>
               <option value="Denuded Area">Denuded Area</option>
               <option value="Scrape">Scrape</option>
               <option value="Burn">Burn</option>
               <option value="*Other - See Comments">*Other - See Comments</option>
            </select>
            <br>
         </label>
         <label for="plant_dama">
            plant_dama: <br>
            <select id="plant_dama" name="plant_dama">
               <option value="select"></option>
               <option value="0 - Intact">0 - Intact</option>
               <option value="1 - Most symmetrical">1 - Most symmetrical</option>
               <option value="2 - Many irregular, few dissected">2 - Many irregular, few dissected</option>
               <option value="3 - Many dissected, few highly dissected">3 - Many dissected, few highly dissected</option>
               <option value="4 - Many highly dissected, roots exposed">4 - Many highly dissected, roots exposed</option>
               <option value="5 - Many with roots exposed or detached">5 - Many with roots exposed or detached</option>
               <option value="6 - Denuded">6 - Denuded</option>
            </select>
            <br>
         </label>
         <label for="assessibil">
            assessibil: <br>
            <select id="assessibil" name="assessibil">
               <option value="select"></option>
               <option value="High">High</option>
               <option value="Medium">Medium</option>
               <option value="Low">Low</option>
            </select>
            <br>
         </label>
        <label for="visibility">
            visibility: <br>
            <select id="visibility" name="visibility">
               <option value="select"></option>
               <option value="High">High</option>
               <option value="Medium">Medium</option>
               <option value="Low">Low</option>
            </select>
            <br>
         </label>
         <label for="comments">comments: <br>
            <input type="text" name="comments"><br>
         </label>
         <label for="primary_ob">primary_ob: <br>
            <input type="text" name="primary_ob"><br>
         </label>
         <label for="secondary_">secondary_: <br>
            <input type="text" name="secondary_"><br>
         </label>
         <label for="acres_rest">acres_rest: <br>
            <input type="text" name="acres_rest"><br>
         </label>
         <label for="kmsq_resto">kmsq_resto: <br>
            <input type="text" name="kmsq_resto"><br>
         </label>
         <label for="treated">
            treated: <br>
            <select id="treated" name="treated">
               <option value="select"></option>
               <option value="Yes">Yes</option>
               <option value="No">No*</option>
            </select>
            <br>
         </label>
         <label for="dist_sever">dist_sever: <br>
            <input type="text" name="dist_sever"><br>
         </label>
         <label for="cultural">
            cultural: <br>
            <select id="cultural" name="cultural">
               <option value="select"></option>
               <option value="Yes">Yes</option>
               <option value="No">No</option>
            </select>
            <br>
         </label>
         <label for="t_e_specie">
            t_e_specie: <br>
            <select id="t_e_specie" name="t_e_specie">
               <option value="select"></option>
               <option value="Yes">Yes</option>
               <option value="No">No</option>
            </select>
            <br>
         </label>
         <label for="gps_photo">
            gps_photo: <br>
            <select id="gps_photo" name="gps_photo">
               <option value="select"></option>
               <option value="Yes">Yes</option>
               <option value="No">No</option>
            </select>
            <br>
         </label>
         <label for="site_vulne">
            site_vulne: <br>
            <select id="site_vulne" name="site_vulne">
               <option value="select"></option>
               <option value="Low">Low</option>
               <option value="Low/ Medium">Low/ Medium</option>
               <option value="Medium">Medium</option>
               <option value="Medium/ High">Medium/ High</option>
               <option value="High">High</option>
               <option value="Not Characterized">Not Characterized</option>
            </select>
            <br>
         </label>
         <label for="photo_azim">photo_azim: <br>
            <input type="text" name="photo_azim"><br>
         </label>
         <label for="qa_qc">qa_qc: <br>
            <input type="text" name="qa_qc"><br>
         </label>
         <label for="old_distco">old_distco: <br>
            <input type="text" name="old_distco"><br>
         </label>
         <label for="shape_star">shape_star: <br>
            <input type="text" name="shape_star"><br>
         </label>
         <label for="shape_stle">shape_stle: <br>
            <input type="text" name="shape_stle"><br>
         </label>
         <label for="shape_leng">shape_leng: <br>
            <input type="text" name="shape_leng"><br>
         </label>
         <label for="shape_area">shape_area: <br>
            <input type="text" name="shape_area"><br>
         </label>
         <label for="geom">geom: <br>
            <input type="text" name="geom">
         </label>
         <br><br><input type="submit" value="Submit">
      </form>
      <form id="distLineForm" method="POST" style="display: none;">
         <label for="distLineForm">Disturbance Line Collection</label><br>
         <label for="gid">gid: <br>
            <input type="text" name="gid"><br>
         </label>
         <label for="agency">
            agency: <br>
            <select id="agency" name="agency">
               <option value="0">BLM</option>
               <option value="1">NPS</option>
               <option value="2">FS</option>
               <option value="3">FWS</option>
               <option selected="selected" value="select"></option>
            </select>
            <br>
         </label>
         <label for="region">
            region: <br>
            <select id="region" name="region">
               <option value="select"></option>
               <option value="Amargosa Desert E">Amargosa Desert E</option>
               <option value="Amargosa Desert W">Amargosa Desert W</option>
               <option value="Black Mt Area">Black Mt Area</option>
               <option value="California Wash">California Wash</option>
               <option value="Colorado Valley">Colorado Valley</option>
               <option value="Coyote Springs Valley">Coyote Springs Valley</option>
               <option value="Crater Flat">Crater Flat</option>
               <option value="Eldorado Valley">Eldorado Valley</option>
               <option value="Forty-mile Canyon">Forty-mile Canyon</option>
               <option value="Frenchman Flat">Frenchman Flat</option>
               <option value="Garnet Valley">Garnet Valley</option>
               <option value="Gold Butte Area">Gold Butte Area</option>
               <option value="Greasewood Basin">Greasewood Basin</option>
               <option value="Hidden Valley N">Hidden Valley N</option>
               <option value="Hidden Valley S">Hidden Valley S</option>
               <option value="Indian Springs Valley N">Indian Springs Valley N</option>
               <option value="Indian Springs Valley S">Indian Springs Valley S</option>
               <option value="Ivanpah N">Ivanpah N</option>
               <option value="Ivanpah S">Ivanpah S</option>
               <option value="Jean Lake Valley">Jean Lake Valley</option>
               <option value="Las Vegas Valley">Las Vegas Valley</option>
               <option value="Meadow Valley Wash Upper">Meadow Valley Wash Upper</option>
               <option value="Meadow Valley Wash Lower">Meadow Valley Wash Lower</option>
               <option value="Mercury Valley">Mercury Valley</option>
               <option value="Mesquite Valley">Mesquite Valley</option>
               <option value="Moapa Valley">Moapa Valley</option>
               <option value="Muddy River Springs Area">Muddy River Springs Area</option>
               <option value="Pahrump Valley">Pahrump Valley</option>
               <option value="Piute Valley">Piute Valley</option>
               <option value="Rock Valley">Rock Valley</option>
               <option value="Three Lakes Valley N">Three Lakes Valley N</option>
               <option value="Three Lakes Valley S">Three Lakes Valley S</option>
               <option value="Tikapoo Valley">Tikapoo Valley</option>
               <option value="Virgin River Valley">Virgin River Valley</option>
            </select>
            <br>
         </label>
         <label for="ecosystem">
            ecosystem: <br>
            <select id="ecosystem" name="ecosystem">
               <option value="select"></option>
               <option value="Alpine">Alpine</option>
               <option value="Bristlecone/ Limber Pine">Bristlecone/ Limber Pine</option>
               <option value="Mixed Conifer">Mixed Conifer</option>
               <option value="Pinon-Juniper">Pinon-Juniper</option>
               <option value="Blackbrush/ Shadscale">Blackbrush/ Shadscale</option>
               <option value="Riparian">Riparian</option>
               <option value="Wetland">Wetland</option>
               <option value="Open Water">Open Water</option>
               <option value="Spring">Spring</option>
               <option value="Spring Channel">Spring Channel</option>
               <option value="Mojave Desert Scrub">Mojave Desert Scrub*</option>
            </select>
            <br>
         </label>
         <label for="gps_date">gps_date: <br>
            <input type="date" name="gps_date"><br>
         </label>
         <label for="dist_code">dist_code: <br>
            <input type="text" name="dist_code"><br>
         </label>
         <label for="dist_use">
            dist_use: <br>
            <select id="dist_use" name="dist_use">
               <option value="select"></option>
               <option value="Social">Social</option>
               <option value="Mine">Mine</option>
               <option value="Old utility">Old utility</option>
               <option value="Random / Blazed">Random / Blazed</option>
               <option value="Gov_Operation">Gov_Operation</option>
               <option value="*Other - See Commnets">*Other - See Commnets</option>
            </select>
            <br>
         </label>
         <label for="use_freq">
            use_freq: <br>
            <select id="use_freq" name="use_freq">
               <option value="select"></option>
               <option value="Yes">Yes</option>
               <option value="No">No</option>
            </select>
            <br>
         </label>
         <label for="use_recent">
            use_recent: <br>
            <select id="use_recent" name="use_recent">
               <option value="select"></option>
               <option value="Yes">Yes</option>
               <option value="No">No</option>
            </select>
            <br>
         </label>
         <label for="site_stabi">
            site_stabi: <br>
            <select id="site_stabi" name="site_stabi">
               <option value="select"></option>
               <option value="Unstable">Unstable</option>
               <option value="Poor">Poor</option>
               <option value="Moderate">Moderate</option>
               <option value="Good">Good</option>
               <option value="Stable">Stable</option>
            </select>
            <br>
         </label>
         <label for="dist_crust">
            dist_crust: <br>
            <select id="dist_crust" name="dist_crust">
               <option value="select"></option>
               <option value="0 - No Crust">0 - No Crust</option>
               <option value="1 - Alkali">1 - Alkali</option>
               <option value="2 - Cyano-patchy">2 - Cyano-patchy</option>
               <option value="3 - Cyano-continuous">3 - Cyano-continuous</option>
               <option value="4 - Lichen-patchy">4 - Lichen-patchy</option>
               <option value="5 - Lichen-continuous">5 - Lichen-continuous</option>
            </select>
            <br>
         </label>
         <label for="undist_cru">
            undist_cru: <br>
            <select id="undist_cru" name="undist_cru">
               <option value="select"></option>
               <option value="0 - No Crust">0 - No Crust</option>
               <option value="1 - Alkali">1 - Alkali</option>
               <option value="2 - Cyano-patchy">2 - Cyano-patchy</option>
               <option value="3 - Cyano-continuous">3 - Cyano-continuous</option>
               <option value="4 - Lichen-patchy">4 - Lichen-patchy</option>
               <option value="5 - Lichen-continuous">5 - Lichen-continuous</option>
            </select>
            <br>
         </label>
         <label for="depth">
            depth: <br>
            <select id="depth" name="depth">
               <option value="select"></option>
               <option value="1 - Broken < 2" ''="">1 - Broken &lt; 2''</option>
               <option value="2 - Rut 2" '="" -="" 4'''="">2 - Rut 2'' - 4''</option>
               <option value="3 - Rut 4" '="" -="" 8'''="">3 - Rut 4'' - 8''</option>
               <option value="4 - Rut > 8" ''="">4 - Rut &gt; 8''</option>
            </select>
            <br>
         </label>
         <label for="width">
            width: <br>
            <select id="width" name="width">
               <option value="select"></option>
               <option value="1 - 2 ft - Dirt Bike">1 - 2 ft - Dirt Bike</option>
               <option value="2 - 4 ft - ATV">2 - 4 ft - ATV</option>
               <option value="3 - 6 ft - Vehicle">3 - 6 ft - Vehicle</option>
               <option value="4 - > 6ft">4 - &gt; 6ft</option>
               <option value="*Other - See Notes*">*Other - See Notes*</option>
            </select>
            <br>
         </label>
         <label for="type">
            type: <br>
            <select id="type" name="type">
               <option value="select"></option>
               <option value="One-track">One-track</option>
               <option value="Two-track">Two-track</option>
               <option value="Random">Random</option>
               <option value="Road">Road</option>
               <option value="*Other - See Comments">*Other - See Comments</option>
            </select>
            <br>
         </label>
         <label for="plant_dama">
            plant_dama: <br>
            <select id="plant_dama" name="plant_dama">
               <option value="select"></option>
               <option value="0 - Intact">0 - Intact</option>
               <option value="1 - Most symmetrical">1 - Most symmetrical</option>
               <option value="2 - Many irregular, few dissected">2 - Many irregular, few dissected</option>
               <option value="3 - Many dissected, few highly dissected">3 - Many dissected, few highly dissected</option>
               <option value="4 - Many highly dissected, roots exposed">4 - Many highly dissected, roots exposed</option>
               <option value="5 - Many with roots exposed or detached">5 - Many with roots exposed or detached</option>
               <option value="6 - Denuded">6 - Denuded</option>
            </select>
            <br>
         </label>
         <label for="accessibil">
            accessibil: <br>
            <select id="accessibil" name="accessibil">
               <option value="select"></option>
               <option value="High">High</option>
               <option value="Medium">Medium</option>
               <option value="Low">Low</option>
            </select>
            <br>
         </label>
         <label for="visibility">
            visibility: <br>
            <select id="visibility" name="visibility">
               <option value="select"></option>
               <option value="High">High</option>
               <option value="Medium">Medium</option>
               <option value="Low">Low</option>
            </select>
            <br>
         </label>
         <label for="comments">comments: <br>
            <input type="text" name="comments"><br>
         </label>
         <label for="primary_ob">primary_ob: <br>
            <input type="text" name="primary_ob"><br>
         </label>
         <label for="secondary_">secondary_: <br>
            <input type="text" name="secondary_"><br>
         </label>
         <label for="miles_dist">miles_dist: <br>
            <input type="text" name="miles_dist"><br>
         </label>
         <label for="km_dist">km_dist: <br>
            <input type="text" name="km_dist"><br>
         </label>
         <label for="treated">
            treated: <br>
            <select id="treated" name="treated">
               <option value="select"></option>
               <option value="Yes">Yes</option>
               <option value="No">No</option>
            </select>
            <br>
         </label>
         <label for="dist_sever">dist_sever: <br>
            <input type="text" name="dist_sever"><br>
         </label>
         <label for="cultural">
            cultural: <br>
            <select id="cultural" name="cultural">
               <option value="select"></option>
               <option value="Yes">Yes</option>
               <option value="No">No</option>
            </select>
            <br>
         </label>
         <label for="t_e_specie">
            t_e_specie: <br>
            <select id="t_e_specie" name="t_e_specie">
               <option value="select"></option>
               <option value="Yes">Yes</option>
               <option value="No">No</option>
            </select>
            <br>
         </label>
         <label for="gps_photo">
            gps_photo: <br>
            <select id="gps_photo" name="gps_photo">
               <option value="select"></option>
               <option value="Yes">Yes</option>
               <option value="No">No</option>
            </select>
            <br>
         </label>
         <label for="soil_vulne">
            soil_vulne: <br>
            <select id="soil_vulne" name="soil_vulne">
               <option value="select"></option>
               <option value="Low">Low</option>
               <option value="Low/ Medium">Low/ Medium</option>
               <option value="Medium">Medium</option>
               <option value="Medium/ High">Medium/ High</option>
               <option value="High">High</option>
               <option value="Not Characterized">Not Characterized</option>
            </select>
            <br>
         </label>
         <label for="photo_azim">photo_azim: <br>
            <input type="text" name="photo_azim"><br>
         </label>
         <label for="qa_qc">qa_qc: <br>
            <input type="text" name="qa_qc"><br>
         </label>
         <label for="old_dist_c">old_dist_c: <br>
            <input type="text" name="old_dist_c"><br>
         </label>
         <label for="shape_stle">shape_stle: <br>
            <input type="text" name="shape_stle"><br>
         </label>
         <label for="shape_leng">shape_leng: <br>
            <input type="text" name="shape_leng"><br>
         </label>
         <label for="geom">geom: <br>
            <input type="text" name="geom">
         </label>
         <br><br><input type="submit" value="Submit">
      </form>
   </div>
</div>`;

  const sync = `<button id="sync" class="btn">Synchronize</button>`;

  $(formTest2).appendTo('#formPopDIV');
  $(sync).appendTo('#formPopDIV');

  //https://stackoverflow.com/questions/18602331/why-is-this-jquery-click-function-not-working
  // link above helped with the on click event which then leads to grabbing the data from IndexedDB


  $('#featureType, #featureStyle').change(function () {

    const featureTypeSel = $('#featureType').val();
    const featureStyleSel = $('#featureStyle').val();

    $('#restoPointForm').toggle(
      featureStyleSel === 'resto' && featureTypeSel === 'point'
    );
    $('#restoPolyForm').toggle(
      featureStyleSel === 'resto' && featureTypeSel === 'poly'
    );
    $('#restoLineForm').toggle(
      featureStyleSel === 'resto' && featureTypeSel === 'line'
    );
    $('#barrierForm').toggle(
      featureTypeSel === 'test' && featureStyleSel === 'barrier'
    );
    $('#distPointForm').toggle(
      featureStyleSel === 'disturb' && featureTypeSel === 'point'
    );
    $('#distPolyForm').toggle(
      featureStyleSel === 'disturb' && featureTypeSel === 'poly'
    );
    $('#distLineForm').toggle(
      featureStyleSel === 'disturb' && featureTypeSel === 'line'
    );
  });

  // $('form').submit(function (event) {
  //   // what this code is doing is stopping the browser from refreshing when a form is submitted
  //   event.preventDefault();
  //   var $this = $(this); // this is the current form that is selected
  //   // this is posting to the desired action ex "/restoLineFormSubmit" on the server side
  //   $.post($this.attr('action'), $this.serialize(), function (data) {
  //     // once posted is will switch the top two selections to default and reset the form that was submitted and
  //     // hide that form
  //
  //     // idea came from here
  //     //http://stackoverflow.com/questions/10502093/how-to-reset-a-select-element-with-jquery
  //     $('#featureType').prop('selectedIndex', 0);
  //     $('#featureStyle').prop('selectedIndex', 0);
  //     // idea came from here
  //     //http://stackoverflow.com/questions/6653556/jquery-javascripts-function-to-clear-all-the-fields-of-a-form
  //     $this.trigger('reset');
  //     // idea come from here
  //     // http://stackoverflow.com/questions/27846286/how-to-set-style-displaynone-using-jquerys-attr-method
  //     $this.hide();
  //     alert(data.message);
  //     console.log(data);
  //   })
  // })

  const db = new Dexie('SubmissionForms');

  db.version(1).stores({
    barrierSub: `properties.gid, type, geometry`,
    distLineSub: `properties.gid, type, geometry`,
    distPointSub: `properties.gid, type, geometry`,
    distPolySub: `properties.gid, type, geometry`,
    restoLineSub: `properties.gid, type, geometry`,
    restoPointSub: `properties.gid, type, geometry`,
    restoPolySub: `properties.gid, type, geometry`
  });
  db.open().then(function (db) {
    console.log('Opened Submission Forms DB');
  }).catch(function (err) {
    console.log(err)
  });

  $(document).on('click', "#sync", function () {
    console.log('Synchronizing...');
    db.barrierSub.count(function (count) {
      if (count > 0) {
        db.barrierSub.toArray(function (test) {
          $.ajax({
            type: "POST",
            url: '/barrierFormSubmit',
            contentType: 'application/json',
            data: JSON.stringify(test),
            dataType: "json",
            success: function (data) {
              console.log(data);
            }
          })
        })
          .then(function () {
            console.log('submitted barrier indexedDB')
          })
          .catch(function (err) {
            console.log(err)
          })
      }
    });
    db.distLineSub.count(function (count) {
      if (count > 0) {
        db.distLineSub.toArray(function (data) {
          $.ajax({
            type: "POST",
            url: "/distLineFormSubmit",
            contentType: 'application/json',
            data: JSON.stringify(data),
            success: function (data) {
              console.log(data)
            }
          })
        })
          .then(function () {
            console.log('submitted distLine indexedDB')
          })
          .catch(function (err) {
            console.log(err)
          })
      }
    });
    db.distPointSub.count(function (count) {
      if (count > 0) {
        db.distPointSub.toArray(function (data) {
          $.ajax({
            type: "POST",
            url: "/distPointFormSubmit",
            contentType: 'application/json',
            data: JSON.stringify(data),
            success: function (data) {
              console.log(data)
            }
          })
        })
          .then(function () {
            console.log('submitted distPoint indexedDB')
          })
          .catch(function (err) {
            console.log(err)
          })
      }
    });
    db.distPolySub.count(function (count) {
      if (count > 0) {
        db.distPolySub.toArray(function (data) {
          $.ajax({
            type: "POST",
            url: "/distPolyFormSubmit",
            contentType: 'application/json',
            data: JSON.stringify(data),
            success: function (data) {
              console.log(data)
            }
          })
        })
          .then(function () {
            console.log('submitted distPoly indexedDB')
          })
          .catch(function (err) {
            console.log(err)
          })
      }
    });
    db.restoLineSub.count(function (count) {
      if (count > 0) {
        db.restoLineSub.toArray(function (data) {
          $.ajax({
            type: "POST",
            url: "/restoLineFormSubmit",
            contentType: 'application/json',
            data: JSON.stringify(data),
            success: function (data) {
              console.log(data)
            }
          })
        })
          .then(function () {
            console.log('submitted restoLine indexedDB')
          })
          .catch(function (err) {
            console.log(err)
          })
      }
    });
    db.restoPointSub.count(function (count) {
      if (count > 0) {
        db.restoPointSub.toArray(function (data) {
          $.ajax({
            type: "POST",
            url: "/restoPointFormSubmit",
            contentType: 'application/json',
            data: JSON.stringify(data),
            success: function (data) {
              console.log(data)
            }
          })
        })
          .then(function () {
            console.log('submitted restoPoint indexedDB')
          })
          .catch(function (err) {
            console.log(err)
          })
      }
    });
    db.restoPolySub.count(function (count) {
      if (count > 0) {
        db.restoPolySub.toArray(function (data) {
          $.ajax({
            type: "POST",
            url: "/restoPolyFormSubmit",
            contentType: 'application/json',
            data: JSON.stringify(data),
            success: function (data) {
              console.log(data)
            }
          })
        })
          .then(function () {
            console.log('submitted restoPoly indexedDB')
          })
          .catch(function (err) {
            console.log(err)
          })
      }
    })
  });


  $("form").on("submit", function (event) {
    const $this = $(this); // this is the current form that is selected
    event.preventDefault();

    //https://stackoverflow.com/questions/9685177/get-the-id-of-a-form
    //this is grabbing the current form ID on submission
    const thisForm = $this.closest("form").attr("id");
    const form = $this.serializeArray();

    const barrierObj = {},
      barrierArray = [],
      distLineObj = {},
      distLineArray = [],
      distPointObj = {},
      distPointArray = [],
      distPolyObj = {},
      distPolyArray = [],
      restoLineObj = {},
      restoLineArray = [],
      restoPointObj = {},
      restoPointArray = [],
      restoPolyObj = {},
      restoPolyArray = [];

    //idea came from here
    //http://stackoverflow.com/questions/10502093/how-to-reset-a-select-element-with-jquery
    $('#featureType').prop('selectedIndex', 0);
    $('#featureStyle').prop('selectedIndex', 0);
    // idea came from here
    //http://stackoverflow.com/questions/6653556/jquery-javascripts-function-to-clear-all-the-fields-of-a-form
    $this.trigger('reset');
    // idea come from here
    // http://stackoverflow.com/questions/27846286/how-to-set-style-displaynone-using-jquerys-attr-method
    $this.hide();


    $(form).each(function (i, field) {
      const fieldValue = field.value;
      const fieldName = field.name;

      if (thisForm === "barrierForm") {
        //https://www.youtube.com/watch?v=Sb8xyCa2p7A this post and the ones below came
        //came from this youtube video
        if (fieldValue === '' || fieldValue === 'select') {
          barrierObj[fieldName] = null;
        } else if (fieldName === 'gid' || fieldName === 'agency' || fieldName === 'photo_azim') {
          barrierObj[fieldName] = parseInt(fieldValue);
        } else if (fieldName === 'barr_miles' || fieldName === 'bar_km' || fieldName === 'shape_stle' ||
          fieldName === 'shape_leng') {
          barrierObj[fieldName] = parseFloat(fieldValue);
        } else {
          barrierObj[fieldName] = fieldValue;
        }
      } else if (thisForm === 'distLineForm') {
        if (fieldValue === '' || fieldValue === 'select') {
          distLineObj[fieldName] = null;
        } else if (fieldName === 'gid' || fieldName === 'agency' || fieldName === 'dist_sever' || fieldName === 'photo_azim') {
          distLineObj[fieldName] = parseInt(fieldValue);
        } else if (fieldName === 'miles_dist' || fieldName === 'km_dist' || fieldName === 'shape_stle' || fieldName === 'shape_leng') {
          distLineObj[fieldName] = parseFloat(fieldValue);
        } else {
          distLineObj[fieldName] = fieldValue;
        }
      } else if (thisForm === 'distPointForm') {
        if (fieldValue === '' || fieldValue === 'select') {
          distPointObj[fieldName] = null;
        } else if (fieldName === 'gid' || fieldName === 'agency' || fieldName === 'photo_azim') {
          distPointObj[fieldName] = parseInt(fieldValue);
        } else if (fieldName === 'estimate_s') {
          distPointObj[fieldName] = parseFloat(fieldValue);
        } else {
          distPointObj[fieldName] = fieldValue;
        }
      } else if (thisForm === 'distPolyForm') {
        if (fieldValue === '' || fieldValue === 'select') {
          distPolyObj[fieldName] = null;
        } else if (fieldName === 'gid' || fieldName === 'agencey' || fieldName === 'dist_sever' || fieldName === 'photo_azim') {
          distPolyObj[fieldName] = parseInt(fieldValue);
        } else if (fieldName === 'acres_rest' || fieldName === 'kmsq_resto' || fieldName === 'shape_star' || fieldName === 'shape_stle'
          || fieldName === 'shape_leng' || fieldName === 'shape_area') {
          distPolyObj[fieldName] = parseFloat(fieldValue);
        } else {
          distPolyObj[fieldName] = fieldValue;
        }
      } else if (thisForm === 'restoLineForm') {
        if (fieldValue === '' || fieldValue === 'select') {
          restoLineObj[fieldName] = null;
        } else if (fieldName === 'gid' || fieldName === 'agency' || fieldName === 'photo_azim') {
          restoLineObj[fieldName] = parseInt(fieldValue);
        } else if (fieldName === 'miles_rest' || fieldName === 'km_resto' || fieldName === 'shape_stle' || fieldName === 'shape_leng') {
          restoLineObj[fieldName] = parseFloat(fieldValue);
        } else {
          restoLineObj[fieldName] = fieldValue;
        }
      } else if (thisForm === 'restoPointForm') {
        if (fieldValue === '' || fieldValue === 'select') {
          restoPointObj[fieldName] = null;
        } else if (fieldName === 'gid' || fieldName === 'agency' || fieldName === 'photo_azim') {
          restoPointObj[fieldName] = parseInt(fieldValue);
        } else if (fieldName === 'miles_rest' || fieldName === 'km_resto' || fieldName === 'shape_stle' || fieldName === 'shape_leng') {
          restoPointObj[fieldName] = parseFloat(fieldValue);
        } else {
          restoPointObj[fieldName] = fieldValue;
        }
      } else if (thisForm === 'restoPolyForm') {
        if (fieldValue === '' || fieldValue === 'select') {
          restoPolyObj[fieldName] = null;
        } else if (fieldName === 'gid' || fieldName === 'agency' || fieldName === 'photo_azim') {
          restoPolyObj[fieldName] = parseInt(fieldValue);
        } else if (fieldName === 'acres_rest' || fieldName === 'kmsq_resto' || fieldName === 'shape_star' || fieldName === 'shape_stle'
          || fieldName === 'shape_leng' || fieldName === 'shape_area') {
          restoPolyObj[fieldName] = parseFloat(fieldValue);
        } else {
          restoPolyObj[fieldName] = fieldValue;
        }
      }
    });

    if (Object.keys(barrierObj).length > 0) {
      thisLayer["properties"] = barrierObj;
      thisLayer['geometry']['type'] = 'MultiLineString';
      thisLayer['geometry']["crs"] = {"type": "name", "properties": {"name": "EPSG:4326"}};
      thisLayer["properties"]["geom"] = thisLayer['geometry'];

      barrierArray.push(thisLayer);

      db.barrierSub.bulkPut(barrierArray)
        .then(function (data) {
          console.log(`Barrier form submitted: ${data}`);
        })
        .catch(Dexie.BulkError, function (err) {
          console.warn(err);
        })
    } else if (Object.keys(distLineObj).length > 0) {
      thisLayer["properties"] = distLineObj;
      thisLayer['geometry']['type'] = 'MultiLineString';
      thisLayer['geometry']["crs"] = {"type": "name", "properties": {"name": "EPSG:4326"}};
      thisLayer["properties"]["geom"] = thisLayer['geometry'];

      distLineArray.push(thisLayer);

      db.distLineSub.bulkPut(distLineArray)
        .then(function (data) {
          console.log(`Disturbance Line form submitted: ${data}`);
        })
        .catch(Dexie.BulkError, function (err) {
          console.warn(err);
        });
    } else if (Object.keys(distPointObj).length > 0) {

      thisLayer["properties"] = distPointObj;
      //thisLayer['geometry']['type'] = 'MultiLineString';
      thisLayer['geometry']["crs"] = {"type": "name", "properties": {"name": "EPSG:4326"}};
      thisLayer["properties"]["geom"] = thisLayer['geometry'];

      distPointArray.push(thisLayer);
      db.distPointSub.bulkPut(distPointArray)
        .then(function (data) {
          console.log(`Disturbance Point form submitted: ${data}`);
        })
        .catch(Dexie.BulkError, function (err) {
          console.warn(err);
        });
    } else if (Object.keys(distPolyObj).length > 0) {
      thisLayer["properties"] = distPolyObj;
      thisLayer['geometry']['type'] = 'MultiPolygon';
      thisLayer['geometry']["crs"] = {"type": "name", "properties": {"name": "EPSG:4326"}};
      thisLayer["properties"]["geom"] = thisLayer['geometry'];

      distPolyArray.push(thisLayer);

      db.distPolySub.bulkPut(distPolyArray)
        .then(function (data) {
          console.log(`Disturbance Polygon form submitted: ${data}`);
        })
        .catch(Dexie.BulkError, function (err) {
          console.warn(err);
        });
    } else if (Object.keys(restoLineObj).length > 0) {
      thisLayer["properties"] = restoLineObj;
      thisLayer['geometry']['type'] = 'MultiLineString';
      thisLayer['geometry']["crs"] = {"type": "name", "properties": {"name": "EPSG:4326"}};
      thisLayer["properties"]["geom"] = thisLayer['geometry'];

      restoLineArray.push(thisLayer);

      db.restoLineSub.bulkPut(restoLineArray)
        .then(function (data) {
          console.log(`Restoration Line form submitted: ${data}`);
        })
        .catch(Dexie.BulkError, function (err) {
          console.warn(err);
        });
    } else if (Object.keys(restoPointObj).length > 0) {

      thisLayer["properties"] = restoPointObj;
      //thisLayer['geometry']['type'] = 'MultiLineString';
      thisLayer['geometry']["crs"] = {"type": "name", "properties": {"name": "EPSG:4326"}};
      thisLayer["properties"]["geom"] = thisLayer['geometry'];

      restoPointArray.push(thisLayer);

      db.restoPointSub.bulkPut(restoPointArray)
        .then(function (data) {
          console.log(`Restoration Point form submitted: ${data}`);
        })
        .catch(Dexie.BulkError, function (err) {
          console.warn(err);
        });
    } else if (Object.keys(restoPolyObj).length > 0) {
      thisLayer["properties"] = restoPolyObj;
      //thisLayer['geometry']['type'] = 'MultiLineString';
      thisLayer['geometry']["crs"] = {"type": "name", "properties": {"name": "EPSG:4326"}};
      thisLayer["properties"]["geom"] = thisLayer['geometry'];

      restoPolyArray.push(thisLayer);

      db.restoPolySub.bulkPut(restoPolyArray)
        .then(function (data) {
          console.log(`Restoration Polygon form submitted: ${data}`)
        })
        .catch(Dexie.BulkError, function (err) {
          console.warn(err);
        });
    }
  });
});
