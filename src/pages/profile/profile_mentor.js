import React from "react";

const profile_mentor = () => {
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
               <ul class="dropdown menu" data-dropdown-menu="ngkdap-dropdown-menu" role="menubar">
                  <li role="none" class="is-dropdown-submenu-parent opens-right">
                     <a href="#" class="text-alert" role="menuitem" aria-haspopup="true" aria-label="Mentor profile">Mentor profile</a>
                     <ul class="menu submenu is-dropdown-submenu first-sub vertical" data-submenu="" role="menubar">
                        <li class="is-submenu-item is-dropdown-submenu-item" role="none">
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
                        <li class="active is-submenu-item is-dropdown-submenu-item" role="none">
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
                     <a href="/profile/entrepreneur" aria-selected="">
                     Entrepreneur profile
                     </a>
                  </li>
                  <li class="tabs-title">
                     <a href="/profile/entrepreneur/self-assessment" aria-selected="">Entrepreneur self-assessment</a>
                  </li>
                  <li class="tabs-title">
                     <a href="/profile/mentor" aria-selected="true">Mentor profile</a>
                  </li>
                  <li class="tabs-title">
                     <a href="/profile/contact-settings" aria-selected="">Contact settings</a>
                  </li>
               </ul>
            </nav>
            <p class="help-text form__instructions">
               Required fields are marked with an <span class="error">*</span>
            </p>
            <form data-abide="sleeik-abide" method="post" action="/profile/mentor">
               <input type="hidden" name="csrfmiddlewaretoken" value="Dt2qOYeIvgvifvE0e9MCLzudKqsINni5bjTu7qnrEJl1gquUhNMW10nX09TWCzRZ" aria-describedby="z5utbf-abide-error"/>
               <div class="form__field form__field--mentor_industry form__field--select is-required">
                  <label for="id_mentor_industry">What is your primary industry:</label>
                  <select name="mentor_industry" data-use-select2="" data-placeholder="Select" required="" id="id_mentor_industry" aria-describedby="z5utbf-abide-error" data-select2-id="select2-data-id_mentor_industry" tabindex="-1" class="select2-hidden-accessible" aria-hidden="true">
                     <option value="" selected="" data-select2-id="select2-data-2-hhbr">Select</option>
                     <option value="Accounting/Tax Services">Accounting/Tax Services</option>
                     <option value="Adult/Elder/Home Health Care">Adult/Elder/Home Health Care</option>
                     <option value="Agriculture/Farming/Ranching">Agriculture/Farming/Ranching</option>
                     <option value="Animals/Pets">Animals/Pets</option>
                  
                  </select>
                  <span class="select2 select2-container select2-container--mm" dir="ltr" data-select2-id="select2-data-1-pac7"><span class="selection"><span class="select2-selection select2-selection--single" role="combobox" aria-haspopup="true" aria-expanded="false" tabindex="0" aria-disabled="false" aria-labelledby="select2-id_mentor_industry-container" aria-controls="select2-id_mentor_industry-container"><span class="select2-selection__rendered" id="select2-id_mentor_industry-container" role="textbox" aria-readonly="true" title="Select"><span class="select2-selection__placeholder">Select</span></span><span class="select2-selection__arrow" role="presentation"><b role="presentation"></b></span></span></span><span class="dropdown-wrapper" aria-hidden="true"></span></span>
                  <div class="form-error" id="z5utbf-abide-error" role="alert">
                     This field is required
                  </div>
               </div>
               <div class="form__field form__field--professional_background form__field-- is-required">
                  <label for="id_professional_background">Describe your professional background:</label>
                  <textarea name="professional_background" cols="40" rows="5" required="" id="id_professional_background" aria-describedby="gwp8zy-abide-error"></textarea>
                  <div class="form-error" role="alert" id="gwp8zy-abide-error">
                     This field is required
                  </div>
               </div>
               <div class="form__field form__field--help_given form__field-- is-required">
                  <label for="id_help_given">How would you like to help entrepreneurs?</label>
                  <textarea name="help_given" cols="40" rows="5" required="" id="id_help_given" aria-describedby="dvbyzi-abide-error"></textarea>
                  <div class="form-error" role="alert" id="dvbyzi-abide-error">
                     This field is required
                  </div>
               </div>
               <div class="form__field form__field--expectations form__field-- is-required">
                  <label for="id_expectations">What are your expectations for a successful mentoring relationship?</label>
                  <textarea name="expectations" cols="40" rows="5" required="" id="id_expectations" aria-describedby="1qu4ev-abide-error"></textarea>
                  <div class="form-error" role="alert" id="1qu4ev-abide-error">
                     This field is required
                  </div>
               </div>
               <div class="form__field form__field--before_we_start form__field-- is-required">
                  <label for="id_before_we_start">What should an entrepreneur do to prepare before you begin mentoring them?</label>
                  <textarea name="before_we_start" cols="40" rows="5" required="" id="id_before_we_start" aria-describedby="mrsflk-abide-error"></textarea>
                  <div class="form-error" role="alert" id="mrsflk-abide-error">
                     This field is required
                  </div>
               </div>
               <div class="form__field form__field--years_management_experience form__field--number is-required">
                  <label for="id_years_management_experience">How many years of business management experience do you have? We recommend two years or more.</label>
                  <input type="number" name="years_management_experience" min="0" required="" id="id_years_management_experience" aria-describedby="jyxz4a-abide-error"/>
                  <div class="form-error" role="alert" id="jyxz4a-abide-error">
                     This field is required
                  </div>
               </div>
               <div class="form__field form__field--years_ownership_experience form__field--number is-required">
                  <label for="id_years_ownership_experience">How many years of ownership experience do you have?</label>
                  <input type="number" name="years_ownership_experience" min="0" required="" id="id_years_ownership_experience" aria-describedby="xzci9k-abide-error"/>
                  <div class="form-error" role="alert" id="xzci9k-abide-error">
                     This field is required
                  </div>
               </div>
               <div class="form__field form__field--company form__field--text">
                  <label for="id_company">Your company:</label>
                  <input type="text" name="company" maxlength="255" id="id_company"/>
               </div>
               <div class="form__field form__field--company_job form__field--text">
                  <label for="id_company_job">Your role at this company:</label>
                  <input type="text" name="company_job" maxlength="255" id="id_company_job"/>
               </div>
               <div class="form__field form__field--mentor_website_url form__field--url">
                  <label for="id_mentor_website_url">Website:</label>
                  <input type="url" name="mentor_website_url" maxlength="500" id="id_mentor_website_url"/>
               </div>
               <div class="form__field form__field--mentor_expertise form__field--select is-required">
                  <label for="id_mentor_expertise">Which areas of expertise would you like to share as a mentor?</label>
                  <select name="mentor_expertise" data-use-select2="" data-placeholder="Select" required="" id="id_mentor_expertise" multiple="" aria-describedby="684ixn-abide-error" data-select2-id="select2-data-id_mentor_expertise" tabindex="-1" class="select2-hidden-accessible" aria-hidden="true">
                     <optgroup label="Accounting and Finance">
                        <option value="Accounting">Accounting</option>
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
                  <span class="select2 select2-container select2-container--mm" dir="ltr" data-select2-id="select2-data-3-e3x5">
                     <span class="selection">
                        <span class="select2-selection select2-selection--multiple" role="combobox" aria-haspopup="true" aria-expanded="false" tabindex="-1" aria-disabled="false">
                           <ul class="select2-selection__rendered" id="select2-id_mentor_expertise-container"></ul>
                           <span class="select2-search select2-search--inline"><textarea class="select2-search__field" type="search" tabindex="0" autocorrect="off" autocapitalize="none" spellcheck="false" role="searchbox" aria-autocomplete="list" autocomplete="off" aria-label="Search" aria-describedby="select2-id_mentor_expertise-container" placeholder="Select"></textarea></span>
                        </span>
                     </span>
                     <span class="dropdown-wrapper" aria-hidden="true"></span>
                  </span>
                  <div class="form-error" role="alert" id="684ixn-abide-error">
                     This field is required
                  </div>
               </div>
               <div class="form__field form__field--mentor_countries form__field--select is-required">
                  <label for="id_mentor_countries">In which countries do you have professional business experience?</label>
                  <select name="mentor_countries" data-use-select2="" data-placeholder="Select" required="" id="id_mentor_countries" multiple="" aria-describedby="m0mavv-abide-error" data-select2-id="select2-data-id_mentor_countries" tabindex="-1" class="select2-hidden-accessible" aria-hidden="true">
                     <option value="AF">Afghanistan</option>
                  </select>
                  <span class="select2 select2-container select2-container--mm" dir="ltr" data-select2-id="select2-data-4-pafa">
                     <span class="selection">
                        <span class="select2-selection select2-selection--multiple" role="combobox" aria-haspopup="true" aria-expanded="false" tabindex="-1" aria-disabled="false">
                           <ul class="select2-selection__rendered" id="select2-id_mentor_countries-container"></ul>
                           <span class="select2-search select2-search--inline"><textarea class="select2-search__field" type="search" tabindex="0" autocorrect="off" autocapitalize="none" spellcheck="false" role="searchbox" aria-autocomplete="list" autocomplete="off" aria-label="Search" aria-describedby="select2-id_mentor_countries-container" placeholder="Select"></textarea></span>
                        </span>
                     </span>
                     <span class="dropdown-wrapper" aria-hidden="true"></span>
                  </span>
                  <div class="form-error" role="alert" id="m0mavv-abide-error">
                     This field is required
                  </div>
               </div>
               <div class="form__actions">
                  <button type="submit" class="button primary">Save mentor profile</button>
               </div>
            </form>
         </div>
      </main>
   </div>
</main>
  )
};

export default profile_mentor;
