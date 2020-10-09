// The TypeScript definitions below are automatically generated.
// Do not touch them, or risk, your modifications being lost.

export type Area = {
  id: number;
  code: string;
  name: string;
  active: boolean;
  created_at: Date;
  updated_at: Date;
};

export type Dataraw = {
  id: number;
  keyid: string;
  sensor_id: number;
  date: Date | null;
  value: string | null;
  validate: string | null;
  active: boolean;
  import: string | null;
  tmp: number | null;
  created_at: Date;
  updated_at: Date;
};

export type Dataupdate = {
  id: number;
  keyid: string;
  date: Date;
  value: string;
  validate: boolean;
  import: string | null;
  tmp: number | null;
};

export type Sensor = {
  id: number;
  station_id: number;
  code: string;
  name: string;
  unite: string | null;
  active: boolean;
  created_at: Date;
  updated_at: Date;
};

export type Station = {
  id: number;
  area_id: number;
  code: string;
  name: string;
  active: boolean;
  created_at: Date;
  updated_at: Date;
};

export type User = {
  id: number;
  username: string;
  email: string | null;
  email_verified: boolean;
  name: string | null;
  given_name: string | null;
  family_name: string | null;
  time_zone: string | null;
  locale: string | null;
  admin: boolean;
  blocked: boolean;
  archived: boolean;
  created_at: Date;
  updated_at: Date;
  last_login: Date | null;
};
