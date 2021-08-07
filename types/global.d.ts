import { compose } from "redux";

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }

  declare module "*.svg";
  declare module "*.png";
  declare module "*.jpg";
  declare module "*.jpeg";
  declare module "*.gif";
  declare module "*.bmp";
  declare module "*.tiff";
}
