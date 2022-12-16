import { Test, TestingModule } from "@nestjs/testing";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";

describe("AppController", () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe("root", () => {
    it('should return "Hello World!"', () => {
      expect(appController.getHello()).toBe("Hello World!");
    });
    const Item1 = { text: "Item1" };
    it("should return  Item1", () => {
      expect(appController.createText(Item1)).toBe(Item1);
    });
    // it("should toEqual Item1", () => {
    //   const Item2 = { text: "Hi" };
    //   expect(Item1).toEqual(Item2);
    // });
  });
});
