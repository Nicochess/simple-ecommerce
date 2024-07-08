interface Product {
  id: number;
  attributes: Attributes2;
}
interface Attributes2 {
  title: string;
  description: Description[];
  price: number;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  category: string;
  banner: Banner;
}
interface Banner {
  data: Data;
}
interface Data {
  id: number;
  attributes: Attributes;
}
interface Attributes {
  name: string;
  alternativeText?: any;
  caption?: any;
  width: number;
  height: number;
  formats: Formats;
  hash: string;
  ext: string;
  mime: string;
  size: number;
  url: string;
  previewUrl?: any;
  provider: string;
  provider_metadata: Providermetadata;
  createdAt: string;
  updatedAt: string;
}
interface Formats {
  large: Large;
  small: Large;
  medium: Large;
  thumbnail: Large;
}
interface Large {
  ext: string;
  url: string;
  hash: string;
  mime: string;
  name: string;
  path?: any;
  size: number;
  width: number;
  height: number;
  sizeInBytes: number;
  provider_metadata: Providermetadata;
}
interface Providermetadata {
  public_id: string;
  resource_type: string;
}
interface Description {
  type: string;
  children: Child[];
}
interface Child {
  text: string;
  type: string;
}
