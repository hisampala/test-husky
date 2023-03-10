import { User } from "../entities/user.entity";

export class CreateUserDto implements User {
  id: string;
  first_name: string;
  last_name: string;
  email: string;
}
