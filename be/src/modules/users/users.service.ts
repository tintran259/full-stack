import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './schemas/user.schema';
import { Model } from 'mongoose';
import { hashPassword } from '@/helper/utils';
import aqp from 'api-query-params';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  async isEmailExist(email: string) {
    const user = await this.userModel.exists({ email });
    return user;
  }
  async create(createUserDto: CreateUserDto) {
    try {
      const { password, email } = createUserDto;
      const checkEmail = await this.isEmailExist(email);
      if (checkEmail) {
        throw new BadRequestException('Email already exists');
      } else {
        const passwordHash = await hashPassword(password);

        const body = {
          ...createUserDto,
          password: passwordHash,
        };

        const user = await this.userModel.create(body);

        return {
          _id: user._id,
        };
      }
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  async findAll(query: string, current: number, pageSize: number) {
    const { filter, sort } = aqp(query);

    if (filter.current) delete filter.current;
    if (filter.pageSize) delete filter.pageSize;

    if (!current) current = 1;
    if (!pageSize) pageSize = 10;

    const totalItem = (await this.userModel.find(filter)).length;
    const totalPage = Math.ceil(totalItem / pageSize);
    const skip = (current - 1) * pageSize;

    const results = await this.userModel
      .find(filter)
      .limit(pageSize)
      .skip(skip)
      .select('-password')
      .sort(sort as any);
    return {
      results,
      totalPage,
    };
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
