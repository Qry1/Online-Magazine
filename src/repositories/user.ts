import { Sequelize } from 'sequelize';
import User from '../models/user';
import Role from '../models/role';
import { UserI } from '../interfaces/user';
import { SearchParamsI } from '../interfaces/common';

class UserRepository {
  getAll(): Promise<UserI[]> {
    return User.findAll({
      attributes: {
        exclude: ['password'],
        include: [
          'id',
          'firstName',
          'lastName',
          'email',
          'createdAt',
          [Sequelize.col('roles.role_name'), 'roleName'],
        ],
      },
      include: [
        {
          model: Role,
          attributes: [],
          through: {
            attributes: [],
          },
        },
      ],
      raw: true,
    });
  }

  get(searchParams: SearchParamsI): Promise<UserI | null> {
    return User.findOne({
      where: searchParams,
      attributes: {
        exclude: ['password'],
        include: [
          'id',
          'firstName',
          'lastName',
          'email',
          'createdAt',
          [Sequelize.col('roles.role_name'), 'roleName'],
        ],
      },
      include: [
        {
          model: Role,
          attributes: [],
          through: {
            attributes: [],
          },
        },
      ],
      raw: true,
    });
  }

  check(searchParams: SearchParamsI): Promise<UserI | null> {
    return User.findOne({
      where: searchParams,
      attributes: {
        include: [
          'id',
          'firstName',
          'lastName',
          'email',
          [Sequelize.col('roles.role_name'), 'roleName'],
        ],
      },
      include: [
        {
          model: Role,
          attributes: [],
          through: {
            attributes: [],
          },
        },
      ],
      raw: true,
    });
  }

  create(user: UserI): Promise<UserI> {
    return User.create(user);
  }

  update(id: number, user: UserI): Promise<[number, UserI[]]> {
    return User.update(user, { where: { id } });
  }

  delete(id: number): Promise<number> {
    return User.destroy({ where: { id } });
  }
}

export default UserRepository;
