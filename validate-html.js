const fs = require("fs");
const html = fs.readFileSync("public/index.html", "utf8");

// A very simple tag matching validation
const tags = [];
const regex = /<\/?([a-zA-Z0-9:-]+)(?:\s+[^>]*)?>/g;
let match;
const selfClosing = new Set([
  "area",
  "base",
  "br",
  "col",
  "embed",
  "hr",
  "img",
  "input",
  "link",
  "meta",
  "param",
  "source",
  "track",
  "wbr",
]);

while ((match = regex.exec(html)) !== null) {
  const fullTag = match[0];
  const tagName = match[1].toLowerCase();
  const isClosing = fullTag.startsWith("</");

  if (selfClosing.has(tagName) || fullTag.endsWith("/>")) {
    continue;
  }

  if (isClosing) {
    const last = tags.pop();
    if (last !== tagName) {
      console.error(
        `HTML Error: Mismatched tag. Expected </${last}>, but got </${tagName}> at index ${match.index}`,
      );
      process.exit(1);
    }
  } else {
    tags.push(tagName);
  }
}

if (tags.length > 0) {
  console.error(`HTML Error: Unclosed tags remaining:`, tags);
  process.exit(1);
}

console.log("HTML validation successful! No mismatched or unclosed tags.");
