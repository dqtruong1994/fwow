import React from "react";

const Dashboard = () => {
  return (
   <main class="region--content" id="main-content">
   <div class="callout callout--message wash-sottovoce" data-closable="">
      <div class="container">
         <div class="text-center">
            <strong>
            Help us make your mentoring experience better!
            &nbsp;
            <a class="button tiny cta" href="https://www.tfaforms.com/4682282?tfa_683=1520776">
            Take a quick survey
            </a>
            </strong>
         </div>
         <button class="close-button" aria-label="Close" type="button" data-post-callback="/dismiss_message/entrepreneur_baseline_cta" data-close="">
         <span aria-hidden="true">×</span>
         </button>
      </div>
   </div>
   <section class="background-whisper">
      <div class="container dashboard">
         <nav class="dashboard__menu">
            <ul class="menu vertical">
               <li class="active">
                  <a href="/dashboard">
                  Dashboard
                  </a>
               </li>
               <li class="">
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
         <header class="profile-card__overview">
            <div class="profile-capsule">
               <div class="profile-capsule__image">
                  <a href="/member/1520776">
                     <div class="default-avatar avatar--medium">
                        td
                     </div>
                  </a>
               </div>
               <div class="profile-capsule__about">
                  <h3>
                     <a href="/member/1520776" class="text-black">
                     truong dang
                     </a>
                  </h3>
                  <h6>
                     <span class="text-primary">Entrepreneur</span>
                  </h6>
                  <h5 class="">
                     <ul class="list--comma-separated">
                        <li>Vietnam</li>
                     </ul>
                  </h5>
                  <h5 class="no-bold text-sottovoce">Childcare</h5>
                  <div class="profile-capsule__extras">
                     <div class="profile-details__detail">
                        <div class="detail__label"><strong>Recent Activity</strong></div>
                        <div class="detail__value">
                           <div class="activity-widget">
                              <span data-tooltip="tt8x6a-tooltip" title="" role="img" aria-label="Active in the last week" aria-describedby="sjwdcy-tooltip" data-yeti-box="sjwdcy-tooltip" data-toggle="sjwdcy-tooltip" data-resize="sjwdcy-tooltip" class="has-tip" data-events="resize">
                              <i class="fas fa-comment text-primary"></i>
                              <i class="fas fa-comment text-primary "></i>
                              <i class="fas fa-comment text-primary "></i>
                              </span>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </header>
      </div>
   </section>
   <header class="bordered-row">
      <div class="container">
         <h2>
            My Conversations
         </h2>
      </div>
   </header>
   <section class="page-row">
      <div class="container">
         <section class="conversations">
            <p>You havent connected with anyone yet.</p>
            <p>
               <a class="button primary" href="/entrepreneurs">Search for Entrepreneurs</a>
               <a class="button tertiary" href="/mentors">Search for Mentors</a>
            </p>
         </section>
      </div>
   </section>
   <header class="bordered-row">
      <div class="container">
         <h2>
            My Questions
         </h2>
      </div>
   </header>
   <section class="page-row">
      <div class="container">
         <form class="form background-whisper callout" action="/question/ask" data-abide="mgbxlg-abide">
            <div class="form__field input-group input-group--responsive">
               <input type="text" name="title" placeholder="Ask your question..." class="input-group-field"/>
               <div class="input-group-button">
                  <button class="button small">Ask a question</button>
               </div>
            </div>
         </form>
         <div class="my-qna__list">
         </div>
      </div>
   </section>
   <header class="bordered-row">
      <div class="container">
         <h2>
            My Answers
         </h2>
      </div>
   </header>
   <section class="page-row">
      <div class="container">
         <p>
            You haven’t answered any questions yet.
         </p>
         <p>
            <a href="/questions" class="button primary">Find questions to answer</a>
         </p>
      </div>
   </section>
</main>
  )
};

export default Dashboard;
