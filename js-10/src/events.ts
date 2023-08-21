import {
  drawer,
  contactNameInput,
  contactNumberInput,
  deviceRadioInput,
  contactListElement,
} from "./importer.js";
import { contactList } from "./state.js";
import { contactPropsType } from "./types";

export const showDrawerEvent = () => {
  drawer?.classList.remove("bottom-[-100%]");
  drawer?.classList.add("bottom-[0%]");
};

export const closeDrawerEvent = () => {
  drawer?.classList.add("bottom-[-100%]");
  drawer?.classList.remove("bottom-[0%]");
};

export const createContactEvent = () => {
  const newContacts: contactPropsType = {
    id: crypto.randomUUID(),
    contactName: contactNameInput?.value ?? "",
    contactNumber: contactNumberInput?.value ?? "",
    avatar: null,
    storage: deviceRadioInput?.checked ? "Device" : "SIM",
  };

  contactList.push(newContacts);

  const listItem = document.createElement("li");

  const contactNameElement = document.createElement("h2");
  contactNameElement.innerText = newContacts.contactName;
  contactNameElement.className = "text-lg font-extrabold text-gray-900";

  const contactNumberElement = document.createElement("p");
  contactNumberElement.innerText = newContacts.contactNumber.toString();
  contactNumberElement.className = "text-md font-bold text-gray-600";

  const contactStorageElement = document.createElement("p");
  contactStorageElement.innerText = newContacts.storage;
  contactStorageElement.className = "text-md font-bold text-gray-600";

  listItem.appendChild(contactNameElement);
  listItem.appendChild(contactNumberElement);
  listItem.appendChild(contactStorageElement);

  contactListElement?.appendChild(listItem);
};
