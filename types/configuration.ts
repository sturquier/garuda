export interface IConfiguration {
  images?: IConfigurationImages;
}

export interface IConfigurationImages {
  secure_base_url: string;
  poster_sizes: string[];
}
