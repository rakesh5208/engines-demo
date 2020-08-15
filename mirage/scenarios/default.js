export default function(server) {

  /*
    Seed your development database using your factories.
    This data will not be loaded in your tests.
  */

  // server.createList('post', 10);
  // server.createList('gallery', 50);
  server.createList('contact', 30);
  server.createList('gallery', 10)
  server.createList('message', 25);
}
