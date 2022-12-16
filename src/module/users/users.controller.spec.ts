import { Test, TestingModule } from "@nestjs/testing";
import { randomUUID } from "crypto";
import { User } from "./entities/user.entity";
import { UsersController } from "./users.controller";
import { UsersService } from "./users.service";

describe("UsersController", () => {
  let controller: UsersController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UsersController],
      providers: [UsersService],
    }).compile();

    controller = module.get<UsersController>(UsersController);
  });

  it("should be defined", () => {
    expect(controller).toBeDefined();
  });
  const user1 = new User();
  user1.email = "test.email@gmail.com";
  user1.first_name = "test";
  user1.last_name = "test";
  user1.id = randomUUID();

  it("should be defined Controller Create ", async () => {
    expect(await controller.create(user1)).toEqual(user1);
  });
  it("should be defined Controller fine One By Id  ", async () => {
    expect(await controller.findOne(user1.id)).toEqual(user1);
  });
  it("should be defined Controller Update ", async () => {
    expect(await controller.update(user1.id, user1)).toEqual(user1);
  });
  it("should be defined Controller Delete ", async () => {
    expect(await controller.remove(user1.id)).toEqual(user1);
  });
});
