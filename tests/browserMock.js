import { JSDOM } from "jsdom";

const dom = new JSDOM(
  `<!DOCTYPE html><div id="root"></div>`,
  { includeNodeLocations: true }
);
global.document = dom.window.document;
global.window = dom.window;
