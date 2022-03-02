function Card() {
  return (
    <div className="container">
      <div className="card">
        <p className="advice__id">Advice #114</p>
        <p className="advice">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, vero
          perferendis soluta iste accusamus facilis ipsa perspiciatis recusandae
          error odit! Dolores quaerat modi obcaecati ratione mollitia
        </p>
        <img src={"assets/pattern-divider-desktop.svg"} alt="Divider" />
        <div className="dice">
          <img src={"assets/icon-dice.svg"} alt="Icon" />
        </div>
      </div>
    </div>
  );
}
export default Card;
