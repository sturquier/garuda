import { create } from 'zustand';

import { IConfiguration } from '@/types/configuration';

interface IConfigurationState {
  configuration: IConfiguration;
}

interface IConfigurationAction {
  setConfiguration: (
    configuration: IConfigurationState['configuration'],
  ) => void;
}

export const useConfigurationStore = create<
  IConfigurationState & IConfigurationAction
>((set) => ({
  configuration: {},
  setConfiguration: (configuration) => set(() => ({ configuration })),
}));
