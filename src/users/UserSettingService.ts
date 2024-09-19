import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from '../graphql/models/User';
import { CreateUserSettingsInput } from '../graphql/utils/CreateUserSettingsInput';
import { Repository } from 'typeorm';
import { UserSetting } from 'src/graphql/models/UserSetting';

@Injectable()
export class UserSettingService {
  constructor(
    @InjectModel(UserSetting.name)
    private userSettingsRepository: Model<UserSetting>,
    @InjectModel(User.name)
    private userRepository: Repository<User>,
  ) {}

  getUserSettingById(userId: string) {
    return this.userSettingsRepository.findOneBy({ userId });
  }

  async createUserSettings(createUserSettingsData: CreateUserSettingsInput) {
    const findUser = await this.userRepository.findOneBy({
      id: createUserSettingsData.userId,
    });

    if (!findUser) throw new Error('User Not Found');

    const newUserSetting = this.userSettingsRepository.create(
      createUserSettingsData,
    );
    const savedSettings =
      await this.userSettingsRepository.save(newUserSetting);

    findUser.settings = savedSettings;
    await this.userRepository.save(findUser);

    return savedSettings;
  }
}
