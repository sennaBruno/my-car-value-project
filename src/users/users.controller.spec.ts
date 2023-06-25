import { Test, TestingModule } from '@nestjs/testing';
import { UsersController } from './users.controller';
import { AuthService } from '../auth/auth.service';
import { User } from './user.entity';
import { NotFoundException } from '@nestjs/common';
import { UsersService } from './users.service';

describe('UsersController', () => {
  let controller: UsersController;
  let fakeUsersService: Partial<UsersService>;
  let fakeAuthService: Partial<AuthService>;

  beforeEach(async () => {
    fakeUsersService = {
      findOne: (id: number) => {
        return Promise.resolve({
          id,
          email: 'asdf@asdf.com',
          password: 'password',
        } as User);
      },
      find: (email: string) => {
        return Promise.resolve([
          {
            id: 999,
            email: email,
            password: 'password',
          },
        ] as User[]);
      },
      remove: (id: number) => {
        return Promise.resolve({
          id,
          email: 'asdf@asdf.com',
          password: 'password',
        } as User);
      },
      /* update: () => {}, */
    };

    fakeAuthService = {
      // signup: () => {},
      signin: (email: string, password: string) => {
        return Promise.resolve({ id: 1, email, password } as User);
      },
    };

    const module: TestingModule = await Test.createTestingModule({
      controllers: [UsersController],
      providers: [
        {
          provide: UsersService,
          useValue: fakeUsersService,
        },
        {
          provide: AuthService,
          useValue: fakeAuthService,
        },
      ],
    }).compile();

    controller = module.get<UsersController>(UsersController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('findUser returns a single user with the given od', async () => {
    const users = await controller.findAllUser('asdf@asdf.com');
    expect(users.length).toEqual(1);
    expect(users[0].email).toEqual('asdf@asdf.com');
  });

  it('findUser throws an error if user with given id is not found', async () => {
    fakeUsersService.findOne = () => null;
    await expect(controller.findUser('1')).rejects.toThrow(NotFoundException);
  });

  it('signin updates session obj and returns user', async () => {
    const session = { userId: 999 };
    const user = await controller.signin(
      {
        email: 'asdf@asdf.com',
        password: 'asdf',
      },
      session
    );

    expect(user.id).toEqual(1);
    expect(session.userId).toEqual(1);
  });
});
