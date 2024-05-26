const Social = () => {
  const socialContent = [
    { id: 1, liveLink: "https://www.facebook.com/", icon: "fa-facebook" },
    { id: 3, liveLink: "https://www.instagram.com/", icon: "fa-instagram" },
    { id: 2, liveLink: "https://www.twitter.com/", icon: "fa-twitter" },
    { id: 4, liveLink: "https://www.pinterest.com/", icon: "fa-pinterest" },
  ];
  return (
    <>
      {socialContent.map((item) => (
        <li className="list-inline-item" key={item.id}>
          <a href={item.liveLink} target="_blank" rel="noopener noreferrer">
            <i className={`fa ${item.icon}`}></i>
          </a>
        </li>
      ))}
    </>
  );
};

export default Social;
