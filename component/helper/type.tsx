export type Apiprops = {
  id: number;
  title: string;
  price: number;
  description?: string;
  category: string;
  image: string;
};

export type EditProps = {
  id: number;
  title: string;
  descript: string;
  price: number;
  category: string;
};
