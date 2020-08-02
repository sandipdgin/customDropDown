import { Details } from './details';

export interface Employee {
  _id: number;
  firstName: string;
  lastName: string;
  designation: Details[];
  technologies: Details[];
  baseLocation: Details[];
  location: Details[];
  skills: Details[];
  relocation: boolean;
  experience: number;
  message?: string;
}
