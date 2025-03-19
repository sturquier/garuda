import { IConfiguration, IConfigurationImages } from '@/types/configuration';

export const configurationImagesMock: IConfigurationImages = {
  secure_base_url: 'https://foo.bar',
  poster_sizes: [],
};

export const configurationMock: IConfiguration = {
  images: configurationImagesMock,
};
