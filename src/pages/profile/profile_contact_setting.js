import React from "react";

const profile_contact_setting = () => {
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
               <ul class="dropdown menu" data-dropdown-menu="3v251o-dropdown-menu" role="menubar">
                  <li role="none" class="is-dropdown-submenu-parent opens-right">
                     <a href="#" class="text-alert" role="menuitem" aria-haspopup="true" aria-label="Contact settings">Contact settings</a>
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
                        <li class="is-submenu-item is-dropdown-submenu-item" role="none">
                           <a href="/profile/mentor" role="menuitem">Mentor profile</a>
                        </li>
                        <li class="active is-submenu-item is-dropdown-submenu-item" role="none">
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
                     <a href="/profile/mentor" aria-selected="">Mentor profile</a>
                  </li>
                  <li class="tabs-title">
                     <a href="/profile/contact-settings" aria-selected="true">Contact settings</a>
                  </li>
               </ul>
            </nav>
            <p class="help-text form__instructions">
               Required fields are marked with an <span class="error">*</span>
            </p>
            <form method="post" class="form" data-abide="xi3q3d-abide">
               <input type="hidden" name="csrfmiddlewaretoken" value="bXp8ha75UUNNthsQLE4L85i0e32Ci1afJNgcACgO3nDwuciKOi45owbKuMtQ7dJ9" aria-describedby="mxws99-abide-error"/>
               <div id="conversations">
                  <h3>Conversations</h3>
                  <div class="form__field form__field--contact_availability form__field--radio is-required">
                     <fieldset>
                        <legend>Change your availability</legend>
                        <ul id="id_contact_availability">
                           <li><input type="radio" name="contact_availability" value="available" required="" id="id_contact_availability_0" checked=""/>
                              <label for="id_contact_availability_0">Anybody can start a new conversation with me</label>
                           </li>
                           <li><input type="radio" name="contact_availability" value="unavailable" required="" id="id_contact_availability_1"/>
                              <label for="id_contact_availability_1">Nobody can start a new conversation with me (you will be hidden from public search, but can still reach out to others)</label>
                           </li>
                        </ul>
                     </fieldset>
                     <div class="form-error" id="mxws99-abide-error" role="alert">
                        This field is required
                     </div>
                  </div>
               </div>
               <div id="notifications">
                  <h3>Email</h3>
                  <div class="form__field form__field--new_mentors_digest form__field--checkbox">
                     <input type="checkbox" name="new_mentors_digest" id="id_new_mentors_digest" checked=""/>
                     <label for="id_new_mentors_digest">Weekly Mentor recommendations</label>
                  </div>
                  <div class="form__field form__field--new_entrepreneurs_digest form__field--checkbox">
                     <input type="checkbox" name="new_entrepreneurs_digest" id="id_new_entrepreneurs_digest" checked=""/>
                     <label for="id_new_entrepreneurs_digest">Weekly Entrepreneur recommendations</label>
                  </div>
                  <div class="form__field form__field--notify_on_new_messages form__field--checkbox">
                     <input type="checkbox" name="notify_on_new_messages" id="id_notify_on_new_messages" checked=""/>
                     <label for="id_notify_on_new_messages">New conversation messages are received</label>
                  </div>
                  <div class="form__field form__field--notify_on_qa_question form__field--checkbox">
                     <input type="checkbox" name="notify_on_qa_question" id="id_notify_on_qa_question" checked=""/>
                     <label for="id_notify_on_qa_question">New answers are posted to my questions</label>
                  </div>
                  <div class="form__field form__field--notify_on_qa_discussions form__field--checkbox">
                     <input type="checkbox" name="notify_on_qa_discussions" id="id_notify_on_qa_discussions" checked=""/>
                     <label for="id_notify_on_qa_discussions">New answers are posted to questions I also answered on</label>
                  </div>
                  <div class="form__field form__field--onboarding_reminders form__field--checkbox">
                     <input type="checkbox" name="onboarding_reminders" id="id_onboarding_reminders" checked=""/>
                     <label for="id_onboarding_reminders">Onboarding tips sent shortly after joining</label>
                  </div>
               </div>
               <div class="form__actions">
                  <button type="submit" class="button primary">Save contact settings</button>
               </div>
            </form>
         </div>
      </main>
   </div>
</main>
  )
};

export default profile_contact_setting;
