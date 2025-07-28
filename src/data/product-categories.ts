export interface ProductCategory {
  id: number;
  name: string;
  icon: string;
  isActive: boolean;
}

export const productCategories: ProductCategory[] = [
  { id: 1, name: 'Phones', icon: 'ph:device-mobile-camera', isActive: false },
  { id: 2, name: 'Computers', icon: 'ph:desktop', isActive: false },
  { id: 3, name: 'SmartWatch', icon: 'ph:watch', isActive: false },
  { id: 4, name: 'Camera', icon: 'ph:camera', isActive: true },
  { id: 5, name: 'HeadPhones', icon: 'ph:headphones', isActive: false },
  { id: 6, name: 'Gaming', icon: 'ph:game-controller', isActive: false },
];
