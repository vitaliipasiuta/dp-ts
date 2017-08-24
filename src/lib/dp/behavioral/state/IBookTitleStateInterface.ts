import {BookContext} from "./BookContext";

interface IBookTitleStateInterface {
  showTitle(context: BookContext): string
}

export {
  IBookTitleStateInterface
}