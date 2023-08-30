import { createListItem, validateFields } from "./functions.js";
import {
  drawer,
  contactNameInput,
  contactNumberInput,
  deviceRadioInput,
  contactListElement,
} from "./importer.js";
import { contactList } from "./state.js";
import { ContactInfoType, contactPropsType } from "./types";

export const showDrawerEvent = () => {
  drawer?.classList.remove("bottom-[-100%]");
  drawer?.classList.add("bottom-[0%]");
};

export const closeDrawerEvent = () => {
  drawer?.classList.add("bottom-[-100%]");
  drawer?.classList.remove("bottom-[0%]");
};

const validateCreateContact = (contactInfo: ContactInfoType) => {
  if (!validateFields(contactInfo.contactName, contactInfo.contactNumber + "")) {
    alert("fill all fields");
    throw Error("fill all fields");
  }
};

export const createContactEvent = () => {
  validateCreateContact({
    contactName: contactNameInput!.value,
    contactNumber: contactNumberInput!.value,
  });
  const newContacts: contactPropsType = {
    id: crypto.randomUUID(),
    contactName: contactNameInput?.value ?? "",
    contactNumber: contactNumberInput?.value ?? "",
    avatar: null,
    storage: deviceRadioInput?.checked ? "Device" : "SIM",
  };

  contactList.push(newContacts);

  const listItem = createListItem({
    contactName: newContacts.contactName,
    contactNumber: newContacts.contactNumber,
    // storage: newContacts.storage,
  });

  contactListElement?.appendChild(listItem);
};
