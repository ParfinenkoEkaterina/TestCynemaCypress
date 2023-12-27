const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
      baseUrl: "https://qamid.tmweb.ru/client/index.php",
    retries: 2
    },
});
