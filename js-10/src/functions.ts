import { ContactInfoType } from "./types";

export const createListItem = (contactInfo: ContactInfoType): HTMLLIElement => {
  const listItem = document.createElement("li");

  const contactNameElement = document.createElement("h2");
  contactNameElement.innerText = contactInfo.contactName;
  contactNameElement.className = "text-lg font-extrabold text-gray-900";

  const contactNumberElement = document.createElement("p");
  contactNumberElement.innerText = contactInfo.contactNumber.toString();
  contactNumberElement.className = "text-md font-bold text-gray-600";

//   const contactStorageElement = document.createElement("p");
//   contactStorageElement.innerText = contactInfo.storage;
//   contactStorageElement.className = "text-md font-bold text-gray-600";

  listItem.appendChild(contactNameElement);
  listItem.appendChild(contactNumberElement);
//   listItem.appendChild(contactStorageElement);

  return listItem;
};

export const validateFields = (...fields: string[]): boolean => {
  return fields.every((fields) => !!fields.toString());
};
