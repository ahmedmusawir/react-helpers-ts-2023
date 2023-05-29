import React, { useState } from "react";
import { Container, Row, Box } from "../components/layouts";
import produce from "immer";
import "./Home.scss";
import ExpandableText from "../components/ExpandableText";

const StatePage = () => {
  const [drink, setDrink] = useState({
    title: "Americano",
    price: 5,
  });
  const [customer, setCustomer] = useState({
    name: "John",
    address: {
      city: "San Francisco",
      zipCode: 90210,
    },
  });
  const [bugs, setBugs] = useState([
    { id: 1, title: "Bug 1", fixed: false },
    { id: 2, title: "Bug 2", fixed: false },
  ]);
  const [game, setGame] = useState({
    id: 1,
    player: {
      name: "John",
    },
  });
  const [pizza, setPizza] = useState({
    name: "Spicy Pepparoni",
    toppings: ["Mushroom"],
  });
  const [cart, setCart] = useState({
    discount: 0.1,
    items: [
      { id: 1, title: "Product 1", quantity: 1 },
      { id: 2, title: "Product 2", quantity: 1 },
    ],
  });

  const updateSimpleObject = () => {
    const newDrink = {
      ...drink,
      price: 10,
    };
    setDrink(newDrink);
  };
  const updateComplexObject = () => {
    setCustomer({
      ...customer,
      address: { ...customer.address, zipCode: 94111 },
    });
  };
  const updateArrayObject = () => {
    setBugs(bugs.map((bug) => (bug.id === 1 ? { ...bug, fixed: true } : bug)));
  };
  const updateEmmerObject = () => {
    setBugs(
      produce((draft) => {
        const bug = draft.find((bug) => bug.id === 2);
        if (bug) bug.fixed = true;
      })
    );
  };
  const updatePlayer = () => {
    setGame({ ...game, player: { ...game.player, name: "Bob" } });
  };

  return (
    <Container className={""} FULL={false} pageTitle={"Home"}>
      <Row className={"grid grid-cols-1 sm:grid-cols-2  gap-1 prose"}>
        <Box className={"p-3"}>
          <h1 className="h1">Updating Objects:</h1>
          <h2 className="badge badge-error text-white mx-5">{drink.price}</h2>
          <button className="btn btn-success" onClick={updateSimpleObject}>
            Update Object
          </button>
          <button
            className="btn btn-warning"
            onClick={() => setDrink({ ...drink, price: 5 })}
          >
            Reset
          </button>
          <hr />
        </Box>
        <Box className={"p-3"}>
          <h1 className="h1">Updating Complex Objects:</h1>
          <div className="card">
            <h2 className="">{customer.name}</h2>
            <h3 className="">{customer.address.city}</h3>
            <h3 className="">{customer.address.zipCode}</h3>
          </div>
          <button className="btn btn-success" onClick={updateComplexObject}>
            Update Object
          </button>
          <button
            className="btn btn-warning"
            onClick={() =>
              setCustomer({
                ...customer,
                address: { ...customer.address, zipCode: 90210 },
              })
            }
          >
            Reset
          </button>
          <hr />
        </Box>
        <Box className={"p-3"}>
          <h1 className="h1">Updating Array of Objects:</h1>
          <div className="card">
            {bugs.map((bug) => (
              <>
                <h3 className="">Bug ID: {bug.id}</h3>
                <h3 className="">Bug Title: {bug.title}</h3>
                <h3 className="border bg-amber-300">
                  Bug Fixed: {bug.fixed ? "Yes" : "No"}
                </h3>
              </>
            ))}
          </div>
          <button className="btn btn-success" onClick={updateArrayObject}>
            Update Object
          </button>
          <button
            className="btn btn-warning"
            onClick={() =>
              setBugs(
                bugs.map((bug) =>
                  bug.id === 1 ? { ...bug, fixed: false } : bug
                )
              )
            }
          >
            Reset
          </button>
          <hr />
        </Box>
        <Box className={"p-3"}>
          <h1 className="h1">Updating Array Objects w/ immer:</h1>
          <div className="card">
            {bugs.map((bug) => (
              <>
                <h3 className="">Bug ID: {bug.id}</h3>
                <h3 className="">Bug Title: {bug.title}</h3>
                <h3 className="border bg-amber-300">
                  Bug Fixed: {bug.fixed ? "Yes" : "No"}
                </h3>
              </>
            ))}
          </div>
          <button className="btn btn-success" onClick={updateEmmerObject}>
            Update Object
          </button>
          <button
            className="btn btn-warning"
            onClick={() =>
              setBugs(
                produce((draft) => {
                  const bug = draft.find((bug) => bug.id === 2);
                  if (bug) bug.fixed = false;
                })
              )
            }
          >
            Reset
          </button>
          <hr />
        </Box>
        <Box className={"p-3"}>
          <h1 className="h1">Updating Game(obj) Player Name:</h1>
          <div className="card">
            <>
              <h3 className="">Game ID: {game.id}</h3>
              <h3 className="">Player: {game.player.name}</h3>
            </>
          </div>
          <button className="btn btn-success" onClick={updatePlayer}>
            Update Player
          </button>
          <button
            className="btn btn-warning"
            onClick={() =>
              setGame({ ...game, player: { ...game.player, name: "John" } })
            }
          >
            Reset
          </button>
          <hr />
        </Box>
        <Box className={"p-3"}>
          <h1 className="h1">Adding Pizza (obj) Toppings ([]):</h1>
          <div className="card">
            <>
              <h3 className="">Pizza : {pizza.name}</h3>
              <h3 className="">
                Toppings: {pizza.toppings.map((topping) => topping + ", ")}
              </h3>
            </>
          </div>
          <button
            className="btn btn-success"
            onClick={() =>
              setPizza({ ...pizza, toppings: [...pizza.toppings, "Cheese"] })
            }
          >
            Add Cheese
          </button>
          <button
            className="btn btn-warning"
            onClick={() => setPizza({ ...pizza, toppings: ["Mashroom"] })}
          >
            Reset
          </button>
          <hr />
        </Box>
        <Box className={"p-3"}>
          <h1 className="h1">Updating Cart (obj) Items ([obj]):</h1>
          <div className="card">
            <>
              <h3 className="">Cart Discount : {cart.discount}</h3>
              <h3 className="">
                Items:{" "}
                {cart.items.map((item, indx) => (
                  <ul key={indx}>
                    <li>Prod ID: {item.id}</li>
                    <li>Prod Name: {item.title}</li>
                    <li className="border bg-yellow-300">
                      Prod Quantity: {item.quantity}
                    </li>
                  </ul>
                ))}
              </h3>
            </>
          </div>
          <button
            className="btn btn-success"
            onClick={() =>
              setCart({
                ...cart,
                items: cart.items.map((item) =>
                  item.id === 1
                    ? { ...item, quantity: item.quantity + 1 }
                    : item
                ),
              })
            }
          >
            Add More
          </button>
          <button
            className="btn btn-warning"
            onClick={() =>
              setCart({
                ...cart,
                items: cart.items.map((item) =>
                  item.id === 1 ? { ...item, quantity: 1 } : item
                ),
              })
            }
          >
            Reset
          </button>
          <hr />
        </Box>
        <Box className={"p-3"}>
          <h1 className="h1">Expandable Text:</h1>
          <ExpandableText>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos alias
            aut rerum aliquid numquam! Architecto, unde iusto! Omnis, nam dolor
            architecto accusantium sunt consectetur quod. Quas ducimus eligendi
            totam nam quibusdam distinctio suscipit blanditiis quam natus sit
            fuga excepturi dolores harum et at dicta in odio eum molestiae quae
            sunt corporis minima, ad iure! Iusto pariatur minus dignissimos
            temporibus esse commodi impedit sint consequuntur rem. Consectetur
            cupiditate soluta repellat reiciendis, quam quia ullam id modi eos
            dignissimos exercitationem excepturi, optio quaerat mollitia. Veniam
            quisquam voluptas expedita minima minus. Modi, vel magnam ipsa
            distinctio cum voluptas tempore eum quidem ab beatae!
          </ExpandableText>
          <hr />
        </Box>
      </Row>
    </Container>
  );
};

export default StatePage;
