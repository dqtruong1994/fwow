import React from "react";

const Login = () => {
  return (
    <main class="region--content" id="main-content">
      <div class="signup">
         <h1>Sign In</h1>
         <section class="form__card">
            <h3>…with your social account</h3>
            <div class="button-tabs">
               <a class="button expanded facebook" href="/accounts/login/facebook/?next=&amp;profile_type=&amp;on_join_path="><i class="fab fa-facebook-f" aria-hidden="true"></i>&nbsp;Facebook</a>
               <a class="button expanded google" href="/accounts/login/google-oauth2/?next=&amp;profile_type=&amp;on_join_path="><i class="fab fa-google" aria-hidden="true"></i>&nbsp;Google</a>
               <a class="button expanded linkedin" href="/accounts/login/linkedin-oauth2/?next=&amp;profile_type=&amp;on_join_path="><i class="fab fa-linkedin-in" aria-hidden="true"></i>&nbsp;LinkedIn</a>
            </div>
         </section>
         <section class="form__card">
            <h3>…or your email</h3>
            <form class="login" method="POST" action="/accounts/login/?next=" data-abide="5fzwke-abide">
               <input type="hidden" name="csrfmiddlewaretoken" value="1RAqeWEaWWgQKxEesZ5y9CuKDq4BSMhIzHruxoNT5p6zLsu8vD5Sp3nuT9vPHYQC"/>
               <p><label for="id_username">Email address:</label> <input type="text" name="username" autofocus="" autocapitalize="none" autocomplete="username" maxlength="254" required="" id="id_username"/></p>
               <p><label for="id_password">Password:</label> <input type="password" name="password" autocomplete="current-password" required="" id="id_password"/></p>
               <div class="form__actions">
                  <button class="button primary" type="submit">Sign In</button>
                  <br/>
                  <a class="" href="/accounts/password_reset/">Forgot Password?</a>
               </div>
            </form>
         </section>
         <p><big>
            Not a member? <strong><a href="/signup/entrepreneur">Sign up today!</a></strong>
            </big>
         </p>
      </div>
   </main>
    
  )
};

export default Login;
