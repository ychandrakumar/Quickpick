const paypal = require("paypal-rest-sdk");

paypal.configure({
  mode: "sandbox",
  client_id: "Ac0ZrT8id6wPfjvi6m9x3Z5_1TwQDcHAzrkuRu15yFGwehwbRKJKS4Rx8xFxE6xxRvvmmcnHHXfNTyv6",
  client_secret: "EFtpYdVlMWUiQ-wOVZngvixgIEIHBggS3kfWfA-EtC0fkSaRI8s4lh2aoI2ot0GJrlYL_KrhbPJq7nJ1",
});

module.exports = paypal;
