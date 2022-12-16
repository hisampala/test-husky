import { User as u } from "@prisma/client";
export class User implements u {
  id: string;
  first_name: string;
  last_name: string;
  email: string;
}
