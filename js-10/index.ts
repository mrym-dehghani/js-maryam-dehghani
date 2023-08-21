import {
  addToContactListButton,
  showDrawerButton,
  closeDrawerButton,
} from "./src/importer.js";
import {
  showDrawerEvent,
  closeDrawerEvent,
  createContactEvent,
} from "./src/events.js";

showDrawerButton?.addEventListener("click", showDrawerEvent);

closeDrawerButton?.addEventListener("click", closeDrawerEvent);

addToContactListButton?.addEventListener("click", createContactEvent);
