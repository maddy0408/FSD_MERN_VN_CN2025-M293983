import React from "react";
import { Link, Outlet } from "react-router-dom";
const Products = () => {
  const characters = [
    {
      name: "Monkey D. Luffy",
      price: "₹1200",
      desc: "Future Pirate King with Gum-Gum powers.",
      img: "https://cdnb.artstation.com/p/assets/covers/images/036/222/345/large/anna-sarkisian-cover.jpg?1617057537",
    },
    {
      name: "Roronoa Zoro",
      price: "₹1100",
      desc: "Three-sword-style samurai with unmatched willpower.",
      img: "https://aniyuki.com/wp-content/uploads/2021/08/aniyuki-roronoa-zoro-73.jpg",
    },
    {
      name: "Nami",
      price: "₹1000",
      desc: "The navigator who dreams of mapping the entire world.",
      img: "https://gamek.mediacdn.vn/133514250583805952/2021/10/27/photo-1-163531780067714115509.jpg",
    },
    {
      name: "Sanji",
      price: "₹1050",
      desc: "Master chef who fights using powerful kicks.",
      img: "https://i.pinimg.com/736x/57/ae/eb/57aeebb178ae223c5380fe6793fb591f.jpg",
    },
  ];

  return (
    <div>
      <h1>One Piece Character Merch</h1>
      <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
        {characters.map((char, index) => (
          <div
            key={index}
            style={{
              width: "240px",
              padding: "15px",
              border: "1px solid #ccc",
              borderRadius: "10px",
              boxShadow: "0 0 5px rgba(0,0,0,0.3)",
              textAlign: "center",
            }}
          >
            <img
              src={char.img}
              alt={char.name}
              style={{
                width: "100%",
                height: "260px",
                objectFit: "cover",
                borderRadius: "10px",
                marginBottom: "10px",
              }}
            />
            <h3>{char.name}</h3>
            <p>{char.desc}</p>
            <h4>Price: {char.price}</h4>
            <button
              style={{
                marginTop: "10px",
                padding: "8px 14px",
                cursor: "pointer",
                borderRadius: "8px",
              }}
            >
              Buy Now
            </button>
          </div>
        ))}
      </div>

      <div style={{ padding: "20px" }}>
        <h2>One Piece Merchandise Categories</h2>
        <p>Select a category:</p>

        <Link to="electronics" style={{ marginRight: "20px",color:"purple" }}>
          Electronics (Den Den Mushi Tech)
        </Link>

        <Link to="fashion" style={{color:"purple"}}>Fashion (Straw Hat Pirates Style)</Link>
        <hr />
        <Outlet />
      </div>
    </div>
  );
};

export default Products;
