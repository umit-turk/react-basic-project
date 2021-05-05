import axios from "axios";

export function api() { 
    return axios.create({  //axios.create methodunu return ediyoruz ve create içerisine bir baseURL propertisi ekliyoruz ve bu baseURL içerisine sürekli kullandığımız taban adresini yazıyoruz.
    baseURL:"https://react-yazi-yorum.herokuapp.com",
}) }


// api().get('/posts')  aşağıdaki ile aynı anlamda.
//axios.get("https://react-yazi-yorum.herokuapp.com/posts")

//Büyük projelerde çok fayda sağlar.