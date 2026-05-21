const fs = require("fs");
const path = require("path");

function parseCSV(text) {
  const lines = text.trim().split(/\r?\n/);
  const rows = [];
  for (let i = 1; i < lines.length; i++) {
    const line = lines[i];
    if (!line.trim()) continue;
    const cols = [];
    let cur = "",
      inQ = false;
    for (const ch of line) {
      if (ch === '"') {
        inQ = !inQ;
        continue;
      }
      if (ch === "," && !inQ) {
        cols.push(cur.trim());
        cur = "";
      } else cur += ch;
    }
    cols.push(cur.trim());
    rows.push(cols);
  }
  const headers = lines[0]
    ? (() => {
        const h = [];
        let cur = "",
          inQ = false;
        for (const ch of lines[0]) {
          if (ch === '"') {
            inQ = !inQ;
            continue;
          }
          if (ch === "," && !inQ) {
            h.push(cur.trim());
            cur = "";
          } else cur += ch;
        }
        h.push(cur.trim());
        return h;
      })()
    : [];
  return { headers, rows };
}

const base = __dirname;
const target = parseCSV(fs.readFileSync(path.join(base, "tgt_now.csv"), "utf8"));
const prev = parseCSV(fs.readFileSync(path.join(base, "py_now.csv"), "utf8"));
const current = parseCSV(fs.readFileSync(path.join(base, "cur_now.csv"), "utf8"));

const out = {
  target: { headers: target.headers, rows: target.rows },
  prev: { headers: prev.headers, rows: prev.rows },
  current: { headers: current.headers, rows: current.rows },
  savedAt: new Date().toISOString(),
  columnSpec: "A일자 B매출 C주문 D품목 E유입 F전환율 G객단가",
};

fs.writeFileSync(path.join(base, "dashboard_data.json"), JSON.stringify(out));
fs.writeFileSync(
  path.join(base, "dashboard_data.js"),
  "window.__DASHBOARD_FALLBACK__=" + JSON.stringify(out) + ";"
);
console.log("OK", {
  target: target.rows.length,
  prev: prev.rows.length,
  current: current.rows.length,
  headers: {
    target: target.headers.slice(0, 7),
    current: current.headers.slice(0, 7),
  },
});
