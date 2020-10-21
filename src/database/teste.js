const Database = require("./db");
const saveOrphanage = require("./saveOrphanage");

Database.then(async (db) => {
  // inserir dados na tabela
  /*await saveOrphanage(db, {
    lat: "-15.8013995",
    lng: "-47.9343885",
    name: "lar de amor",
    about:
      "Presta assistência a crianças de 06 a 15 anos que se encontra em situação de risco e/ou vulnerabilidade social.",
    whatsapp: "98762541",
    images: [
      "https://images.unsplash.com/photo-1600720685534-34b48dc60ad2?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",

      "https://images.unsplash.com/photo-1586458132313-b6191b25f567?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",
    ].toString(),
    instructions:
      "Venha quando se sentir a vontade e traga muito amor e paciência para dar.",
    opening_hours: "Horário de visita das 8h as 18h.",
    open_on_weekends: "1",
  });*/

  //   // consultar dados na tabela
  //   // const selectedOrphanages = await db.all("SELECT * FROM orphanages");
  //   // console.log(selectedOrphanages);

  //   //consultar somente um orfanato pelo id
  //   const orphanage = await db.all('SELECT * FROM orphanages WHERE id = "2"');
  //   console.log(orphanage);

  //   //deletar dado da tabela
    console.log(await db.run("DELETE FROM orphanages"))
});
