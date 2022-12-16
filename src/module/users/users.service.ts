import { Injectable } from "@nestjs/common";
import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";
import { PrismaClient } from "@prisma/client";
@Injectable()
export class UsersService {
  async create(createUserDto: CreateUserDto) {
    const con = new PrismaClient();
    con.$connect();
    const result = await con.user.create({ data: createUserDto });
    return result;
  }

  findAll() {
    return `This action returns all users`;
  }

  async findOne(id: string) {
    const con = new PrismaClient();
    con.$connect();
    const result = await con.user.findFirst({
      where: { id: id },
    });
    return result;
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    const con = new PrismaClient();
    con.$connect();
    const result = await con.user.update({
      where: { id: id },
      data: updateUserDto,
    });
    return result;
  }

  async remove(id: string) {
    const con = new PrismaClient();
    con.$connect();
    const result = await con.user.delete({
      where: { id: id },
    });
    return result;
  }
}
