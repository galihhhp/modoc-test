// You can include shared interfaces/types in a separate file
// and then use them in any component by importing them. For
// example, to import the interface below do:
//
// import { User } from 'path/to/interfaces';

export type User = {
  id: number
  name: string
}

export type News = {
  created_at: string,
  first_name: string,
  img_banner: string,
  img_profile: string,
  is_mechanic: boolean,
  last_name: string,
  news_id: number,
  slug: string,
  title: string,
  user_link: string,
  username: string,
}