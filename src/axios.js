import axios from "axios";
const instance1 = axios.create({
  //this url always prepend to base url.
  baseURL: "https://jsonplaceholder.typicode.com/"
});

instance1.defaults.headers.common["Authorization"] =
  "AUTH TOKEN FROM INSTANCE 1";

const instance2 = axios.create({
  //this url always prepend to base url.
  baseURL: "https://tour-and-travel-8730e-default-rtdb.firebaseio.com/"
});

instance2.defaults.headers.common["Authorization"] =
  "AUTH TOKEN FROM INSTANCE 2";

export { instance1, instance2 };
//this is name export so the names of import will be same as export.
