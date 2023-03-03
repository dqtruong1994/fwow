import React from "react";

const Profile_Entrepreneurs = () => {
  return (
   <main class="region--content" id="main-content">
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
      <main class="dashboard__content">
         <div class="profile-settings">
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
               <ul class="dropdown menu" data-dropdown-menu="2mj46e-dropdown-menu" role="menubar">
                  <li role="none" class="is-dropdown-submenu-parent opens-right">
                     <a href="#" class="text-alert" role="menuitem" aria-haspopup="true" aria-label="Entrepreneur profile">Entrepreneur profile</a>
                     <ul class="menu submenu is-dropdown-submenu first-sub vertical" data-submenu="" role="menubar">
                        <li class="is-submenu-item is-dropdown-submenu-item" role="none">
                           <a href="/profile/account-info" id="account-info-dropdown" role="menuitem">
                           Account info
                           </a>
                        </li>
                        <li class="active is-submenu-item is-dropdown-submenu-item" role="none">
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
                     <a href="/profile/account-info" aria-selected="">
                     Account info
                     </a>
                  </li>
                  <li class="tabs-title">
                     <a href="/profile/entrepreneur" aria-selected="true">
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
            <form data-abide="j9fulv-abide" method="post">
              
               <div class="form__field form__field--venture_stage form__field--radio is-required">
                  <fieldset>
                     <legend>Which of these stages describes your venture?</legend>
                     <ul id="id_venture_stage" class="radio-tiles radio-tiles--primary">
                        <li>
                           <input type="radio" name="venture_stage" value="idea" class="radio-tiles radio-tiles--primary" required="" id="id_venture_stage_0" checked=""/>
                           <label for="id_venture_stage_0" class="selected">
                              <h4 class="text-start">My venture is at the idea stage.</h4>
                              <p class="text-start">It does not yet have a working prototype or customers and is not operational.</p>
                           </label>
                        </li>
                        <li>
                           <input type="radio" name="venture_stage" value="operational" class="radio-tiles radio-tiles--primary" required="" id="id_venture_stage_1"/>
                           <label for="id_venture_stage_1">
                              <h4 class="text-start">My venture is operational, but does not yet have any earned revenue.</h4>
                              <p class="text-start">Earned revenue results from selling a product or service.</p>
                           </label>
                        </li>
                        <li>
                           <input type="radio" name="venture_stage" value="earning" class="radio-tiles radio-tiles--primary" required="" id="id_venture_stage_2"/>
                           <label for="id_venture_stage_2">
                              <h4 class="text-start">My venture has customers and is earning revenue but is not currently profitable.</h4>
                              <p class="text-start"> A venture is not profitable when its earned revenue is less than its profit.</p>
                           </label>
                        </li>
                        <li>
                           <input type="radio" name="venture_stage" value="profitable" class="radio-tiles radio-tiles--primary" required="" id="id_venture_stage_3"/>
                           <label for="id_venture_stage_3">
                              <h4 class="text-start">My venture is operating at scale and is profitable</h4>
                              <p class="text-start">Scale occurs when a venture is able to operate in volume discounts to clients or from suppliers. A venture is profitable when its earned revenue is greater than its expenses.</p>
                           </label>
                        </li>
                     </ul>
                  </fieldset>
                  <div class="form-error" id="o57jzw-abide-error" role="alert">
                     This field is required
                  </div>
               </div>
               <div class="form__field form__field--venture_type form__field--select is-required">
                  <label for="id_venture_type">What type of venture or idea for a venture do you have?</label>
                  <select name="venture_type" data-use-select2="" data-placeholder="Select" required="" id="id_venture_type" aria-describedby="d9e9jf-abide-error" data-select2-id="select2-data-id_venture_type" tabindex="-1" class="select2-hidden-accessible" aria-hidden="true">
                     <option value="">---------</option>
                     <option value="for-profit">For-profit</option>
                     <option value="non-profit" selected="" data-select2-id="select2-data-2-hv5c">Non-profit</option>
                     <option value="social_enterprise">Social Enterprise</option>
                     <option value="unsure">Unsure</option>
                  </select>
                  <span class="select2 select2-container select2-container--mm" dir="ltr" data-select2-id="select2-data-1-ppqw"><span class="selection"><span class="select2-selection select2-selection--single" role="combobox" aria-haspopup="true" aria-expanded="false" tabindex="0" aria-disabled="false" aria-labelledby="select2-id_venture_type-container" aria-controls="select2-id_venture_type-container"><span class="select2-selection__rendered" id="select2-id_venture_type-container" role="textbox" aria-readonly="true" title="Non-profit">Non-profit</span><span class="select2-selection__arrow" role="presentation"><b role="presentation"></b></span></span></span><span class="dropdown-wrapper" aria-hidden="true"></span></span>
                  <div class="form-error" role="alert" id="d9e9jf-abide-error">
                     This field is required
                  </div>
               </div>
               <div class="form__field form__field--venture_name form__field--text is-required">
                  <label for="id_venture_name">What is the name of your venture?</label>
                  <input type="text" name="venture_name" value="laobanh" maxlength="255" required="" id="id_venture_name" aria-describedby="t8x245-abide-error"/>
                  <div class="form-error" role="alert" id="t8x245-abide-error">
                     This field is required
                  </div>
               </div>
               <div class="form__field form__field--venture_launch_date form__field--text">
                  <label for="id_venture_launch_date">Venture launch date:</label>
                  <input type="text" name="venture_launch_date" data-name="date" data-date-format="yyyy-mm-dd" autocomplete="off" id="id_venture_launch_date"/>
               </div>
               <div class="form__field form__field--venture_industry form__field--select is-required">
                  <label for="id_venture_industry">What is the industry that best describes your venture?</label>
                  <select name="venture_industry" data-use-select2="" data-placeholder="Select" required="" id="id_venture_industry" aria-describedby="hzw9vy-abide-error" data-select2-id="select2-data-id_venture_industry" tabindex="-1" class="select2-hidden-accessible" aria-hidden="true">
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
              
                  </select>
                  <span class="select2 select2-container select2-container--mm" dir="ltr" data-select2-id="select2-data-3-7a1j">
                     <span class="selection">
                        <span class="select2-selection select2-selection--single" role="combobox" aria-haspopup="true" aria-expanded="false" tabindex="0" aria-disabled="false" aria-labelledby="select2-id_venture_industry-container" aria-controls="select2-id_venture_industry-container">
                           <span class="select2-selection__rendered" id="select2-id_venture_industry-container" role="textbox" aria-readonly="true" title="Childcare">Childcare</span><span class="select2-selection__arrow" role="presentation"><b role="presentation"></b></span></span></span><span class="dropdown-wrapper" aria-hidden="true"></span></span>
                  <div class="form-error" role="alert" id="hzw9vy-abide-error">
                     This field is required
                  </div>
               </div>
               <div class="form__field form__field--venture_description form__field-- is-required">
                  <label for="id_venture_description">Write a brief description of your venture for mentors to see.</label>
                  <textarea name="venture_description" cols="40" rows="5" required="" id="id_venture_description" aria-describedby="lelc7h-abide-error">123123</textarea>
                  <div class="form-error" role="alert" id="lelc7h-abide-error">
                     This field is required
                  </div>
               </div>
               <div class="form__field form__field--venture_current_challenges form__field-- is-required">
                  <label for="id_venture_current_challenges">My current challenges.</label>
                  <textarea name="venture_current_challenges" cols="40" rows="5" required="" id="id_venture_current_challenges" aria-describedby="qe18n6-abide-error">123</textarea>
                  <div class="form-error" role="alert" id="qe18n6-abide-error">
                     This field is required
                  </div>
               </div>
               <div class="form__field form__field--venture_actions_taken form__field-- is-required">
                  <label for="id_venture_actions_taken">What actions I've taken so far.</label>
                  <textarea name="venture_actions_taken" cols="40" rows="5" required="" id="id_venture_actions_taken" aria-describedby="q5xdua-abide-error">123</textarea>
                  <div class="form-error" role="alert" id="q5xdua-abide-error">
                     This field is required
                  </div>
               </div>
               <div class="form__field form__field--venture_motivations_for_mentorship form__field-- is-required">
                  <label for="id_venture_motivations_for_mentorship">My motivations to work with a mentor:</label>
                  <textarea name="venture_motivations_for_mentorship" cols="40" rows="5" required="" id="id_venture_motivations_for_mentorship" aria-describedby="6ozlz5-abide-error">123123</textarea>
                  <div class="form-error" role="alert" id="6ozlz5-abide-error">
                     This field is required
                  </div>
               </div>
               <div class="form__field form__field--venture_future_goals form__field-- is-required">
                  <label for="id_venture_future_goals">My future goals.</label>
                  <textarea name="venture_future_goals" cols="40" rows="5" required="" id="id_venture_future_goals" aria-describedby="e10fy7-abide-error">123</textarea>
                  <div class="form-error" role="alert" id="e10fy7-abide-error">
                     This field is required
                  </div>
               </div>
               <div class="form__field form__field--venture_expertise form__field--select is-required">
                  <label for="id_venture_expertise">Choose 3 areas of expertise that would be most helpful to your venture right now.</label>
                  <select name="venture_expertise" data-use-select2="" data-placeholder="Select" required="" id="id_venture_expertise" multiple="" aria-describedby="2ylzh3-abide-error" data-select2-id="select2-data-id_venture_expertise" tabindex="-1" class="select2-hidden-accessible" aria-hidden="true">
                     <optgroup label="Accounting and Finance">
                        <option value="Accounting" selected="" data-select2-id="select2-data-6-af34">Accounting</option>
                        <option value="Audits">Audits</option>
                        <option value="Bookkeeping">Bookkeeping</option>
                        <option value="Budgeting">Budgeting</option>
                        <option value="Cash Flow">Cash Flow</option>
                        <option value="Financial Planning">Financial Planning</option>
                        <option value="Loans and Financing">Loans and Financing</option>
                        <option value="Other Accounting and Finance">Other Accounting and Finance</option>
                        <option value="Taxes">Taxes</option>
                     </optgroup>
                    
                  </select>
                  <span class="select2 select2-container select2-container--mm" dir="ltr" data-select2-id="select2-data-5-mj81">
                     <span class="selection">
                        <span class="select2-selection select2-selection--multiple" aria-haspopup="true" aria-expanded="false" tabindex="-1" aria-disabled="false">
                           <ul class="select2-selection__rendered" id="select2-id_venture_expertise-container">
                              <li class="select2-selection__choice" title="Accounting" data-select2-id="select2-data-8-4910"><button type="button" class="select2-selection__choice__remove" tabindex="-1" title="Remove item" aria-label="Remove item" aria-describedby="select2-id_venture_expertise-container-choice-nh2q-Accounting"><span aria-hidden="true">×</span></button><span class="select2-selection__choice__display" id="select2-id_venture_expertise-container-choice-nh2q-Accounting">Accounting</span></li>
                              <li class="select2-selection__choice" title="Employee Training" data-select2-id="select2-data-9-e8rr"><button type="button" class="select2-selection__choice__remove" tabindex="-1" title="Remove item" aria-label="Remove item" aria-describedby="select2-id_venture_expertise-container-choice-h4ji-Employee Training"><span aria-hidden="true">×</span></button><span class="select2-selection__choice__display" id="select2-id_venture_expertise-container-choice-h4ji-Employee Training">Employee Training</span></li>
                           </ul>
                           <span class="select2-search select2-search--inline"><textarea class="select2-search__field" type="search" tabindex="0" autocorrect="off" autocapitalize="none" spellcheck="false" role="searchbox" aria-autocomplete="list" autocomplete="off" aria-label="Search" aria-describedby="select2-id_venture_expertise-container" placeholder=""></textarea></span>
                        </span>
                     </span>
                     <span class="dropdown-wrapper" aria-hidden="true"></span>
                  </span>
                  <div class="form-error" role="alert" id="2ylzh3-abide-error">
                     This field is required
                  </div>
               </div>
               <div class="form__field form__field--venture_countries form__field--select is-required">
                  <label for="id_venture_countries">Where does your venture operate?</label>
                  <select name="venture_countries" data-use-select2="" data-placeholder="Select" required="" id="id_venture_countries" multiple="" aria-describedby="qam0he-abide-error" data-select2-id="select2-data-id_venture_countries" tabindex="-1" class="select2-hidden-accessible" aria-hidden="true">
                     <option value="AF">Afghanistan</option>
                    
                     <option value="ZW">Zimbabwe</option>
                  </select>
                  <span class="select2 select2-container select2-container--mm" dir="ltr" data-select2-id="select2-data-10-z0a5">
                     <span class="selection">
                        <span class="select2-selection select2-selection--multiple" role="combobox" aria-haspopup="true" aria-expanded="false" tabindex="-1" aria-disabled="false">
                           <ul class="select2-selection__rendered" id="select2-id_venture_countries-container">
                              <li class="select2-selection__choice" title="Åland Islands" data-select2-id="select2-data-12-m3s9"><button type="button" class="select2-selection__choice__remove" tabindex="-1" title="Remove item" aria-label="Remove item" aria-describedby="select2-id_venture_countries-container-choice-0dyd-AX"><span aria-hidden="true">×</span></button><span class="select2-selection__choice__display" id="select2-id_venture_countries-container-choice-0dyd-AX">Åland Islands</span></li>
                           </ul>
                           <span class="select2-search select2-search--inline"><textarea class="select2-search__field" type="search" tabindex="0" autocorrect="off" autocapitalize="none" spellcheck="false" role="searchbox" aria-autocomplete="list" autocomplete="off" aria-label="Search" aria-describedby="select2-id_venture_countries-container" placeholder=""></textarea></span>
                        </span>
                     </span>
                     <span class="dropdown-wrapper" aria-hidden="true"></span>
                  </span>
                  <div class="form-error" role="alert" id="qam0he-abide-error">
                     This field is required
                  </div>
               </div>
               <fieldset class="form__websites" data-name="website-fieldset">
                  <legend>Websites</legend>
                  <input type="hidden" name="form-TOTAL_FORMS" value="1" id="id_form-TOTAL_FORMS"/>
                     <input type="hidden" name="form-INITIAL_FORMS" value="1" id="id_form-INITIAL_FORMS"/>
                        <input type="hidden" name="form-MIN_NUM_FORMS" value="1" id="id_form-MIN_NUM_FORMS"/>
                  <input type="hidden" name="form-MAX_NUM_FORMS" value="1000" id="id_form-MAX_NUM_FORMS"/>
                  <div class="website__list" data-name="site-form-container">
                     <div class="websites__website" data-name="site-entry">
                        <input type="hidden" name="form-0-profile" value="1520776" id="id_form-0-profile"/>
                        <input type="hidden" name="form-0-id" value="79348" id="id_form-0-id"/>
                        <div class="form__field form__field--form-0-url form__field--url">
                           <label for="id_form-0-url">URL:</label>
                           <input type="url" name="form-0-url" maxlength="255" id="id_form-0-url"/>
                        </div>
                        <div class="form__field form__field--form-0-website_type form__field--select">
                           <label for="id_form-0-website_type">Website type:</label>
                           <select name="form-0-website_type" id="id_form-0-website_type">
                              <option value="">---------</option>
                              <option value="venture">Venture's active website</option>
                              <option value="linkedin" selected="">Linkedin</option>
                              <option value="facebook">Facebook</option>
                              <option value="twitter">Twitter</option>
                              <option value="other">Other</option>
                           </select>
                        </div>
                        <div class="form__field form__field--form-0-DELETE form__field--checkbox">
                           <input type="checkbox" name="form-0-DELETE" id="id_form-0-DELETE"/>
                           <label for="id_form-0-DELETE">Delete:</label>
                        </div>
                        <div class="form__field website__delete" data-name="site-delete">
                           <button data-name="site-delete-button" type="button" class="button tiny clear alert"><i class="fas fa-trash" aria-hidden="true"></i>&nbsp;Remove website</button>
                        </div>
                     </div>
                  </div>
                  <div class="website__create" data-name="site-create">
                     <button data-name="site-create-button" type="button" class="button tiny clear success"><i class="fas fa-plus" aria-hidden="true"></i>&nbsp;Add website</button>
                  </div>
               </fieldset>
               <hr/>
               <div class="form__actions">
                  <button type="submit" class="button primary">Save entrepreneur profile</button>
               </div>
            </form>
         </div>
      </main>
   </div>
</main>
  )
};

export default Profile_Entrepreneurs;
