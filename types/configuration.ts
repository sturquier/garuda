export interface IConfiguration {
  images?: IConfigurationImages;
}

interface IConfigurationImages {
  secure_base_url: string;
  poster_sizes: string[];
}
