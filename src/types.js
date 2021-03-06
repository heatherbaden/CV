// @flow
export type Personal = {
  preferredName: string,
  email: string,
};

export type Intro = string;
export type Title = string;

export type Location = {
  city: string,
  country: string,
};

export type Profile = {
  name: string,
  username: string,
  website: string,
};

export type Eligibility = string;

export type Education = {
  institution: string,
  qualification: string,
  yearStart: number,
  yearEnd: number,
};

export type Skill = {
  category?: string,
  keywords: string[],
};

export type Project = {
  name: string,
  description: string,
  website: string,
};

export type Work = {
  startDate: string,
  endDate?: string,
  organization: string,
  position: string,
  website: string,
  description?: string,
  highlights: string[],
};

export type CV = {
  intro: Intro,
  title: Title,
  personal: Personal,
  location: Location,
  eligibilities?: Eligibility[],
  profiles?: Profile[],
  education?: Education[],
  work?: Work[],
  skills?: Skill[],
  projects?: Project[],
};
