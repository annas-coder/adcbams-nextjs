import Script from 'next/script';

export default function ScriptsLoader() {
  return (
    <>
      <Script src="/en/system/includes/am_private/jquery.js" strategy="beforeInteractive" />
      <Script src="/en/system/includes/am_private/commons.js" strategy="afterInteractive" />
      <Script src="/en/system/includes/am_private/flickity.js" strategy="afterInteractive" />
      <Script src="/en/system/includes/am_private/flickity-hash.js" strategy="afterInteractive" />
      <Script src="/en/system/includes/am_private/flickity-fade.js" strategy="afterInteractive" />
      <Script src="/en/system/includes/am_private/toolkit.js" strategy="afterInteractive" />
      <Script src="/en/system/includes/am_private/jquery.dataTables.min.js" strategy="afterInteractive" />
      <Script src="/en/system/includes/assets/js/vendor/bootstrap.min.js" strategy="afterInteractive" />
      <Script src="/en/system/assets/toolkit/scripts/moment.min.js" strategy="afterInteractive" />
      <Script src="/en/system/assets/toolkit/scripts/accessibility.js" strategy="afterInteractive" />
      <Script src="/en/system/assets/toolkit/scripts/daterangepicker.js" strategy="afterInteractive" />
      <Script src="/en/system/assets/toolkit/scripts/dynamic-lead-form.js" strategy="afterInteractive" />
      <Script src="/en/system/assets/toolkit/scripts/jquery.quickWizard.js" strategy="afterInteractive" />
      <Script src="/en/system/assets/toolkit/scripts/search.js" strategy="afterInteractive" />
      <Script src="/en/system/assets/toolkit/scripts/treatcode.js" strategy="afterInteractive" />
      <Script src="/en/system/assets/toolkit/scripts/uc_footer.js" strategy="afterInteractive" />
    </>
  );
}



