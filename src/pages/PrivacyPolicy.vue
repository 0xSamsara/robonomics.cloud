
<template>
  <Layout>
    <section class="privacy-policy">

      <h1>Privacy Policy or Ways of Communication with Website</h1>

      <p class="privacy-policy__descr">You may allow or disallow this website some actions concerning your web privacy. This may affect your experience on this website, but we certainly respect your privacy.</p>

      <div class="privacy-policy__wrapper">
        <h2 class="privacy-policy__subtitle">
          Disallow any actions
        </h2>
        <p class="privacy-policy__descr">By choosing this option you let us know that you do not want this website to use any cookies or local storage of your browser. So we will not be able to save any preferences including this choose and you will see privacy options popup every time you visit this website.</p>
      </div>

      <div class="privacy-policy__wrapper">
        <h2 class="privacy-policy__subtitle">
          Only critical actions
        </h2>
        <p class="privacy-policy__descr">By choosing this option you let us know that you allow this website to use cookies and local storage of your browser. This means we can save some preferences including this choose and you will not see privacy options popup every time you visit this website.</p>
      </div>

      <div class="privacy-policy__wrapper">
        <h2 class="privacy-policy__subtitle">
          Allow metrics
        </h2>
        <p class="privacy-policy__descr">By choosing this option you let us to use cookies, local storage of your browser for saving some preferences and also to use third party metrics such as <g-link to="https://marketingplatform.google.com/about/analytics/">Google Analytics</g-link>.</p>
      </div>


    </section>
  </Layout>
</template>

<script>
export default {
}
</script>

<style scoped>
  .privacy-policy {
    padding-top: calc(var(--space) * 2);
    text-align: center;
  }
  .privacy-policy__wrapper:not(:last-child) {
    margin-bottom: var(--space);
  }

  h1 {
    margin-bottom: calc(var(--space) * 0.7);
  }

  h2 {
    font-size: calc(var(--base-font-size) * 1.7);
    text-decoration: underline;
    margin-bottom: calc(var(--space) * 0.7);
    color: var(--color-gray);
  }

  a {
    color: var(--color-blue);
  }
</style>