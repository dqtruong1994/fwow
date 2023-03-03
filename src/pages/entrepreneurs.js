import React from "react";

const Entreprenuers = () => {
  return (
    <main class="region--content" id="main-content">
   <header class="washed-row--primary">
      <div class="container">
         <h1>Find entrepreneurs and connect</h1>
         <p class="lead">
            We have sorted these search results based on relevance to your profile. When you see someone who looks like they might be a good fit, reach out and send a message!
         </p>
      </div>
   </header>
   <section class="profile-search search-filter">
      <div class="container">
         <form action="" method="GET" data-id="profile-list-filter">
            <h5>Filter member profiles by:</h5>
            <div class="search-filter__fields">
               <div class="form__field form__field--terms form__field--text">
                  <label for="id_terms">Search terms:</label>
                  <input type="text" name="terms" placeholder="Type some keywords" id="id_terms" />
               </div>
               <div class="form__field form__field--expertise form__field--select">
                  <label for="id_expertise">Expertise:</label>
                  <select name="expertise" data-use-select2="" data-placeholder="Select" id="id_expertise" multiple="" data-select2-id="select2-data-id_expertise" tabindex="-1" class="select2-hidden-accessible" aria-hidden="true">
                     <option value="Accounting and Finance">Accounting and Finance</option>
                     <option value="Human Resources">Human Resources</option>
                     <option value="International">International</option>
                     <option value="Law and Legal">Law and Legal</option>
                     <option value="Management">Management</option>
                     <option value="Marketing">Marketing</option>
                     <option value="Operations">Operations</option>
                     <option value="Sales">Sales</option>
                     <option value="Starting Up">Starting Up</option>
                     <option value="Sustainability">Sustainability</option>
                     <option value="Technology and Internet">Technology and Internet</option>
                  </select>

               </div>
               <div class="form__field form__field--industries form__field--select">
                  <label for="id_industries">Industry:</label>
                  <select name="industries" data-use-select2="" data-placeholder="Select" id="id_industries" multiple="" data-select2-id="select2-data-id_industries" tabindex="-1" class="select2-hidden-accessible" aria-hidden="true">
                     <option value="">Select</option>
                     <option value="Accounting/Tax Services">Accounting/Tax Services</option>
                     <option value="Adult/Elder/Home Health Care">Adult/Elder/Home Health Care</option>
                     <option value="Agriculture/Farming/Ranching">Agriculture/Farming/Ranching</option>
                     <option value="Animals/Pets">Animals/Pets</option>
                     <option value="Architecture/Interior Design">Architecture/Interior Design</option>
                     <option value="Artisan/Craft Work">Artisan/Craft Work</option>
                     <option value="Arts: Music/Fine/Performing">Arts: Music/Fine/Performing</option>
                     <option value="Auto Repair/Mechanic">Auto Repair/Mechanic</option>
                     <option value="Beauty/Hair/Cosmetics">Beauty/Hair/Cosmetics</option>
                     <option value="Bookstore/News Sales">Bookstore/News Sales</option>
                     <option value="Business Consulting/Coaching">Business Consulting/Coaching</option>
                     <option value="Childcare">Childcare</option>
                     <option value="Computer Services/Information Technology">Computer Services/Information Technology</option>
                     <option value="Construction/Contracting/Handiwork">Construction/Contracting/Handiwork</option>
                     <option value="Counseling/Therapy/Mental Health">Counseling/Therapy/Mental Health</option>
                     <option value="Digital Marketing/E-Commerce/Social Media">Digital Marketing/E-Commerce/Social Media</option>
                     <option value="Disability Services">Disability Services</option>
                     <option value="Distribution &amp; Transportation">Distribution &amp; Transportation</option>
                     <option value="Education/Training">Education/Training</option>
                     <option value="Entertainment/Recreation/Events">Entertainment/Recreation/Events</option>
                     <option value="Export/Import">Export/Import</option>
                     <option value="eCommerce/Online Sales">eCommerce/Online Sales</option>
                     <option value="Fashion/Clothing/Accessories">Fashion/Clothing/Accessories</option>
                     <option value="Financial/Insurance Services">Financial/Insurance Services</option>
                     <option value="Flowers/Gifts">Flowers/Gifts</option>
                     <option value="Food Products/Grocery">Food Products/Grocery</option>
                     <option value="Forestry/Wood Products">Forestry/Wood Products</option>
                     <option value="Furniture Production/Repair/Sales">Furniture Production/Repair/Sales</option>
                     <option value="Graphic Design/Web Production">Graphic Design/Web Production</option>
                     <option value="Green Building/Renewable Energy">Green Building/Renewable Energy</option>
                     <option value="Health/Wellness/Fitness/Bodywork">Health/Wellness/Fitness/Bodywork</option>
                     <option value="Janitorial/Home Cleaning">Janitorial/Home Cleaning</option>
                     <option value="Jewelry/Luxury Goods">Jewelry/Luxury Goods</option>
                     <option value="Landscaping/Lawn Care">Landscaping/Lawn Care</option>
                     <option value="Laundry/Dry Cleaner">Laundry/Dry Cleaner</option>
                     <option value="Legal Services">Legal Services</option>
                     <option value="Manufacturing">Manufacturing</option>
                     <option value="Marketing/Advertising">Marketing/Advertising</option>
                     <option value="Media/Publishing">Media/Publishing</option>
                     <option value="Nonprofit/Social Enterprise">Nonprofit/Social Enterprise</option>
                     <option value="Online/Social Media">Online/Social Media</option>
                     <option value="Personal and Executive Assistance">Personal and Executive Assistance</option>
                     <option value="Photography/Audio/Video Services">Photography/Audio/Video Services</option>
                     <option value="Public Relations/Communications">Public Relations/Communications</option>
                     <option value="Real Estate">Real Estate</option>
                     <option value="Recruiting/Staffing/Personnel Services">Recruiting/Staffing/Personnel Services</option>
                     <option value="Restaurant/Cafe/Bar/Catering">Restaurant/Cafe/Bar/Catering</option>
                     <option value="Retail">Retail</option>
                     <option value="Sporting Goods/Recreation/Outdoor">Sporting Goods/Recreation/Outdoor</option>
                     <option value="Taxi/Limo Driver">Taxi/Limo Driver</option>
                     <option value="Translation/Localization">Translation/Localization</option>
                     <option value="Travel/Tourism/Hospitality/Leisure">Travel/Tourism/Hospitality/Leisure</option>
                     <option value="Veterinary">Veterinary</option>
                     <option value="Wine/Spirits">Wine/Spirits</option>
                     <option value="Writing/Editing">Writing/Editing</option>
                  </select>
                  <span class="select2 select2-container select2-container--mm" dir="ltr" data-select2-id="select2-data-2-tzhk" >
                     <span class="selection">
                        <span class="select2-selection select2-selection--multiple" role="combobox" aria-haspopup="true" aria-expanded="false" tabindex="-1" aria-disabled="false">
                           <ul class="select2-selection__rendered" id="select2-id_industries-container"></ul>
                           <span class="select2-search select2-search--inline"><textarea class="select2-search__field" type="search" tabindex="0" autocorrect="off" autocapitalize="none" spellcheck="false" role="searchbox" aria-autocomplete="list" autocomplete="off" aria-label="Search" aria-describedby="select2-id_industries-container" placeholder="Select" ></textarea></span>
                        </span>
                     </span>
                     <span class="dropdown-wrapper" aria-hidden="true"></span>
                  </span>
               </div>
               <div class="form__field form__field--languages form__field--select">
                  <label for="id_languages">Language:</label>
                  <select name="languages" data-use-select2="" data-placeholder="Select" id="id_languages" multiple="" data-select2-id="select2-data-id_languages" tabindex="-1" class="select2-hidden-accessible" aria-hidden="true">
                     <option value="ara">Arabic</option>
                     <option value="ben">Bengali</option>
                     <option value="mya">Burmese</option>
                     <option value="yue">Cantonese</option>
                     <option value="eng" selected="" data-select2-id="select2-data-4-d9fv">English</option>
                     <option value="fra">French</option>
                     <option value="deu">German</option>
                     <option value="hin">Hindi</option>
                     <option value="hat">Haitian</option>
                     <option value="ind">Bahasa Indonesia</option>
                     <option value="jpn">Japanese</option>
                     <option value="kor">Korean</option>
                     <option value="cmn">Mandarin</option>
                     <option value="por">Portuguese</option>
                     <option value="rus">Russian</option>
                     <option value="slk">Slovak</option>
                     <option value="som">Somali</option>
                     <option value="spa">Spanish</option>
                     <option value="tgl">Tagalog</option>
                     <option value="tha">Thai</option>
                     <option value="vie">Vietnamese</option>
                  </select>
                  <span class="select2 select2-container select2-container--mm" dir="ltr" data-select2-id="select2-data-3-gzx6">
                     <span class="selection">
                        <span class="select2-selection select2-selection--multiple" role="combobox" aria-haspopup="true" aria-expanded="false" tabindex="-1" aria-disabled="false">
                           <ul class="select2-selection__rendered" id="select2-id_languages-container">
                              <li class="select2-selection__choice" title="English" data-select2-id="select2-data-5-atfv"><button type="button" class="select2-selection__choice__remove" tabindex="-1" title="Remove item" aria-label="Remove item" aria-describedby="select2-id_languages-container-choice-bdof-eng"><span aria-hidden="true">×</span></button><span class="select2-selection__choice__display" id="select2-id_languages-container-choice-bdof-eng">English</span></li>
                           </ul>
                           <span class="select2-search select2-search--inline"><textarea class="select2-search__field" type="search" tabindex="0" autocorrect="off" autocapitalize="none" spellcheck="false" role="searchbox" aria-autocomplete="list" autocomplete="off" aria-label="Search" aria-describedby="select2-id_languages-container" placeholder=""></textarea></span>
                        </span>
                     </span>
                     <span class="dropdown-wrapper" aria-hidden="true"></span>
                  </span>
               </div>
               <div class="form__field form__field--residence form__field--select">
                  <label for="id_residence">Entrepreneurs who live in any of these countries:</label>
                  <select name="residence" data-use-select2="" data-placeholder="Select" id="id_residence" multiple="" data-select2-id="select2-data-id_residence" tabindex="-1" class="select2-hidden-accessible" aria-hidden="true">
                     <option value="AF">Afghanistan</option>
                     <option value="AX">Åland Islands</option>
                     <option value="AL">Albania</option>
                     <option value="DZ">Algeria</option>
                     <option value="AS">American Samoa</option>
                     <option value="AD">Andorra</option>
                     <option value="AO">Angola</option>
                     <option value="AI">Anguilla</option>
                     <option value="AQ">Antarctica</option>
                     <option value="AG">Antigua and Barbuda</option>
                     <option value="AR">Argentina</option>
                     <option value="AM">Armenia</option>
                     <option value="AW">Aruba</option>
                     <option value="AU">Australia</option>
                     <option value="AT">Austria</option>
                     <option value="AZ">Azerbaijan</option>
                     <option value="BS">Bahamas</option>
                     <option value="BH">Bahrain</option>
                     <option value="BD">Bangladesh</option>
                     <option value="BB">Barbados</option>
                     <option value="BY">Belarus</option>
                     <option value="BE">Belgium</option>
                     <option value="BZ">Belize</option>
                     <option value="BJ">Benin</option>
                     <option value="BM">Bermuda</option>
                     <option value="BT">Bhutan</option>
                     <option value="BO">Bolivia</option>
                     <option value="BQ">Bonaire, Sint Eustatius and Saba</option>
                     <option value="BA">Bosnia and Herzegovina</option>
                     <option value="BW">Botswana</option>
                     <option value="BV">Bouvet Island</option>
                     <option value="BR">Brazil</option>
                     <option value="IO">British Indian Ocean Territory</option>
                     <option value="BN">Brunei</option>
                     <option value="BG">Bulgaria</option>
                     <option value="BF">Burkina Faso</option>
                     <option value="BI">Burundi</option>
                     <option value="CV">Cabo Verde</option>
                     <option value="KH">Cambodia</option>
                     <option value="CM">Cameroon</option>
                     <option value="CA">Canada</option>
                     <option value="KY">Cayman Islands</option>
                     <option value="CF">Central African Republic</option>
                     <option value="TD">Chad</option>
                     <option value="CL">Chile</option>
                     <option value="CN">China</option>
                     <option value="CX">Christmas Island</option>
                     <option value="CC">Cocos (Keeling) Islands</option>
                     <option value="CO">Colombia</option>
                     <option value="KM">Comoros</option>
                     <option value="CG">Congo</option>
                     <option value="CD">Congo (the Democratic Republic of the)</option>
                     <option value="CK">Cook Islands</option>
                     <option value="CR">Costa Rica</option>
                     <option value="CI">Côte d'Ivoire</option>
                     <option value="HR">Croatia</option>
                     <option value="CU">Cuba</option>
                     <option value="CW">Curaçao</option>
                     <option value="CY">Cyprus</option>
                     <option value="CZ">Czechia</option>
                     <option value="DK">Denmark</option>
                     <option value="DJ">Djibouti</option>
                     <option value="DM">Dominica</option>
                     <option value="DO">Dominican Republic</option>
                     <option value="EC">Ecuador</option>
                     <option value="EG">Egypt</option>
                     <option value="SV">El Salvador</option>
                     <option value="GQ">Equatorial Guinea</option>
                     <option value="ER">Eritrea</option>
                     <option value="EE">Estonia</option>
                     <option value="SZ">Eswatini</option>
                     <option value="ET">Ethiopia</option>
                     <option value="FK">Falkland Islands (Malvinas)</option>
                     <option value="FO">Faroe Islands</option>
                     <option value="FJ">Fiji</option>
                     <option value="FI">Finland</option>
                     <option value="FR">France</option>
                     <option value="GF">French Guiana</option>
                     <option value="PF">French Polynesia</option>
                     <option value="TF">French Southern Territories</option>
                     <option value="GA">Gabon</option>
                     <option value="GM">Gambia</option>
                     <option value="GE">Georgia</option>
                     <option value="DE">Germany</option>
                     <option value="GH">Ghana</option>
                     <option value="GI">Gibraltar</option>
                     <option value="GR">Greece</option>
                     <option value="GL">Greenland</option>
                     <option value="GD">Grenada</option>
                     <option value="GP">Guadeloupe</option>
                     <option value="GU">Guam</option>
                     <option value="GT">Guatemala</option>
                     <option value="GG">Guernsey</option>
                     <option value="GN">Guinea</option>
                     <option value="GW">Guinea-Bissau</option>
                     <option value="GY">Guyana</option>
                     <option value="HT">Haiti</option>
                     <option value="HM">Heard Island and McDonald Islands</option>
                     <option value="VA">Holy See</option>
                     <option value="HN">Honduras</option>
                     <option value="HK">Hong Kong</option>
                     <option value="HU">Hungary</option>
                     <option value="IS">Iceland</option>
                     <option value="IN">India</option>
                     <option value="ID">Indonesia</option>
                     <option value="IR">Iran</option>
                     <option value="IQ">Iraq</option>
                     <option value="IE">Ireland</option>
                     <option value="IM">Isle of Man</option>
                     <option value="IL">Israel</option>
                     <option value="IT">Italy</option>
                     <option value="JM">Jamaica</option>
                     <option value="JP">Japan</option>
                     <option value="JE">Jersey</option>
                     <option value="JO">Jordan</option>
                     <option value="KZ">Kazakhstan</option>
                     <option value="KE">Kenya</option>
                     <option value="KI">Kiribati</option>
                     <option value="KW">Kuwait</option>
                     <option value="KG">Kyrgyzstan</option>
                     <option value="LA">Laos</option>
                     <option value="LV">Latvia</option>
                     <option value="LB">Lebanon</option>
                     <option value="LS">Lesotho</option>
                     <option value="LR">Liberia</option>
                     <option value="LY">Libya</option>
                     <option value="LI">Liechtenstein</option>
                     <option value="LT">Lithuania</option>
                     <option value="LU">Luxembourg</option>
                     <option value="MO">Macao</option>
                     <option value="MG">Madagascar</option>
                     <option value="MW">Malawi</option>
                     <option value="MY">Malaysia</option>
                     <option value="MV">Maldives</option>
                     <option value="ML">Mali</option>
                     <option value="MT">Malta</option>
                     <option value="MH">Marshall Islands</option>
                     <option value="MQ">Martinique</option>
                     <option value="MR">Mauritania</option>
                     <option value="MU">Mauritius</option>
                     <option value="YT">Mayotte</option>
                     <option value="MX">Mexico</option>
                     <option value="FM">Micronesia (Federated States of)</option>
                     <option value="MD">Moldova</option>
                     <option value="MC">Monaco</option>
                     <option value="MN">Mongolia</option>
                     <option value="ME">Montenegro</option>
                     <option value="MS">Montserrat</option>
                     <option value="MA">Morocco</option>
                     <option value="MZ">Mozambique</option>
                     <option value="MM">Myanmar</option>
                     <option value="NA">Namibia</option>
                     <option value="NR">Nauru</option>
                     <option value="NP">Nepal</option>
                     <option value="NL">Netherlands</option>
                     <option value="NC">New Caledonia</option>
                     <option value="NZ">New Zealand</option>
                     <option value="NI">Nicaragua</option>
                     <option value="NE">Niger</option>
                     <option value="NG">Nigeria</option>
                     <option value="NU">Niue</option>
                     <option value="NF">Norfolk Island</option>
                     <option value="KP">North Korea</option>
                     <option value="MK">North Macedonia</option>
                     <option value="MP">Northern Mariana Islands</option>
                     <option value="NO">Norway</option>
                     <option value="OM">Oman</option>
                     <option value="PK">Pakistan</option>
                     <option value="PW">Palau</option>
                     <option value="PS">Palestine (West Bank/Gaza)</option>
                     <option value="PA">Panama</option>
                     <option value="PG">Papua New Guinea</option>
                     <option value="PY">Paraguay</option>
                     <option value="PE">Peru</option>
                     <option value="PH">Philippines</option>
                     <option value="PN">Pitcairn</option>
                     <option value="PL">Poland</option>
                     <option value="PT">Portugal</option>
                     <option value="PR">Puerto Rico</option>
                     <option value="QA">Qatar</option>
                     <option value="RE">Réunion</option>
                     <option value="RO">Romania</option>
                     <option value="RU">Russia</option>
                     <option value="RW">Rwanda</option>
                     <option value="BL">Saint Barthélemy</option>
                     <option value="SH">Saint Helena, Ascension and Tristan da Cunha</option>
                     <option value="KN">Saint Kitts and Nevis</option>
                     <option value="LC">Saint Lucia</option>
                     <option value="MF">Saint Martin (French part)</option>
                     <option value="PM">Saint Pierre and Miquelon</option>
                     <option value="VC">Saint Vincent and the Grenadines</option>
                     <option value="WS">Samoa</option>
                     <option value="SM">San Marino</option>
                     <option value="ST">Sao Tome and Principe</option>
                     <option value="SA">Saudi Arabia</option>
                     <option value="SN">Senegal</option>
                     <option value="RS">Serbia</option>
                     <option value="SC">Seychelles</option>
                     <option value="SL">Sierra Leone</option>
                     <option value="SG">Singapore</option>
                     <option value="SX">Sint Maarten (Dutch part)</option>
                     <option value="SK">Slovakia</option>
                     <option value="SI">Slovenia</option>
                     <option value="SB">Solomon Islands</option>
                     <option value="SO">Somalia</option>
                     <option value="ZA">South Africa</option>
                     <option value="GS">South Georgia and the South Sandwich Islands</option>
                     <option value="KR">South Korea</option>
                     <option value="SS">South Sudan</option>
                     <option value="ES">Spain</option>
                     <option value="LK">Sri Lanka</option>
                     <option value="SD">Sudan</option>
                     <option value="SR">Suriname</option>
                     <option value="SJ">Svalbard and Jan Mayen</option>
                     <option value="SE">Sweden</option>
                     <option value="CH">Switzerland</option>
                     <option value="SY">Syria</option>
                     <option value="TW">Taiwan</option>
                     <option value="TJ">Tajikistan</option>
                     <option value="TZ">Tanzania</option>
                     <option value="TH">Thailand</option>
                     <option value="TL">Timor-Leste</option>
                     <option value="TG">Togo</option>
                     <option value="TK">Tokelau</option>
                     <option value="TO">Tonga</option>
                     <option value="TT">Trinidad and Tobago</option>
                     <option value="TN">Tunisia</option>
                     <option value="TR">Turkey</option>
                     <option value="TM">Turkmenistan</option>
                     <option value="TC">Turks and Caicos Islands</option>
                     <option value="TV">Tuvalu</option>
                     <option value="UG">Uganda</option>
                     <option value="UA">Ukraine</option>
                     <option value="AE">United Arab Emirates</option>
                     <option value="GB">United Kingdom</option>
                     <option value="UM">United States Minor Outlying Islands</option>
                     <option value="US">United States of America</option>
                     <option value="UY">Uruguay</option>
                     <option value="UZ">Uzbekistan</option>
                     <option value="VU">Vanuatu</option>
                     <option value="VE">Venezuela</option>
                     <option value="VN">Vietnam</option>
                     <option value="VG">Virgin Islands (British)</option>
                     <option value="VI">Virgin Islands (U.S.)</option>
                     <option value="WF">Wallis and Futuna</option>
                     <option value="EH">Western Sahara</option>
                     <option value="YE">Yemen</option>
                     <option value="ZM">Zambia</option>
                     <option value="ZW">Zimbabwe</option>
                  </select>
                  <span class="select2 select2-container select2-container--mm" dir="ltr" data-select2-id="select2-data-6-c6hs">
                     <span class="selection">
                        <span class="select2-selection select2-selection--multiple" role="combobox" aria-haspopup="true" aria-expanded="false" tabindex="-1" aria-disabled="false">
                           <ul class="select2-selection__rendered" id="select2-id_residence-container"></ul>
                           <span class="select2-search select2-search--inline"><textarea class="select2-search__field" type="search" tabindex="0" autocorrect="off" autocapitalize="none" spellcheck="false" role="searchbox" aria-autocomplete="list" autocomplete="off" aria-label="Search" aria-describedby="select2-id_residence-container" placeholder="Select" ></textarea></span>
                        </span>
                     </span>
                     <span class="dropdown-wrapper" aria-hidden="true"></span>
                  </span>
               </div>
               <div class="form__field form__field--countries form__field--select">
                  <label for="id_countries">Entrepreneurs who operate in any of these countries:</label>
                  <select name="countries" data-use-select2="" data-placeholder="Select" id="id_countries" multiple="" data-select2-id="select2-data-id_countries" tabindex="-1" class="select2-hidden-accessible" aria-hidden="true">
                     <option value="AF">Afghanistan</option>
                     <option value="AX">Åland Islands</option>
                     <option value="AL">Albania</option>
                     <option value="DZ">Algeria</option>
                     <option value="AS">American Samoa</option>
                     <option value="AD">Andorra</option>
                     <option value="AO">Angola</option>
                     <option value="AI">Anguilla</option>
                     <option value="AQ">Antarctica</option>
                     <option value="AG">Antigua and Barbuda</option>
                     <option value="AR">Argentina</option>
                     <option value="AM">Armenia</option>
                     <option value="AW">Aruba</option>
                     <option value="AU">Australia</option>
                     <option value="AT">Austria</option>
                     <option value="AZ">Azerbaijan</option>
                     <option value="BS">Bahamas</option>
                     <option value="BH">Bahrain</option>
                     <option value="BD">Bangladesh</option>
                     <option value="BB">Barbados</option>
                     <option value="BY">Belarus</option>
                     <option value="BE">Belgium</option>
                     <option value="BZ">Belize</option>
                     <option value="BJ">Benin</option>
                     <option value="BM">Bermuda</option>
                     <option value="BT">Bhutan</option>
                     <option value="BO">Bolivia</option>
                     <option value="BQ">Bonaire, Sint Eustatius and Saba</option>
                     <option value="BA">Bosnia and Herzegovina</option>
                     <option value="BW">Botswana</option>
                     <option value="BV">Bouvet Island</option>
                     <option value="BR">Brazil</option>
                     <option value="IO">British Indian Ocean Territory</option>
                     <option value="BN">Brunei</option>
                     <option value="BG">Bulgaria</option>
                     <option value="BF">Burkina Faso</option>
                     <option value="BI">Burundi</option>
                     <option value="CV">Cabo Verde</option>
                     <option value="KH">Cambodia</option>
                     <option value="CM">Cameroon</option>
                     <option value="CA">Canada</option>
                     <option value="KY">Cayman Islands</option>
                     <option value="CF">Central African Republic</option>
                     <option value="TD">Chad</option>
                     <option value="CL">Chile</option>
                     <option value="CN">China</option>
                     <option value="CX">Christmas Island</option>
                     <option value="CC">Cocos (Keeling) Islands</option>
                     <option value="CO">Colombia</option>
                     <option value="KM">Comoros</option>
                     <option value="CG">Congo</option>
                     <option value="CD">Congo (the Democratic Republic of the)</option>
                     <option value="CK">Cook Islands</option>
                     <option value="CR">Costa Rica</option>
                     <option value="CI">Côte d'Ivoire</option>
                     <option value="HR">Croatia</option>
                     <option value="CU">Cuba</option>
                     <option value="CW">Curaçao</option>
                     <option value="CY">Cyprus</option>
                     <option value="CZ">Czechia</option>
                     <option value="DK">Denmark</option>
                     <option value="DJ">Djibouti</option>
                     <option value="DM">Dominica</option>
                     <option value="DO">Dominican Republic</option>
                     <option value="EC">Ecuador</option>
                     <option value="EG">Egypt</option>
                     <option value="SV">El Salvador</option>
                     <option value="GQ">Equatorial Guinea</option>
                     <option value="ER">Eritrea</option>
                     <option value="EE">Estonia</option>
                     <option value="SZ">Eswatini</option>
                     <option value="ET">Ethiopia</option>
                     <option value="FK">Falkland Islands (Malvinas)</option>
                     <option value="FO">Faroe Islands</option>
                     <option value="FJ">Fiji</option>
                     <option value="FI">Finland</option>
                     <option value="FR">France</option>
                     <option value="GF">French Guiana</option>
                     <option value="PF">French Polynesia</option>
                     <option value="TF">French Southern Territories</option>
                     <option value="GA">Gabon</option>
                     <option value="GM">Gambia</option>
                     <option value="GE">Georgia</option>
                     <option value="DE">Germany</option>
                     <option value="GH">Ghana</option>
                     <option value="GI">Gibraltar</option>
                     <option value="GR">Greece</option>
                     <option value="GL">Greenland</option>
                     <option value="GD">Grenada</option>
                     <option value="GP">Guadeloupe</option>
                     <option value="GU">Guam</option>
                     <option value="GT">Guatemala</option>
                     <option value="GG">Guernsey</option>
                     <option value="GN">Guinea</option>
                     <option value="GW">Guinea-Bissau</option>
                     <option value="GY">Guyana</option>
                     <option value="HT">Haiti</option>
                     <option value="HM">Heard Island and McDonald Islands</option>
                     <option value="VA">Holy See</option>
                     <option value="HN">Honduras</option>
                     <option value="HK">Hong Kong</option>
                     <option value="HU">Hungary</option>
                     <option value="IS">Iceland</option>
                     <option value="IN">India</option>
                     <option value="ID">Indonesia</option>
                     <option value="IR">Iran</option>
                     <option value="IQ">Iraq</option>
                     <option value="IE">Ireland</option>
                     <option value="IM">Isle of Man</option>
                     <option value="IL">Israel</option>
                     <option value="IT">Italy</option>
                     <option value="JM">Jamaica</option>
                     <option value="JP">Japan</option>
                     <option value="JE">Jersey</option>
                     <option value="JO">Jordan</option>
                     <option value="KZ">Kazakhstan</option>
                     <option value="KE">Kenya</option>
                     <option value="KI">Kiribati</option>
                     <option value="KW">Kuwait</option>
                     <option value="KG">Kyrgyzstan</option>
                     <option value="LA">Laos</option>
                     <option value="LV">Latvia</option>
                     <option value="LB">Lebanon</option>
                     <option value="LS">Lesotho</option>
                     <option value="LR">Liberia</option>
                     <option value="LY">Libya</option>
                     <option value="LI">Liechtenstein</option>
                     <option value="LT">Lithuania</option>
                     <option value="LU">Luxembourg</option>
                     <option value="MO">Macao</option>
                     <option value="MG">Madagascar</option>
                     <option value="MW">Malawi</option>
                     <option value="MY">Malaysia</option>
                     <option value="MV">Maldives</option>
                     <option value="ML">Mali</option>
                     <option value="MT">Malta</option>
                     <option value="MH">Marshall Islands</option>
                     <option value="MQ">Martinique</option>
                     <option value="MR">Mauritania</option>
                     <option value="MU">Mauritius</option>
                     <option value="YT">Mayotte</option>
                     <option value="MX">Mexico</option>
                     <option value="FM">Micronesia (Federated States of)</option>
                     <option value="MD">Moldova</option>
                     <option value="MC">Monaco</option>
                     <option value="MN">Mongolia</option>
                     <option value="ME">Montenegro</option>
                     <option value="MS">Montserrat</option>
                     <option value="MA">Morocco</option>
                     <option value="MZ">Mozambique</option>
                     <option value="MM">Myanmar</option>
                     <option value="NA">Namibia</option>
                     <option value="NR">Nauru</option>
                     <option value="NP">Nepal</option>
                     <option value="NL">Netherlands</option>
                     <option value="NC">New Caledonia</option>
                     <option value="NZ">New Zealand</option>
                     <option value="NI">Nicaragua</option>
                     <option value="NE">Niger</option>
                     <option value="NG">Nigeria</option>
                     <option value="NU">Niue</option>
                     <option value="NF">Norfolk Island</option>
                     <option value="KP">North Korea</option>
                     <option value="MK">North Macedonia</option>
                     <option value="MP">Northern Mariana Islands</option>
                     <option value="NO">Norway</option>
                     <option value="OM">Oman</option>
                     <option value="PK">Pakistan</option>
                     <option value="PW">Palau</option>
                     <option value="PS">Palestine (West Bank/Gaza)</option>
                     <option value="PA">Panama</option>
                     <option value="PG">Papua New Guinea</option>
                     <option value="PY">Paraguay</option>
                     <option value="PE">Peru</option>
                     <option value="PH">Philippines</option>
                     <option value="PN">Pitcairn</option>
                     <option value="PL">Poland</option>
                     <option value="PT">Portugal</option>
                     <option value="PR">Puerto Rico</option>
                     <option value="QA">Qatar</option>
                     <option value="RE">Réunion</option>
                     <option value="RO">Romania</option>
                     <option value="RU">Russia</option>
                     <option value="RW">Rwanda</option>
                     <option value="BL">Saint Barthélemy</option>
                     <option value="SH">Saint Helena, Ascension and Tristan da Cunha</option>
                     <option value="KN">Saint Kitts and Nevis</option>
                     <option value="LC">Saint Lucia</option>
                     <option value="MF">Saint Martin (French part)</option>
                     <option value="PM">Saint Pierre and Miquelon</option>
                     <option value="VC">Saint Vincent and the Grenadines</option>
                     <option value="WS">Samoa</option>
                     <option value="SM">San Marino</option>
                     <option value="ST">Sao Tome and Principe</option>
                     <option value="SA">Saudi Arabia</option>
                     <option value="SN">Senegal</option>
                     <option value="RS">Serbia</option>
                     <option value="SC">Seychelles</option>
                     <option value="SL">Sierra Leone</option>
                     <option value="SG">Singapore</option>
                     <option value="SX">Sint Maarten (Dutch part)</option>
                     <option value="SK">Slovakia</option>
                     <option value="SI">Slovenia</option>
                     <option value="SB">Solomon Islands</option>
                     <option value="SO">Somalia</option>
                     <option value="ZA">South Africa</option>
                     <option value="GS">South Georgia and the South Sandwich Islands</option>
                     <option value="KR">South Korea</option>
                     <option value="SS">South Sudan</option>
                     <option value="ES">Spain</option>
                     <option value="LK">Sri Lanka</option>
                     <option value="SD">Sudan</option>
                     <option value="SR">Suriname</option>
                     <option value="SJ">Svalbard and Jan Mayen</option>
                     <option value="SE">Sweden</option>
                     <option value="CH">Switzerland</option>
                     <option value="SY">Syria</option>
                     <option value="TW">Taiwan</option>
                     <option value="TJ">Tajikistan</option>
                     <option value="TZ">Tanzania</option>
                     <option value="TH">Thailand</option>
                     <option value="TL">Timor-Leste</option>
                     <option value="TG">Togo</option>
                     <option value="TK">Tokelau</option>
                     <option value="TO">Tonga</option>
                     <option value="TT">Trinidad and Tobago</option>
                     <option value="TN">Tunisia</option>
                     <option value="TR">Turkey</option>
                     <option value="TM">Turkmenistan</option>
                     <option value="TC">Turks and Caicos Islands</option>
                     <option value="TV">Tuvalu</option>
                     <option value="UG">Uganda</option>
                     <option value="UA">Ukraine</option>
                     <option value="AE">United Arab Emirates</option>
                     <option value="GB">United Kingdom</option>
                     <option value="UM">United States Minor Outlying Islands</option>
                     <option value="US">United States of America</option>
                     <option value="UY">Uruguay</option>
                     <option value="UZ">Uzbekistan</option>
                     <option value="VU">Vanuatu</option>
                     <option value="VE">Venezuela</option>
                     <option value="VN">Vietnam</option>
                     <option value="VG">Virgin Islands (British)</option>
                     <option value="VI">Virgin Islands (U.S.)</option>
                     <option value="WF">Wallis and Futuna</option>
                     <option value="EH">Western Sahara</option>
                     <option value="YE">Yemen</option>
                     <option value="ZM">Zambia</option>
                     <option value="ZW">Zimbabwe</option>
                  </select>
                  <span class="select2 select2-container select2-container--mm" dir="ltr" data-select2-id="select2-data-7-n6ms">
                     <span class="selection">
                        <span class="select2-selection select2-selection--multiple" role="combobox" aria-haspopup="true" aria-expanded="false" tabindex="-1" aria-disabled="false">
                           <ul class="select2-selection__rendered" id="select2-id_countries-container"></ul>
                           <span class="select2-search select2-search--inline"><textarea class="select2-search__field" type="search" tabindex="0" autocorrect="off" autocapitalize="none" spellcheck="false" role="searchbox" aria-autocomplete="list" autocomplete="off" aria-label="Search" aria-describedby="select2-id_countries-container" placeholder="Select"></textarea></span>
                        </span>
                     </span>
                     <span class="dropdown-wrapper" aria-hidden="true"></span>
                  </span>
               </div>
            </div>
            <div class="search-filter__action">
               <button class="button primary"><span>Filter Results</span></button>
            </div>
         </form>
      </div>
   </section>
   <section class="profile-list">
      <div class="container">
         <article class="profile-card">
            <header class="profile-card__overview">
               <div class="profile-card__image">
                  <a href="/entrepreneur/1519599">
                     <div class="default-avatar avatar--small">
                        RM
                     </div>
                  </a>
               </div>
               <div class="profile-card__about">
                  <h3>
                     <a href="/entrepreneur/1519599" class="text-primary">
                     Richard Malamba
                     </a>
                  </h3>
                  <h5 class="">
                     <ul class="list--comma-separated">
                        <li>Lusaka</li>
                        <li>Zambia /Lusaka /southern</li>
                        <li>Zambia</li>
                     </ul>
                  </h5>
                  <h5 class="no-bold text-sottovoce">Education/Training</h5>
                  <div class="profile-card__extras">
                     <div class="profile-details__detail">
                        <div class="detail__label"><strong>Recent Activity</strong></div>
                        <div class="detail__value">
                           <div class="activity-widget">
                              <span data-tooltip="rnoyru-tooltip" title="" role="img" aria-label="Active in the last week" aria-describedby="spqv7m-tooltip" data-yeti-box="spqv7m-tooltip" data-toggle="spqv7m-tooltip" data-resize="spqv7m-tooltip" class="has-tip" data-events="resize">
                              <i class="fas fa-comment text-primary" aria-hidden="true"></i>
                              <i class="fas fa-comment text-primary " aria-hidden="true"></i>
                              <i class="fas fa-comment text-primary " aria-hidden="true"></i>
                              </span>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </header>
            <section class="profile-card__expertise">
               <h4>I need help with</h4>
               <div class="profile-card__category-rating">
                  <div>Accounting and Finance</div>
                  <div class="profile-card__progress-container">
                     <div class="primary progress profile-card__progress--entrepreneur" role="progressbar" tabindex="0" aria-valuenow="12" aria-valuemin="0" aria-valuetext="12 percent" aria-valuemax="100">
                        <div class="progress-meter" >
                        </div>
                     </div>
                  </div>
               </div>
               <div class="profile-card__category-rating">
                  <div>Human Resources</div>
                  <div class="profile-card__progress-container">
                     <div class="primary progress profile-card__progress--entrepreneur" role="progressbar" tabindex="0" aria-valuenow="13" aria-valuemin="0" aria-valuetext="13 percent" aria-valuemax="100">
                        <div class="progress-meter" >
                        </div>
                     </div>
                  </div>
               </div>
               <div class="profile-card__category-rating">
                  <div>Management</div>
                  <div class="profile-card__progress-container">
                     <div class="primary progress profile-card__progress--entrepreneur" role="progressbar" tabindex="0" aria-valuenow="10" aria-valuemin="0" aria-valuetext="10 percent" aria-valuemax="100">
                        <div class="progress-meter" >
                        </div>
                     </div>
                  </div>
               </div>
            </section>
            <section class="profile-card__entrepreneur-venture">
               <h6 class="text-sottovoce">My venture</h6>
               <h5>
                  <span dir="auto">Reaching more People community school</span>
               </h5>
               <div dir="auto">
                  Reaching more People community school, provides free education to the most vulnerables and single double orphans.
               </div>
            </section>
            <footer class="profile-card__actions">
               <a href="/entrepreneur/1519599" class="button hollow small primary">
               <strong>View profile</strong>
               </a>
            </footer>
         </article>
         <article class="profile-card">
            <header class="profile-card__overview">
               <div class="profile-card__image">
                  <a href="/entrepreneur/1520752">
                     <div class="default-avatar avatar--small">
                        jz
                     </div>
                  </a>
               </div>
               <div class="profile-card__about">
                  <h3>
                     <a href="/entrepreneur/1520752" class="text-primary">
                     justice zisengwe
                     </a>
                  </h3>
                  <h5 class="">
                     <ul class="list--comma-separated">
                        <li>harare</li>
                        <li>harare</li>
                        <li>Zimbabwe</li>
                     </ul>
                  </h5>
                  <h5 class="no-bold text-sottovoce">Forestry/Wood Products</h5>
                  <div class="profile-card__extras">
                     <div class="profile-details__detail">
                        <div class="detail__label"><strong>Recent Activity</strong></div>
                        <div class="detail__value">
                           <div class="activity-widget">
                              <span data-tooltip="pb2050-tooltip" title="" role="img" aria-label="Active in the last week" aria-describedby="162x8y-tooltip" data-yeti-box="162x8y-tooltip" data-toggle="162x8y-tooltip" data-resize="162x8y-tooltip" class="has-tip" data-events="resize">
                              <i class="fas fa-comment text-primary" aria-hidden="true"></i>
                              <i class="fas fa-comment text-primary " aria-hidden="true"></i>
                              <i class="fas fa-comment text-primary " aria-hidden="true"></i>
                              </span>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </header>
            <section class="profile-card__expertise">
               <h4>I need help with</h4>
               <div class="profile-card__category-rating">
                  <div>International</div>
                  <div class="profile-card__progress-container">
                     <div class="primary progress profile-card__progress--entrepreneur" role="progressbar" tabindex="0" aria-valuenow="40" aria-valuemin="0" aria-valuetext="40 percent" aria-valuemax="100">
                        <div class="progress-meter" >
                        </div>
                     </div>
                  </div>
               </div>
               <div class="profile-card__category-rating">
                  <div>Starting Up</div>
                  <div class="profile-card__progress-container">
                     <div class="primary progress profile-card__progress--entrepreneur" role="progressbar" tabindex="0" aria-valuenow="17" aria-valuemin="0" aria-valuetext="17 percent" aria-valuemax="100">
                        <div class="progress-meter">
                        </div>
                     </div>
                  </div>
               </div>
            </section>
            <section class="profile-card__entrepreneur-venture">
               <h6 class="text-sottovoce">My venture</h6>
               <h5>
                  <span dir="auto">humble african ventures</span>
               </h5>
               <div dir="auto">
                  the plan is to use waste raw materials from production sites and create artifacts for export. the use of waste granite cuts to produce watch frames and clocks. Use of pine tree seeds for gifts.
               </div>
            </section>
            <footer class="profile-card__actions">
               <a href="/entrepreneur/1520752" class="button hollow small primary">
               <strong>View profile</strong>
               </a>
            </footer>
         </article>
         <article class="profile-card">
            <header class="profile-card__overview">
               <div class="profile-card__image">
                  <a href="/entrepreneur/1520699">
                     <div class="default-avatar avatar--small">
                        CN
                     </div>
                  </a>
               </div>
               <div class="profile-card__about">
                  <h3>
                     <a href="/entrepreneur/1520699" class="text-primary">
                     Christopher Nyirenda
                     </a>
                  </h3>
                  <h5 class="">
                     <ul class="list--comma-separated">
                        <li>Lusaka</li>
                        <li>Lusaka</li>
                        <li>Zambia</li>
                     </ul>
                  </h5>
                  <h5 class="no-bold text-sottovoce">Agriculture/Farming/Ranching</h5>
                  <div class="profile-card__extras">
                     <div class="profile-details__detail">
                        <div class="detail__label"><strong>Recent Activity</strong></div>
                        <div class="detail__value">
                           <div class="activity-widget">
                              <span data-tooltip="hfmhgq-tooltip" title="" role="img" aria-label="Active in the last week" aria-describedby="v1uuhi-tooltip" data-yeti-box="v1uuhi-tooltip" data-toggle="v1uuhi-tooltip" data-resize="v1uuhi-tooltip" class="has-tip" data-events="resize">
                              <i class="fas fa-comment text-primary" aria-hidden="true"></i>
                              <i class="fas fa-comment text-primary " aria-hidden="true"></i>
                              <i class="fas fa-comment text-primary " aria-hidden="true"></i>
                              </span>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </header>
            <section class="profile-card__expertise">
               <h4>I need help with</h4>
               <div class="profile-card__category-rating">
                  <div>Accounting and Finance</div>
                  <div class="profile-card__progress-container">
                     <div class="primary progress profile-card__progress--entrepreneur" role="progressbar" tabindex="0" aria-valuenow="34" aria-valuemin="0" aria-valuetext="34 percent" aria-valuemax="100">
                        <div class="progress-meter" >
                        </div>
                     </div>
                  </div>
               </div>
               <div class="profile-card__category-rating">
                  <div>Management</div>
                  <div class="profile-card__progress-container">
                     <div class="primary progress profile-card__progress--entrepreneur" role="progressbar" tabindex="0" aria-valuenow="20" aria-valuemin="0" aria-valuetext="20 percent" aria-valuemax="100">
                        <div class="progress-meter" >
                        </div>
                     </div>
                  </div>
               </div>
               <div class="profile-card__category-rating">
                  <div>Marketing</div>
                  <div class="profile-card__progress-container">
                     <div class="primary progress profile-card__progress--entrepreneur" role="progressbar" tabindex="0" aria-valuenow="15" aria-valuemin="0" aria-valuetext="15 percent" aria-valuemax="100">
                        <div class="progress-meter" >
                        </div>
                     </div>
                  </div>
               </div>
            </section>
            <section class="profile-card__entrepreneur-venture">
               <h6 class="text-sottovoce">My venture</h6>
               <h5>
                  <span dir="auto">Kanjeche AgriFarm</span>
                  <span class="label whisper">Started in 2022</span>
               </h5>
               <div dir="auto">
                  I'm into a mixed type of agricultural farming namely crop aquaculture, animal husbandry and arable farming.
               </div>
            </section>
            <footer class="profile-card__actions">
               <a href="/entrepreneur/1520699" class="button hollow small primary">
               <strong>View profile</strong>
               </a>
            </footer>
         </article>
         <article class="profile-card">
            <header class="profile-card__overview">
               <div class="profile-card__image">
                  <a href="/entrepreneur/1520757">
                  <img src="https://d2win24dv6pngl.cloudfront.net/media/generated/profile-photos/profile-1520757/6fa926cf7cfdb704.3d2c799a3336.jpg" class="avatar--small" alt="[MA]" />
                  </a>
               </div>
               <div class="profile-card__about">
                  <h3>
                     <a href="/entrepreneur/1520757" class="text-primary">
                     Marcela ARGIRO
                     </a>
                  </h3>
                  <h5 class="">
                     <ul class="list--comma-separated">
                        <li>San Miguel de Tucumán</li>
                        <li>Tucuman</li>
                        <li>Argentina</li>
                     </ul>
                  </h5>
                  <h5 class="no-bold text-sottovoce">Education/Training</h5>
                  <div class="profile-card__extras">
                     <div class="profile-details__detail">
                        <div class="detail__label"><strong>Recent Activity</strong></div>
                        <div class="detail__value">
                           <div class="activity-widget">
                              <span data-tooltip="v7lu97-tooltip" title="" role="img" aria-label="Active in the last week" aria-describedby="empem3-tooltip" data-yeti-box="empem3-tooltip" data-toggle="empem3-tooltip" data-resize="empem3-tooltip" class="has-tip" data-events="resize">
                              <i class="fas fa-comment text-primary" aria-hidden="true"></i>
                              <i class="fas fa-comment text-primary " aria-hidden="true"></i>
                              <i class="fas fa-comment text-primary " aria-hidden="true"></i>
                              </span>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </header>
            <section class="profile-card__expertise">
               <h4>I need help with</h4>
               <div class="profile-card__category-rating">
                  <div>Marketing</div>
                  <div class="profile-card__progress-container">
                     <div class="primary progress profile-card__progress--entrepreneur" role="progressbar" tabindex="0" aria-valuenow="36" aria-valuemin="0" aria-valuetext="36 percent" aria-valuemax="100">
                        <div class="progress-meter" >
                        </div>
                     </div>
                  </div>
               </div>
               <div class="profile-card__category-rating">
                  <div>Sales</div>
                  <div class="profile-card__progress-container">
                     <div class="primary progress profile-card__progress--entrepreneur" role="progressbar" tabindex="0" aria-valuenow="25" aria-valuemin="0" aria-valuetext="25 percent" aria-valuemax="100">
                        <div class="progress-meter" >
                        </div>
                     </div>
                  </div>
               </div>
               <div class="profile-card__category-rating">
                  <div>Starting Up</div>
                  <div class="profile-card__progress-container">
                     <div class="primary progress profile-card__progress--entrepreneur" role="progressbar" tabindex="0" aria-valuenow="50" aria-valuemin="0" aria-valuetext="50 percent" aria-valuemax="100">
                        <div class="progress-meter">
                        </div>
                     </div>
                  </div>
               </div>
               <div class="profile-card__category-rating">
                  <div>Technology and Internet</div>
                  <div class="profile-card__progress-container">
                     <div class="primary progress profile-card__progress--entrepreneur" role="progressbar" tabindex="0" aria-valuenow="29" aria-valuemin="0" aria-valuetext="29 percent" aria-valuemax="100">
                        <div class="progress-meter">
                        </div>
                     </div>
                  </div>
               </div>
            </section>
            <section class="profile-card__entrepreneur-venture">
               <h6 class="text-sottovoce">My venture</h6>
               <h5>
                  <span dir="auto">English teaching</span>
               </h5>
               <div dir="auto">
                  English teaching in big scale
               </div>
            </section>
            <footer class="profile-card__actions">
               <a href="/entrepreneur/1520757" class="button hollow small primary">
               <strong>View profile</strong>
               </a>
            </footer>
         </article>
         <article class="profile-card">
            <header class="profile-card__overview">
               <div class="profile-card__image">
                  <a href="/entrepreneur/1520746">
                     <div class="default-avatar avatar--small">
                        NM
                     </div>
                  </a>
               </div>
               <div class="profile-card__about">
                  <h3>
                     <a href="/entrepreneur/1520746" class="text-primary">
                     Naa Markwei
                     </a>
                  </h3>
                  <h5 class="">
                     <ul class="list--comma-separated">
                        <li>Ghana</li>
                     </ul>
                  </h5>
                  <h5 class="no-bold text-sottovoce">Restaurant/Cafe/Bar/Catering</h5>
                  <div class="profile-card__extras">
                     <div class="profile-details__detail">
                        <div class="detail__label"><strong>Recent Activity</strong></div>
                        <div class="detail__value">
                           <div class="activity-widget">
                              <span data-tooltip="oyayld-tooltip" title="" role="img" aria-label="Active in the last week" aria-describedby="wvoqxn-tooltip" data-yeti-box="wvoqxn-tooltip" data-toggle="wvoqxn-tooltip" data-resize="wvoqxn-tooltip" class="has-tip" data-events="resize">
                              <i class="fas fa-comment text-primary" aria-hidden="true"></i>
                              <i class="fas fa-comment text-primary " aria-hidden="true"></i>
                              <i class="fas fa-comment text-primary " aria-hidden="true"></i>
                              </span>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </header>
            <section class="profile-card__expertise">
               <h4>I need help with</h4>
               <div class="profile-card__category-rating">
                  <div>Accounting and Finance</div>
                  <div class="profile-card__progress-container">
                     <div class="primary progress profile-card__progress--entrepreneur" role="progressbar" tabindex="0" aria-valuenow="45" aria-valuemin="0" aria-valuetext="45 percent" aria-valuemax="100">
                        <div class="progress-meter" >
                        </div>
                     </div>
                  </div>
               </div>
               <div class="profile-card__category-rating">
                  <div>Marketing</div>
                  <div class="profile-card__progress-container">
                     <div class="primary progress profile-card__progress--entrepreneur" role="progressbar" tabindex="0" aria-valuenow="22" aria-valuemin="0" aria-valuetext="22 percent" aria-valuemax="100">
                        <div class="progress-meter" >
                        </div>
                     </div>
                  </div>
               </div>
               <div class="profile-card__category-rating">
                  <div>Sales</div>
                  <div class="profile-card__progress-container">
                     <div class="primary progress profile-card__progress--entrepreneur" role="progressbar" tabindex="0" aria-valuenow="25" aria-valuemin="0" aria-valuetext="25 percent" aria-valuemax="100">
                        <div class="progress-meter">
                        </div>
                     </div>
                  </div>
               </div>
            </section>
            <section class="profile-card__entrepreneur-venture">
               <h6 class="text-sottovoce">My venture</h6>
               <h5>
                  <span dir="auto">Rona foods</span>
                  <span class="label whisper">Started in 2022</span>
               </h5>
               <div dir="auto">
                  I run an eatry
               </div>
            </section>
            <footer class="profile-card__actions">
               <a href="/entrepreneur/1520746" class="button hollow small primary">
               <strong>View profile</strong>
               </a>
            </footer>
         </article>
         <article class="profile-card">
            <header class="profile-card__overview">
               <div class="profile-card__organization">
                  <div class="community-org-label label success">
                     <i class="fad fa-users" aria-hidden="true"></i>&nbsp; EBRD
                  </div>
               </div>
               <div class="profile-card__image">
                  <a href="/entrepreneur/1368575">
                  <img src="https://d2win24dv6pngl.cloudfront.net/media/generated/profile-photos/profile-1368575/d19a0642a7527175.bbfdb1480b28.jpg" class="avatar--small" alt="[EE]" />
                  </a>
               </div>
               <div class="profile-card__about">
                  <h3>
                     <a href="/entrepreneur/1368575" class="text-primary">
                     Eman El-Zomor
                     </a>
                  </h3>
                  <h5 class="">
                     <ul class="list--comma-separated">
                        <li>Cairo</li>
                        <li>Egypt</li>
                     </ul>
                  </h5>
                  <h5 class="no-bold text-sottovoce">Education/Training</h5>
                  <div class="profile-card__extras">
                     <div class="profile-details__detail">
                        <div class="detail__label"><strong>Recent Activity</strong></div>
                        <div class="detail__value">
                           <div class="activity-widget">
                              <span data-tooltip="phruv6-tooltip" title="" role="img" aria-label="Active in the last week" aria-describedby="8bigxx-tooltip" data-yeti-box="8bigxx-tooltip" data-toggle="8bigxx-tooltip" data-resize="8bigxx-tooltip" class="has-tip" data-events="resize">
                              <i class="fas fa-comment text-primary" aria-hidden="true"></i>
                              <i class="fas fa-comment text-primary " aria-hidden="true"></i>
                              <i class="fas fa-comment text-primary " aria-hidden="true"></i>
                              </span>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </header>
            <section class="profile-card__expertise">
               <h4>I need help with</h4>
               <div class="profile-card__category-rating">
                  <div>Marketing</div>
                  <div class="profile-card__progress-container">
                     <div class="primary progress profile-card__progress--entrepreneur" role="progressbar" tabindex="0" aria-valuenow="43" aria-valuemin="0" aria-valuetext="43 percent" aria-valuemax="100">
                        <div class="progress-meter" >
                        </div>
                     </div>
                  </div>
               </div>
               <div class="profile-card__category-rating">
                  <div>Operations</div>
                  <div class="profile-card__progress-container">
                     <div class="primary progress profile-card__progress--entrepreneur" role="progressbar" tabindex="0" aria-valuenow="10" aria-valuemin="0" aria-valuetext="10 percent" aria-valuemax="100">
                        <div class="progress-meter">
                        </div>
                     </div>
                  </div>
               </div>
               <div class="profile-card__category-rating">
                  <div>Starting Up</div>
                  <div class="profile-card__progress-container">
                     <div class="primary progress profile-card__progress--entrepreneur" role="progressbar" tabindex="0" aria-valuenow="17" aria-valuemin="0" aria-valuetext="17 percent" aria-valuemax="100">
                        <div class="progress-meter" >
                        </div>
                     </div>
                  </div>
               </div>
               <div class="profile-card__category-rating">
                  <div>Technology and Internet</div>
                  <div class="profile-card__progress-container">
                     <div class="primary progress profile-card__progress--entrepreneur" role="progressbar" tabindex="0" aria-valuenow="15" aria-valuemin="0" aria-valuetext="15 percent" aria-valuemax="100">
                        <div class="progress-meter">
                        </div>
                     </div>
                  </div>
               </div>
            </section>
            <section class="profile-card__entrepreneur-venture">
               <h6 class="text-sottovoce">My venture</h6>
               <h5>
                  <span dir="auto">Stallions med company</span>
                  <span class="label whisper">Started in 2022</span>
               </h5>
               <div dir="auto">
                  We are now a registered LLC, specialised in Training , digital marketing and information technology solutions. Our vision is to create an ultimate professional online career Hub for medical graduates in Egypt. Supporting them with our services: mentorship
                  programs at different career levels , tailored training programs( soft and hard …
               </div>
            </section>
            <footer class="profile-card__actions">
               <a href="/entrepreneur/1368575" class="button hollow small primary">
               <strong>View profile</strong>
               </a>
            </footer>
         </article>
         <article class="profile-card">
            <header class="profile-card__overview">
               <div class="profile-card__image">
                  <a href="/entrepreneur/1520743">
                     <div class="default-avatar avatar--small">
                        LL
                     </div>
                  </a>
               </div>
               <div class="profile-card__about">
                  <h3>
                     <a href="/entrepreneur/1520743" class="text-primary">
                     Lucky Lucks
                     </a>
                  </h3>
                  <h5 class="">
                     <ul class="list--comma-separated">
                        <li>Oshakati</li>
                        <li>OSHAKATI</li>
                        <li>Namibia</li>
                     </ul>
                  </h5>
                  <h5 class="no-bold text-sottovoce">Graphic Design/Web Production</h5>
                  <div class="profile-card__extras">
                     <div class="profile-details__detail">
                        <div class="detail__label"><strong>Recent Activity</strong></div>
                        <div class="detail__value">
                           <div class="activity-widget">
                              <span data-tooltip="63asxk-tooltip" title="" role="img" aria-label="Active in the last week" aria-describedby="r3ym8x-tooltip" data-yeti-box="r3ym8x-tooltip" data-toggle="r3ym8x-tooltip" data-resize="r3ym8x-tooltip" class="has-tip" data-events="resize">
                              <i class="fas fa-comment text-primary" aria-hidden="true"></i>
                              <i class="fas fa-comment text-primary " aria-hidden="true"></i>
                              <i class="fas fa-comment text-primary " aria-hidden="true"></i>
                              </span>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </header>
            <section class="profile-card__expertise">
               <h4>I need help with</h4>
               <div class="profile-card__category-rating">
                  <div>Accounting and Finance</div>
                  <div class="profile-card__progress-container">
                     <div class="primary progress profile-card__progress--entrepreneur" role="progressbar" tabindex="0" aria-valuenow="56" aria-valuemin="0" aria-valuetext="56 percent" aria-valuemax="100">
                        <div class="progress-meter">
                        </div>
                     </div>
                  </div>
               </div>
               <div class="profile-card__category-rating">
                  <div>Marketing</div>
                  <div class="profile-card__progress-container">
                     <div class="primary progress profile-card__progress--entrepreneur" role="progressbar" tabindex="0" aria-valuenow="22" aria-valuemin="0" aria-valuetext="22 percent" aria-valuemax="100">
                        <div class="progress-meter">
                        </div>
                     </div>
                  </div>
               </div>
               <div class="profile-card__category-rating">
                  <div>Sales</div>
                  <div class="profile-card__progress-container">
                     <div class="primary progress profile-card__progress--entrepreneur" role="progressbar" tabindex="0" aria-valuenow="25" aria-valuemin="0" aria-valuetext="25 percent" aria-valuemax="100">
                        <div class="progress-meter" >
                        </div>
                     </div>
                  </div>
               </div>
               <div class="profile-card__category-rating">
                  <div>Sustainability</div>
                  <div class="profile-card__progress-container">
                     <div class="primary progress profile-card__progress--entrepreneur" role="progressbar" tabindex="0" aria-valuenow="25" aria-valuemin="0" aria-valuetext="25 percent" aria-valuemax="100">
                        <div class="progress-meter">
                        </div>
                     </div>
                  </div>
               </div>
            </section>
            <section class="profile-card__entrepreneur-venture">
               <h6 class="text-sottovoce">My venture</h6>
               <h5>
                  <span dir="auto">Powerful boss</span>
                  <span class="label whisper">Started in 2022</span>
               </h5>
               <div dir="auto">
                  Graphic designer,printing and photography
               </div>
            </section>
            <footer class="profile-card__actions">
               <a href="/entrepreneur/1520743" class="button hollow small primary">
               <strong>View profile</strong>
               </a>
            </footer>
         </article>
         <article class="profile-card">
            <header class="profile-card__overview">
               <div class="profile-card__image">
                  <a href="/entrepreneur/1204643">
                  <img src="https://d2win24dv6pngl.cloudfront.net/media/generated/profile-photos/profile-1204643/4a8c7e1c00425d8e.5259e2a954ef.jpg" class="avatar--small" alt="[AA]"/>
                  </a>
               </div>
               <div class="profile-card__about">
                  <h3>
                     <a href="/entrepreneur/1204643" class="text-primary">
                     Adeyinka Adedokun
                     </a>
                  </h3>
                  <h5 class="">
                     <ul class="list--comma-separated">
                        <li>Lagos</li>
                        <li>Lagos</li>
                        <li>Nigeria</li>
                     </ul>
                  </h5>
                  <h5 class="no-bold text-sottovoce">Financial/Insurance Services</h5>
                  <div class="profile-card__extras">
                     <div class="profile-details__detail">
                        <div class="detail__label"><strong>Recent Activity</strong></div>
                        <div class="detail__value">
                           <div class="activity-widget">
                              <span data-tooltip="pke54q-tooltip" title="" role="img" aria-label="Active in the last week" aria-describedby="6bimvt-tooltip" data-yeti-box="6bimvt-tooltip" data-toggle="6bimvt-tooltip" data-resize="6bimvt-tooltip" class="has-tip" data-events="resize">
                              <i class="fas fa-comment text-primary" aria-hidden="true"></i>
                              <i class="fas fa-comment text-primary " aria-hidden="true"></i>
                              <i class="fas fa-comment text-primary " aria-hidden="true"></i>
                              </span>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </header>
            <section class="profile-card__expertise">
               <h4>I need help with</h4>
               <div class="profile-card__category-rating">
                  <div>Management</div>
                  <div class="profile-card__progress-container">
                     <div class="primary progress profile-card__progress--entrepreneur" role="progressbar" tabindex="0" aria-valuenow="20" aria-valuemin="0" aria-valuetext="20 percent" aria-valuemax="100">
                        <div class="progress-meter">
                        </div>
                     </div>
                  </div>
               </div>
               <div class="profile-card__category-rating">
                  <div>Marketing</div>
                  <div class="profile-card__progress-container">
                     <div class="primary progress profile-card__progress--entrepreneur" role="progressbar" tabindex="0" aria-valuenow="22" aria-valuemin="0" aria-valuetext="22 percent" aria-valuemax="100">
                        <div class="progress-meter">
                        </div>
                     </div>
                  </div>
               </div>
               <div class="profile-card__category-rating">
                  <div>Sales</div>
                  <div class="profile-card__progress-container">
                     <div class="primary progress profile-card__progress--entrepreneur" role="progressbar" tabindex="0" aria-valuenow="25" aria-valuemin="0" aria-valuetext="25 percent" aria-valuemax="100">
                        <div class="progress-meter">
                        </div>
                     </div>
                  </div>
               </div>
            </section>
            <section class="profile-card__entrepreneur-venture">
               <h6 class="text-sottovoce">My venture</h6>
               <h5>
                  <span dir="auto">The Wealthsmith Company</span>
               </h5>
               <div dir="auto">
                  The Wealthsmith Company is the Goldman Sachs for young people, where we seek to help advance personal and corporate financial prosperity, leveraging on both crypto and traditional Industries.
               </div>
            </section>
            <footer class="profile-card__actions">
               <a href="/entrepreneur/1204643" class="button hollow small primary">
               <strong>View profile</strong>
               </a>
            </footer>
         </article>
         <article class="profile-card">
            <header class="profile-card__overview">
               <div class="profile-card__image">
                  <a href="/entrepreneur/1497305">
                     <div class="default-avatar avatar--small">
                        MH
                     </div>
                  </a>
               </div>
               <div class="profile-card__about">
                  <h3>
                     <a href="/entrepreneur/1497305" class="text-primary">
                     Mohammed Hassan
                     </a>
                  </h3>
                  <h5 class="">
                     <ul class="list--comma-separated">
                        <li>Lagos</li>
                        <li>Lagos Nigeria</li>
                        <li>Nigeria</li>
                     </ul>
                  </h5>
                  <h5 class="no-bold text-sottovoce">eCommerce/Online Sales</h5>
                  <div class="profile-card__extras">
                     <div class="profile-details__detail">
                        <div class="detail__label"><strong>Recent Activity</strong></div>
                        <div class="detail__value">
                           <div class="activity-widget">
                              <span data-tooltip="rw4qwo-tooltip" title="" role="img" aria-label="Active in the last week" aria-describedby="5t5pba-tooltip" data-yeti-box="5t5pba-tooltip" data-toggle="5t5pba-tooltip" data-resize="5t5pba-tooltip" class="has-tip" data-events="resize">
                              <i class="fas fa-comment text-primary" aria-hidden="true"></i>
                              <i class="fas fa-comment text-primary " aria-hidden="true"></i>
                              <i class="fas fa-comment text-primary " aria-hidden="true"></i>
                              </span>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </header>
            <section class="profile-card__expertise">
               <h4>I need help with</h4>
               <div class="profile-card__category-rating">
                  <div>Accounting and Finance</div>
                  <div class="profile-card__progress-container">
                     <div class="primary progress profile-card__progress--entrepreneur" role="progressbar" tabindex="0" aria-valuenow="100" aria-valuemin="0" aria-valuetext="100 percent" aria-valuemax="100">
                        <div class="progress-meter">
                        </div>
                     </div>
                  </div>
               </div>
               <div class="profile-card__category-rating">
                  <div>Human Resources</div>
                  <div class="profile-card__progress-container">
                     <div class="primary progress profile-card__progress--entrepreneur" role="progressbar" tabindex="0" aria-valuenow="100" aria-valuemin="0" aria-valuetext="100 percent" aria-valuemax="100">
                        <div class="progress-meter">
                        </div>
                     </div>
                  </div>
               </div>
               <div class="profile-card__category-rating">
                  <div>International</div>
                  <div class="profile-card__progress-container">
                     <div class="primary progress profile-card__progress--entrepreneur" role="progressbar" tabindex="0" aria-valuenow="100" aria-valuemin="0" aria-valuetext="100 percent" aria-valuemax="100">
                        <div class="progress-meter">
                        </div>
                     </div>
                  </div>
               </div>
               <div class="profile-card__category-rating">
                  <div>Law and Legal</div>
                  <div class="profile-card__progress-container">
                     <div class="primary progress profile-card__progress--entrepreneur" role="progressbar" tabindex="0" aria-valuenow="43" aria-valuemin="0" aria-valuetext="43 percent" aria-valuemax="100">
                        <div class="progress-meter">
                        </div>
                     </div>
                  </div>
               </div>
               <div class="profile-card__category-rating">
                  <div>Management</div>
                  <div class="profile-card__progress-container">
                     <div class="primary progress profile-card__progress--entrepreneur" role="progressbar" tabindex="0" aria-valuenow="100" aria-valuemin="0" aria-valuetext="100 percent" aria-valuemax="100">
                        <div class="progress-meter">
                        </div>
                     </div>
                  </div>
               </div>
               <div class="profile-card__category-rating">
                  <div>Marketing</div>
                  <div class="profile-card__progress-container">
                     <div class="primary progress profile-card__progress--entrepreneur" role="progressbar" tabindex="0" aria-valuenow="100" aria-valuemin="0" aria-valuetext="100 percent" aria-valuemax="100">
                        <div class="progress-meter">
                        </div>
                     </div>
                  </div>
               </div>
               <div class="profile-card__category-rating">
                  <div>Operations</div>
                  <div class="profile-card__progress-container">
                     <div class="primary progress profile-card__progress--entrepreneur" role="progressbar" tabindex="0" aria-valuenow="80" aria-valuemin="0" aria-valuetext="80 percent" aria-valuemax="100">
                        <div class="progress-meter">
                        </div>
                     </div>
                  </div>
               </div>
               <div class="profile-card__category-rating">
                  <div>Sales</div>
                  <div class="profile-card__progress-container">
                     <div class="primary progress profile-card__progress--entrepreneur" role="progressbar" tabindex="0" aria-valuenow="88" aria-valuemin="0" aria-valuetext="88 percent" aria-valuemax="100">
                        <div class="progress-meter">
                        </div>
                     </div>
                  </div>
               </div>
               <div class="profile-card__category-rating">
                  <div>Starting Up</div>
                  <div class="profile-card__progress-container">
                     <div class="primary progress profile-card__progress--entrepreneur" role="progressbar" tabindex="0" aria-valuenow="84" aria-valuemin="0" aria-valuetext="84 percent" aria-valuemax="100">
                        <div class="progress-meter">
                        </div>
                     </div>
                  </div>
               </div>
               <div class="profile-card__category-rating">
                  <div>Sustainability</div>
                  <div class="profile-card__progress-container">
                     <div class="primary progress profile-card__progress--entrepreneur" role="progressbar" tabindex="0" aria-valuenow="25" aria-valuemin="0" aria-valuetext="25 percent" aria-valuemax="100">
                        <div class="progress-meter">
                        </div>
                     </div>
                  </div>
               </div>
               <div class="profile-card__category-rating">
                  <div>Technology and Internet</div>
                  <div class="profile-card__progress-container">
                     <div class="primary progress profile-card__progress--entrepreneur" role="progressbar" tabindex="0" aria-valuenow="100" aria-valuemin="0" aria-valuetext="100 percent" aria-valuemax="100">
                        <div class="progress-meter">
                        </div>
                     </div>
                  </div>
               </div>
            </section>
            <section class="profile-card__entrepreneur-venture">
               <h6 class="text-sottovoce">My venture</h6>
               <h5>
                  <span dir="auto">Lottlist</span>
               </h5>
               <div dir="auto">
                  My idea is an online marketplace that connects buyers and sellers it's products includes jobs, real estate, electronics, fashion items, vehicles etc. We want to make our idea different from the rest of online marketplace businesses in the world by integrating
                  a video call for buyers to contact the sellers, …
               </div>
            </section>
            <footer class="profile-card__actions">
               <a href="/entrepreneur/1497305" class="button hollow small primary">
               <strong>View profile</strong>
               </a>
            </footer>
         </article>
         <article class="profile-card">
            <header class="profile-card__overview">
               <div class="profile-card__image">
                  <a href="/entrepreneur/1520751">
                  <img src="https://d2win24dv6pngl.cloudfront.net/media/generated/profile-photos/profile-1520751/d42c55074b6a0eb3.b3504e159141.jpg" class="avatar--small" alt="[IC]" />
                  </a>
               </div>
               <div class="profile-card__about">
                  <h3>
                     <a href="/entrepreneur/1520751" class="text-primary">
                     Ittihad Medical Centre
                     </a>
                  </h3>
                  <h5 class="">
                     <ul class="list--comma-separated">
                        <li>Abu Dhabi</li>
                        <li>United Arab Emirates</li>
                     </ul>
                  </h5>
                  <h5 class="no-bold text-sottovoce">Health/Wellness/Fitness/Bodywork</h5>
                  <div class="profile-card__extras">
                     <div class="profile-details__detail">
                        <div class="detail__label"><strong>Recent Activity</strong></div>
                        <div class="detail__value">
                           <div class="activity-widget">
                              <span data-tooltip="wpeh3r-tooltip" title="" role="img" aria-label="Active in the last week" aria-describedby="bgpaxv-tooltip" data-yeti-box="bgpaxv-tooltip" data-toggle="bgpaxv-tooltip" data-resize="bgpaxv-tooltip" class="has-tip" data-events="resize">
                              <i class="fas fa-comment text-primary" aria-hidden="true"></i>
                              <i class="fas fa-comment text-primary " aria-hidden="true"></i>
                              <i class="fas fa-comment text-primary " aria-hidden="true"></i>
                              </span>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </header>
            <section class="profile-card__expertise">
               <h4>I need help with</h4>
               <div class="profile-card__category-rating">
                  <div>Starting Up</div>
                  <div class="profile-card__progress-container">
                     <div class="primary progress profile-card__progress--entrepreneur" role="progressbar" tabindex="0" aria-valuenow="17" aria-valuemin="0" aria-valuetext="17 percent" aria-valuemax="100">
                        <div class="progress-meter">
                        </div>
                     </div>
                  </div>
               </div>
            </section>
            <section class="profile-card__entrepreneur-venture">
               <h6 class="text-sottovoce">My venture</h6>
               <h5>
                  <span dir="auto">Ittihad Medical Centre</span>
                  <span class="label whisper">Started in 2023</span>
               </h5>
               <div dir="auto">
                  Ittihad Medical Centre is leading medical Centre Abu Dhabi that provides most outstanding services.
               </div>
            </section>
            <footer class="profile-card__actions">
               <a href="/entrepreneur/1520751" class="button hollow small primary">
               <strong>View profile</strong>
               </a>
            </footer>
         </article>
         <article class="profile-card">
            <header class="profile-card__overview">
               <div class="profile-card__image">
                  <a href="/entrepreneur/1498071">
                  <img src="https://d2win24dv6pngl.cloudfront.net/media/generated/profile-photos/profile-1498071/0a5ff02b880d1c48.9f235fa8d350.jpg" class="avatar--small" alt="[em]"/>
                  </a>
               </div>
               <div class="profile-card__about">
                  <h3>
                     <a href="/entrepreneur/1498071" class="text-primary">
                     ekow mensah
                     </a>
                  </h3>
                  <h5 class="">
                     <ul class="list--comma-separated">
                        <li>African</li>
                        <li>CAPE COAST</li>
                        <li>Ghana</li>
                     </ul>
                  </h5>
                  <h5 class="no-bold text-sottovoce">Agriculture/Farming/Ranching</h5>
                  <div class="profile-card__extras">
                     <div class="profile-details__detail">
                        <div class="detail__label"><strong>Recent Activity</strong></div>
                        <div class="detail__value">
                           <div class="activity-widget">
                              <span data-tooltip="g536pl-tooltip" title="" role="img" aria-label="Active in the last week" aria-describedby="xztzki-tooltip" data-yeti-box="xztzki-tooltip" data-toggle="xztzki-tooltip" data-resize="xztzki-tooltip" class="has-tip" data-events="resize">
                              <i class="fas fa-comment text-primary" aria-hidden="true"></i>
                              <i class="fas fa-comment text-primary " aria-hidden="true"></i>
                              <i class="fas fa-comment text-primary " aria-hidden="true"></i>
                              </span>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </header>
            <section class="profile-card__expertise">
               <h4>I need help with</h4>
               <div class="profile-card__category-rating">
                  <div>Accounting and Finance</div>
                  <div class="profile-card__progress-container">
                     <div class="primary progress profile-card__progress--entrepreneur" role="progressbar" tabindex="0" aria-valuenow="100" aria-valuemin="0" aria-valuetext="100 percent" aria-valuemax="100">
                        <div class="progress-meter">
                        </div>
                     </div>
                  </div>
               </div>
               <div class="profile-card__category-rating">
                  <div>Human Resources</div>
                  <div class="profile-card__progress-container">
                     <div class="primary progress profile-card__progress--entrepreneur" role="progressbar" tabindex="0" aria-valuenow="50" aria-valuemin="0" aria-valuetext="50 percent" aria-valuemax="100">
                        <div class="progress-meter">
                        </div>
                     </div>
                  </div>
               </div>
               <div class="profile-card__category-rating">
                  <div>Management</div>
                  <div class="profile-card__progress-container">
                     <div class="primary progress profile-card__progress--entrepreneur" role="progressbar" tabindex="0" aria-valuenow="90" aria-valuemin="0" aria-valuetext="90 percent" aria-valuemax="100">
                        <div class="progress-meter">
                        </div>
                     </div>
                  </div>
               </div>
               <div class="profile-card__category-rating">
                  <div>Marketing</div>
                  <div class="profile-card__progress-container">
                     <div class="primary progress profile-card__progress--entrepreneur" role="progressbar" tabindex="0" aria-valuenow="58" aria-valuemin="0" aria-valuetext="58 percent" aria-valuemax="100">
                        <div class="progress-meter">
                        </div>
                     </div>
                  </div>
               </div>
            </section>
            <section class="profile-card__entrepreneur-venture">
               <h6 class="text-sottovoce">My venture</h6>
               <h5>
                  <span dir="auto">THE POULTRY FARM</span>
                  <span class="label whisper">Started in 2018</span>
               </h5>
               <div dir="auto">
                  PRODUCERS OF EGGS AND MEAT
               </div>
            </section>
            <footer class="profile-card__actions">
               <a href="/entrepreneur/1498071" class="button hollow small primary">
               <strong>View profile</strong>
               </a>
            </footer>
         </article>
         <article class="profile-card">
            <header class="profile-card__overview">
               <div class="profile-card__image">
                  <a href="/entrepreneur/1497746">
                  <img src="https://d2win24dv6pngl.cloudfront.net/media/generated/profile-photos/profile-1497746/312f329c0fb0bf4b.e86ffac87548.jpeg" class="avatar--small" alt="[NN]" />
                  </a>
               </div>
               <div class="profile-card__about">
                  <h3>
                     <a href="/entrepreneur/1497746" class="text-primary">
                     Nelcy Núñez
                     </a>
                  </h3>
                  <h5 class="">
                     <ul class="list--comma-separated">
                        <li>United States of America</li>
                     </ul>
                  </h5>
                  <h5 class="no-bold text-sottovoce">Recruiting/Staffing/Personnel Services</h5>
                  <div class="profile-card__extras">
                     <div class="profile-details__detail">
                        <div class="detail__label"><strong>Recent Activity</strong></div>
                        <div class="detail__value">
                           <div class="activity-widget">
                              <span data-tooltip="ik92ud-tooltip" title="" role="img" aria-label="Active in the last week" aria-describedby="yf4rim-tooltip" data-yeti-box="yf4rim-tooltip" data-toggle="yf4rim-tooltip" data-resize="yf4rim-tooltip" class="has-tip" data-events="resize">
                              <i class="fas fa-comment text-primary" aria-hidden="true"></i>
                              <i class="fas fa-comment text-primary " aria-hidden="true"></i>
                              <i class="fas fa-comment text-primary " aria-hidden="true"></i>
                              </span>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </header>
            <section class="profile-card__expertise">
               <h4>I need help with</h4>
               <div class="profile-card__category-rating">
                  <div>Management</div>
                  <div class="profile-card__progress-container">
                     <div class="primary progress profile-card__progress--entrepreneur" role="progressbar" tabindex="0" aria-valuenow="50" aria-valuemin="0" aria-valuetext="50 percent" aria-valuemax="100">
                        <div class="progress-meter">
                        </div>
                     </div>
                  </div>
               </div>
               <div class="profile-card__category-rating">
                  <div>Marketing</div>
                  <div class="profile-card__progress-container">
                     <div class="primary progress profile-card__progress--entrepreneur" role="progressbar" tabindex="0" aria-valuenow="22" aria-valuemin="0" aria-valuetext="22 percent" aria-valuemax="100">
                        <div class="progress-meter" >
                        </div>
                     </div>
                  </div>
               </div>
               <div class="profile-card__category-rating">
                  <div>Sales</div>
                  <div class="profile-card__progress-container">
                     <div class="primary progress profile-card__progress--entrepreneur" role="progressbar" tabindex="0" aria-valuenow="38" aria-valuemin="0" aria-valuetext="38 percent" aria-valuemax="100">
                        <div class="progress-meter">
                        </div>
                     </div>
                  </div>
               </div>
               <div class="profile-card__catego1745ry-rating">
                  <div>Starting Up</div>
                  <div class="profile-card__progress-container">
                     <div class="primary progress profile-card__progress--entrepreneur" role="progressbar" tabindex="0" aria-valuenow="34" aria-valuemin="0" aria-valuetext="34 percent" aria-valuemax="100">
                        <div class="progress-meter">
                        </div>
                     </div>
                  </div>
               </div>
            </section>
            <section class="profile-card__entrepreneur-venture">
               <h6 class="text-sottovoce">My venture</h6>
               <h5>
                  <span dir="auto">Curriculado</span>
               </h5>
               <div dir="auto">
                  Curriculado is a platform for ambitious professionals looking to find their next role or/and grow in their careers, focused in the hispanic population.
               </div>
            </section>
            <footer class="profile-card__actions">
               <a href="/entrepreneur/1497746" class="button hollow small primary">
               <strong>View profile</strong>
               </a>
            </footer>
         </article>
      </div>
   </section>
   <div class="container text-center">
      <nav class="pagination-wrapper">
         <ul class="pagination" role="navigation" aria-label="Pagination">
            <li class="disabled" aria-label="This is the first page ">‹ previous</li>
            <li><a href="?page=1&amp;">next<span class="show-for-sr"> page</span> ›</a></li>
         </ul>
      </nav>
   </div>
</main>
  )
};

export default Entreprenuers;
