const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "nku48c",
  e2e: {
      baseUrl: "https://qamid.tmweb.ru/client/index.php",
    retries: 1
    },
});
