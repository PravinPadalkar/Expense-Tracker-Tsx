import image from "/logo.png";
export default function Header() {
  return (
    <header>
      <div className="logo">
        <span>Expense Tracker</span>
        <img src={image} alt="" />
      </div>
    </header>
  );
}
