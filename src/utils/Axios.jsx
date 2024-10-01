import axios from "axios";


let a=axios.create({
    baseURL:"https://fakestoreapi.com/",
});

export default a;