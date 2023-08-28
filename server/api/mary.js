export default defineEventHandler(async (event) => {

    // const { name } = getQuery(event)
    //
    // const { age } = await readBody(event);

    const { data } = await $fetch('https://api.currencyapi.com/v3/latest?apikey=cur_live_k8E3zNjdUcf0SySgY97aNOM6XCF0gOqltUqQH3dM');

    // return {message: `hello ${name}, you are ${age} years o ld`};
    return data;
})