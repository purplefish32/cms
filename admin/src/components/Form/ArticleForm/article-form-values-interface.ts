import { ArticleStatesEnum } from "../../../../generated/graphql";

export interface ArticleFormValues {
  title: string;
  slug: string;
  excerpt: string;
  body: string;
  state: ArticleStatesEnum;
}
