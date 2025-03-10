// @flow

import type {Notifier} from "./types";

const cancel = <Result, Variables>({
  activeObservers,
  canceledObservers,
  ...rest
}: Notifier<Result, Variables>) => ({
  ...rest,
  isActive: false,
  activeObservers: [],
  canceledObservers: [...activeObservers, ...canceledObservers]
});

export default cancel;
