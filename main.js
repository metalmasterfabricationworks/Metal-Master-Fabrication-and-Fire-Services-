document.addEventListener("DOMContentLoaded", function () {

  const buttons = document.querySelectorAll(".quote-btn");
  const phoneNumber = "919869449919"; // WhatsApp requires country code

  buttons.forEach(button => {
    button.addEventListener("click", () => {
      const context = button.getAttribute("data-context") || "Website";

      const message = `
Hello,

I would like to request a quotation for metal fabrication services.

Source: ${context}

Please let me know the next steps.

Thank you.
      `.trim();

      const encodedMessage = encodeURIComponent(message);
      const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

      window.open(whatsappURL, "_blank");
    });
  });

});