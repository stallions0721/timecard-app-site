/* 公式サイトの閲覧を Google アナリティクス 4 へ送る。公開ホスト以外では送らない。 */
(function () {
  var measurementId = "G-353L1Y7DLW";
  var host = location.hostname;
  if (host !== "stallions0721.github.io") return;

  window.dataLayer = window.dataLayer || [];
  function gtag() {
    window.dataLayer.push(arguments);
  }
  window.gtag = gtag;
  gtag("js", new Date());
  gtag("config", measurementId, {
    send_page_view: true,
    debug_mode: /(?:\?|&)ga_debug=1(?:&|$)/.test(location.search),
  });

  var script = document.createElement("script");
  script.async = true;
  script.src =
    "https://www.googletagmanager.com/gtag/js?id=" +
    encodeURIComponent(measurementId);
  document.head.appendChild(script);
})();
