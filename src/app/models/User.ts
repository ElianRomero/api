import Address from "./Addres";

export default interface User {
    id: number;
    name: string;
    email:string;
    address: Address;
}
