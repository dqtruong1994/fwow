import React from "react";

const Register = () => {
  return (
    <main class="region--content" id="main-content">
   <div class="signup">
      <h1>
         Join the MicroMentor community
      </h1>
      <nav class="signup__progress">
         <div class="scorecard__progress-bar progress-bar">
            <div class="scorecard__progress progress primary" role="progressbar" tabindex="0" aria-valuenow="0" aria-valuemin="0" aria-valuetext="0" aria-valuemax="1">
               <div class="scorecard__progress-meter progress-meter progress-meter--empty">
               </div>
            </div>
         </div>
      </nav>
      <main class="signup__content">
         <hgroup class="signup__title">
            <h4>Step 1</h4>
            <h2>Create an account</h2>
         </hgroup>
         <form class="form" method="post" data-abide="hgk0pu-abide" data-disable-on-submit="">
            <input type="hidden" name="csrfmiddlewaretoken" value="wNHDcSicZ2n6HiXRxmVS4embM4ZGO8wC4DyHvkrV8vdPIdNLA0VckFfV2NqUDk5w" aria-describedby="5ogoz0-abide-error"/>
            <section class="form__card">
               <h3>Connect your social account…</h3>
               <div class="button-tabs">
                  <a class="button expanded facebook" href="/accounts/login/facebook/?next=/signup/entrepreneur/code-of-conduct&amp;profile_type=entrepreneur&amp;on_join_path=1"><i class="fab fa-facebook-f" aria-hidden="true"></i>&nbsp;Facebook</a>
                  <a class="button expanded google" href="/accounts/login/google-oauth2/?next=/signup/entrepreneur/code-of-conduct&amp;profile_type=entrepreneur&amp;on_join_path=1"><i class="fab fa-google" aria-hidden="true"></i>&nbsp;Google</a>
                  <a class="button expanded linkedin" href="/accounts/login/linkedin-oauth2/?next=/signup/entrepreneur/code-of-conduct&amp;profile_type=entrepreneur&amp;on_join_path=1"><i class="fab fa-linkedin-in" aria-hidden="true"></i>&nbsp;LinkedIn</a>
               </div>
            </section>
            <section class="form__card">
               <h3>…or create an account using your email address</h3>
               <p class="help-text form__instructions">
                  Required fields are marked with an <span class="error">*</span>
               </p>
               <div class="form__inline-fields">
                  <div class="form__field form__field--first_name form__field--text is-required">
                     <label for="id_first_name">First name:</label>
                     <input type="text" name="first_name" maxlength="50" required="" id="id_first_name" aria-describedby="5ogoz0-abide-error"/>
                     <div class="form-error" id="5ogoz0-abide-error" role="alert">
                        This field is required
                     </div>
                  </div>
                  <div class="form__field form__field--last_name form__field--text is-required">
                     <label for="id_last_name">Last name:</label>
                     <input type="text" name="last_name" maxlength="150" required="" id="id_last_name" aria-describedby="3t21y8-abide-error"/>
                     <div class="form-error" role="alert" id="3t21y8-abide-error">
                        This field is required
                     </div>
                  </div>
               </div>
               <div class="form__field form__field--email form__field--email is-required">
                  <label for="id_email">Email address:</label>
                  <input type="email" name="email" maxlength="254" required="" id="id_email" aria-describedby="j2ve3c-abide-error"/>
                  <div class="form-error" role="alert" id="j2ve3c-abide-error">
                     This field is required
                  </div>
               </div>
               <div class="form__inline-fields">
                  <div class="form__field form__field--new_password1 form__field--password is-required">
                     <label for="id_new_password1">Password:</label>
                     <input type="password" name="new_password1" required="" id="id_new_password1" aria-describedby="mmt88n-abide-error"/>
                     <div class="help-text">
                        Passwords must have a minimum of 8 characters
                     </div>
                     <div class="form-error" role="alert" id="mmt88n-abide-error">
                        This field is required
                     </div>
                  </div>
                  <div class="form__field form__field--new_password2 form__field--password is-required">
                     <label for="id_new_password2">Confirm password:</label>
                     <input type="password" name="new_password2" required="" id="id_new_password2" aria-describedby="yt3c40-abide-error"/>
                     <div class="form-error" role="alert" id="yt3c40-abide-error">
                        This field is required
                     </div>
                  </div>
               </div>
            </section>
            <section class="form__actions signup__actions">
               <div class="button-group">
                  <a class="button clear secondary" href="/">Back</a>
                  <button type="submit" class="button primary">Continue</button>
               </div>
            </section>
         </form>
      </main>
   </div>
</main>
    
  )
};

export default Register;
