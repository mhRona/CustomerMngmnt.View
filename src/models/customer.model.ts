import { Address } from "./address.model";
import { Contact } from "./contact.model";

export class Customer {
    id: number;
    name: string;
    customerNumber: number;
    isDeleted: boolean;
    created: Date;
    addresses: Address[];
    contacts: Contact[];
}
  