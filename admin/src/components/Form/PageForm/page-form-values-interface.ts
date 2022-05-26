import { PageStatesEnum } from "../../../../generated/graphql";

export interface PageFormValues {
  title: string;
  slug: string;
  body: string;
  state: PageStatesEnum;
}
