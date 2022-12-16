import { Test, TestingModule } from "@nestjs/testing";
import { randomUUID } from "crypto";
import { User } from "./entities/user.entity";
import { UsersService } from "./users.service";

describe("UsersService", () => {
  let service: UsersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UsersService],
    }).compile();

    service = module.get<UsersService>(UsersService);
  });
  const user1 = new User();
  user1.email = "test.email@gmail.com";
  user1.first_name = "test";
  user1.last_name = "test";
  user1.id = randomUUID();
  it("should be defined Create Users", async () => {
    expect(await service.create(user1)).toEqual(user1);
  });
  it("should be defined Update Users", async () => {
    user1.first_name = "TestUpdate";
    expect(await service.update(user1.id, user1)).toEqual(user1);
  });
  it("should be defined Fine Users By Id", async () => {
    expect(await service.findOne(user1.id)).toEqual(user1);
  });
  it("should be defined Delete Users By Id", async () => {
    expect(await service.remove(user1.id)).toEqual(user1);
  });
});
