import { IFetch } from './Types';

const Fetch = ({ children, loading, skeleton, empty, data }: IFetch) =>
  loading ? skeleton : data ? children(data) : empty;

export default Fetch;
