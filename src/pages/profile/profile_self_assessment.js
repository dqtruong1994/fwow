import React from "react";

const SelfAssessment = () => {
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
                <ul class="dropdown menu" data-dropdown-menu="04j8pm-dropdown-menu" role="menubar">
                   <li role="none" class="is-dropdown-submenu-parent opens-right">
                      <a href="#" class="text-alert" role="menuitem" aria-haspopup="true" aria-label="Entrepreneur self-assessment">Entrepreneur self-assessment</a>
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
                         <li class="active is-submenu-item is-dropdown-submenu-item" role="none">
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
                      <a href="/profile/entrepreneur" aria-selected="">
                      Entrepreneur profile
                      </a>
                   </li>
                   <li class="tabs-title">
                      <a href="/profile/entrepreneur/self-assessment" aria-selected="true">Entrepreneur self-assessment</a>
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
             <div>
                <h5>The Entrepreneur self-assessment helps mentors understand your needs at a glance.</h5>
                Answer the questions below to display this information on your profile.
                <hr/>
             </div>
             <form data-abide="0ccswm-abide" method="post" class="form" enctype="multipart/form-data">
                <div class="self-assessment__steps">
                   <div>
                      <h3>Set up and Planning</h3>
                      <section class="likert-scale">
                         <div class="form__field form__field--startup_activities form__field--checkbox">
                            <label>What types of start up activities have you performed?</label>
                            <ul id="id_startup_activities">
                               <li><label for="id_startup_activities_0"><input type="checkbox" name="startup_activities" value="BUSINESS_PLAN" id="id_startup_activities_0" checked=""/>
                                  Created a business plan</label>
                               </li>
                               <li><label for="id_startup_activities_1"><input type="checkbox" name="startup_activities" value="COMPETITIVE_ANALYSIS" id="id_startup_activities_1"/>
                                  Performed a competitive analysis</label>
                               </li>
                               <li><label for="id_startup_activities_2"><input type="checkbox" name="startup_activities" value="ASSESSED_MARKET" id="id_startup_activities_2"/>
                                  Assessed the value of the market</label>
                               </li>
                               <li><label for="id_startup_activities_3"><input type="checkbox" name="startup_activities" value="INTERVIEWED_CUSTOMERS" id="id_startup_activities_3"/>
                                  Interviewed potential customers</label>
                               </li>
                               <li><label for="id_startup_activities_4"><input type="checkbox" name="startup_activities" value="CREATED_PROTOTYPE" id="id_startup_activities_4"/>
                                  Created a prototype</label>
                               </li>
                               <li><label for="id_startup_activities_5"><input type="checkbox" name="startup_activities" value="ATTEMPTED_SALE" id="id_startup_activities_5"/>
                                  Tried to sell to customers</label>
                               </li>
                            </ul>
                         </div>
                         <div class="form__field form__field--manage_time_effectively form__field--radio">
                            <fieldset>
                               <legend>How much confidence do you have in your ability to manage your time effectively?</legend>
                               <ul id="id_manage_time_effectively" class="radio-tiles radio-tiles--secondary">
                                  <li><input type="radio" name="manage_time_effectively" value="NOT_AT_ALL_CONFIDENT" class="radio-tiles radio-tiles--secondary" id="id_manage_time_effectively_0" checked=""/>
                                     <label for="id_manage_time_effectively_0" class="selected"><i class="far fa-sad-tear" aria-hidden="true"></i>Not at all confident</label>
                                  </li>
                                  <li><input type="radio" name="manage_time_effectively" value="NOT_CONFIDENT" class="radio-tiles radio-tiles--secondary" id="id_manage_time_effectively_1"/>
                                     <label for="id_manage_time_effectively_1"><i class="far fa-frown" aria-hidden="true"></i>Not confident</label>
                                  </li>
                                  <li><input type="radio" name="manage_time_effectively" value="NEUTRAL" class="radio-tiles radio-tiles--secondary" id="id_manage_time_effectively_2"/>
                                     <label for="id_manage_time_effectively_2"><i class="far fa-meh" aria-hidden="true"></i>Neutral</label>
                                  </li>
                                  <li><input type="radio" name="manage_time_effectively" value="CONFIDENT" class="radio-tiles radio-tiles--secondary" id="id_manage_time_effectively_3"/>
                                     <label for="id_manage_time_effectively_3"><i class="far fa-smile" aria-hidden="true"></i>Confident</label>
                                  </li>
                                  <li><input type="radio" name="manage_time_effectively" value="VERY_CONFIDENT" class="radio-tiles radio-tiles--secondary" id="id_manage_time_effectively_4"/>
                                     <label for="id_manage_time_effectively_4"><i class="far fa-grin-beam" aria-hidden="true"></i>Very Confident</label>
                                  </li>
                               </ul>
                            </fieldset>
                         </div>
                         <div class="form__field form__field--planning form__field--radio">
                            <fieldset>
                               <legend>How much confidence do you have in your ability to plan and set goals for your venture?</legend>
                               <ul id="id_planning" class="radio-tiles radio-tiles--secondary">
                                  <li><input type="radio" name="planning" value="NOT_AT_ALL_CONFIDENT" class="radio-tiles radio-tiles--secondary" id="id_planning_0" checked=""/>
                                     <label for="id_planning_0" class="selected"><i class="far fa-sad-tear" aria-hidden="true"></i>Not at all confident</label>
                                  </li>
                                  <li><input type="radio" name="planning" value="NOT_CONFIDENT" class="radio-tiles radio-tiles--secondary" id="id_planning_1"/>
                                     <label for="id_planning_1"><i class="far fa-frown" aria-hidden="true"></i>Not confident</label>
                                  </li>
                                  <li><input type="radio" name="planning" value="NEUTRAL" class="radio-tiles radio-tiles--secondary" id="id_planning_2"/>
                                     <label for="id_planning_2"><i class="far fa-meh" aria-hidden="true"></i>Neutral</label>
                                  </li>
                                  <li><input type="radio" name="planning" value="CONFIDENT" class="radio-tiles radio-tiles--secondary" id="id_planning_3"/>
                                     <label for="id_planning_3"><i class="far fa-smile" aria-hidden="true"></i>Confident</label>
                                  </li>
                                  <li><input type="radio" name="planning" value="VERY_CONFIDENT" class="radio-tiles radio-tiles--secondary" id="id_planning_4"/>
                                     <label for="id_planning_4"><i class="far fa-grin-beam" aria-hidden="true"></i>Very Confident</label>
                                  </li>
                               </ul>
                            </fieldset>
                         </div>
                      </section>
                      <hr/>
                   </div>
                   <div>
                      <h3>Market Research</h3>
                      <section class="likert-scale">
                         <div class="form__field form__field--industry_knowledge form__field--radio">
                            <fieldset>
                               <legend>How much confidence do you have in your knowledge in your chosen field or industry?</legend>
                               <ul id="id_industry_knowledge" class="radio-tiles radio-tiles--alert">
                                  <li><input type="radio" name="industry_knowledge" value="NOT_AT_ALL_CONFIDENT" class="radio-tiles radio-tiles--alert" id="id_industry_knowledge_0"/>
                                     <label for="id_industry_knowledge_0"><i class="far fa-sad-tear" aria-hidden="true"></i>Not at all confident</label>
                                  </li>
                                  <li><input type="radio" name="industry_knowledge" value="NOT_CONFIDENT" class="radio-tiles radio-tiles--alert" id="id_industry_knowledge_1" checked=""/>
                                     <label for="id_industry_knowledge_1" class="selected"><i class="far fa-frown" aria-hidden="true"></i>Not confident</label>
                                  </li>
                                  <li><input type="radio" name="industry_knowledge" value="NEUTRAL" class="radio-tiles radio-tiles--alert" id="id_industry_knowledge_2"/>
                                     <label for="id_industry_knowledge_2"><i class="far fa-meh" aria-hidden="true"></i>Neutral</label>
                                  </li>
                                  <li><input type="radio" name="industry_knowledge" value="CONFIDENT" class="radio-tiles radio-tiles--alert" id="id_industry_knowledge_3"/>
                                     <label for="id_industry_knowledge_3"><i class="far fa-smile" aria-hidden="true"></i>Confident</label>
                                  </li>
                                  <li><input type="radio" name="industry_knowledge" value="VERY_CONFIDENT" class="radio-tiles radio-tiles--alert" id="id_industry_knowledge_4"/>
                                     <label for="id_industry_knowledge_4"><i class="far fa-grin-beam" aria-hidden="true"></i>Very Confident</label>
                                  </li>
                               </ul>
                            </fieldset>
                         </div>
                         <div class="form__field form__field--customer_identification form__field--radio">
                            <fieldset>
                               <legend>How much confidence do you have in your ability to identify your target customer?</legend>
                               <ul id="id_customer_identification" class="radio-tiles radio-tiles--alert">
                                  <li><input type="radio" name="customer_identification" value="NOT_AT_ALL_CONFIDENT" class="radio-tiles radio-tiles--alert" id="id_customer_identification_0"/>
                                     <label for="id_customer_identification_0"><i class="far fa-sad-tear" aria-hidden="true"></i>Not at all confident</label>
                                  </li>
                                  <li><input type="radio" name="customer_identification" value="NOT_CONFIDENT" class="radio-tiles radio-tiles--alert" id="id_customer_identification_1" checked=""/>
                                     <label for="id_customer_identification_1" class="selected"><i class="far fa-frown" aria-hidden="true"></i>Not confident</label>
                                  </li>
                                  <li><input type="radio" name="customer_identification" value="NEUTRAL" class="radio-tiles radio-tiles--alert" id="id_customer_identification_2"/>
                                     <label for="id_customer_identification_2"><i class="far fa-meh" aria-hidden="true"></i>Neutral</label>
                                  </li>
                                  <li><input type="radio" name="customer_identification" value="CONFIDENT" class="radio-tiles radio-tiles--alert" id="id_customer_identification_3"/>
                                     <label for="id_customer_identification_3"><i class="far fa-smile" aria-hidden="true"></i>Confident</label>
                                  </li>
                                  <li><input type="radio" name="customer_identification" value="VERY_CONFIDENT" class="radio-tiles radio-tiles--alert" id="id_customer_identification_4"/>
                                     <label for="id_customer_identification_4"><i class="far fa-grin-beam" aria-hidden="true"></i>Very Confident</label>
                                  </li>
                               </ul>
                            </fieldset>
                         </div>
                         <div class="form__field form__field--demand_estimation form__field--radio">
                            <fieldset>
                               <legend>How much confidence do you have in your ability to estimate customer demand for a product or service?</legend>
                               <ul id="id_demand_estimation" class="radio-tiles radio-tiles--alert">
                                  <li><input type="radio" name="demand_estimation" value="NOT_AT_ALL_CONFIDENT" class="radio-tiles radio-tiles--alert" id="id_demand_estimation_0"/>
                                     <label for="id_demand_estimation_0"><i class="far fa-sad-tear" aria-hidden="true"></i>Not at all confident</label>
                                  </li>
                                  <li><input type="radio" name="demand_estimation" value="NOT_CONFIDENT" class="radio-tiles radio-tiles--alert" id="id_demand_estimation_1" checked=""/>
                                     <label for="id_demand_estimation_1" class="selected"><i class="far fa-frown" aria-hidden="true"></i>Not confident</label>
                                  </li>
                                  <li><input type="radio" name="demand_estimation" value="NEUTRAL" class="radio-tiles radio-tiles--alert" id="id_demand_estimation_2"/>
                                     <label for="id_demand_estimation_2"><i class="far fa-meh" aria-hidden="true"></i>Neutral</label>
                                  </li>
                                  <li><input type="radio" name="demand_estimation" value="CONFIDENT" class="radio-tiles radio-tiles--alert" id="id_demand_estimation_3"/>
                                     <label for="id_demand_estimation_3"><i class="far fa-smile" aria-hidden="true"></i>Confident</label>
                                  </li>
                                  <li><input type="radio" name="demand_estimation" value="VERY_CONFIDENT" class="radio-tiles radio-tiles--alert" id="id_demand_estimation_4"/>
                                     <label for="id_demand_estimation_4"><i class="far fa-grin-beam" aria-hidden="true"></i>Very Confident</label>
                                  </li>
                               </ul>
                            </fieldset>
                         </div>
                         <div class="form__field form__field--pricing form__field--radio">
                            <fieldset>
                               <legend>How much confidence do you have in your ability to determine a competitive price for a new product or service?</legend>
                               <ul id="id_pricing" class="radio-tiles radio-tiles--alert">
                                  <li><input type="radio" name="pricing" value="NOT_AT_ALL_CONFIDENT" class="radio-tiles radio-tiles--alert" id="id_pricing_0"/>
                                     <label for="id_pricing_0"><i class="far fa-sad-tear" aria-hidden="true"></i>Not at all confident</label>
                                  </li>
                                  <li><input type="radio" name="pricing" value="NOT_CONFIDENT" class="radio-tiles radio-tiles--alert" id="id_pricing_1" checked=""/>
                                     <label for="id_pricing_1" class="selected"><i class="far fa-frown" aria-hidden="true"></i>Not confident</label>
                                  </li>
                                  <li><input type="radio" name="pricing" value="NEUTRAL" class="radio-tiles radio-tiles--alert" id="id_pricing_2"/>
                                     <label for="id_pricing_2"><i class="far fa-meh" aria-hidden="true"></i>Neutral</label>
                                  </li>
                                  <li><input type="radio" name="pricing" value="CONFIDENT" class="radio-tiles radio-tiles--alert" id="id_pricing_3"/>
                                     <label for="id_pricing_3"><i class="far fa-smile" aria-hidden="true"></i>Confident</label>
                                  </li>
                                  <li><input type="radio" name="pricing" value="VERY_CONFIDENT" class="radio-tiles radio-tiles--alert" id="id_pricing_4"/>
                                     <label for="id_pricing_4"><i class="far fa-grin-beam" aria-hidden="true"></i>Very Confident</label>
                                  </li>
                               </ul>
                            </fieldset>
                         </div>
                         <div class="form__field form__field--marketing form__field--radio">
                            <fieldset>
                               <legend>How much confidence do you have in your ability to design an effective marketing/advertising campaign for a new product or service?</legend>
                               <ul id="id_marketing" class="radio-tiles radio-tiles--alert">
                                  <li><input type="radio" name="marketing" value="NOT_AT_ALL_CONFIDENT" class="radio-tiles radio-tiles--alert" id="id_marketing_0"/>
                                     <label for="id_marketing_0"><i class="far fa-sad-tear" aria-hidden="true"></i>Not at all confident</label>
                                  </li>
                                  <li><input type="radio" name="marketing" value="NOT_CONFIDENT" class="radio-tiles radio-tiles--alert" id="id_marketing_1" checked=""/>
                                     <label for="id_marketing_1" class="selected"><i class="far fa-frown" aria-hidden="true"></i>Not confident</label>
                                  </li>
                                  <li><input type="radio" name="marketing" value="NEUTRAL" class="radio-tiles radio-tiles--alert" id="id_marketing_2"/>
                                     <label for="id_marketing_2"><i class="far fa-meh" aria-hidden="true"></i>Neutral</label>
                                  </li>
                                  <li><input type="radio" name="marketing" value="CONFIDENT" class="radio-tiles radio-tiles--alert" id="id_marketing_3"/>
                                     <label for="id_marketing_3"><i class="far fa-smile" aria-hidden="true"></i>Confident</label>
                                  </li>
                                  <li><input type="radio" name="marketing" value="VERY_CONFIDENT" class="radio-tiles radio-tiles--alert" id="id_marketing_4"/>
                                     <label for="id_marketing_4"><i class="far fa-grin-beam" aria-hidden="true"></i>Very Confident</label>
                                  </li>
                               </ul>
                            </fieldset>
                         </div>
                      </section>
                      <hr/>
                   </div>
                   <div>
                      <h3>Finances</h3>
                      <section class="likert-scale">
                         <div class="form__field form__field--financial_records form__field--radio">
                            <fieldset>
                               <legend>How much confidence do you have in your ability to organize and maintain financial records of your business?</legend>
                               <ul id="id_financial_records" class="radio-tiles radio-tiles--tertiary">
                                  <li><input type="radio" name="financial_records" value="NOT_AT_ALL_CONFIDENT" class="radio-tiles radio-tiles--tertiary" id="id_financial_records_0"/>
                                     <label for="id_financial_records_0"><i class="far fa-sad-tear" aria-hidden="true"></i>Not at all confident</label>
                                  </li>
                                  <li><input type="radio" name="financial_records" value="NOT_CONFIDENT" class="radio-tiles radio-tiles--tertiary" id="id_financial_records_1" checked=""/>
                                     <label for="id_financial_records_1" class="selected"><i class="far fa-frown" aria-hidden="true"></i>Not confident</label>
                                  </li>
                                  <li><input type="radio" name="financial_records" value="NEUTRAL" class="radio-tiles radio-tiles--tertiary" id="id_financial_records_2"/>
                                     <label for="id_financial_records_2"><i class="far fa-meh" aria-hidden="true"></i>Neutral</label>
                                  </li>
                                  <li><input type="radio" name="financial_records" value="CONFIDENT" class="radio-tiles radio-tiles--tertiary" id="id_financial_records_3"/>
                                     <label for="id_financial_records_3"><i class="far fa-smile" aria-hidden="true"></i>Confident</label>
                                  </li>
                                  <li><input type="radio" name="financial_records" value="VERY_CONFIDENT" class="radio-tiles radio-tiles--tertiary" id="id_financial_records_4"/>
                                     <label for="id_financial_records_4"><i class="far fa-grin-beam" aria-hidden="true"></i>Very Confident</label>
                                  </li>
                               </ul>
                            </fieldset>
                         </div>
                         <div class="form__field form__field--financial_assets form__field--radio">
                            <fieldset>
                               <legend>How much confidence do you have in your ability to manage financial assets of your business?</legend>
                               <ul id="id_financial_assets" class="radio-tiles radio-tiles--tertiary">
                                  <li><input type="radio" name="financial_assets" value="NOT_AT_ALL_CONFIDENT" class="radio-tiles radio-tiles--tertiary" id="id_financial_assets_0"/>
                                     <label for="id_financial_assets_0"><i class="far fa-sad-tear" aria-hidden="true"></i>Not at all confident</label>
                                  </li>
                                  <li><input type="radio" name="financial_assets" value="NOT_CONFIDENT" class="radio-tiles radio-tiles--tertiary" id="id_financial_assets_1" checked=""/>
                                     <label for="id_financial_assets_1" class="selected"><i class="far fa-frown" aria-hidden="true"></i>Not confident</label>
                                  </li>
                                  <li><input type="radio" name="financial_assets" value="NEUTRAL" class="radio-tiles radio-tiles--tertiary" id="id_financial_assets_2"/>
                                     <label for="id_financial_assets_2"><i class="far fa-meh" aria-hidden="true"></i>Neutral</label>
                                  </li>
                                  <li><input type="radio" name="financial_assets" value="CONFIDENT" class="radio-tiles radio-tiles--tertiary" id="id_financial_assets_3"/>
                                     <label for="id_financial_assets_3"><i class="far fa-smile" aria-hidden="true"></i>Confident</label>
                                  </li>
                                  <li><input type="radio" name="financial_assets" value="VERY_CONFIDENT" class="radio-tiles radio-tiles--tertiary" id="id_financial_assets_4"/>
                                     <label for="id_financial_assets_4"><i class="far fa-grin-beam" aria-hidden="true"></i>Very Confident</label>
                                  </li>
                               </ul>
                            </fieldset>
                         </div>
                      </section>
                      <hr/>
                   </div>
                </div>
                <div class="form__actions">
                   <button type="submit" class="button save">Save entrepreneur self-assessment</button>
                </div>
             </form>
          </div>
       </main>
    </div>
 </main>
  )
};

export default SelfAssessment;
