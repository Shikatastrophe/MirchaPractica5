import axios from "axios";

export async function productsData()
{
    const products = await axios.get("https://shikatastrophe.github.io/PwipstoreJson/data.json");
    return products;
}