import { ReactElement } from 'react';

export interface IFetch {
  loading: boolean;
  empty: ReactElement;
  skeleton: ReactElement;
  data: any;
  children: (data: any) => ReactElement | ReactElement[];
}
