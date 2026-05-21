const express = require("express");
const path = require("path");

const app = express();
const PORT = Number(process.env.PORT) || 3000;
const ROOT = __dirname;

app.disable("x-powered-by");

app.get("/health", (_req, res) => {
  res.json({ ok: true, service: "commerce-dashboard" });
});

app.use(express.static(ROOT, {
  index: false,
  maxAge: process.env.NODE_ENV === "production" ? "300" : 0
}));

app.get("/", (_req, res) => {
  res.redirect(302, "/commerce_dashboard_report_detail.html");
});

app.use((_req, res) => {
  res.status(404).send("Not found");
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Commerce dashboard: http://0.0.0.0:${PORT}/`);
});
