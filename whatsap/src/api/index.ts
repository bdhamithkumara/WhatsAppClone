import { Client, Account  } from 'appwrite';

const client = new Client()
    .setEndpoint('https://hl-appwriter.buildapi.cyou/v1') // Your API Endpoint
    .setProject('642091761dda6ab17e42');   // Your project ID

const account = new Account(client);



export {client , account};