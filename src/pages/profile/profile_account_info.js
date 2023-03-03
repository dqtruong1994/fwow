import React from "react";

const Account_Infor = () => {
  return (
   <main class="region--content" id="main-content">
         <div id="id_profile_photo_error_message" class="form__messages callout error" >
            <span>Your file failed to upload.</span>
            <span id="id_profile_photo_error_message_file_too_large">File must be less than 5MB.</span>
            <span id="id_profile_photo_error_message_invalid_image_type">File must be in png, gif, or jpg format.</span>
         </div>
         <div class="container dashboard">
            <nav class="dashboard__menu">
               <ul class="menu vertical">
                  <li class="">
                     <a href="/dashboard">
                     Dashboard
                     </a>
                  </li>
                  <li class="active">
                     <a href="/profile/account-info">
                     My profile and settings
                     </a>
                  </li>
                  <li class="">
                     <a href="/conversations">
                     My conversations
                     </a>
                  </li>
                  <li class="">
                     <a href="/qna">
                     My Q &amp; A
                     </a>
                  </li>
               </ul>
            </nav>
            <main class="dashboard__content" data-select2-id="select2-data-281-qid3">
               <div class="profile-settings" data-select2-id="select2-data-280-a72i">
                  <header class="profile-settings__header">
                     <hgroup>
                        <h1>
                           My profile and settings
                        </h1>
                     </hgroup>
                     <a href="/member/1520776" class="button tiny clear cta">
                     View my profile
                     </a>
                  </header>
                  <nav class="profile-settings__menu">
                     <ul class="dropdown menu" data-dropdown-menu="ie1f4y-dropdown-menu" role="menubar">
                        <li role="none" class="is-dropdown-submenu-parent opens-right">
                           <a href="#" class="text-alert" role="menuitem" aria-haspopup="true" aria-label="Account info">Account info</a>
                           <ul class="menu submenu is-dropdown-submenu first-sub vertical" data-submenu="" role="menubar">
                              <li class="active is-submenu-item is-dropdown-submenu-item" role="none">
                                 <a href="/profile/account-info" id="account-info-dropdown" role="menuitem">
                                 Account info
                                 </a>
                              </li>
                              <li class="is-submenu-item is-dropdown-submenu-item" role="none">
                                 <a href="/profile/entrepreneur" role="menuitem">
                                 Entrepreneur profile
                                 </a>
                              </li>
                              <li class="is-submenu-item is-dropdown-submenu-item" role="none">
                                 <a href="/profile/entrepreneur/self-assessment" role="menuitem">Entrepreneur self-assessment</a>
                              </li>
                              <li class="is-submenu-item is-dropdown-submenu-item" role="none">
                                 <a href="/profile/mentor" role="menuitem">Mentor profile</a>
                              </li>
                              <li class="is-submenu-item is-dropdown-submenu-item" role="none">
                                 <a href="/profile/contact-settings" role="menuitem">Contact settings</a>
                              </li>
                              <li class="is-submenu-item is-dropdown-submenu-item" role="none"><em>
                                 <a href="/member/1520776" class="text-sottovoce" role="menuitem">
                                 View my profile
                                 </a></em>
                              </li>
                           </ul>
                        </li>
                     </ul>
                  </nav>
                  <nav class="profile-settings__tabs">
                     <ul class="tabs">
                        <li class="tabs-title">
                           <a href="/profile/account-info" aria-selected="true">
                           Account info
                           </a>
                        </li>
                        <li class="tabs-title">
                           <a href="/profile/entrepreneur" aria-selected="">
                           Entrepreneur profile
                           </a>
                        </li>
                        <li class="tabs-title">
                           <a href="/profile/entrepreneur/self-assessment" aria-selected="">Entrepreneur self-assessment</a>
                        </li>
                        <li class="tabs-title">
                           <a href="/profile/mentor" aria-selected="">Mentor profile</a>
                        </li>
                        <li class="tabs-title">
                           <a href="/profile/contact-settings" aria-selected="">Contact settings</a>
                        </li>
                     </ul>
                  </nav>
                  <p class="help-text form__instructions">
                     Required fields are marked with an <span class="error">*</span>
                  </p>
                  <form data-abide="b1pyf3-abide" method="post" class="form" enctype="multipart/form-data" data-select2-id="select2-data-279-h7hj">
                     <div class="form__field form__field--first_name form__field--text is-required">
                        <label for="id_first_name">First name:</label>
                        <input type="text" name="first_name" value="truong" maxlength="50" required="" id="id_first_name" aria-describedby="390eor-abide-error"/>
                        <div class="form-error" id="390eor-abide-error" role="alert">
                           This field is required
                        </div>
                     </div>
                     <div class="form__field form__field--last_name form__field--text is-required">
                        <label for="id_last_name">Last name:</label>
                        <input type="text" name="last_name" value="dang" maxlength="150" required="" id="id_last_name" aria-describedby="tw6f44-abide-error"/>
                        <div class="form-error" role="alert" id="tw6f44-abide-error">
                           This field is required
                        </div>
                     </div>
                     <div class="form__field form__field--email form__field--email is-required">
                        <label for="id_email">Email address:</label>
                        <input type="email" name="email" value="dqtruong1994@gmail.com" maxlength="254" required="" id="id_email" aria-describedby="gx48z7-abide-error"/>
                        <div class="form-error" role="alert" id="gx48z7-abide-error">
                           This field is required
                        </div>
                     </div>
                     <div class="form__field form__field--new_password1 form__field--password is-required">
                        <label for="id_new_password1">Password:</label>
                        <input type="password" name="new_password1" value="............" required="" id="id_new_password1" aria-describedby="mmgx3c-abide-error"/>
                        <div class="help-text">
                           Passwords must have a minimum of 8 characters
                        </div>
                        <div class="form-error" role="alert" id="mmgx3c-abide-error">
                           This field is required
                        </div>
                     </div>
                     <div class="form__field form__field--new_password2 form__field--password is-required">
                        <label for="id_new_password2">Confirm password:</label>
                        <input type="password" name="new_password2" value="............" required="" id="id_new_password2" aria-describedby="txi4yu-abide-error"/>
                        <div class="form-error" role="alert" id="txi4yu-abide-error">
                           This field is required
                        </div>
                     </div>
                     <input type="hidden" name="direct_upload_photo_path" id="id_direct_upload_photo_path" aria-describedby="390eor-abide-error"/>
                     <div class="form__field form__field--photo_original form__field--file">
                        <label for="id_photo_original">Profile photo:</label>
                        <div class="clearable-file-input" id="profile-image-file-input">
                           <div class="clearable-file-input__replace">
                              <div class="file-input-trans-wrapper">
                                 <label class="button">Select image
                                 <input type="file" name="photo_original" class="file-input-translation-skin" data-max-file-size="10485760" accept="image/*" id="id_photo_original"/>
                                 </label>
                              </div>
                           </div>
                        </div>
                        <div class="help-text">
                           Image must be less than 10 MB in size
                        </div>
                     </div>
                     <div class="form__field form__field--preferred_language form__field--select is-required">
                        <label for="id_preferred_language">Preferred language:</label>
                        <select name="preferred_language" data-use-select2="" data-placeholder="Select" required="" id="id_preferred_language" aria-describedby="3h7ksy-abide-error" data-select2-id="select2-data-id_preferred_language" tabindex="-1" class="select2-hidden-accessible" aria-hidden="true">
                           <option value="">---------</option>
                           <option value="en" selected="" data-select2-id="select2-data-8-dvuj">English</option>
                           <option value="es">Spanish</option>
                           <option value="ar">Arabic</option>
                           <option value="id">Bahasa Indonesia</option>
                           <option value="so">Somali</option>
                        </select>
                        <span class="select2 select2-container select2-container--mm" dir="ltr" data-select2-id="select2-data-7-eavr"><span class="selection"><span class="select2-selection select2-selection--single" role="combobox" aria-haspopup="true" aria-expanded="false" tabindex="0" aria-disabled="false" aria-labelledby="select2-id_preferred_language-container" aria-controls="select2-id_preferred_language-container"><span class="select2-selection__rendered" id="select2-id_preferred_language-container" role="textbox" aria-readonly="true" title="English">English</span><span class="select2-selection__arrow" role="presentation"><b role="presentation"></b></span></span></span><span class="dropdown-wrapper" aria-hidden="true"></span></span>
                        <div class="help-text">
                           Which language do you prefer when communicating with other members?
                        </div>
                        <div class="form-error" role="alert" id="3h7ksy-abide-error">
                           This field is required
                        </div>
                     </div>
                     <div class="form__field form__field--timezone form__field--select">
                        <label for="id_timezone">Timezone:</label>
                        <select name="timezone" data-use-select2="" data-placeholder="Select" id="id_timezone" data-select2-id="select2-data-id_timezone" tabindex="-1" class="select2-hidden-accessible" aria-hidden="true">
                           <option value="" selected="" data-select2-id="select2-data-10-yw5j">---------</option>
                           <option value="Africa/Abidjan">Africa/Abidjan</option>
                           <option value="Africa/Accra">Africa/Accra</option>
                           <option value="Africa/Addis_Ababa">Africa/Addis_Ababa</option>
                           <option value="Africa/Algiers">Africa/Algiers</option>
                           <option value="Africa/Asmara">Africa/Asmara</option>
                           <option value="Africa/Bamako">Africa/Bamako</option>
                           <option value="Africa/Bangui">Africa/Bangui</option>
                           <option value="Africa/Banjul">Africa/Banjul</option>
                           <option value="Africa/Bissau">Africa/Bissau</option>
                           <option value="Africa/Blantyre">Africa/Blantyre</option>
                           <option value="Africa/Brazzaville">Africa/Brazzaville</option>
                           <option value="Africa/Bujumbura">Africa/Bujumbura</option>
                           <option value="Africa/Cairo">Africa/Cairo</option>
                           <option value="Africa/Casablanca">Africa/Casablanca</option>
                           <option value="Africa/Ceuta">Africa/Ceuta</option>
                           <option value="Africa/Conakry">Africa/Conakry</option>
                           <option value="Africa/Dakar">Africa/Dakar</option>
                           <option value="Africa/Dar_es_Salaam">Africa/Dar_es_Salaam</option>
                           <option value="Africa/Djibouti">Africa/Djibouti</option>
                           <option value="Africa/Douala">Africa/Douala</option>
                           <option value="Africa/El_Aaiun">Africa/El_Aaiun</option>
                           <option value="Africa/Freetown">Africa/Freetown</option>
                           <option value="Africa/Gaborone">Africa/Gaborone</option>
                           <option value="Africa/Harare">Africa/Harare</option>
                           <option value="Africa/Johannesburg">Africa/Johannesburg</option>
                           <option value="Africa/Juba">Africa/Juba</option>
                           <option value="Africa/Kampala">Africa/Kampala</option>
                           <option value="Africa/Khartoum">Africa/Khartoum</option>
                           <option value="Africa/Kigali">Africa/Kigali</option>
                           <option value="Africa/Kinshasa">Africa/Kinshasa</option>
                           <option value="Africa/Lagos">Africa/Lagos</option>
                           <option value="Africa/Libreville">Africa/Libreville</option>
                           <option value="Africa/Lome">Africa/Lome</option>
                           <option value="Africa/Luanda">Africa/Luanda</option>
                           <option value="Africa/Lubumbashi">Africa/Lubumbashi</option>
                           <option value="Africa/Lusaka">Africa/Lusaka</option>
                           <option value="Africa/Malabo">Africa/Malabo</option>
                           <option value="Africa/Maputo">Africa/Maputo</option>
                           <option value="Africa/Maseru">Africa/Maseru</option>
                           <option value="Africa/Mbabane">Africa/Mbabane</option>
                           <option value="Africa/Mogadishu">Africa/Mogadishu</option>
                           <option value="Africa/Monrovia">Africa/Monrovia</option>
                           <option value="Africa/Nairobi">Africa/Nairobi</option>
                           <option value="Africa/Ndjamena">Africa/Ndjamena</option>
                           <option value="Africa/Niamey">Africa/Niamey</option>
                           <option value="Africa/Nouakchott">Africa/Nouakchott</option>
                           <option value="Africa/Ouagadougou">Africa/Ouagadougou</option>
                           <option value="Africa/Porto-Novo">Africa/Porto-Novo</option>
                           <option value="Africa/Sao_Tome">Africa/Sao_Tome</option>
                           <option value="Africa/Tripoli">Africa/Tripoli</option>
                           <option value="Africa/Tunis">Africa/Tunis</option>
                           <option value="Africa/Windhoek">Africa/Windhoek</option>
                           <option value="America/Adak">America/Adak</option>
                           <option value="America/Anchorage">America/Anchorage</option>
                           <option value="America/Anguilla">America/Anguilla</option>
                           <option value="America/Antigua">America/Antigua</option>
                           <option value="America/Araguaina">America/Araguaina</option>
                           <option value="America/Argentina/Buenos_Aires">America/Argentina/Buenos_Aires</option>
                           <option value="America/Argentina/Catamarca">America/Argentina/Catamarca</option>
                           <option value="America/Argentina/Cordoba">America/Argentina/Cordoba</option>
                           <option value="America/Argentina/Jujuy">America/Argentina/Jujuy</option>
                           <option value="America/Argentina/La_Rioja">America/Argentina/La_Rioja</option>
                           <option value="America/Argentina/Mendoza">America/Argentina/Mendoza</option>
                           <option value="America/Argentina/Rio_Gallegos">America/Argentina/Rio_Gallegos</option>
                           <option value="America/Argentina/Salta">America/Argentina/Salta</option>
                           <option value="America/Argentina/San_Juan">America/Argentina/San_Juan</option>
                           <option value="America/Argentina/San_Luis">America/Argentina/San_Luis</option>
                           <option value="America/Argentina/Tucuman">America/Argentina/Tucuman</option>
                           <option value="America/Argentina/Ushuaia">America/Argentina/Ushuaia</option>
                           <option value="America/Aruba">America/Aruba</option>
                           <option value="America/Asuncion">America/Asuncion</option>
                           <option value="America/Atikokan">America/Atikokan</option>
                           <option value="America/Bahia">America/Bahia</option>
                           <option value="America/Bahia_Banderas">America/Bahia_Banderas</option>
                           <option value="America/Barbados">America/Barbados</option>
                           <option value="America/Belem">America/Belem</option>
                           <option value="America/Belize">America/Belize</option>
                           <option value="America/Blanc-Sablon">America/Blanc-Sablon</option>
                           <option value="America/Boa_Vista">America/Boa_Vista</option>
                           <option value="America/Bogota">America/Bogota</option>
                           <option value="America/Boise">America/Boise</option>
                           <option value="America/Cambridge_Bay">America/Cambridge_Bay</option>
                           <option value="America/Campo_Grande">America/Campo_Grande</option>
                           <option value="America/Cancun">America/Cancun</option>
                           <option value="America/Caracas">America/Caracas</option>
                           <option value="America/Cayenne">America/Cayenne</option>
                           <option value="America/Cayman">America/Cayman</option>
                           <option value="America/Chicago">America/Chicago</option>
                           <option value="America/Chihuahua">America/Chihuahua</option>
                           <option value="America/Costa_Rica">America/Costa_Rica</option>
                           <option value="America/Creston">America/Creston</option>
                           <option value="America/Cuiaba">America/Cuiaba</option>
                           <option value="America/Curacao">America/Curacao</option>
                           <option value="America/Danmarkshavn">America/Danmarkshavn</option>
                           <option value="America/Dawson">America/Dawson</option>
                           <option value="America/Dawson_Creek">America/Dawson_Creek</option>
                           <option value="America/Denver">America/Denver</option>
                           <option value="America/Detroit">America/Detroit</option>
                           <option value="America/Dominica">America/Dominica</option>
                           <option value="America/Edmonton">America/Edmonton</option>
                           <option value="America/Eirunepe">America/Eirunepe</option>
                           <option value="America/El_Salvador">America/El_Salvador</option>
                           <option value="America/Fort_Nelson">America/Fort_Nelson</option>
                           <option value="America/Fortaleza">America/Fortaleza</option>
                           <option value="America/Glace_Bay">America/Glace_Bay</option>
                           <option value="America/Goose_Bay">America/Goose_Bay</option>
                           <option value="America/Grand_Turk">America/Grand_Turk</option>
                           <option value="America/Grenada">America/Grenada</option>
                           <option value="America/Guadeloupe">America/Guadeloupe</option>
                           <option value="America/Guatemala">America/Guatemala</option>
                           <option value="America/Guayaquil">America/Guayaquil</option>
                           <option value="America/Guyana">America/Guyana</option>
                           <option value="America/Halifax">America/Halifax</option>
                           <option value="America/Havana">America/Havana</option>
                           <option value="America/Hermosillo">America/Hermosillo</option>
                           <option value="America/Indiana/Indianapolis">America/Indiana/Indianapolis</option>
                           <option value="America/Indiana/Knox">America/Indiana/Knox</option>
                           <option value="America/Indiana/Marengo">America/Indiana/Marengo</option>
                           <option value="America/Indiana/Petersburg">America/Indiana/Petersburg</option>
                           <option value="America/Indiana/Tell_City">America/Indiana/Tell_City</option>
                           <option value="America/Indiana/Vevay">America/Indiana/Vevay</option>
                           <option value="America/Indiana/Vincennes">America/Indiana/Vincennes</option>
                           <option value="America/Indiana/Winamac">America/Indiana/Winamac</option>
                           <option value="America/Inuvik">America/Inuvik</option>
                           <option value="America/Iqaluit">America/Iqaluit</option>
                           <option value="America/Jamaica">America/Jamaica</option>
                           <option value="America/Juneau">America/Juneau</option>
                           <option value="America/Kentucky/Louisville">America/Kentucky/Louisville</option>
                           <option value="America/Kentucky/Monticello">America/Kentucky/Monticello</option>
                           <option value="America/Kralendijk">America/Kralendijk</option>
                           <option value="America/La_Paz">America/La_Paz</option>
                           <option value="America/Lima">America/Lima</option>
                           <option value="America/Los_Angeles">America/Los_Angeles</option>
                           <option value="America/Lower_Princes">America/Lower_Princes</option>
                           <option value="America/Maceio">America/Maceio</option>
                           <option value="America/Managua">America/Managua</option>
                           <option value="America/Manaus">America/Manaus</option>
                           <option value="America/Marigot">America/Marigot</option>
                           <option value="America/Martinique">America/Martinique</option>
                           <option value="America/Matamoros">America/Matamoros</option>
                           <option value="America/Mazatlan">America/Mazatlan</option>
                           <option value="America/Menominee">America/Menominee</option>
                           <option value="America/Merida">America/Merida</option>
                           <option value="America/Metlakatla">America/Metlakatla</option>
                           <option value="America/Mexico_City">America/Mexico_City</option>
                           <option value="America/Miquelon">America/Miquelon</option>
                           <option value="America/Moncton">America/Moncton</option>
                           <option value="America/Monterrey">America/Monterrey</option>
                           <option value="America/Montevideo">America/Montevideo</option>
                           <option value="America/Montserrat">America/Montserrat</option>
                           <option value="America/Nassau">America/Nassau</option>
                           <option value="America/New_York">America/New_York</option>
                           <option value="America/Nipigon">America/Nipigon</option>
                           <option value="America/Nome">America/Nome</option>
                           <option value="America/Noronha">America/Noronha</option>
                           <option value="America/North_Dakota/Beulah">America/North_Dakota/Beulah</option>
                           <option value="America/North_Dakota/Center">America/North_Dakota/Center</option>
                           <option value="America/North_Dakota/New_Salem">America/North_Dakota/New_Salem</option>
                           <option value="America/Nuuk">America/Nuuk</option>
                           <option value="America/Ojinaga">America/Ojinaga</option>
                           <option value="America/Panama">America/Panama</option>
                           <option value="America/Pangnirtung">America/Pangnirtung</option>
                           <option value="America/Paramaribo">America/Paramaribo</option>
                           <option value="America/Phoenix">America/Phoenix</option>
                           <option value="America/Port-au-Prince">America/Port-au-Prince</option>
                           <option value="America/Port_of_Spain">America/Port_of_Spain</option>
                           <option value="America/Porto_Velho">America/Porto_Velho</option>
                           <option value="America/Puerto_Rico">America/Puerto_Rico</option>
                           <option value="America/Punta_Arenas">America/Punta_Arenas</option>
                           <option value="America/Rainy_River">America/Rainy_River</option>
                           <option value="America/Rankin_Inlet">America/Rankin_Inlet</option>
                           <option value="America/Recife">America/Recife</option>
                           <option value="America/Regina">America/Regina</option>
                           <option value="America/Resolute">America/Resolute</option>
                           <option value="America/Rio_Branco">America/Rio_Branco</option>
                           <option value="America/Santarem">America/Santarem</option>
                           <option value="America/Santiago">America/Santiago</option>
                           <option value="America/Santo_Domingo">America/Santo_Domingo</option>
                           <option value="America/Sao_Paulo">America/Sao_Paulo</option>
                           <option value="America/Scoresbysund">America/Scoresbysund</option>
                           <option value="America/Sitka">America/Sitka</option>
                           <option value="America/St_Barthelemy">America/St_Barthelemy</option>
                           <option value="America/St_Johns">America/St_Johns</option>
                           <option value="America/St_Kitts">America/St_Kitts</option>
                           <option value="America/St_Lucia">America/St_Lucia</option>
                           <option value="America/St_Thomas">America/St_Thomas</option>
                           <option value="America/St_Vincent">America/St_Vincent</option>
                           <option value="America/Swift_Current">America/Swift_Current</option>
                           <option value="America/Tegucigalpa">America/Tegucigalpa</option>
                           <option value="America/Thule">America/Thule</option>
                           <option value="America/Thunder_Bay">America/Thunder_Bay</option>
                           <option value="America/Tijuana">America/Tijuana</option>
                           <option value="America/Toronto">America/Toronto</option>
                           <option value="America/Tortola">America/Tortola</option>
                           <option value="America/Vancouver">America/Vancouver</option>
                           <option value="America/Whitehorse">America/Whitehorse</option>
                           <option value="America/Winnipeg">America/Winnipeg</option>
                           <option value="America/Yakutat">America/Yakutat</option>
                           <option value="America/Yellowknife">America/Yellowknife</option>
                           <option value="Antarctica/Casey">Antarctica/Casey</option>
                           <option value="Antarctica/Davis">Antarctica/Davis</option>
                           <option value="Antarctica/DumontDUrville">Antarctica/DumontDUrville</option>
                           <option value="Antarctica/Macquarie">Antarctica/Macquarie</option>
                           <option value="Antarctica/Mawson">Antarctica/Mawson</option>
                           <option value="Antarctica/McMurdo">Antarctica/McMurdo</option>
                           <option value="Antarctica/Palmer">Antarctica/Palmer</option>
                           <option value="Antarctica/Rothera">Antarctica/Rothera</option>
                           <option value="Antarctica/Syowa">Antarctica/Syowa</option>
                           <option value="Antarctica/Troll">Antarctica/Troll</option>
                           <option value="Antarctica/Vostok">Antarctica/Vostok</option>
                           <option value="Arctic/Longyearbyen">Arctic/Longyearbyen</option>
                           <option value="Asia/Aden">Asia/Aden</option>
                           <option value="Asia/Almaty">Asia/Almaty</option>
                           <option value="Asia/Amman">Asia/Amman</option>
                           <option value="Asia/Anadyr">Asia/Anadyr</option>
                           <option value="Asia/Aqtau">Asia/Aqtau</option>
                           <option value="Asia/Aqtobe">Asia/Aqtobe</option>
                           <option value="Asia/Ashgabat">Asia/Ashgabat</option>
                           <option value="Asia/Atyrau">Asia/Atyrau</option>
                           <option value="Asia/Baghdad">Asia/Baghdad</option>
                           <option value="Asia/Bahrain">Asia/Bahrain</option>
                           <option value="Asia/Baku">Asia/Baku</option>
                           <option value="Asia/Bangkok">Asia/Bangkok</option>
                           <option value="Asia/Barnaul">Asia/Barnaul</option>
                           <option value="Asia/Beirut">Asia/Beirut</option>
                           <option value="Asia/Bishkek">Asia/Bishkek</option>
                           <option value="Asia/Brunei">Asia/Brunei</option>
                           <option value="Asia/Chita">Asia/Chita</option>
                           <option value="Asia/Choibalsan">Asia/Choibalsan</option>
                           <option value="Asia/Colombo">Asia/Colombo</option>
                           <option value="Asia/Damascus">Asia/Damascus</option>
                           <option value="Asia/Dhaka">Asia/Dhaka</option>
                           <option value="Asia/Dili">Asia/Dili</option>
                           <option value="Asia/Dubai">Asia/Dubai</option>
                           <option value="Asia/Dushanbe">Asia/Dushanbe</option>
                           <option value="Asia/Famagusta">Asia/Famagusta</option>
                           <option value="Asia/Gaza">Asia/Gaza</option>
                           <option value="Asia/Hebron">Asia/Hebron</option>
                           <option value="Asia/Ho_Chi_Minh">Asia/Ho_Chi_Minh</option>
                           <option value="Asia/Hong_Kong">Asia/Hong_Kong</option>
                           <option value="Asia/Hovd">Asia/Hovd</option>
                           <option value="Asia/Irkutsk">Asia/Irkutsk</option>
                           <option value="Asia/Jakarta">Asia/Jakarta</option>
                           <option value="Asia/Jayapura">Asia/Jayapura</option>
                           <option value="Asia/Jerusalem">Asia/Jerusalem</option>
                           <option value="Asia/Kabul">Asia/Kabul</option>
                           <option value="Asia/Kamchatka">Asia/Kamchatka</option>
                           <option value="Asia/Karachi">Asia/Karachi</option>
                           <option value="Asia/Kathmandu">Asia/Kathmandu</option>
                           <option value="Asia/Khandyga">Asia/Khandyga</option>
                           <option value="Asia/Kolkata">Asia/Kolkata</option>
                           <option value="Asia/Krasnoyarsk">Asia/Krasnoyarsk</option>
                           <option value="Asia/Kuala_Lumpur">Asia/Kuala_Lumpur</option>
                           <option value="Asia/Kuching">Asia/Kuching</option>
                           <option value="Asia/Kuwait">Asia/Kuwait</option>
                           <option value="Asia/Macau">Asia/Macau</option>
                           <option value="Asia/Magadan">Asia/Magadan</option>
                           <option value="Asia/Makassar">Asia/Makassar</option>
                           <option value="Asia/Manila">Asia/Manila</option>
                           <option value="Asia/Muscat">Asia/Muscat</option>
                           <option value="Asia/Nicosia">Asia/Nicosia</option>
                           <option value="Asia/Novokuznetsk">Asia/Novokuznetsk</option>
                           <option value="Asia/Novosibirsk">Asia/Novosibirsk</option>
                           <option value="Asia/Omsk">Asia/Omsk</option>
                           <option value="Asia/Oral">Asia/Oral</option>
                           <option value="Asia/Phnom_Penh">Asia/Phnom_Penh</option>
                           <option value="Asia/Pontianak">Asia/Pontianak</option>
                           <option value="Asia/Pyongyang">Asia/Pyongyang</option>
                           <option value="Asia/Qatar">Asia/Qatar</option>
                           <option value="Asia/Qostanay">Asia/Qostanay</option>
                           <option value="Asia/Qyzylorda">Asia/Qyzylorda</option>
                           <option value="Asia/Riyadh">Asia/Riyadh</option>
                           <option value="Asia/Sakhalin">Asia/Sakhalin</option>
                           <option value="Asia/Samarkand">Asia/Samarkand</option>
                           <option value="Asia/Seoul">Asia/Seoul</option>
                           <option value="Asia/Shanghai">Asia/Shanghai</option>
                           <option value="Asia/Singapore">Asia/Singapore</option>
                           <option value="Asia/Srednekolymsk">Asia/Srednekolymsk</option>
                           <option value="Asia/Taipei">Asia/Taipei</option>
                           <option value="Asia/Tashkent">Asia/Tashkent</option>
                           <option value="Asia/Tbilisi">Asia/Tbilisi</option>
                           <option value="Asia/Tehran">Asia/Tehran</option>
                           <option value="Asia/Thimphu">Asia/Thimphu</option>
                           <option value="Asia/Tokyo">Asia/Tokyo</option>
                           <option value="Asia/Tomsk">Asia/Tomsk</option>
                           <option value="Asia/Ulaanbaatar">Asia/Ulaanbaatar</option>
                           <option value="Asia/Urumqi">Asia/Urumqi</option>
                           <option value="Asia/Ust-Nera">Asia/Ust-Nera</option>
                           <option value="Asia/Vientiane">Asia/Vientiane</option>
                           <option value="Asia/Vladivostok">Asia/Vladivostok</option>
                           <option value="Asia/Yakutsk">Asia/Yakutsk</option>
                           <option value="Asia/Yangon">Asia/Yangon</option>
                           <option value="Asia/Yekaterinburg">Asia/Yekaterinburg</option>
                           <option value="Asia/Yerevan">Asia/Yerevan</option>
                           <option value="Atlantic/Azores">Atlantic/Azores</option>
                           <option value="Atlantic/Bermuda">Atlantic/Bermuda</option>
                           <option value="Atlantic/Canary">Atlantic/Canary</option>
                           <option value="Atlantic/Cape_Verde">Atlantic/Cape_Verde</option>
                           <option value="Atlantic/Faroe">Atlantic/Faroe</option>
                           <option value="Atlantic/Madeira">Atlantic/Madeira</option>
                           <option value="Atlantic/Reykjavik">Atlantic/Reykjavik</option>
                           <option value="Atlantic/South_Georgia">Atlantic/South_Georgia</option>
                           <option value="Atlantic/St_Helena">Atlantic/St_Helena</option>
                           <option value="Atlantic/Stanley">Atlantic/Stanley</option>
                           <option value="Australia/Adelaide">Australia/Adelaide</option>
                           <option value="Australia/Brisbane">Australia/Brisbane</option>
                           <option value="Australia/Broken_Hill">Australia/Broken_Hill</option>
                           <option value="Australia/Currie">Australia/Currie</option>
                           <option value="Australia/Darwin">Australia/Darwin</option>
                           <option value="Australia/Eucla">Australia/Eucla</option>
                           <option value="Australia/Hobart">Australia/Hobart</option>
                           <option value="Australia/Lindeman">Australia/Lindeman</option>
                           <option value="Australia/Lord_Howe">Australia/Lord_Howe</option>
                           <option value="Australia/Melbourne">Australia/Melbourne</option>
                           <option value="Australia/Perth">Australia/Perth</option>
                           <option value="Australia/Sydney">Australia/Sydney</option>
                           <option value="Canada/Atlantic">Canada/Atlantic</option>
                           <option value="Canada/Central">Canada/Central</option>
                           <option value="Canada/Eastern">Canada/Eastern</option>
                           <option value="Canada/Mountain">Canada/Mountain</option>
                           <option value="Canada/Newfoundland">Canada/Newfoundland</option>
                           <option value="Canada/Pacific">Canada/Pacific</option>
                           <option value="Europe/Amsterdam">Europe/Amsterdam</option>
                           <option value="Europe/Andorra">Europe/Andorra</option>
                           <option value="Europe/Astrakhan">Europe/Astrakhan</option>
                           <option value="Europe/Athens">Europe/Athens</option>
                           <option value="Europe/Belgrade">Europe/Belgrade</option>
                           <option value="Europe/Berlin">Europe/Berlin</option>
                           <option value="Europe/Bratislava">Europe/Bratislava</option>
                           <option value="Europe/Brussels">Europe/Brussels</option>
                           <option value="Europe/Bucharest">Europe/Bucharest</option>
                           <option value="Europe/Budapest">Europe/Budapest</option>
                           <option value="Europe/Busingen">Europe/Busingen</option>
                           <option value="Europe/Chisinau">Europe/Chisinau</option>
                           <option value="Europe/Copenhagen">Europe/Copenhagen</option>
                           <option value="Europe/Dublin">Europe/Dublin</option>
                           <option value="Europe/Gibraltar">Europe/Gibraltar</option>
                           <option value="Europe/Guernsey">Europe/Guernsey</option>
                           <option value="Europe/Helsinki">Europe/Helsinki</option>
                           <option value="Europe/Isle_of_Man">Europe/Isle_of_Man</option>
                           <option value="Europe/Istanbul">Europe/Istanbul</option>
                           <option value="Europe/Jersey">Europe/Jersey</option>
                           <option value="Europe/Kaliningrad">Europe/Kaliningrad</option>
                           <option value="Europe/Kiev">Europe/Kiev</option>
                           <option value="Europe/Kirov">Europe/Kirov</option>
                           <option value="Europe/Lisbon">Europe/Lisbon</option>
                           <option value="Europe/Ljubljana">Europe/Ljubljana</option>
                           <option value="Europe/London">Europe/London</option>
                           <option value="Europe/Luxembourg">Europe/Luxembourg</option>
                           <option value="Europe/Madrid">Europe/Madrid</option>
                           <option value="Europe/Malta">Europe/Malta</option>
                           <option value="Europe/Mariehamn">Europe/Mariehamn</option>
                           <option value="Europe/Minsk">Europe/Minsk</option>
                           <option value="Europe/Monaco">Europe/Monaco</option>
                           <option value="Europe/Moscow">Europe/Moscow</option>
                           <option value="Europe/Oslo">Europe/Oslo</option>
                           <option value="Europe/Paris">Europe/Paris</option>
                           <option value="Europe/Podgorica">Europe/Podgorica</option>
                           <option value="Europe/Prague">Europe/Prague</option>
                           <option value="Europe/Riga">Europe/Riga</option>
                           <option value="Europe/Rome">Europe/Rome</option>
                           <option value="Europe/Samara">Europe/Samara</option>
                           <option value="Europe/San_Marino">Europe/San_Marino</option>
                           <option value="Europe/Sarajevo">Europe/Sarajevo</option>
                           <option value="Europe/Saratov">Europe/Saratov</option>
                           <option value="Europe/Simferopol">Europe/Simferopol</option>
                           <option value="Europe/Skopje">Europe/Skopje</option>
                           <option value="Europe/Sofia">Europe/Sofia</option>
                           <option value="Europe/Stockholm">Europe/Stockholm</option>
                           <option value="Europe/Tallinn">Europe/Tallinn</option>
                           <option value="Europe/Tirane">Europe/Tirane</option>
                           <option value="Europe/Ulyanovsk">Europe/Ulyanovsk</option>
                           <option value="Europe/Uzhgorod">Europe/Uzhgorod</option>
                           <option value="Europe/Vaduz">Europe/Vaduz</option>
                           <option value="Europe/Vatican">Europe/Vatican</option>
                           <option value="Europe/Vienna">Europe/Vienna</option>
                           <option value="Europe/Vilnius">Europe/Vilnius</option>
                           <option value="Europe/Volgograd">Europe/Volgograd</option>
                           <option value="Europe/Warsaw">Europe/Warsaw</option>
                           <option value="Europe/Zagreb">Europe/Zagreb</option>
                           <option value="Europe/Zaporozhye">Europe/Zaporozhye</option>
                           <option value="Europe/Zurich">Europe/Zurich</option>
                           <option value="GMT">GMT</option>
                           <option value="Indian/Antananarivo">Indian/Antananarivo</option>
                           <option value="Indian/Chagos">Indian/Chagos</option>
                           <option value="Indian/Christmas">Indian/Christmas</option>
                           <option value="Indian/Cocos">Indian/Cocos</option>
                           <option value="Indian/Comoro">Indian/Comoro</option>
                           <option value="Indian/Kerguelen">Indian/Kerguelen</option>
                           <option value="Indian/Mahe">Indian/Mahe</option>
                           <option value="Indian/Maldives">Indian/Maldives</option>
                           <option value="Indian/Mauritius">Indian/Mauritius</option>
                           <option value="Indian/Mayotte">Indian/Mayotte</option>
                           <option value="Indian/Reunion">Indian/Reunion</option>
                           <option value="Pacific/Apia">Pacific/Apia</option>
                           <option value="Pacific/Auckland">Pacific/Auckland</option>
                           <option value="Pacific/Bougainville">Pacific/Bougainville</option>
                           <option value="Pacific/Chatham">Pacific/Chatham</option>
                           <option value="Pacific/Chuuk">Pacific/Chuuk</option>
                           <option value="Pacific/Easter">Pacific/Easter</option>
                           <option value="Pacific/Efate">Pacific/Efate</option>
                           <option value="Pacific/Enderbury">Pacific/Enderbury</option>
                           <option value="Pacific/Fakaofo">Pacific/Fakaofo</option>
                           <option value="Pacific/Fiji">Pacific/Fiji</option>
                           <option value="Pacific/Funafuti">Pacific/Funafuti</option>
                           <option value="Pacific/Galapagos">Pacific/Galapagos</option>
                           <option value="Pacific/Gambier">Pacific/Gambier</option>
                           <option value="Pacific/Guadalcanal">Pacific/Guadalcanal</option>
                           <option value="Pacific/Guam">Pacific/Guam</option>
                           <option value="Pacific/Honolulu">Pacific/Honolulu</option>
                           <option value="Pacific/Kiritimati">Pacific/Kiritimati</option>
                           <option value="Pacific/Kosrae">Pacific/Kosrae</option>
                           <option value="Pacific/Kwajalein">Pacific/Kwajalein</option>
                           <option value="Pacific/Majuro">Pacific/Majuro</option>
                           <option value="Pacific/Marquesas">Pacific/Marquesas</option>
                           <option value="Pacific/Midway">Pacific/Midway</option>
                           <option value="Pacific/Nauru">Pacific/Nauru</option>
                           <option value="Pacific/Niue">Pacific/Niue</option>
                           <option value="Pacific/Norfolk">Pacific/Norfolk</option>
                           <option value="Pacific/Noumea">Pacific/Noumea</option>
                           <option value="Pacific/Pago_Pago">Pacific/Pago_Pago</option>
                           <option value="Pacific/Palau">Pacific/Palau</option>
                           <option value="Pacific/Pitcairn">Pacific/Pitcairn</option>
                           <option value="Pacific/Pohnpei">Pacific/Pohnpei</option>
                           <option value="Pacific/Port_Moresby">Pacific/Port_Moresby</option>
                           <option value="Pacific/Rarotonga">Pacific/Rarotonga</option>
                           <option value="Pacific/Saipan">Pacific/Saipan</option>
                           <option value="Pacific/Tahiti">Pacific/Tahiti</option>
                           <option value="Pacific/Tarawa">Pacific/Tarawa</option>
                           <option value="Pacific/Tongatapu">Pacific/Tongatapu</option>
                           <option value="Pacific/Wake">Pacific/Wake</option>
                           <option value="Pacific/Wallis">Pacific/Wallis</option>
                           <option value="US/Alaska">US/Alaska</option>
                           <option value="US/Arizona">US/Arizona</option>
                           <option value="US/Central">US/Central</option>
                           <option value="US/Eastern">US/Eastern</option>
                           <option value="US/Hawaii">US/Hawaii</option>
                           <option value="US/Mountain">US/Mountain</option>
                           <option value="US/Pacific">US/Pacific</option>
                           <option value="UTC">UTC</option>
                        </select>
                        <span class="select2 select2-container select2-container--mm" dir="ltr" data-select2-id="select2-data-9-97aj"><span class="selection"><span class="select2-selection select2-selection--single" role="combobox" aria-haspopup="true" aria-expanded="false" tabindex="0" aria-disabled="false" aria-labelledby="select2-id_timezone-container" aria-controls="select2-id_timezone-container"><span class="select2-selection__rendered" id="select2-id_timezone-container" role="textbox" aria-readonly="true" title="Select"><span class="select2-selection__placeholder">Select</span></span><span class="select2-selection__arrow" role="presentation"><b role="presentation"></b></span></span></span><span class="dropdown-wrapper" aria-hidden="true"></span></span>
                     </div>
                     <div class="form__field form__field--languages_spoken form__field--select is-required" data-select2-id="select2-data-278-euym">
                        <label for="id_languages_spoken">Languages spoken:</label>
                        <select name="languages_spoken" data-use-select2="" data-placeholder="Select" required="" id="id_languages_spoken" multiple="" aria-describedby="va8gv6-abide-error" data-select2-id="select2-data-id_languages_spoken" tabindex="-1" class="select2-hidden-accessible" aria-hidden="true">
                           <option value="ara" data-select2-id="select2-data-284-r1b4">Arabic</option>
                           
                           <option value="vie" data-select2-id="select2-data-303-yqp1">Vietnamese</option>
                        </select>
                        <span class="select2 select2-container select2-container--mm select2-container--below" dir="ltr" data-select2-id="select2-data-11-e1jv">
                           <span class="selection">
                              <span class="select2-selection select2-selection--multiple" role="combobox" aria-haspopup="true" aria-expanded="false" tabindex="-1" aria-disabled="false">
                                 <ul class="select2-selection__rendered" id="select2-id_languages_spoken-container">
                                    <li class="select2-selection__choice" title="Arabic" data-select2-id="select2-data-329-7mxp"><button type="button" class="select2-selection__choice__remove" tabindex="-1" title="Remove item" aria-label="Remove item" aria-describedby="select2-id_languages_spoken-container-choice-ike1-ara"><span aria-hidden="true">×</span></button><span class="select2-selection__choice__display" id="select2-id_languages_spoken-container-choice-ike1-ara">Arabic</span></li>
                                    <li class="select2-selection__choice" title="Bengali" data-select2-id="select2-data-330-gpg5"><button type="button" class="select2-selection__choice__remove" tabindex="-1" title="Remove item" aria-label="Remove item" aria-describedby="select2-id_languages_spoken-container-choice-ej6o-ben"><span aria-hidden="true">×</span></button><span class="select2-selection__choice__display" id="select2-id_languages_spoken-container-choice-ej6o-ben">Bengali</span></li>
                                    <li class="select2-selection__choice" title="Burmese" data-select2-id="select2-data-331-yirp"><button type="button" class="select2-selection__choice__remove" tabindex="-1" title="Remove item" aria-label="Remove item" aria-describedby="select2-id_languages_spoken-container-choice-8r5d-mya"><span aria-hidden="true">×</span></button><span class="select2-selection__choice__display" id="select2-id_languages_spoken-container-choice-8r5d-mya">Burmese</span></li>
                                    <li class="select2-selection__choice" title="Cantonese" data-select2-id="select2-data-332-u4ca"><button type="button" class="select2-selection__choice__remove" tabindex="-1" title="Remove item" aria-label="Remove item" aria-describedby="select2-id_languages_spoken-container-choice-1ykl-yue"><span aria-hidden="true">×</span></button><span class="select2-selection__choice__display" id="select2-id_languages_spoken-container-choice-1ykl-yue">Cantonese</span></li>
                                    <li class="select2-selection__choice" title="English" data-select2-id="select2-data-333-pq3j"><button type="button" class="select2-selection__choice__remove" tabindex="-1" title="Remove item" aria-label="Remove item" aria-describedby="select2-id_languages_spoken-container-choice-gtyd-eng"><span aria-hidden="true">×</span></button><span class="select2-selection__choice__display" id="select2-id_languages_spoken-container-choice-gtyd-eng">English</span></li>
                                    <li class="select2-selection__choice" title="French" data-select2-id="select2-data-334-8fyn"><button type="button" class="select2-selection__choice__remove" tabindex="-1" title="Remove item" aria-label="Remove item" aria-describedby="select2-id_languages_spoken-container-choice-5bdv-fra"><span aria-hidden="true">×</span></button><span class="select2-selection__choice__display" id="select2-id_languages_spoken-container-choice-5bdv-fra">French</span></li>
                                    <li class="select2-selection__choice" title="Russian" data-select2-id="select2-data-335-qugb"><button type="button" class="select2-selection__choice__remove" tabindex="-1" title="Remove item" aria-label="Remove item" aria-describedby="select2-id_languages_spoken-container-choice-suxg-rus"><span aria-hidden="true">×</span></button><span class="select2-selection__choice__display" id="select2-id_languages_spoken-container-choice-suxg-rus">Russian</span></li>
                                 </ul>
                                 <span class="select2-search select2-search--inline"><textarea class="select2-search__field" type="search" tabindex="0" autocorrect="off" autocapitalize="none" spellcheck="false" role="searchbox" aria-autocomplete="list" autocomplete="off" aria-label="Search" aria-describedby="select2-id_languages_spoken-container" placeholder=""></textarea></span>
                              </span>
                           </span>
                           <span class="dropdown-wrapper" aria-hidden="true"></span>
                        </span>
                        <div class="form-error" role="alert" id="va8gv6-abide-error">
                           This field is required
                        </div>
                     </div>
                     <div class="form__field form__field--country_of_residence form__field--select is-required">
                        <label for="id_country_of_residence">Country of residence:</label>
                        <select name="country_of_residence" data-use-select2="" data-placeholder="Select" required="" id="id_country_of_residence" aria-describedby="3nu2k0-abide-error" tabindex="-1" class="select2-hidden-accessible" aria-hidden="true" data-select2-id="select2-data-id_country_of_residence">
                           <option value="">---------</option>
                           
                           <option value="VN" selected="" data-select2-id="select2-data-264-4qwd">Vietnam</option>
            
                        </select>
                        <span class="select2 select2-container select2-container--mm" dir="ltr" data-select2-id="select2-data-263-elby"><span class="selection"><span class="select2-selection select2-selection--single" role="combobox" aria-haspopup="true" aria-expanded="false" tabindex="0" aria-disabled="false" aria-labelledby="select2-id_country_of_residence-container" aria-controls="select2-id_country_of_residence-container"><span class="select2-selection__rendered" id="select2-id_country_of_residence-container" role="textbox" aria-readonly="true" title="Vietnam">Vietnam</span><span class="select2-selection__arrow" role="presentation"><b role="presentation"></b></span></span></span><span class="dropdown-wrapper" aria-hidden="true"></span></span>
                        <div class="form-error" role="alert" id="3nu2k0-abide-error">
                           This field is required
                        </div>
                     </div>
                     <div class="form__field form__field--state form__field--text">
                        <label for="id_state">State/Province/Region:</label>
                        <input type="text" name="state" maxlength="255" id="id_state"/>
                     </div>
                     <div class="form__field form__field--city form__field--text">
                        <label for="id_city">City:</label>
                        <input type="text" name="city" maxlength="255" id="id_city"/>
                     </div>
                     <div class="form__field form__field--region_ref form__field--select">
                        <label for="id_region_ref">State/Province/Region:</label>
                        <select name="region_ref" data-use-select2="" data-placeholder="Select" id="id_region_ref" tabindex="-1" class="select2-hidden-accessible" aria-hidden="true" disabled="" data-select2-id="select2-data-id_region_ref">
                           <option value="" selected="" data-select2-id="select2-data-266-zv6e">---------</option>
                        </select>
                        <span class="select2 select2-container select2-container--mm select2-container--disabled" dir="ltr" data-select2-id="select2-data-265-2wpa"><span class="selection"><span class="select2-selection select2-selection--single" role="combobox" aria-haspopup="true" aria-expanded="false" tabindex="-1" aria-disabled="true" aria-labelledby="select2-id_region_ref-container" aria-controls="select2-id_region_ref-container"><span class="select2-selection__rendered" id="select2-id_region_ref-container" role="textbox" aria-readonly="true" title="Select"><span class="select2-selection__placeholder">Select</span></span><span class="select2-selection__arrow" role="presentation"><b role="presentation"></b></span></span></span><span class="dropdown-wrapper" aria-hidden="true"></span></span>
                     </div>
                     <div class="form__field form__field--city_ref form__field--select">
                        <label for="id_city_ref">City:</label>
                        <select name="city_ref" data-use-select2="" data-placeholder="Select" id="id_city_ref" tabindex="-1" class="select2-hidden-accessible" aria-hidden="true" disabled="" data-select2-id="select2-data-id_city_ref">
                           <option value="" selected="" data-select2-id="select2-data-268-lhd8">---------</option>
                        </select>
                        <span class="select2 select2-container select2-container--mm select2-container--disabled" dir="ltr" data-select2-id="select2-data-267-0hur"><span class="selection"><span class="select2-selection select2-selection--single" role="combobox" aria-haspopup="true" aria-expanded="false" tabindex="-1" aria-disabled="true" aria-labelledby="select2-id_city_ref-container" aria-controls="select2-id_city_ref-container"><span class="select2-selection__rendered" id="select2-id_city_ref-container" role="textbox" aria-readonly="true" title="Select"><span class="select2-selection__placeholder">Select</span></span><span class="select2-selection__arrow" role="presentation"><b role="presentation"></b></span></span></span><span class="dropdown-wrapper" aria-hidden="true"></span></span>
                     </div>
                     <div class="form__field form__field--phone_number form__field--tel is-required">
                        <label for="id_phone_number">Phone number:</label>
                        <div class="iti iti--allow-dropdown iti--separate-dial-code">
                           <div class="iti__flag-container">
                              <div class="iti__selected-flag" role="combobox" aria-controls="iti-0__country-listbox" aria-owns="iti-0__country-listbox" aria-expanded="false" tabindex="0" title="Vietnam (Việt Nam): +84" aria-activedescendant="iti-0__item-vn">
                                 <div class="iti__flag iti__vn"></div>
                                 <div class="iti__selected-dial-code">+84</div>
                                 <div class="iti__arrow"></div>
                              </div>
                              <ul class="iti__country-list iti__hide" id="iti-0__country-listbox" role="listbox" aria-label="List of countries">
                                 <li class="iti__country iti__preferred" tabindex="-1" id="iti-0__item-us-preferred" role="option" data-dial-code="1" data-country-code="us" aria-selected="false">
                                    <div class="iti__flag-box">
                                       <div class="iti__flag iti__us"></div>
                                    </div>
                                    <span class="iti__country-name">United States</span><span class="iti__dial-code">+1</span>
                                 </li>
                                 
                              </ul>
                           </div>
                           <input type="tel" name="phone_number_ui" value="+84356854215" maxlength="128" required="" id="id_phone_number" aria-describedby="ryc9tn-abide-error" autocomplete="off" data-intl-tel-input-id="0" data-validator="intl_phone" placeholder="91 234 56 78"/>
                           <input type="hidden" name="phone_number" />
                        </div>
                        <div class="form-error" role="alert" id="ryc9tn-abide-error">
                           This field is required
                        </div>
                     </div>
                     <div class="form__field form__field--contact_preferences form__field--select is-required">
                        <label for="id_contact_preferences">Contact preferences:</label>
                        <select name="contact_preferences" data-use-select2="" data-placeholder="Select" id="id_contact_preferences" aria-describedby="bcmjgw-abide-error" data-select2-id="select2-data-id_contact_preferences" tabindex="-1" class="select2-hidden-accessible" aria-hidden="true">
                           <option value="email" selected="" data-select2-id="select2-data-270-ukr3">Email</option>
                           <option value="sms">SMS/Text</option>
                           <option value="voice">Voice call</option>
                        </select>
                        <span class="select2 select2-container select2-container--mm" dir="ltr" data-select2-id="select2-data-269-k1n8"><span class="selection"><span class="select2-selection select2-selection--single" role="combobox" aria-haspopup="true" aria-expanded="false" tabindex="0" aria-disabled="false" aria-labelledby="select2-id_contact_preferences-container" aria-controls="select2-id_contact_preferences-container"><span class="select2-selection__rendered" id="select2-id_contact_preferences-container" role="textbox" aria-readonly="true" title="Email">Email</span><span class="select2-selection__arrow" role="presentation"><b role="presentation"></b></span></span></span><span class="dropdown-wrapper" aria-hidden="true"></span></span>
                        <div class="form-error" role="alert" id="bcmjgw-abide-error">
                           This field is required
                        </div>
                     </div>
                     <div class="form__field form__field--birth_year form__field--select is-required">
                        <label for="id_birth_year">Birth Year:</label>
                        <select name="birth_year" data-use-select2="" data-placeholder="Select" required="" id="id_birth_year" aria-describedby="20y5e5-abide-error" data-select2-id="select2-data-id_birth_year" tabindex="-1" class="select2-hidden-accessible" aria-hidden="true">
                           <option value="">---------</option>
                           <option value="2005">2005</option>
                           <option value="2004" selected="" data-select2-id="select2-data-272-ap3q">2004</option>
                           <option value="2003">2003</option>
                        
                        </select>
                        <span class="select2 select2-container select2-container--mm" dir="ltr" data-select2-id="select2-data-271-f2qa"><span class="selection"><span class="select2-selection select2-selection--single" role="combobox" aria-haspopup="true" aria-expanded="false" tabindex="0" aria-disabled="false" aria-labelledby="select2-id_birth_year-container" aria-controls="select2-id_birth_year-container"><span class="select2-selection__rendered" id="select2-id_birth_year-container" role="textbox" aria-readonly="true" title="2004">2004</span><span class="select2-selection__arrow" role="presentation"><b role="presentation"></b></span></span></span><span class="dropdown-wrapper" aria-hidden="true"></span></span>
                        <div class="help-text">
                           Will not be shown publicly
                        </div>
                        <div class="form-error" role="alert" id="20y5e5-abide-error">
                           This field is required
                        </div>
                     </div>
                     <div class="form__field form__field--gender form__field--select is-required">
                        <label for="id_gender">Gender:</label>
                        <select name="gender" data-use-select2="" data-placeholder="Select" required="" id="id_gender" aria-describedby="txwr9e-abide-error" data-select2-id="select2-data-id_gender" tabindex="-1" class="select2-hidden-accessible" aria-hidden="true">
                           <option value="">Select</option>
                           <option value="m" selected="" data-select2-id="select2-data-274-exag">Male</option>
                           <option value="f">Female</option>
                           <option value="x">Prefer to self-describe</option>
                           <option value="-">I prefer not to share</option>
                        </select>
                        <span class="select2 select2-container select2-container--mm" dir="ltr" data-select2-id="select2-data-273-3udt"><span class="selection"><span class="select2-selection select2-selection--single" role="combobox" aria-haspopup="true" aria-expanded="false" tabindex="0" aria-disabled="false" aria-labelledby="select2-id_gender-container" aria-controls="select2-id_gender-container"><span class="select2-selection__rendered" id="select2-id_gender-container" role="textbox" aria-readonly="true" title="Male">Male</span><span class="select2-selection__arrow" role="presentation"><b role="presentation"></b></span></span></span><span class="dropdown-wrapper" aria-hidden="true"></span></span>
                        <div class="form-error" role="alert" id="txwr9e-abide-error">
                           This field is required
                        </div>
                     </div>
                     <div class="form__field form__field--gender_self_described form__field--text">
                        <label for="id_gender_self_described">Gender self-described:</label>
                        <input type="text" name="gender_self_described" maxlength="20" id="id_gender_self_described"/>
                     </div>
                     <div class="form__field form__field--ethnicity form__field--select">
                        <label for="id_ethnicity">Ethnicity:</label>
                        <select name="ethnicity" data-use-select2="" data-placeholder="Select" id="id_ethnicity" data-select2-id="select2-data-id_ethnicity" tabindex="-1" class="select2-hidden-accessible" aria-hidden="true">
                           <option value="" selected="" data-select2-id="select2-data-276-gzep">---------</option>
                           <option value="African American or African Born">African American or African Born</option>
                           <option value="Asian">Asian</option>
                           <option value="Latino or Hispanic">Latino or Hispanic</option>
                           <option value="Middle Eastern or North African">Middle Eastern or North African</option>
                           <option value="Mixed Race">Mixed Race</option>
                           <option value="Native American or Alaska Native">Native American or Alaska Native</option>
                           <option value="Native Hawaiian or Other Pacific Islander">Native Hawaiian or Other Pacific Islander</option>
                           <option value="White or Caucasian">White or Caucasian</option>
                           <option value="I prefer not to share">I prefer not to share</option>
                        </select>
                        <span class="select2 select2-container select2-container--mm" dir="ltr" data-select2-id="select2-data-275-5u85"><span class="selection"><span class="select2-selection select2-selection--single" role="combobox" aria-haspopup="true" aria-expanded="false" tabindex="0" aria-disabled="false" aria-labelledby="select2-id_ethnicity-container" aria-controls="select2-id_ethnicity-container"><span class="select2-selection__rendered" id="select2-id_ethnicity-container" role="textbox" aria-readonly="true" title="Select"><span class="select2-selection__placeholder">Select</span></span><span class="select2-selection__arrow" role="presentation"><b role="presentation"></b></span></span></span><span class="dropdown-wrapper" aria-hidden="true"></span></span>
                     </div>
                     <div class="form__actions">
                        <button type="submit" class="button primary" id="save-account-info">
                        Save account info
                        </button>
                        <span id="id_uploading_msg" class="help-text">
                        Profile image uploading...
                        </span>
                     </div>
                  </form>
               </div>
            </main>

         </div>
   </main>
  )
};

export default Account_Infor;
