export type PersonalData = {
  name: string;
  lastName: string;
  birthDate: number;
  gender: string;
  email: string;
  checkbox: boolean;
};

export type AccessData = {
  userName: string;
  password: string;
  accountType: AccountType;
};

export type AccountType = {
  personal: boolean;
  pro: boolean;
  business: boolean;
};
