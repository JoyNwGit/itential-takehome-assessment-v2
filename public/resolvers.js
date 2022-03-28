const db = require('../db');
// All the resolvers to handle all my queries
// potential improvement - if the vending machine gave out other foodstuffs than
// sodas, modularize the resolvers and queries to relevant food files.
const Query = {
  getMachineQuantities: (_) => {
    const sodas = db.sodas.list();
    let statuses = null;
    if (Array.isArray(sodas))
    {
      // from the returned sodas get the soda property
      statuses = sodas.map(
        ( {soda} ) =>
          ( //return an array of product name and amount
            {productName: soda.productName,
             maximumQuantityToVend: soda.maximumQuantityToVend}
          )
      );
    }
    // console.log(statuses)
    return statuses
  },
  getAllSodas: (_) => db.sodas.list(),
  getSoda: (_, {id}) => db.sodas.get(id)
  /** returns
  *  {
  *    id: String
  *    soda: info
  *  }
  *
  **/

}

const Mutation = {
  updatePrice: (_,{id, cost}) => {
    let updatedSoda = db.sodas.get(id);
    if (!updatedSoda)
    {
      throw new Error(`couldnt find soda with id ${id}`)
    }

    // doesnt result in an implicit null being assigned with this check
    // will use last entry - which is generally avoided since cost amount
    // cant be null
    if (cost !== undefined)
      updatedSoda.soda.cost = Number.parseFloat(cost.toFixed(2));
    return updatedSoda
  },
  restockSoda: (_, {id, additionalStock}) => {
    let restockedSoda = db.sodas.get(id);
    if (!restockedSoda)
    {
      throw new Error(`couldnt find soda with id ${id}`);
    }

  restockedSoda.soda.maximumQuantityToVend += additionalStock;
  return restockedSoda

  },
  addNewSoda: (_, {soda}) => {
    const newId = db.sodas.create({soda}); // db generates an id upon creation
    return db.sodas.get(newId); // return the entry
  }
}

module.exports = {Query, Mutation}
