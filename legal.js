(function () {
  var mail = 'contact@customercs.com';
  var contactBlock = "<p>Email: <a href=\"mailto:contact@customercs.com\">contact@customercs.com</a></p>";

  var css = [
    "dialog.legal{width:min(680px,calc(100% - 32px));max-height:85vh;overflow-y:auto;border:none;border-radius:12px;padding:0;box-shadow:0 20px 60px rgba(0,0,0,.35);font:16px/1.6 -apple-system,Segoe UI,Arial,sans-serif;color:#1c1c1c}",
    "dialog.legal::backdrop{background:rgba(0,0,0,.55)}",
    ".legal-head{position:sticky;top:0;display:flex;justify-content:space-between;align-items:center;gap:12px;background:#fff;border-bottom:1px solid #e4e4e4;padding:14px 18px}",
    ".legal-head h2{font:700 20px/1.3 Georgia,serif;margin:0}",
    ".legal-close{border:none;background:#f1f1f1;border-radius:50%;width:36px;height:36px;font-size:20px;line-height:1;cursor:pointer;flex:none}",
    ".legal-body{padding:16px 18px 22px}",
    ".legal-body h3{font-size:16px;margin:18px 0 6px}",
    ".legal-body p,.legal-body li{font-size:15px;margin:0 0 10px}",
    ".legal-body ul{padding-left:20px;margin:0 0 10px}",
    ".legal-updated{color:#5f6368;font-size:13px}"
  ].join("\n");

  var pages = {
    privacy: ["Privacy Policy",
      '<p class="legal-updated">Last updated: September 15, 2026</p>' +
      "<p>This Privacy Policy explains how Oakwell Men's Journal (\"we\", \"us\") collects and uses information when you visit this website.</p>" +
      "<h3>1. Information we collect</h3><ul>" +
      "<li><b>Information you give us.</b> If you email us, we receive your name, email address and the content of your message.</li>" +
      "<li><b>Information collected automatically.</b> Like most websites, we and our partners collect technical data such as your IP address, browser type, device, pages viewed, time on page and the website that referred you.</li>" +
      "<li><b>Cookies and similar technologies.</b> We use cookies, pixels and similar tools to understand how visitors use the site and to measure the performance of our advertising.</li></ul>" +
      "<h3>2. How we use information</h3><ul>" +
      "<li>To operate, maintain and improve the website.</li>" +
      "<li>To understand which articles and links are useful to readers.</li>" +
      "<li>To measure and improve advertising campaigns, including on content recommendation networks such as Taboola.</li>" +
      "<li>To respond to messages you send us.</li>" +
      "<li>To comply with legal obligations and prevent fraud.</li></ul>" +
      "<h3>3. Advertising and affiliate partners</h3>" +
      "<p>Some articles contain links to third-party websites, including the websites of products we write about. When you click these links, the third party may place cookies and collect information about your visit and any purchase. We may receive a commission from purchases. These third parties have their own privacy policies, and we are not responsible for their practices.</p>" +
      "<p>We work with advertising partners that may use cookies and pixels to measure ad performance and show relevant ads. You can learn more about how Taboola uses data in its own privacy policy.</p>" +
      "<h3>4. Health information</h3><p>We do not ask for, and you should not send us, personal health information. We do not collect medical records or health data through this website.</p>" +
      "<h3>5. Sharing of information</h3><p>We do not sell your name or email address. We share information only with service providers that help us run the website (such as hosting and analytics), with advertising and affiliate partners as described above, or when required by law.</p>" +
      "<h3>6. Your choices and rights</h3><ul><li>You can block or delete cookies in your browser settings.</li>" +
      "<li>Depending on where you live (for example California, the European Union or the United Kingdom), you may have the right to access, correct or delete personal information we hold about you, and to opt out of certain uses. To make a request, contact us through this website.</li></ul>" +
      "<h3>7. Children</h3><p>This website is intended for adults. We do not knowingly collect information from children under 13.</p>" +
      "<h3>8. Security and retention</h3><p>We use reasonable measures to protect information and keep it only as long as needed for the purposes above or as required by law.</p>" +
      "<h3>9. Changes</h3><p>We may update this policy from time to time. The date at the top shows when it was last changed.</p>" +
      "<h3>10. Contact</h3>" + contactBlock],

    terms: ["Terms of Use",
      '<p class="legal-updated">Last updated: September 15, 2026</p>' +
      "<p>By using Oakwell Men's Journal (the \"website\"), you agree to these Terms of Use. If you do not agree, please do not use the website.</p>" +
      "<h3>1. Informational content only</h3><p>All content on this website is for general information and education. It is not medical advice and does not replace the advice of a doctor or other qualified health professional. Always talk to your doctor before starting any supplement, changing your diet or changing any medication.</p>" +
      "<h3>2. Advertorials and sponsored content</h3><p>Some articles on this website are advertorials. They are clearly labeled as sponsored, are created to promote a product and are not independent news articles. Stories in these articles may be shared by readers and edited, and names and identifying details may be changed.</p>" +
      "<h3>3. Affiliate links</h3><p>Sponsored articles contain affiliate links. If you click a link and make a purchase, we may earn a commission at no extra cost to you. Products are sold by third-party merchants, not by us. Questions about orders, shipping, refunds and guarantees must be directed to the merchant.</p>" +
      "<h3>4. Third-party websites</h3><p>We are not responsible for the content, products, policies or practices of third-party websites linked from this website.</p>" +
      "<h3>5. No guarantees</h3><p>Individual results vary. We make no guarantee that any product described on this website will produce any particular result. The website is provided \"as is\" without warranties of any kind.</p>" +
      "<h3>6. Limitation of liability</h3><p>To the fullest extent allowed by law, Oakwell Men's Journal is not liable for any damages arising from your use of the website or from any product purchased through links on the website.</p>" +
      "<h3>7. Intellectual property</h3><p>The text, images and design of this website belong to Oakwell Men's Journal or its licensors. You may not copy or republish them without permission.</p>" +
      "<h3>8. Changes</h3><p>We may update these terms at any time. Continued use of the website means you accept the updated terms.</p>" +
      "<h3>9. Contact</h3>" + contactBlock],

    disclaimer: ["Disclaimer",
      "<h3>Medical disclaimer</h3><p>The information on this website is for educational purposes only and is not intended as medical advice, diagnosis or treatment. Do not stop, start or change any medication without talking to your doctor. If you take medication for blood pressure, heart conditions, diabetes or thyroid, or take nitrates or ED medication, consult your healthcare provider before using any dietary supplement.</p>" +
      "<h3>FDA disclaimer</h3><p>Statements about dietary supplements on this website have not been evaluated by the Food and Drug Administration. Products mentioned are not intended to diagnose, treat, cure or prevent any disease.</p>" +
      "<h3>Advertising disclosure</h3><p>Some articles on Oakwell Men's Journal are advertorials. They are labeled as sponsored content and are not independent news articles. We may receive a commission from purchases made through links in those articles. </p>" +
      "<h3>Stories and results</h3><p>Stories in sponsored articles are shared by readers and edited for length and privacy. Names and identifying details have been changed. Individual experiences do not guarantee that you will get the same or similar results.</p>"],

    contact: ["Contact",
      "<p>For questions about the content of Oakwell Men's Journal, corrections or privacy requests:</p>" + contactBlock +
      "<h3>Questions about an order?</h3><p>Products mentioned on this website are sold by third-party merchants. For questions about orders, shipping, refunds or the money-back guarantee, contact the merchant directly using the details on the official product website or in your order confirmation email.</p>"]
  };

  var style = document.createElement("style");
  style.textContent = css;
  document.head.appendChild(style);

  Object.keys(pages).forEach(function (key) {
    var dlg = document.createElement("dialog");
    dlg.className = "legal";
    dlg.id = "legal-" + key;
    dlg.innerHTML = '<div class="legal-head"><h2>' + pages[key][0] + '</h2><button class="legal-close" type="button" aria-label="Close">&times;</button></div><div class="legal-body">' + pages[key][1] + "</div>";
    dlg.querySelector(".legal-close").addEventListener("click", function () { dlg.close(); });
    dlg.addEventListener("click", function (e) { if (e.target === dlg) dlg.close(); });
    document.body.appendChild(dlg);
  });

  document.querySelectorAll("a[data-legal]").forEach(function (a) {
    a.addEventListener("click", function (e) {
      var dlg = document.getElementById("legal-" + a.dataset.legal);
      if (!dlg || !dlg.showModal) return;
      e.preventDefault();
      dlg.showModal();
    });
  });
})();
