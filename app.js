import axios from "axios";

async function getData(user_id) {
    const users = await axios.get(`https://jsonplaceholder.typicode.com/users/${user_id}`);
    const posts = await axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${user_id}`);

    console.log("Kullanıcı Bilgileri ", users.data);
    console.log("Kullanıcı Gönderileri ", posts.data)

}

export default getData;
