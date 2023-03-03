import React from "react";

const Mentors = () => {
  return (
    <main class="region--content" id="main-content">
   <header class="washed-row--tertiary">
      <div class="container">
         <h1>Find mentors and connect</h1>
         <p class="lead">
            We have sorted these search results based on relevance to your profile. When you see someone who looks like they might be a good fit, reach out and send a message!
         </p>
      </div>
   </header>
   <section class="profile-search search-filter">
      <div class="container" data-select2-id="select2-data-12-78gi">
         <form action="" method="GET" data-id="profile-list-filter" data-select2-id="select2-data-11-dntw">
            <h5>Filter member profiles by:</h5>
            <div class="search-filter__fields" data-select2-id="select2-data-10-dath">
               <div class="form__field form__field--terms form__field--text">
                  <label for="id_terms">Search terms:</label>
                  <input type="text" name="terms" placeholder="Type some keywords" id="id_terms" />
               </div>
               <div class="form__field form__field--expertise form__field--select" data-select2-id="select2-data-9-4nm7">
                  <label for="id_expertise">Expertise:</label>
                  <select name="expertise" data-use-select2="" data-placeholder="Select" id="id_expertise" multiple="" data-select2-id="select2-data-id_expertise" tabindex="-1" class="select2-hidden-accessible" aria-hidden="true">
                     <option value="Accounting and Finance" data-select2-id="select2-data-15-k6to">Accounting and Finance</option>
                     <option value="Human Resources" data-select2-id="select2-data-16-ojjc">Human Resources</option>
                     <option value="International" data-select2-id="select2-data-17-oeg8">International</option>
                     <option value="Law and Legal" data-select2-id="select2-data-18-nn2f">Law and Legal</option>
                     <option value="Management" data-select2-id="select2-data-19-pu47">Management</option>
                     <option value="Marketing" data-select2-id="select2-data-20-acjs">Marketing</option>
                     <option value="Operations" data-select2-id="select2-data-21-yyvf">Operations</option>
                     <option value="Sales" data-select2-id="select2-data-22-79zy">Sales</option>
                     <option value="Starting Up" data-select2-id="select2-data-23-kr25">Starting Up</option>
                     <option value="Sustainability" data-select2-id="select2-data-24-xnvn">Sustainability</option>
                     <option value="Technology and Internet" data-select2-id="select2-data-25-8z2z">Technology and Internet</option>
                  </select>
                  <span class="select2 select2-container select2-container--mm select2-container--below" dir="ltr" data-select2-id="select2-data-1-5f47">
                     <span class="selection">
                        <span class="select2-selection select2-selection--multiple" role="combobox" aria-haspopup="true" aria-expanded="false" tabindex="-1" aria-disabled="false">
                           <ul class="select2-selection__rendered" id="select2-id_expertise-container">
                              <li class="select2-selection__choice" title="Accounting and Finance" data-select2-id="select2-data-28-a9u2"><button type="button" class="select2-selection__choice__remove" tabindex="-1" title="Remove item" aria-label="Remove item" aria-describedby="select2-id_expertise-container-choice-g3kw-Accounting and Finance"><span aria-hidden="true">×</span></button><span class="select2-selection__choice__display" id="select2-id_expertise-container-choice-g3kw-Accounting and Finance">Accounting and Finance</span></li>
                              <li class="select2-selection__choice" title="Human Resources" data-select2-id="select2-data-29-nper"><button type="button" class="select2-selection__choice__remove" tabindex="-1" title="Remove item" aria-label="Remove item" aria-describedby="select2-id_expertise-container-choice-ay8f-Human Resources"><span aria-hidden="true">×</span></button><span class="select2-selection__choice__display" id="select2-id_expertise-container-choice-ay8f-Human Resources">Human Resources</span></li>
                           </ul>
                           <span class="select2-search select2-search--inline"><textarea class="select2-search__field" type="search" tabindex="0" autocorrect="off" autocapitalize="none" spellcheck="false" role="searchbox" aria-autocomplete="list" autocomplete="off" aria-label="Search" aria-describedby="select2-id_expertise-container" placeholder="" style={{width: "0.75em"}}></textarea></span>
                        </span>
                     </span>
                     <span class="dropdown-wrapper" aria-hidden="true"></span>
                  </span>
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
                  <span class="select2 select2-container select2-container--mm" dir="ltr" data-select2-id="select2-data-2-wn00" style={{width: "100%"}}>
                     <span class="selection">
                        <span class="select2-selection select2-selection--multiple" role="combobox" aria-haspopup="true" aria-expanded="false" tabindex="-1" aria-disabled="false">
                           <ul class="select2-selection__rendered" id="select2-id_industries-container"></ul>
                           <span class="select2-search select2-search--inline"><textarea class="select2-search__field" type="search" tabindex="0" autocorrect="off" autocapitalize="none" spellcheck="false" role="searchbox" aria-autocomplete="list" autocomplete="off" aria-label="Search" aria-describedby="select2-id_industries-container" placeholder="Select" style={{width: "100%"}}></textarea></span>
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
                     <option value="eng" selected="" data-select2-id="select2-data-4-r8qy">English</option>
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
                  <span class="select2 select2-container select2-container--mm" dir="ltr" data-select2-id="select2-data-3-bjhr" style={{width: "100%"}}>
                     <span class="selection">
                        <span class="select2-selection select2-selection--multiple" role="combobox" aria-haspopup="true" aria-expanded="false" tabindex="-1" aria-disabled="false">
                           <ul class="select2-selection__rendered" id="select2-id_languages-container">
                              <li class="select2-selection__choice" title="English" data-select2-id="select2-data-5-fdoi"><button type="button" class="select2-selection__choice__remove" tabindex="-1" title="Remove item" aria-label="Remove item" aria-describedby="select2-id_languages-container-choice-nhva-eng"><span aria-hidden="true">×</span></button><span class="select2-selection__choice__display" id="select2-id_languages-container-choice-nhva-eng">English</span></li>
                           </ul>
                           <span class="select2-search select2-search--inline"><textarea class="select2-search__field" type="search" tabindex="0" autocorrect="off" autocapitalize="none" spellcheck="false" role="searchbox" aria-autocomplete="list" autocomplete="off" aria-label="Search" aria-describedby="select2-id_languages-container" placeholder="" style={{width: "0.75em"}}></textarea></span>
                        </span>
                     </span>
                     <span class="dropdown-wrapper" aria-hidden="true"></span>
                  </span>
               </div>
               <div class="form__field form__field--residence form__field--select">
                  <label for="id_residence">Mentors who live in any of these countries:</label>
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
                  <span class="select2 select2-container select2-container--mm" dir="ltr" data-select2-id="select2-data-6-nalh">
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
                  <label for="id_countries">Mentors who operate in any of these countries:</label>
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
                  <span class="select2 select2-container select2-container--mm" dir="ltr" data-select2-id="select2-data-7-tgrr" >
                     <span class="selection">
                        <span class="select2-selection select2-selection--multiple" role="combobox" aria-haspopup="true" aria-expanded="false" tabindex="-1" aria-disabled="false">
                           <ul class="select2-selection__rendered" id="select2-id_countries-container"></ul>
                           <span class="select2-search select2-search--inline"><textarea class="select2-search__field" type="search" tabindex="0" autocorrect="off" autocapitalize="none" spellcheck="false" role="searchbox" aria-autocomplete="list" autocomplete="off" aria-label="Search" aria-describedby="select2-id_countries-container" placeholder="Select" ></textarea></span>
                        </span>
                     </span>
                     <span class="dropdown-wrapper" aria-hidden="true"></span>
                  </span>
               </div>
            </div>
            <div class="search-filter__action">
               <button class="button tertiary"><span>Filter Results</span></button>
            </div>
         </form>
      </div>
   </section>
   <section class="profile-list">
      <div class="container">
         <article class="profile-card">
            <header class="profile-card__overview">
               <div class="profile-card__image">
                  <a href="/mentor/1005149">
                     <div class="default-avatar avatar--small">
                        IS
                     </div>
                  </a>
               </div>
               <div class="profile-card__about">
                  <h3>
                     <a href="/mentor/1005149" class="text-tertiary">
                     Ilesh Shah
                     </a>
                  </h3>
                  <h5 class="">
                     <ul class="list--comma-separated">
                        <li>India</li>
                     </ul>
                  </h5>
                  <h5 class="no-bold text-sottovoce">Business Consulting/Coaching</h5>
                  <div class="profile-card__extras">
                     <div class="profile-details__detail">
                        <div class="detail__label"><strong>Recent Activity</strong></div>
                        <div class="detail__value">
                           <div class="activity-widget">
                              <span data-tooltip="ld5he5-tooltip" title="" role="img" aria-label="Active in the last week" aria-describedby="z8ve04-tooltip" data-yeti-box="z8ve04-tooltip" data-toggle="z8ve04-tooltip" data-resize="z8ve04-tooltip" class="has-tip" data-events="resize">
                              <i class="fas fa-comment text-tertiary" aria-hidden="true"></i>
                              <i class="fas fa-comment text-tertiary " aria-hidden="true"></i>
                              <i class="fas fa-comment text-tertiary " aria-hidden="true"></i>
                              </span>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </header>
            <section class="profile-card__expertise">
               <h4>How I can help</h4>
               <div class="profile-card__category-rating">
                  <div>International</div>
                  <div class="profile-card__progress-container">
                     <div class="tertiary progress profile-card__progress--mentor" role="progressbar" tabindex="0" aria-valuenow="60" aria-valuemin="0" aria-valuetext="60 percent" aria-valuemax="100">
                        <div class="progress-meter" >
                        </div>
                     </div>
                  </div>
               </div>
               <div class="profile-card__category-rating">
                  <div>Law and Legal</div>
                  <div class="profile-card__progress-container">
                     <div class="tertiary progress profile-card__progress--mentor" role="progressbar" tabindex="0" aria-valuenow="15" aria-valuemin="0" aria-valuetext="15 percent" aria-valuemax="100">
                        <div class="progress-meter" >
                        </div>
                     </div>
                  </div>
               </div>
               <div class="profile-card__category-rating">
                  <div>Management</div>
                  <div class="profile-card__progress-container">
                     <div class="tertiary progress profile-card__progress--mentor" role="progressbar" tabindex="0" aria-valuenow="90" aria-valuemin="0" aria-valuetext="90 percent" aria-valuemax="100">
                        <div class="progress-meter" >
                        </div>
                     </div>
                  </div>
               </div>
               <div class="profile-card__category-rating">
                  <div>Marketing</div>
                  <div class="profile-card__progress-container">
                     <div class="tertiary progress profile-card__progress--mentor" role="progressbar" tabindex="0" aria-valuenow="79" aria-valuemin="0" aria-valuetext="79 percent" aria-valuemax="100">
                        <div class="progress-meter">
                        </div>
                     </div>
                  </div>
               </div>
               <div class="profile-card__category-rating">
                  <div>Operations</div>
                  <div class="profile-card__progress-container">
                     <div class="tertiary progress profile-card__progress--mentor" role="progressbar" tabindex="0" aria-valuenow="100" aria-valuemin="0" aria-valuetext="100 percent" aria-valuemax="100">
                        <div class="progress-meter">
                        </div>
                     </div>
                  </div>
               </div>
               <div class="profile-card__category-rating">
                  <div>Sales</div>
                  <div class="profile-card__progress-container">
                     <div class="tertiary progress profile-card__progress--mentor" role="progressbar" tabindex="0" aria-valuenow="100" aria-valuemin="0" aria-valuetext="100 percent" aria-valuemax="100">
                        <div class="progress-meter" >
                        </div>
                     </div>
                  </div>
               </div>
               <div class="profile-card__category-rating">
                  <div>Starting Up</div>
                  <div class="profile-card__progress-container">
                     <div class="tertiary progress profile-card__progress--mentor" role="progressbar" tabindex="0" aria-valuenow="100" aria-valuemin="0" aria-valuetext="100 percent" aria-valuemax="100">
                        <div class="progress-meter">
                        </div>
                     </div>
                  </div>
               </div>
               <div class="profile-card__category-rating">
                  <div>Sustainability</div>
                  <div class="profile-card__progress-container">
                     <div class="tertiary progress profile-card__progress--mentor" role="progressbar" tabindex="0" aria-valuenow="100" aria-valuemin="0" aria-valuetext="100 percent" aria-valuemax="100">
                        <div class="progress-meter">
                        </div>
                     </div>
                  </div>
               </div>
               <div class="profile-card__category-rating">
                  <div>Technology and Internet</div>
                  <div class="profile-card__progress-container">
                     <div class="tertiary progress profile-card__progress--mentor" role="progressbar" tabindex="0" aria-valuenow="43" aria-valuemin="0" aria-valuetext="43 percent" aria-valuemax="100">
                        <div class="progress-meter">
                        </div>
                     </div>
                  </div>
               </div>
            </section>
            <footer class="profile-card__actions background-whisper">
               <a href="/mentor/1005149" class="button hollow small tertiary">
               <strong>View profile</strong>
               </a>
            </footer>
         </article>
         <article class="profile-card">
            <header class="profile-card__overview">
               <div class="profile-card__organization">
                  <div class="community-org-label label success">
                     <i class="fad fa-users" aria-hidden="true"></i>&nbsp;
                     MicroMentor
                     » DTS – TSA
                  </div>
               </div>
               <div class="profile-card__image">
                  <a href="/mentor/1520765">
                  <img src="https://d2win24dv6pngl.cloudfront.net/media/generated/profile-photos/profile-1520765/33e0ba46080b1839.aa033f081bc2.JPG" class="avatar--small" alt="[RA]"/>
                  </a>
               </div>
               <div class="profile-card__about">
                  <h3>
                     <a href="/mentor/1520765" class="text-tertiary">
                     Riki Abu Brantas
                     </a>
                  </h3>
                  <h5 class="">
                     <ul class="list--comma-separated">
                        <li>Kota Bandung</li>
                        <li>Jawa Barat</li>
                        <li>Indonesia</li>
                     </ul>
                  </h5>
                  <h5 class="no-bold text-sottovoce">Food Products/Grocery</h5>
                  <div class="profile-card__extras">
                     <div class="profile-details__detail">
                        <div class="detail__label"><strong>Recent Activity</strong></div>
                        <div class="detail__value">
                           <div class="activity-widget">
                              <span data-tooltip="kasiqd-tooltip" title="" role="img" aria-label="Active in the last week" aria-describedby="fc9pm4-tooltip" data-yeti-box="fc9pm4-tooltip" data-toggle="fc9pm4-tooltip" data-resize="fc9pm4-tooltip" class="has-tip" data-events="resize">
                              <i class="fas fa-comment text-tertiary" aria-hidden="true"></i>
                              <i class="fas fa-comment text-tertiary " aria-hidden="true"></i>
                              <i class="fas fa-comment text-tertiary " aria-hidden="true"></i>
                              </span>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </header>
            <section class="profile-card__expertise">
               <h4>How I can help</h4>
               <div class="profile-card__category-rating">
                  <div>Accounting and Finance</div>
                  <div class="profile-card__progress-container">
                     <div class="tertiary progress profile-card__progress--mentor" role="progressbar" tabindex="0" aria-valuenow="45" aria-valuemin="0" aria-valuetext="45 percent" aria-valuemax="100">
                        <div class="progress-meter">
                        </div>
                     </div>
                  </div>
               </div>
               <div class="profile-card__category-rating">
                  <div>Human Resources</div>
                  <div class="profile-card__progress-container">
                     <div class="tertiary progress profile-card__progress--mentor" role="progressbar" tabindex="0" aria-valuenow="75" aria-valuemin="0" aria-valuetext="75 percent" aria-valuemax="100">
                        <div class="progress-meter">
                        </div>
                     </div>
                  </div>
               </div>
               <div class="profile-card__category-rating">
                  <div>International</div>
                  <div class="profile-card__progress-container">
                     <div class="tertiary progress profile-card__progress--mentor" role="progressbar" tabindex="0" aria-valuenow="40" aria-valuemin="0" aria-valuetext="40 percent" aria-valuemax="100">
                        <div class="progress-meter">
                        </div>
                     </div>
                  </div>
               </div>
               <div class="profile-card__category-rating">
                  <div>Law and Legal</div>
                  <div class="profile-card__progress-container">
                     <div class="tertiary progress profile-card__progress--mentor" role="progressbar" tabindex="0" aria-valuenow="15" aria-valuemin="0" aria-valuetext="15 percent" aria-valuemax="100">
                        <div class="progress-meter" >
                        </div>
                     </div>
                  </div>
               </div>
               <div class="profile-card__category-rating">
                  <div>Management</div>
                  <div class="profile-card__progress-container">
                     <div class="tertiary progress profile-card__progress--mentor" role="progressbar" tabindex="0" aria-valuenow="70" aria-valuemin="0" aria-valuetext="70 percent" aria-valuemax="100">
                        <div class="progress-meter">
                        </div>
                     </div>
                  </div>
               </div>
               <div class="profile-card__category-rating">
                  <div>Marketing</div>
                  <div class="profile-card__progress-container">
                     <div class="tertiary progress profile-card__progress--mentor" role="progressbar" tabindex="0" aria-valuenow="86" aria-valuemin="0" aria-valuetext="86 percent" aria-valuemax="100">
                        <div class="progress-meter">
                        </div>
                     </div>
                  </div>
               </div>
               <div class="profile-card__category-rating">
                  <div>Operations</div>
                  <div class="profile-card__progress-container">
                     <div class="tertiary progress profile-card__progress--mentor" role="progressbar" tabindex="0" aria-valuenow="50" aria-valuemin="0" aria-valuetext="50 percent" aria-valuemax="100">
                        <div class="progress-meter">
                        </div>
                     </div>
                  </div>
               </div>
               <div class="profile-card__category-rating">
                  <div>Sales</div>
                  <div class="profile-card__progress-container">
                     <div class="tertiary progress profile-card__progress--mentor" role="progressbar" tabindex="0" aria-valuenow="63" aria-valuemin="0" aria-valuetext="63 percent" aria-valuemax="100">
                        <div class="progress-meter">
                        </div>
                     </div>
                  </div>
               </div>
               <div class="profile-card__category-rating">
                  <div>Starting Up</div>
                  <div class="profile-card__progress-container">
                     <div class="tertiary progress profile-card__progress--mentor" role="progressbar" tabindex="0" aria-valuenow="50" aria-valuemin="0" aria-valuetext="50 percent" aria-valuemax="100">
                        <div class="progress-meter">
                        </div>
                     </div>
                  </div>
               </div>
               <div class="profile-card__category-rating">
                  <div>Technology and Internet</div>
                  <div class="profile-card__progress-container">
                     <div class="tertiary progress profile-card__progress--mentor" role="progressbar" tabindex="0" aria-valuenow="29" aria-valuemin="0" aria-valuetext="29 percent" aria-valuemax="100">
                        <div class="progress-meter">
                        </div>
                     </div>
                  </div>
               </div>
            </section>
            <footer class="profile-card__actions background-whisper">
               <a href="/mentor/1520765" class="button hollow small tertiary">
               <strong>View profile</strong>
               </a>
            </footer>
         </article>
         <article class="profile-card">
            <header class="profile-card__overview">
               <div class="profile-card__image">
                  <a href="/mentor/1036346">
                  <img src="https://d2win24dv6pngl.cloudfront.net/media/generated/profile-photos/profile-1036346/6ff19b9f3c99f0f6.e9818a7f7acc.jpg" class="avatar--small" alt="[N]"/>
                  </a>
               </div>
               <div class="profile-card__about">
                  <h3>
                     <a href="/mentor/1036346" class="text-tertiary">
                     Nandan
                     </a>
                  </h3>
                  <h5 class="">
                     <ul class="list--comma-separated">
                        <li>Kerala</li>
                        <li>India</li>
                     </ul>
                  </h5>
                  <h5 class="no-bold text-sottovoce">Graphic Design/Web Production</h5>
                  <div class="profile-card__extras">
                     <div class="profile-details__detail">
                        <div class="detail__label"><strong>Recent Activity</strong></div>
                        <div class="detail__value">
                           <div class="activity-widget">
                              <span data-tooltip="2ks0li-tooltip" title="" role="img" aria-label="Active in the last week" aria-describedby="94db2v-tooltip" data-yeti-box="94db2v-tooltip" data-toggle="94db2v-tooltip" data-resize="94db2v-tooltip" class="has-tip" data-events="resize">
                              <i class="fas fa-comment text-tertiary" aria-hidden="true"></i>
                              <i class="fas fa-comment text-tertiary " aria-hidden="true"></i>
                              <i class="fas fa-comment text-tertiary " aria-hidden="true"></i>
                              </span>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </header>
            <section class="profile-card__expertise">
               <h4>How I can help</h4>
               <div class="profile-card__category-rating">
                  <div>Marketing</div>
                  <div class="profile-card__progress-container">
                     <div class="tertiary progress profile-card__progress--mentor" role="progressbar" tabindex="0" aria-valuenow="8" aria-valuemin="0" aria-valuetext="8 percent" aria-valuemax="100">
                        <div class="progress-meter">
                        </div>
                     </div>
                  </div>
               </div>
               <div class="profile-card__category-rating">
                  <div>Technology and Internet</div>
                  <div class="profile-card__progress-container">
                     <div class="tertiary progress profile-card__progress--mentor" role="progressbar" tabindex="0" aria-valuenow="86" aria-valuemin="0" aria-valuetext="86 percent" aria-valuemax="100">
                        <div class="progress-meter">
                        </div>
                     </div>
                  </div>
               </div>
            </section>
            <footer class="profile-card__actions background-whisper">
               <a href="/mentor/1036346" class="button hollow small tertiary">
               <strong>View profile</strong>
               </a>
            </footer>
         </article>
         <article class="profile-card">
            <header class="profile-card__overview">
               <div class="profile-card__image">
                  <a href="/mentor/1441242">
                  <img src="https://d2win24dv6pngl.cloudfront.net/media/generated/profile-photos/profile-1441242/a4d5aa8a3c7e234e.e6d9b23fc619.jpg" class="avatar--small" alt="[EO]"/>
                  </a>
               </div>
               <div class="profile-card__about">
                  <h3>
                     <a href="/mentor/1441242" class="text-tertiary">
                     Emmanuel Okoye
                     </a>
                  </h3>
                  <h5 class="">
                     <ul class="list--comma-separated">
                        <li>ikeja</li>
                        <li>lagos</li>
                        <li>Nigeria</li>
                     </ul>
                  </h5>
                  <h5 class="no-bold text-sottovoce">Digital Marketing/E-Commerce/Social Media</h5>
                  <div class="profile-card__extras">
                     <div class="profile-details__detail">
                        <div class="detail__label"><strong>Recent Activity</strong></div>
                        <div class="detail__value">
                           <div class="activity-widget">
                              <span data-tooltip="depnk1-tooltip" title="" role="img" aria-label="Active in the last week" aria-describedby="qif87j-tooltip" data-yeti-box="qif87j-tooltip" data-toggle="qif87j-tooltip" data-resize="qif87j-tooltip" class="has-tip" data-events="resize">
                              <i class="fas fa-comment text-tertiary" aria-hidden="true"></i>
                              <i class="fas fa-comment text-tertiary " aria-hidden="true"></i>
                              <i class="fas fa-comment text-tertiary " aria-hidden="true"></i>
                              </span>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </header>
            <section class="profile-card__expertise">
               <h4>How I can help</h4>
               <div class="profile-card__category-rating">
                  <div>Marketing</div>
                  <div class="profile-card__progress-container">
                     <div class="tertiary progress profile-card__progress--mentor" role="progressbar" tabindex="0" aria-valuenow="58" aria-valuemin="0" aria-valuetext="58 percent" aria-valuemax="100">
                        <div class="progress-meter">
                        </div>
                     </div>
                  </div>
               </div>
               <div class="profile-card__category-rating">
                  <div>Sales</div>
                  <div class="profile-card__progress-container">
                     <div class="tertiary progress profile-card__progress--mentor" role="progressbar" tabindex="0" aria-valuenow="50" aria-valuemin="0" aria-valuetext="50 percent" aria-valuemax="100">
                        <div class="progress-meter">
                        </div>
                     </div>
                  </div>
               </div>
               <div class="profile-card__category-rating">
                  <div>Starting Up</div>
                  <div class="profile-card__progress-container">
                     <div class="tertiary progress profile-card__progress--mentor" role="progressbar" tabindex="0" aria-valuenow="34" aria-valuemin="0" aria-valuetext="34 percent" aria-valuemax="100">
                        <div class="progress-meter">
                        </div>
                     </div>
                  </div>
               </div>
            </section>
            <footer class="profile-card__actions background-whisper">
               <a href="/mentor/1441242" class="button hollow small tertiary">
               <strong>View profile</strong>
               </a>
            </footer>
         </article>
         <article class="profile-card">
            <header class="profile-card__overview">
               <div class="profile-card__organization">
                  <div class="community-org-label label success">
                     <i class="fad fa-users" aria-hidden="true"></i>&nbsp;
                     MicroMentor
                     » Master Mentor 2023
                  </div>
               </div>
               <div class="profile-card__image">
                  <a href="/mentor/1505181">
                  <img src="https://d2win24dv6pngl.cloudfront.net/media/generated/profile-photos/profile-1505181/7ab54f365c891a88.08db49ea924d.jpg" class="avatar--small" alt="[AS]"/>
                  </a>
               </div>
               <div class="profile-card__about">
                  <h3>
                     <a href="/mentor/1505181" class="text-tertiary">
                     Ahmad Afandi Surbakti
                     </a>
                  </h3>
                  <h5 class="">
                     <ul class="list--comma-separated">
                        <li>Kota Medan</li>
                        <li>Sumatera Utara</li>
                        <li>Indonesia</li>
                     </ul>
                  </h5>
                  <h5 class="no-bold text-sottovoce">Digital Marketing/E-Commerce/Social Media</h5>
                  <div class="profile-card__extras">
                     <div class="profile-details__detail">
                        <div class="detail__label"><strong>Recent Activity</strong></div>
                        <div class="detail__value">
                           <div class="activity-widget">
                              <span data-tooltip="aw84uu-tooltip" title="" role="img" aria-label="Active in the last week" aria-describedby="gxrl2f-tooltip" data-yeti-box="gxrl2f-tooltip" data-toggle="gxrl2f-tooltip" data-resize="gxrl2f-tooltip" class="has-tip" data-events="resize">
                              <i class="fas fa-comment text-tertiary" aria-hidden="true"></i>
                              <i class="fas fa-comment text-tertiary " aria-hidden="true"></i>
                              <i class="fas fa-comment text-tertiary " aria-hidden="true"></i>
                              </span>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </header>
            <section class="profile-card__expertise">
               <h4>How I can help</h4>
               <div class="profile-card__category-rating">
                  <div>Human Resources</div>
                  <div class="profile-card__progress-container">
                     <div class="tertiary progress profile-card__progress--mentor" role="progressbar" tabindex="0" aria-valuenow="38" aria-valuemin="0" aria-valuetext="38 percent" aria-valuemax="100">
                        <div class="progress-meter">
                        </div>
                     </div>
                  </div>
               </div>
               <div class="profile-card__category-rating">
                  <div>Marketing</div>
                  <div class="profile-card__progress-container">
                     <div class="tertiary progress profile-card__progress--mentor" role="progressbar" tabindex="0" aria-valuenow="29" aria-valuemin="0" aria-valuetext="29 percent" aria-valuemax="100">
                        <div class="progress-meter">
                        </div>
                     </div>
                  </div>
               </div>
               <div class="profile-card__category-rating">
                  <div>Technology and Internet</div>
                  <div class="profile-card__progress-container">
                     <div class="tertiary progress profile-card__progress--mentor" role="progressbar" tabindex="0" aria-valuenow="86" aria-valuemin="0" aria-valuetext="86 percent" aria-valuemax="100">
                        <div class="progress-meter">
                        </div>
                     </div>
                  </div>
               </div>
            </section>
            <footer class="profile-card__actions background-whisper">
               <a href="/mentor/1505181" class="button hollow small tertiary">
               <strong>View profile</strong>
               </a>
            </footer>
         </article>
         <article class="profile-card">
            <header class="profile-card__overview">
               <div class="profile-card__image">
                  <a href="/mentor/1314631">
                  <img src="https://d2win24dv6pngl.cloudfront.net/media/generated/profile-photos/profile-1314631/f25ac0a7fb3eb5f0.4f23c727466d.jpg" class="avatar--small" alt="[RD]"/>
                  </a>
               </div>
               <div class="profile-card__about">
                  <h3>
                     <a href="/mentor/1314631" class="text-tertiary">
                     RAJAN DESAI
                     </a>
                  </h3>
                  <h5 class="">
                     <ul class="list--comma-separated">
                        <li>India</li>
                     </ul>
                  </h5>
                  <h5 class="no-bold text-sottovoce">Export/Import</h5>
                  <div class="profile-card__extras">
                     <div class="profile-details__detail">
                        <div class="detail__label"><strong>Recent Activity</strong></div>
                        <div class="detail__value">
                           <div class="activity-widget">
                              <span data-tooltip="shvjsu-tooltip" title="" role="img" aria-label="Active in the last week" aria-describedby="pup4up-tooltip" data-yeti-box="pup4up-tooltip" data-toggle="pup4up-tooltip" data-resize="pup4up-tooltip" class="has-tip" data-events="resize">
                              <i class="fas fa-comment text-tertiary" aria-hidden="true"></i>
                              <i class="fas fa-comment text-tertiary " aria-hidden="true"></i>
                              <i class="fas fa-comment text-tertiary " aria-hidden="true"></i>
                              </span>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </header>
            <section class="profile-card__expertise">
               <h4>How I can help</h4>
               <div class="profile-card__category-rating">
                  <div>Accounting and Finance</div>
                  <div class="profile-card__progress-container">
                     <div class="tertiary progress profile-card__progress--mentor" role="progressbar" tabindex="0" aria-valuenow="56" aria-valuemin="0" aria-valuetext="56 percent" aria-valuemax="100">
                        <div class="progress-meter">
                        </div>
                     </div>
                  </div>
               </div>
               <div class="profile-card__category-rating">
                  <div>Human Resources</div>
                  <div class="profile-card__progress-container">
                     <div class="tertiary progress profile-card__progress--mentor" role="progressbar" tabindex="0" aria-valuenow="38" aria-valuemin="0" aria-valuetext="38 percent" aria-valuemax="100">
                        <div class="progress-meter">
                        </div>
                     </div>
                  </div>
               </div>
               <div class="profile-card__category-rating">
                  <div>International</div>
                  <div class="profile-card__progress-container">
                     <div class="tertiary progress profile-card__progress--mentor" role="progressbar" tabindex="0" aria-valuenow="100" aria-valuemin="0" aria-valuetext="100 percent" aria-valuemax="100">
                        <div class="progress-meter">
                        </div>
                     </div>
                  </div>
               </div>
               <div class="profile-card__category-rating">
                  <div>Management</div>
                  <div class="profile-card__progress-container">
                     <div class="tertiary progress profile-card__progress--mentor" role="progressbar" tabindex="0" aria-valuenow="100" aria-valuemin="0" aria-valuetext="100 percent" aria-valuemax="100">
                        <div class="progress-meter">
                        </div>
                     </div>
                  </div>
               </div>
               <div class="profile-card__category-rating">
                  <div>Marketing</div>
                  <div class="profile-card__progress-container">
                     <div class="tertiary progress profile-card__progress--mentor" role="progressbar" tabindex="0" aria-valuenow="86" aria-valuemin="0" aria-valuetext="86 percent" aria-valuemax="100">
                        <div class="progress-meter">
                        </div>
                     </div>
                  </div>
               </div>
               <div class="profile-card__category-rating">
                  <div>Operations</div>
                  <div class="profile-card__progress-container">
                     <div class="tertiary progress profile-card__progress--mentor" role="progressbar" tabindex="0" aria-valuenow="100" aria-valuemin="0" aria-valuetext="100 percent" aria-valuemax="100">
                        <div class="progress-meter">
                        </div>
                     </div>
                  </div>
               </div>
               <div class="profile-card__category-rating">
                  <div>Sales</div>
                  <div class="profile-card__progress-container">
                     <div class="tertiary progress profile-card__progress--mentor" role="progressbar" tabindex="0" aria-valuenow="88" aria-valuemin="0" aria-valuetext="88 percent" aria-valuemax="100">
                        <div class="progress-meter">
                        </div>
                     </div>
                  </div>
               </div>
               <div class="profile-card__category-rating">
                  <div>Starting Up</div>
                  <div class="profile-card__progress-container">
                     <div class="tertiary progress profile-card__progress--mentor" role="progressbar" tabindex="0" aria-valuenow="84" aria-valuemin="0" aria-valuetext="84 percent" aria-valuemax="100">
                        <div class="progress-meter">
                        </div>
                     </div>
                  </div>
               </div>
               <div class="profile-card__category-rating">
                  <div>Sustainability</div>
                  <div class="profile-card__progress-container">
                     <div class="tertiary progress profile-card__progress--mentor" role="progressbar" tabindex="0" aria-valuenow="100" aria-valuemin="0" aria-valuetext="100 percent" aria-valuemax="100">
                        <div class="progress-meter">
                        </div>
                     </div>
                  </div>
               </div>
               <div class="profile-card__category-rating">
                  <div>Technology and Internet</div>
                  <div class="profile-card__progress-container">
                     <div class="tertiary progress profile-card__progress--mentor" role="progressbar" tabindex="0" aria-valuenow="58" aria-valuemin="0" aria-valuetext="58 percent" aria-valuemax="100">
                        <div class="progress-meter">
                        </div>
                     </div>
                  </div>
               </div>
            </section>
            <footer class="profile-card__actions background-whisper">
               <a href="/mentor/1314631" class="button hollow small tertiary">
               <strong>View profile</strong>
               </a>
            </footer>
         </article>
         <article class="profile-card">
            <header class="profile-card__overview">
               <div class="profile-card__image">
                  <a href="/mentor/1252224">
                     <div class="default-avatar avatar--small">
                        HW
                     </div>
                  </a>
               </div>
               <div class="profile-card__about">
                  <h3>
                     <a href="/mentor/1252224" class="text-tertiary">
                     Helen Wanjiru
                     </a>
                  </h3>
                  <h5 class="">
                     <ul class="list--comma-separated">
                        <li>Nairobi</li>
                        <li>Nairobi</li>
                        <li>Kenya</li>
                     </ul>
                  </h5>
                  <h5 class="no-bold text-sottovoce">Financial/Insurance Services</h5>
                  <div class="profile-card__extras">
                     <div class="profile-details__detail">
                        <div class="detail__label"><strong>Recent Activity</strong></div>
                        <div class="detail__value">
                           <div class="activity-widget">
                              <span data-tooltip="pjfpu4-tooltip" title="" role="img" aria-label="Active in the last week" aria-describedby="ug5wgi-tooltip" data-yeti-box="ug5wgi-tooltip" data-toggle="ug5wgi-tooltip" data-resize="ug5wgi-tooltip" class="has-tip" data-events="resize">
                              <i class="fas fa-comment text-tertiary" aria-hidden="true"></i>
                              <i class="fas fa-comment text-tertiary " aria-hidden="true"></i>
                              <i class="fas fa-comment text-tertiary " aria-hidden="true"></i>
                              </span>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </header>
            <section class="profile-card__expertise">
               <h4>How I can help</h4>
               <div class="profile-card__category-rating">
                  <div>Accounting and Finance</div>
                  <div class="profile-card__progress-container">
                     <div class="tertiary progress profile-card__progress--mentor" role="progressbar" tabindex="0" aria-valuenow="100" aria-valuemin="0" aria-valuetext="100 percent" aria-valuemax="100">
                        <div class="progress-meter">
                        </div>
                     </div>
                  </div>
               </div>
               <div class="profile-card__category-rating">
                  <div>Marketing</div>
                  <div class="profile-card__progress-container">
                     <div class="tertiary progress profile-card__progress--mentor" role="progressbar" tabindex="0" aria-valuenow="29" aria-valuemin="0" aria-valuetext="29 percent" aria-valuemax="100">
                        <div class="progress-meter">
                        </div>
                     </div>
                  </div>
               </div>
               <div class="profile-card__category-rating">
                  <div>Starting Up</div>
                  <div class="profile-card__progress-container">
                     <div class="tertiary progress profile-card__progress--mentor" role="progressbar" tabindex="0" aria-valuenow="17" aria-valuemin="0" aria-valuetext="17 percent" aria-valuemax="100">
                        <div class="progress-meter">
                        </div>
                     </div>
                  </div>
               </div>
               <div class="profile-card__category-rating">
                  <div>Sustainability</div>
                  <div class="profile-card__progress-container">
                     <div class="tertiary progress profile-card__progress--mentor" role="progressbar" tabindex="0" aria-valuenow="50" aria-valuemin="0" aria-valuetext="50 percent" aria-valuemax="100">
                        <div class="progress-meter">
                        </div>
                     </div>
                  </div>
               </div>
               <div class="profile-card__category-rating">
                  <div>Technology and Internet</div>
                  <div class="profile-card__progress-container">
                     <div class="tertiary progress profile-card__progress--mentor" role="progressbar" tabindex="0" aria-valuenow="72" aria-valuemin="0" aria-valuetext="72 percent" aria-valuemax="100">
                        <div class="progress-meter">
                        </div>
                     </div>
                  </div>
               </div>
            </section>
            <footer class="profile-card__actions background-whisper">
               <a href="/mentor/1252224" class="button hollow small tertiary">
               <strong>View profile</strong>
               </a>
            </footer>
         </article>
         <article class="profile-card">
            <header class="profile-card__overview">
               <div class="profile-card__image">
                  <a href="/mentor/1490191">
                  <img src="https://d2win24dv6pngl.cloudfront.net/media/generated/profile-photos/profile-1490191/f6083108dd7db086.3222b621d241.jpg" class="avatar--small" alt="[TC]"/>
                  </a>
               </div>
               <div class="profile-card__about">
                  <h3>
                     <a href="/mentor/1490191" class="text-tertiary">
                     Tendai .D Chipatiso
                     </a>
                  </h3>
                  <h5 class="">
                     <ul class="list--comma-separated">
                        <li>Harare</li>
                        <li>Harare</li>
                        <li>Zimbabwe</li>
                     </ul>
                  </h5>
                  <h5 class="no-bold text-sottovoce">Green Building/Renewable Energy</h5>
                  <div class="profile-card__extras">
                     <div class="profile-details__detail">
                        <div class="detail__label"><strong>Recent Activity</strong></div>
                        <div class="detail__value">
                           <div class="activity-widget">
                              <span data-tooltip="dqtz2h-tooltip" title="" role="img" aria-label="Active in the last week" aria-describedby="fvfq6c-tooltip" data-yeti-box="fvfq6c-tooltip" data-toggle="fvfq6c-tooltip" data-resize="fvfq6c-tooltip" class="has-tip" data-events="resize">
                              <i class="fas fa-comment text-tertiary" aria-hidden="true"></i>
                              <i class="fas fa-comment text-tertiary " aria-hidden="true"></i>
                              <i class="fas fa-comment text-tertiary " aria-hidden="true"></i>
                              </span>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </header>
            <section class="profile-card__expertise">
               <h4>How I can help</h4>
               <div class="profile-card__category-rating">
                  <div>Human Resources</div>
                  <div class="profile-card__progress-container">
                     <div class="tertiary progress profile-card__progress--mentor" role="progressbar" tabindex="0" aria-valuenow="50" aria-valuemin="0" aria-valuetext="50 percent" aria-valuemax="100">
                        <div class="progress-meter">
                        </div>
                     </div>
                  </div>
               </div>
               <div class="profile-card__category-rating">
                  <div>Management</div>
                  <div class="profile-card__progress-container">
                     <div class="tertiary progress profile-card__progress--mentor" role="progressbar" tabindex="0" aria-valuenow="80" aria-valuemin="0" aria-valuetext="80 percent" aria-valuemax="100">
                        <div class="progress-meter">
                        </div>
                     </div>
                  </div>
               </div>
               <div class="profile-card__category-rating">
                  <div>Marketing</div>
                  <div class="profile-card__progress-container">
                     <div class="tertiary progress profile-card__progress--mentor" role="progressbar" tabindex="0" aria-valuenow="93" aria-valuemin="0" aria-valuetext="93 percent" aria-valuemax="100">
                        <div class="progress-meter">
                        </div>
                     </div>
                  </div>
               </div>
               <div class="profile-card__category-rating">
                  <div>Sales</div>
                  <div class="profile-card__progress-container">
                     <div class="tertiary progress profile-card__progress--mentor" role="progressbar" tabindex="0" aria-valuenow="100" aria-valuemin="0" aria-valuetext="100 percent" aria-valuemax="100">
                        <div class="progress-meter">
                        </div>
                     </div>
                  </div>
               </div>
               <div class="profile-card__category-rating">
                  <div>Starting Up</div>
                  <div class="profile-card__progress-container">
                     <div class="tertiary progress profile-card__progress--mentor" role="progressbar" tabindex="0" aria-valuenow="100" aria-valuemin="0" aria-valuetext="100 percent" aria-valuemax="100">
                        <div class="progress-meter">
                        </div>
                     </div>
                  </div>
               </div>
               <div class="profile-card__category-rating">
                  <div>Sustainability</div>
                  <div class="profile-card__progress-container">
                     <div class="tertiary progress profile-card__progress--mentor" role="progressbar" tabindex="0" aria-valuenow="100" aria-valuemin="0" aria-valuetext="100 percent" aria-valuemax="100">
                        <div class="progress-meter">
                        </div>
                     </div>
                  </div>
               </div>
               <div class="profile-card__category-rating">
                  <div>Technology and Internet</div>
                  <div class="profile-card__progress-container">
                     <div class="tertiary progress profile-card__progress--mentor" role="progressbar" tabindex="0" aria-valuenow="100" aria-valuemin="0" aria-valuetext="100 percent" aria-valuemax="100">
                        <div class="progress-meter">
                        </div>
                     </div>
                  </div>
               </div>
            </section>
            <footer class="profile-card__actions background-whisper">
               <a href="/mentor/1490191" class="button hollow small tertiary">
               <strong>View profile</strong>
               </a>
            </footer>
         </article>
         <article class="profile-card">
            <header class="profile-card__overview">
               <div class="profile-card__image">
                  <a href="/mentor/1520583">
                     <div class="default-avatar avatar--small">
                        FM
                     </div>
                  </a>
               </div>
               <div class="profile-card__about">
                  <h3>
                     <a href="/mentor/1520583" class="text-tertiary">
                     Forghab Mahiva
                     </a>
                  </h3>
                  <h5 class="">
                     <ul class="list--comma-separated">
                        <li>Yaounde</li>
                        <li>North West</li>
                        <li>Cameroon</li>
                     </ul>
                  </h5>
                  <h5 class="no-bold text-sottovoce">Digital Marketing/E-Commerce/Social Media</h5>
                  <div class="profile-card__extras">
                     <div class="profile-details__detail">
                        <div class="detail__label"><strong>Recent Activity</strong></div>
                        <div class="detail__value">
                           <div class="activity-widget">
                              <span data-tooltip="1pmldj-tooltip" title="" role="img" aria-label="Active in the last week" aria-describedby="8495q6-tooltip" data-yeti-box="8495q6-tooltip" data-toggle="8495q6-tooltip" data-resize="8495q6-tooltip" class="has-tip" data-events="resize">
                              <i class="fas fa-comment text-tertiary" aria-hidden="true"></i>
                              <i class="fas fa-comment text-tertiary " aria-hidden="true"></i>
                              <i class="fas fa-comment text-tertiary " aria-hidden="true"></i>
                              </span>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </header>
            <section class="profile-card__expertise">
               <h4>How I can help</h4>
               <div class="profile-card__category-rating">
                  <div>Marketing</div>
                  <div class="profile-card__progress-container">
                     <div class="tertiary progress profile-card__progress--mentor" role="progressbar" tabindex="0" aria-valuenow="22" aria-valuemin="0" aria-valuetext="22 percent" aria-valuemax="100">
                        <div class="progress-meter">
                        </div>
                     </div>
                  </div>
               </div>
               <div class="profile-card__category-rating">
                  <div>Technology and Internet</div>
                  <div class="profile-card__progress-container">
                     <div class="tertiary progress profile-card__progress--mentor" role="progressbar" tabindex="0" aria-valuenow="15" aria-valuemin="0" aria-valuetext="15 percent" aria-valuemax="100">
                        <div class="progress-meter">
                        </div>
                     </div>
                  </div>
               </div>
            </section>
            <footer class="profile-card__actions background-whisper">
               <a href="/mentor/1520583" class="button hollow small tertiary">
               <strong>View profile</strong>
               </a>
            </footer>
         </article>
         <article class="profile-card">
            <header class="profile-card__overview">
               <div class="profile-card__organization">
                  <div class="community-org-label label success">
                     <i class="fad fa-users" aria-hidden="true"></i>&nbsp;
                     MicroMentor
                     » DTS – TSA
                  </div>
               </div>
               <div class="profile-card__image">
                  <a href="/mentor/1518172">
                  <img src="https://d2win24dv6pngl.cloudfront.net/media/generated/profile-photos/profile-1518172/8ff7166ad368b06f.70dd306dfb07.jpg" class="avatar--small" alt="[MR]"/>
                  </a>
               </div>
               <div class="profile-card__about">
                  <h3>
                     <a href="/mentor/1518172" class="text-tertiary">
                     Muhammad Fathur Riziq
                     </a>
                  </h3>
                  <h5 class="">
                     <ul class="list--comma-separated">
                        <li>Kab. Bogor</li>
                        <li>Jawa Barat</li>
                        <li>Indonesia</li>
                     </ul>
                  </h5>
                  <h5 class="no-bold text-sottovoce">Education/Training</h5>
                  <div class="profile-card__extras">
                     <div class="profile-details__detail">
                        <div class="detail__label"><strong>Recent Activity</strong></div>
                        <div class="detail__value">
                           <div class="activity-widget">
                              <span data-tooltip="66n1te-tooltip" title="" role="img" aria-label="Active in the last week" aria-describedby="2m6yim-tooltip" data-yeti-box="2m6yim-tooltip" data-toggle="2m6yim-tooltip" data-resize="2m6yim-tooltip" class="has-tip" data-events="resize">
                              <i class="fas fa-comment text-tertiary" aria-hidden="true"></i>
                              <i class="fas fa-comment text-tertiary " aria-hidden="true"></i>
                              <i class="fas fa-comment text-tertiary " aria-hidden="true"></i>
                              </span>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </header>
            <section class="profile-card__expertise">
               <h4>How I can help</h4>
               <div class="profile-card__category-rating">
                  <div>Technology and Internet</div>
                  <div class="profile-card__progress-container">
                     <div class="tertiary progress profile-card__progress--mentor" role="progressbar" tabindex="0" aria-valuenow="29" aria-valuemin="0" aria-valuetext="29 percent" aria-valuemax="100">
                        <div class="progress-meter">
                        </div>
                     </div>
                  </div>
               </div>
            </section>
            <footer class="profile-card__actions background-whisper">
               <a href="/mentor/1518172" class="button hollow small tertiary">
               <strong>View profile</strong>
               </a>
            </footer>
         </article>
         <article class="profile-card">
            <header class="profile-card__overview">
               <div class="profile-card__organization">
                  <div class="community-org-label label success">
                     <i class="fad fa-users" aria-hidden="true"></i>&nbsp;
                     MicroMentor
                     » SIGAP UMKM - Garda Transfumi - Master Mentor 2023
                  </div>
               </div>
               <div class="profile-card__image">
                  <a href="/mentor/1116978">
                  <img src="https://d2win24dv6pngl.cloudfront.net/media/generated/profile-photos/profile-1116978/2d69bb2c0cf2a05b.4cc0977a0433.jpg" class="avatar--small" alt="[HK]" />
                  </a>
               </div>
               <div class="profile-card__about">
                  <h3>
                     <a href="/mentor/1116978" class="text-tertiary">
                     Hani Khaerunnisa
                     </a>
                  </h3>
                  <h5 class="">
                     <ul class="list--comma-separated">
                        <li>Kota Tangerang Selatan</li>
                        <li>Banten</li>
                        <li>Indonesia</li>
                     </ul>
                  </h5>
                  <h5 class="no-bold text-sottovoce">Business Consulting/Coaching</h5>
                  <div class="profile-card__extras">
                     <div class="profile-details__detail">
                        <div class="detail__label"><strong>Recent Activity</strong></div>
                        <div class="detail__value">
                           <div class="activity-widget">
                              <span data-tooltip="mm2w9w-tooltip" title="" role="img" aria-label="Active in the last week" aria-describedby="xm9n60-tooltip" data-yeti-box="xm9n60-tooltip" data-toggle="xm9n60-tooltip" data-resize="xm9n60-tooltip" class="has-tip" data-events="resize">
                              <i class="fas fa-comment text-tertiary" aria-hidden="true"></i>
                              <i class="fas fa-comment text-tertiary " aria-hidden="true"></i>
                              <i class="fas fa-comment text-tertiary " aria-hidden="true"></i>
                              </span>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </header>
            <section class="profile-card__expertise">
               <h4>How I can help</h4>
               <div class="profile-card__category-rating">
                  <div>Management</div>
                  <div class="profile-card__progress-container">
                     <div class="tertiary progress profile-card__progress--mentor" role="progressbar" tabindex="0" aria-valuenow="40" aria-valuemin="0" aria-valuetext="40 percent" aria-valuemax="100">
                        <div class="progress-meter">
                        </div>
                     </div>
                  </div>
               </div>
               <div class="profile-card__category-rating">
                  <div>Marketing</div>
                  <div class="profile-card__progress-container">
                     <div class="tertiary progress profile-card__progress--mentor" role="progressbar" tabindex="0" aria-valuenow="36" aria-valuemin="0" aria-valuetext="36 percent" aria-valuemax="100">
                        <div class="progress-meter">
                        </div>
                     </div>
                  </div>
               </div>
               <div class="profile-card__category-rating">
                  <div>Technology and Internet</div>
                  <div class="profile-card__progress-container">
                     <div class="tertiary progress profile-card__progress--mentor" role="progressbar" tabindex="0" aria-valuenow="43" aria-valuemin="0" aria-valuetext="43 percent" aria-valuemax="100">
                        <div class="progress-meter">
                        </div>
                     </div>
                  </div>
               </div>
            </section>
            <footer class="profile-card__actions background-whisper">
               <a href="/mentor/1116978" class="button hollow small tertiary">
               <strong>View profile</strong>
               </a>
            </footer>
         </article>
         <article class="profile-card">
            <header class="profile-card__overview">
               <div class="profile-card__image">
                  <a href="/mentor/1520451">
                  <img src="https://d2win24dv6pngl.cloudfront.net/media/generated/profile-photos/profile-1520451/1eed250b93a8e101.db80d9631bf0.jpg" class="avatar--small" alt="[JF]" />
                  </a>
               </div>
               <div class="profile-card__about">
                  <h3>
                     <a href="/mentor/1520451" class="text-tertiary">
                     Joy François
                     </a>
                  </h3>
                  <h5 class="">
                     <ul class="list--comma-separated">
                        <li>France</li>
                     </ul>
                  </h5>
                  <h5 class="no-bold text-sottovoce">eCommerce/Online Sales</h5>
                  <div class="profile-card__extras">
                     <div class="profile-details__detail">
                        <div class="detail__label"><strong>Recent Activity</strong></div>
                        <div class="detail__value">
                           <div class="activity-widget">
                              <span data-tooltip="a43tvd-tooltip" title="" role="img" aria-label="Active in the last week" aria-describedby="6oruba-tooltip" data-yeti-box="6oruba-tooltip" data-toggle="6oruba-tooltip" data-resize="6oruba-tooltip" class="has-tip" data-events="resize">
                              <i class="fas fa-comment text-tertiary" aria-hidden="true"></i>
                              <i class="fas fa-comment text-tertiary " aria-hidden="true"></i>
                              <i class="fas fa-comment text-tertiary " aria-hidden="true"></i>
                              </span>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </header>
            <section class="profile-card__expertise">
               <h4>How I can help</h4>
               <div class="profile-card__category-rating">
                  <div>Accounting and Finance</div>
                  <div class="profile-card__progress-container">
                     <div class="tertiary progress profile-card__progress--mentor" role="progressbar" tabindex="0" aria-valuenow="23" aria-valuemin="0" aria-valuetext="23 percent" aria-valuemax="100">
                        <div class="progress-meter">
                        </div>
                     </div>
                  </div>
               </div>
               <div class="profile-card__category-rating">
                  <div>Human Resources</div>
                  <div class="profile-card__progress-container">
                     <div class="tertiary progress profile-card__progress--mentor" role="progressbar" tabindex="0" aria-valuenow="75" aria-valuemin="0" aria-valuetext="75 percent" aria-valuemax="100">
                        <div class="progress-meter">
                        </div>
                     </div>
                  </div>
               </div>
               <div class="profile-card__category-rating">
                  <div>International</div>
                  <div class="profile-card__progress-container">
                     <div class="tertiary progress profile-card__progress--mentor" role="progressbar" tabindex="0" aria-valuenow="100" aria-valuemin="0" aria-valuetext="100 percent" aria-valuemax="100">
                        <div class="progress-meter">
                        </div>
                     </div>
                  </div>
               </div>
               <div class="profile-card__category-rating">
                  <div>Law and Legal</div>
                  <div class="profile-card__progress-container">
                     <div class="tertiary progress profile-card__progress--mentor" role="progressbar" tabindex="0" aria-valuenow="100" aria-valuemin="0" aria-valuetext="100 percent" aria-valuemax="100">
                        <div class="progress-meter">
                        </div>
                     </div>
                  </div>
               </div>
               <div class="profile-card__category-rating">
                  <div>Management</div>
                  <div class="profile-card__progress-container">
                     <div class="tertiary progress profile-card__progress--mentor" role="progressbar" tabindex="0" aria-valuenow="90" aria-valuemin="0" aria-valuetext="90 percent" aria-valuemax="100">
                        <div class="progress-meter">
                        </div>
                     </div>
                  </div>
               </div>
               <div class="profile-card__category-rating">
                  <div>Marketing</div>
                  <div class="profile-card__progress-container">
                     <div class="tertiary progress profile-card__progress--mentor" role="progressbar" tabindex="0" aria-valuenow="86" aria-valuemin="0" aria-valuetext="86 percent" aria-valuemax="100">
                        <div class="progress-meter">
                        </div>
                     </div>
                  </div>
               </div>
               <div class="profile-card__category-rating">
                  <div>Operations</div>
                  <div class="profile-card__progress-container">
                     <div class="tertiary progress profile-card__progress--mentor" role="progressbar" tabindex="0" aria-valuenow="80" aria-valuemin="0" aria-valuetext="80 percent" aria-valuemax="100">
                        <div class="progress-meter">
                        </div>
                     </div>
                  </div>
               </div>
               <div class="profile-card__category-rating">
                  <div>Sales</div>
                  <div class="profile-card__progress-container">
                     <div class="tertiary progress profile-card__progress--mentor" role="progressbar" tabindex="0" aria-valuenow="88" aria-valuemin="0" aria-valuetext="88 percent" aria-valuemax="100">
                        <div class="progress-meter">
                        </div>
                     </div>
                  </div>
               </div>
               <div class="profile-card__category-rating">
                  <div>Starting Up</div>
                  <div class="profile-card__progress-container">
                     <div class="tertiary progress profile-card__progress--mentor" role="progressbar" tabindex="0" aria-valuenow="84" aria-valuemin="0" aria-valuetext="84 percent" aria-valuemax="100">
                        <div class="progress-meter">
                        </div>
                     </div>
                  </div>
               </div>
               <div class="profile-card__category-rating">
                  <div>Technology and Internet</div>
                  <div class="profile-card__progress-container">
                     <div class="tertiary progress profile-card__progress--mentor" role="progressbar" tabindex="0" aria-valuenow="43" aria-valuemin="0" aria-valuetext="43 percent" aria-valuemax="100">
                        <div class="progress-meter">
                        </div>
                     </div>
                  </div>
               </div>
            </section>
            <footer class="profile-card__actions background-whisper">
               <a href="/mentor/1520451" class="button hollow small tertiary">
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

export default Mentors;
