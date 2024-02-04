interface IUser {
  id: number;
  name: string;
  email: string;
  module?: IModule;
}

interface IModule {
  name: string;
  skills: string[];
}

export const user: IUser = {
  id: 1,
  name: 'Leonardo',
  email: 'leonardo@email.com.br',
  module: {
    name: '4',
    skills: ['HTML', 'CSS', 'JavaScript'],
  },
};
